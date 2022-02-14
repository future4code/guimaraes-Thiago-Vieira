import React, { useState, useEffect } from 'react';
import './App.css';

import ChatListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow'

import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import { useTabContext } from '@mui/base';

function App() {
  
    const [chatlist, setChatList] = useState([
        {chatId: 1, title: 'Pessoa 1', avatar: "https://randomuser.me/api/portraits/women/7.jpg"},
        {chatId: 2, title: 'Pessoa 2', avatar: "https://randomuser.me/api/portraits/women/2.jpg"},
        {chatId: 3, title: 'Pessoa 3', avatar: "https://randomuser.me/api/portraits/men/3.jpg"},
        {chatId: 4, title: 'Pessoa 4', avatar: "https://randomuser.me/api/portraits/men/19.jpg"}
        ]);
    const [activeChat, setActiveChat] = useState({});

    const [user, setUser] = useState({
        id: 1234,
        avatar:'',
        name: 'Thiago Vieira'
    });

    return (
    <div className="App">
        <div className="sidebar">
            <header>
                <img className="header-avatar" src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg" alt="" />
                <div className="header-buttons">
                    <div className="header-btn">
                        <DonutLargeIcon style={{color: '#919191'}} />
                    </div>
                    <div className="header-btn">
                        <ChatIcon style={{color: '#919191'}} />
                    </div>
                    <div className="header-btn">
                        <MoreVertIcon style={{color: '#919191'}} />
                    </div>
                </div>
            </header>
            <div className="search">
                <div className="search-input">
                    <SearchIcon fontSize="small" style={{color: '#919191'}} />
                    <input type="search" placeholder='Procurar ou começar uma nova conversa' />
                </div>
            </div>
            <div className="chatlist">
                {chatlist.map ((item, key) => (
                    <ChatListItem
                        key={key}
                        data={item}
                        active={activeChat.chatId === chatlist[key].chatId}
                        onClick={()=>setActiveChat(chatlist[key])}
                    />
                ))}
            </div>
        </div>
        <div className="contentarea">
            {activeChat.chatId !== undefined &&
                <ChatWindow 
                    user={user}
                />
            }
            {activeChat.chatId === undefined &&
                <ChatIntro />
            }
        </div>
    </div>
  );
}

export default App;
