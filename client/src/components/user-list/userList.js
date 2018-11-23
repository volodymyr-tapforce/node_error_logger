import React, { Component } from 'react';
import { List, Header, Pagination } from 'semantic-ui-react';
import UserListItem from './userListItem';
import UserSearchBar from './userSearchBar';
import serverApiCallService from '../../api_services/serverApiCallService';

class UserList extends Component {

    state = {
        users:[],
        usersCount:0,
        searchParams:{
            user_id:'',
            email:'',
            page:1
        }
    }

    userSubUpdateId = null;

    onItemClick = (user)=>{
        return ()=>{
            this.props.history.push({pathname:'/errorlist/'+user.anonymusId, state:{user}});
        }
    }

    handleSearchChange = (event)=> {
        const searchParams = {...this.state.searchParams}
        searchParams[event.target.name] = event.target.value;
        this.setState({searchParams});
    }

    searchUserByParams = ()=>{
        serverApiCallService.fetchUserList({...this.state.searchParams},(userList)=>{
            this.setState({users:userList.users, usersCount:userList.usersCount});
        });
    }

    componentDidMount = ()=>{
        const updateUserList = () => serverApiCallService.fetchUserList({...this.state.searchParams},(userList)=>{
            this.setState({users:userList.users, usersCount:userList.usersCount});
        });
        updateUserList();
        this.userSubUpdateId = serverApiCallService.subUsersListUpdate(updateUserList);
    }

    onPageChange = async (e,{activePage}) =>{
        const searchParams = {...this.state.searchParams}
        searchParams.page = activePage;
        await this.setState({searchParams});

        serverApiCallService.fetchUserList({...this.state.searchParams},(userList)=>{
            this.setState({users:userList.users, usersCount:userList.usersCount});
        });
    }

    componentWillUnmount = ()=>{
        serverApiCallService.eventUnsub(this.userSubUpdateId);
    }

    render() {
      const users = this.state.users;  
      const onItemClick = this.onItemClick;
      const usersItemArr = users.map((user)=>{
          return <UserListItem {...user} key={user.anonymusId} onItemClick={onItemClick(user)}/>      
      });
      return (
        <div>
           <Header as='h2'>User List</Header>
           <UserSearchBar searchParams={this.state.searchParams} handleChange={this.handleSearchChange} handleSearch={this.searchUserByParams}/>
           <List>
               {usersItemArr}
           </List>
           <Pagination defaultActivePage={1} totalPages={Math.ceil(this.state.usersCount/10)} onPageChange={this.onPageChange} />
        </div>
        );
    }
  }
  
export default UserList;