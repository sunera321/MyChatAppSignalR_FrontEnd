import React, { useState } from 'react';

const WaitingRoom = ({ JoinChatRoom }) => {
    const [UserName, setUserName] = useState('');
    const [ChatRoom, setChatRoom] = useState('');

    const handleJoin = () => {
        JoinChatRoom(UserName, ChatRoom);
    }

    return (
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Join Chat Room</h2>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">User Name</label>
                <input
                    type="text"
                    className="w-full p-2 border rounded"
                    value={UserName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Enter your name"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Chat Room</label>
                <input
                    type="text"
                    className="w-full p-2 border rounded"
                    value={ChatRoom}
                    onChange={(e) => setChatRoom(e.target.value)}
                    placeholder="Enter chat room name"
                />
            </div>
            <button
                className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                onClick={handleJoin}
            >
                Join Chat Room
            </button>
        </div>
    );
}

export default WaitingRoom;
