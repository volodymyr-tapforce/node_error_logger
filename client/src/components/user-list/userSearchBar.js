import React, { Component } from 'react';
import { Input, Segment, Grid, Divider } from 'semantic-ui-react'


class UserSearchBar extends Component {
  render() {
    return (
      <div style={{width:'50%'}}>
          <Segment >
            <Grid columns={2} stackable textAlign='center'>
                <Divider vertical>Or</Divider>
                <Grid.Row verticalAlign='middle'>
                    <Grid.Column>
                        <Input placeholder='email' name='email'  icon='search' value={this.props.searchParams.email} onChange={this.props.handleChange}/>
                    </Grid.Column>
                    <Grid.Column>
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
