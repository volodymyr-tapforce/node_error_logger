import React, { Component } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import ErrorFormInput from './errorFormInput';
import serverApiCallService from '../../api_services/serverApiCallService';


class ErrorForm extends Component {

    constructor(props){
        super(props);
        this.state={
            anonymous_id:'',
            err_type:'',
            err_message:'',
            email:'',
            user_id:''
        }
    }
    handleChange = (event)=> {
        const newState = {...this.state}
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }

    handleSubmit = ()=>{
    
        const reqBody = {
            userParams:{
                anonymous_id:this.state.anonymous_id,
                email:this.state.email,
                user_id:this.state.user_id
            },
            err_type: this.state.err_type,
            err_message:this.state.err_message
        }

        serverApiCallService.createErrorDoc(reqBody, (response)=>{
            if (response.status === 200) {
                this.setState({
                    anonymous_id: '',
                    err_type: '',
                    err_message: '',
                    email: '',
                    user_id: ''
                })
            }
        });
    }

    render() {
      return (
        <div style={{width:'100%'}}>
        <Segment >
        <Form onSubmit={this.handleSubmit}>
          <ErrorFormInput name={'anonymous_id'} value={this.state.anonymous_id} handleChange={this.handleChange}></ErrorFormInput>
          <ErrorFormInput name={'err_type'} value={this.state.err_type}  handleChange={this.handleChange}></ErrorFormInput>
          <ErrorFormInput name={'err_message'} value={this.state.err_message}  handleChange={this.handleChange}></ErrorFormInput>
          <hr/>
          <ErrorFormInput name={'user_id'} value={this.state.user_id}  handleChange={this.handleChange}></ErrorFormInput>
          <ErrorFormInput name={'email'} value={this.state.email}  handleChange={this.handleChange}></ErrorFormInput>

          <Button type='submit'>Submit</Button>
        </Form>
      </Segment>
      </div>
      );
    }
  }
  
  export default ErrorForm;