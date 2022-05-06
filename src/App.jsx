import React, { Component } from 'react';

import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/Layout';

import { VideoContextProvider } from './context/VideoContext'

class App extends Component {
  render() {
    return (
      <>
      <VideoContextProvider> 
       <Layout />
      </VideoContextProvider>
      <GlobalStyles />
      </>
    );
  }
}

export default App;
