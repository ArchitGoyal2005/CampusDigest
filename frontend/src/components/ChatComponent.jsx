import React, { useEffect, useState } from 'react'
import { useUser } from '../contexts/userContext';

const ChatComponent = () => {
    const [message, setMessage] = useState('');
    const { socket } = useUser();

    const sendMessage = () => {
        if (message !== '') {
            const __createdtime__ = Date.now();
            // Send message to server. We can't specify who we send the message to from the frontend. We can only send to server. Server can then send message to rest of users in room
            socket.emit('room:join', { username: "asjh", room: 2, message, __createdtime__ });
            setMessage('');
        }
    };


    const handleJoinedMessage = (data) => { 
        console.log(data);
    }

    useEffect(() => {
        socket?.on('room:join', handleJoinedMessage);

        return () => {
            socket?.off('room:join', handleJoinedMessage);
        }
    }, [socket])

    return (
        <div className='md:w-[50%] h-[70%]'>
            <h1>Chat</h1>
            <input
                className='messageInput'
                placeholder='Message...'
                onChange={(e) => setMessage(e.target.value)}
                value={message}
            />
            <button type='submit' className='btn btn-primary' onClick={sendMessage}>
                Send Message
            </button>
        </div>
    )
}

export default ChatComponent
