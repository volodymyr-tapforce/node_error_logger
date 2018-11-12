import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserList from './components/userList';

import './App.css';

import ErrorModal from './components/createErrorModal';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ErrorModal></ErrorModal>
        <Divider></Divider>
        <Router>
          <Route path="/" component={UserList} />
        </Router>
      </div>
    );
  }
}

export default App;
