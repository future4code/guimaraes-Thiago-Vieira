import React, { useState } from 'react';
import './ChatWindow.css';

import MessageItem from './MessageItem';

import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';
import { StylesContext } from '@material-ui/styles';

export default ({user}) => {
    
    const [value, setValue] = useState();
    const [message, setMessage] = useState([
        {author: '' , body: ''},
    ]);

    let inputValue = '';
    
    const sendMessage =  () => {
        setMessage([...message, {
            author: '',
            body: inputValue
        }])
        setValue("");
    }
    
    const getMessage = (event) => {
        inputValue = event.target.value;
        return inputValue;
    }

    return (
        <div className="chatWindow">
            <div className="chatWindow-header">

                <div className="chatWindow-headerinfo">
                    <img src="https://randomuser.me/api/portraits/women/7.jpg" alt="" className="chatWindow-avatar" />
                    <div className="chatWindow-name">Pessoa 1</div>
                </div>

                <div className="chatWindow-buttons">
                    <div className="chatWindow-btn">
                        <SearchIcon style={{color: '#919191'}} />
                    </div>
                    <div className="chatWindow-btn">
                        <AttachFileIcon style={{color: '#919191'}} />
                    </div>
                    <div className="chatWindow-btn">
                        <MoreVertIcon style={{color: '#919191'}} />
                    </div>
                </div>

            </div>
            <div className="chatWindow-body">
                {message.map((message, key) => (
                    <MessageItem
                        key={key}
                        data={message}
                    />
                ))}

            </div>
            <div className="chatWindow-footer">
                <div className="chatWindow-pre">

                    <div className="chatWindow-btn">
                        <InsertEmoticonIcon style={{color: '#919191'}} />
                    </div>

                </div>
                <div className="chatWindow-inputarea">
                    <input 
                        className='chatWindow-input' 
                        type="text"
                        placeholder='Digite uma mensagem...'
                        value={value}
                        onChange={getMessage}
                        required
                    />
                </div>
                <div className="chatWindow-pos">
                    <div className="chatWindow-btn">
                        <SendIcon 
                        style={{color: '#919191'}}
                        onClick={sendMessage}
                        
                        />
                    </div>
                    <div className="chatWindow-btn">
                        <MicIcon style={{color: '#919191'}} />
                    </div>


                </div>
            </div>
     
        </div>
    )
}