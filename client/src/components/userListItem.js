import React from 'react';
import { List, Image } from 'semantic-ui-react'

function UserListItem(props) {
    return   <List.Item>
                <Image avatar src='/images/user.png' />
                <b>anonymous_id:</b>{props.anonymous_id} <b>user_id:</b>{props.user_id} 
                <b>email:</b>{props.email} <b>created_at:</b> {props.created_at}
                <hr/>
            </List.Item>
}

export default UserListItem;