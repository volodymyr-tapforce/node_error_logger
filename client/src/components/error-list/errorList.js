import React, { Component } from 'react';
import { List, Header, Pagination, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import ErrorListItem from './errorListItem';
import serverApiCallService from '../../api_services/serverApiCallService';


class ErrorList extends Component {

    state={
        errors:[],
        errorsDocCount:0,
        page:1
    }

    errorSubUpdateId = null;
    user = {};

    componentDidMount= async()=> {

        this.user = this.props.history.location.state.user;
    
        const anonId = this.props.match.params.anonymusId;

        const updateErroList = (matchId) => {
            if(matchId===anonId)
            serverApiCallService.fetchErrorList(anonId, this.state.page, (errorList) => {
                this.setState({
                    errors: errorList.errorDocs, errorsDocCount: errorList.errorsCount
                });
            })
        }

        updateErroList(anonId);

        this.errorSubUpdateId = serverApiCallService.subsErroListUpdate(updateErroList);

    }

    componentWillUnmount = ()=>{
        serverApiCallService.eventUnsub(this.errorSubUpdateId);
    }

    onPageChange = async (e,{activePage}) =>{
     
        await this.setState({page:activePage});
        const anonId = this.props.match.params.anonymusId;
        serverApiCallService.fetchErrorList(anonId,this.state.page,(errorList)=>{
            this.setState({
                errors: errorList.errorDocs, errorsDocCount: errorList.errorsCount
            });
        });
    }

    render() {

      const errors = this.state.errors;  
      const errorItemArr = errors.map((error)=>{
          return <ErrorListItem {...error} key={error._id}/>      
      });
    
      return (
        <div>
           <Header as='h2'>Error List</Header>
           <Link to="/userlist">Userlist</Link>
           <div className="list-item" >
                    <div><Image avatar src='/images/user.png'/></div>
                    <div><b>anonymusId:</b>{this.user.anonymusId}</div>
                    <div><b>user_id:</b>{this.user.user_id}</div>
                    <div><b>email:</b>{this.user.email}</div>
            </div>
           <List>
               {errorItemArr}
           </List>
           <Pagination defaultActivePage={1} totalPages={Math.ceil(this.state.errorsDocCount/10)} onPageChange={this.onPageChange} />
        </div>
        );
    }
  }
  
export default ErrorList;