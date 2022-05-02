import React, { Component } from 'react';

import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/Layout';

class App extends Component {
  render() {
    return (
      <div>
      <Layout />
      <GlobalStyles />
      </div>
    );
  }
}

export default App;
