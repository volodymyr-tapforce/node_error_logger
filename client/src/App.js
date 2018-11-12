import React, { Component } from 'react';
import './App.css';

import ErrorModal from './components/createErrorModal';


class App extends Component {
  render() {
    return (
      <div className="App">
       <ErrorModal></ErrorModal>
      </div>
    );
  }
}

export default App;
