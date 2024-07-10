import React from 'react';

const ChatRoom = ({ usermessages }) => {
    return (
        <div className="flex-grow bg-white p-4 overflow-auto rounded-lg shadow-lg mb-4">
            {usermessages.map((msg, index) => (
                <div key={index} className={`mb-2 p-2 rounded ${msg.isSystem ? 'bg-gray-200' : 'bg-blue-200'}`}>
                    <strong>{msg.user}: </strong>{msg.message}
                </div>
            ))}
        </div>
    );
}

export default ChatRoom;
