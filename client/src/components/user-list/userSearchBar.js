import React, { Component } from 'react';
import { Input, Segment, Grid, Divider, Header } from 'semantic-ui-react'


class UserSearchBar extends Component {

  handleKeyPress = (event) => {
    if(event.key === 'Enter') {
      this.props.handleSearch();
    }
  }

  render() {
    return (
      <div style={{width:'50%'}} onKeyPress={this.handleKeyPress}>
          <Segment >
            <Grid columns={2} stackable textAlign='center'>
                <Divider vertical>Or</Divider>
                <Grid.Row verticalAlign='middle'>
                    <Grid.Column>
                        <Header as='h3'>email</Header>
                        <Input placeholder='email' name='email'  icon='search' value={this.props.searchParams.email} onChange={this.props.handleChange}/>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h3'>user_id</Header>
                        <Input placeholder='user_id' name='user_id'  icon='search' value={this.props.searchParams.user_id} onChange={this.props.handleChange}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
          </Segment>
      </div>

    );
  }
}

export default UserSearchBar;
