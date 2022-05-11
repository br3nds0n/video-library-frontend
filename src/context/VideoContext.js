import { createContext, useState } from 'react';
import FormModal from '../components/FormModal';

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

  return (
    <VideoContext.Provider value={{
      handleAdd, 
      handleClose, 
      title, 
      link, 
      setTitle, 
      setLink
      }}>
      {children}
      {openFromModal && <FormModal />}
    </VideoContext.Provider>
  );
}
