import React from 'react';
import { List, Image } from 'semantic-ui-react'
import '../../css/userlist.css'

function UserListItem(props) {
    return   <List.Item>
                <div className="list-item" id="userlist" onClick={props.onItemClick}>
                    <div><Image avatar src='/images/user.png'/></div>
                    <div><b>anonymusId:</b>{props.anonymusId}</div>
                    <div><b>user_id:</b>{props.user_id}</div>
                    <div><b>email:</b>{props.email}</div>
                    <div><b>created_at:</b>{props.created_at}</div>
                </div>
            </List.Item>
}

export default UserListItem;