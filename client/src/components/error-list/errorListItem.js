import React from 'react';
import { List, Image, Popup } from 'semantic-ui-react'

function ErrorListItem(props) {
    const imageSrc = `/images/${props.err_type}.png`;
    const errMessageElem = (<div style={{flexGrow:'3', overflow:'hidden'}}><b>err_message:</b>{props.err_message}</div>);
    return   <List.Item>
                <div className="list-item" onClick={props.onItemClick}>
                    <div><Image avatar src={imageSrc}/> {props.created_at}</div>
                    <Popup 
                        trigger={errMessageElem} 
                        content={<div style={
                                    {
                                        width:'500px', 
                                        height:'auto',
                                        overflowWrap: 'break-word',
                                        wordBreak: 'break-all'
                                    }
                                        }>
                        {props.err_message}</div>} 
                        position='bottom center'
                        on='click' inverted/>
                </div>
            </List.Item>
}

export default ErrorListItem;