import React, { Component } from 'react';
import { List, Header } from 'semantic-ui-react';
import UserListItem from './userListItem';
import UserSearchBar from './userSearchBar';
import serverApiCallService from '../../api_services/serverApiCallService';

class UserList extends Component {

    state = {
        users:[],
        searchParams:{
            user_id:'',
            email:''
        }
    }

    userSubUpdateId = null;

    onItemClick = (anonymous_id)=>{
        return ()=>{
            this.props.history.push('/errorlist/'+anonymous_id);
        }
    }

    componentDidMount = ()=>{

        const updateUserList = () => serverApiCallService.fetchUserList((userList)=>{
            this.setState({users:userList});
        })

        updateUserList();

        this.userUpdateId = serverApiCallService.subUsersListUpdate(updateUserList);
    }

    componentWillUnmount = ()=>{
        serverApiCallService.eventUnsub(this.userSubUpdateId);
    }

    handleSearchChange = (event)=> {
       
        const searchParams = {...this.state.searchParams}
        searchParams[event.target.name] = event.target.value;
        console.log(searchParams);
        this.setState({searchParams});
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
           <UserSearchBar searchParams={this.state.searchParams} handleChange={this.handleSearchChange}/>
           <List>
               {usersItemArr}
           </List>
        </div>
        );
    }
  }
  
export default UserList;