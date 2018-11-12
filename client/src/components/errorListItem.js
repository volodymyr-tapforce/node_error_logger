import React from 'react';
import { List, Image } from 'semantic-ui-react'
import '../css/listItem.css'

function ErrorListItem(props) {
    return   <List.Item>
                <div className="list-item" onClick={props.onItemClick}>
                    <div><Image avatar src='/images/error.png'/></div>
                    <div><b>err_type:</b>{props.err_type}</div>
                    <div><b>err_message:</b>{props.err_message}</div>
                    <div><b>anonymous_id:</b>{props.anonymous_id}</div>
                    <div><b>created_at:</b>{props.created_at}</div>
                </div>
            </List.Item>
}

export default ErrorListItem;