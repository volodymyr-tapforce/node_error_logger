import React, { Component } from 'react';
import { List, Container, Header } from 'semantic-ui-react';
import axios from 'axios';
import ErrorListItem from './errorListItem';

class ErrorList extends Component {

    state={
        errors:[]
    }

    componentDidMount= async()=>{
        const responce = await axios.get('/api/errors/'+this.props.match.params.anonymous_id);
        this.setState({errors:responce.data});
    }
    render() {

      const errors = this.state.errors;  
      const errorItemArr = errors.map((error)=>{
          return <ErrorListItem {...error} key={error._id}/>      
      });
    
      return (
        <div>
           <Header as='h2'>Error List</Header>
           <Container>
           <List>
               {errorItemArr}
           </List>
           </Container>
        </div>
        );
    }
  }
  
export default ErrorList;