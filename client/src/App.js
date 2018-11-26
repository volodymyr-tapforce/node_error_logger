import React, { Component } from 'react';
import { Divider,Container } from 'semantic-ui-react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// scr components
import UserList from './components/user-list/userList';
import ErrorList from './components/error-list/errorList';
import ErrorModal from './components/create-error-modal/createErrorModal';
//css
import './App.css';
import './css/listItem.css';

class App extends Component {
  render() {
    return (
        <Container>
          <ErrorModal></ErrorModal>
          <Divider></Divider>
          <Router>
            <div>
              <Route path="/userlist" component={UserList} />
              <Route path="/errorlist/:anonymusId" component={ErrorList} />
            </div>
          </Router>
        </Container>
    );
  }
}

export default App;
