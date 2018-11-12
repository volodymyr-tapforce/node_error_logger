import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import ErrorForm from './errorCreateForm';

class ErrorModal extends Component {
    render() {
      return (
        <Modal trigger={<Button>Show Modal</Button>} size={'tiny'} inverted>
        <Modal.Content image>
            <ErrorForm></ErrorForm>
        </Modal.Content>
      </Modal>
      );
    }
  }
  
  export default ErrorModal;