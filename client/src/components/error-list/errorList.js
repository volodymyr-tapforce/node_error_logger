import React, { Component } from 'react';
import { List, Header } from 'semantic-ui-react';
import ErrorListItem from './errorListItem';
import serverApiCallService from '../../api_services/serverApiCallService';


class ErrorList extends Component {

    state={
        errors:[]
    }

    errorSubUpdateId = null;

    componentDidMount= async()=> {
     
        const anonId = this.props.match.params.anonymous_id;

        const updateErroList = (matchId) => {
            if(matchId===anonId)
            serverApiCallService.fetchErrorList(anonId, (errorList) => {
                this.setState({
                    errors: errorList
                });
            })
        }

        updateErroList(anonId);

        this.userUpdateId = serverApiCallService.subsErroListUpdate(updateErroList);

    }

    componentWillUnmount = ()=>{
        serverApiCallService.eventUnsub(this.userSubUpdateId);
    }

    render() {

      const errors = this.state.errors;  
      const errorItemArr = errors.map((error)=>{
          return <ErrorListItem {...error} key={error._id}/>      
      });
    
      return (
        <div>
           <Header as='h2'>Error List</Header>
           <List>
               {errorItemArr}
           </List>
        </div>
        );
    }
  }
  
export default ErrorList;