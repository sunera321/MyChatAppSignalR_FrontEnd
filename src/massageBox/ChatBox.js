import React, { useState } from 'react';

const ChatBox = ({ sendMessage }) => {
    const [message, setMessage] = useState('');

    const handleSend = () => {
        sendMessage(message);
        setMessage('');
    }
    //chat box component
    return (
        <div className="flex">
            <input
                type="text"
                className="flex-grow p-2 border rounded"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message"
            />
            <button
                className="p-2 ml-2 text-white bg-blue-600 rounded hover:bg-blue-700"
                onClick={handleSend}
            >
                Send
            </button>
        </div>
    );
}

export default ChatBox;
