import React, { Component } from 'react';
import { List, Container } from 'semantic-ui-react';
import UserListItem from './userListItem';
import axios from 'axios';

class UserList extends Component {

    state = {
        users:[]
    }
    componentDidMount= async()=>{
        const responce = await axios.get('/users');
        this.setState({users:responce.data});
    }
    render() {
      const users = this.state.users;  
      const usersItemArr = users.map((user)=>{
          return <UserListItem {...user} key={user.anonymous_id}/>      
      });
      return (
        <Container>
        <List>
            {usersItemArr}
        </List>
        </Container>
        );
    }
  }
  
export default UserList;