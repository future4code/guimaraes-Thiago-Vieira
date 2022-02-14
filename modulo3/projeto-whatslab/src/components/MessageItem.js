import React from 'react';
import './MessageItem.css'


export default ({data}) => {
    return (
        <div>
            <div 
            className="messageLine"
            style={{justifyContent: 'flex-end'}}>

                <div className="messageItem"
                    style={{
                        backgroundColor: '#DCF8C6'
                }}>

                <div className="messageText">{data.body}</div>
                <div className="messageDate">19:00</div>

                </div>
            </div>
        </div>
    );
}

