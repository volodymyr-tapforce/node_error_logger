import React, { Component } from 'react';
import { Divider,Container } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserList from './components/user-list/userList';
import ErrorList from './components/error-list/errorList';

import './App.css';
import './css/listItem.css'


import ErrorModal from './components/create-error-modal/createErrorModal';


class App extends Component {
  render() {
    return (
        <Container>
          <ErrorModal></ErrorModal>
          <Divider></Divider>
          <Router>
            <div>
              <Switch>
                <Route path="/userlist" component={UserList} />
                <Route path="/errorlist/:anonymous_id" component={ErrorList} />
                <Route component={UserList} />
              </Switch>
            </div>
          </Router>
        </Container>
    );
  }
}

export default App;
