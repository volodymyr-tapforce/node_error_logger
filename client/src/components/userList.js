import React, { Component } from 'react';
import { List, Container, Header } from 'semantic-ui-react';
import UserListItem from './userListItem';
import axios from 'axios';

class UserList extends Component {

    state = {
        users:[]
    }
    onItemClick = (anonymous_id)=>{
        return ()=>{
            console.log(anonymous_id);
        }
    }
    componentDidMount= async()=>{
        const responce = await axios.get('/api/users');
        this.setState({users:responce.data});
    }
    render() {
      const users = this.state.users;  
      const onItemClick = this.onItemClick;
      const usersItemArr = users.map((user)=>{
          return <UserListItem {...user} key={user.anonymous_id} onItemClick={onItemClick(user.anonymous_id)}/>      
      });
      return (
        <div>
           <Header as='h2'>User List</Header>
           <Container>
           <List>
               {usersItemArr}
           </List>
           </Container>
        </div>
        );
    }
  }
  
export default UserList;