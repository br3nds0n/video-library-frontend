import { createContext, useState } from 'react';
import FormModal from '../components/FormModal';

import api from '../services/api';

export const VideoContext = createContext();

export function VideoContextProvider({ children }) {
  const [openFromModal, setOpenFormModal] = useState(false);
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');

  function handleAdd() {
    setOpenFormModal(true);
  }

  function handleClose() {
    setOpenFormModal(false)
  }

  function titleHandler(event) {
    setTitle(event.target.value)
  }

  function linkHandler(event) {
    setLink(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();

    const video = {
      title,
      link
    }

    api.post('video', video)

    setOpenFormModal(false)
  }

  return (
    <VideoContext.Provider value={{
      handleAdd, 
      handleClose, 
      title, 
      link, 
      setTitle, 
      setLink,
      titleHandler,
      linkHandler,
      handleSubmit
      }}>
      {children}
      {openFromModal && <FormModal />}
    </VideoContext.Provider>
  );
}
