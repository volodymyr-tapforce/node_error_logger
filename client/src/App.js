import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserList from './components/userList';
import ErrorList from './components/errorList';

import './App.css';

import ErrorModal from './components/createErrorModal';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ErrorModal></ErrorModal>
        <Divider></Divider>
        <Router>
          <div>
            <Route path="/userlist" component={UserList} />
            <Route path="/errorlist/:anonymous_id" component={ErrorList} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
