import React, { useState } from 'react';
import PropTypes from 'prop-types';

const WaitingRoom = ({ JoinChatRoom }) => {
    const [UserName, setUserName] = useState('');
    const [ChatRoom, setChatRoom] = useState('');

    const handleJoin = () => {
        JoinChatRoom(UserName, ChatRoom);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="w-full max-w-lg p-8 mx-4 bg-white rounded-lg shadow-lg md:mx-auto">
                <h1 className="mb-4 text-2xl text-center text-gray-900 md:text-4xl md:mb-5 md:font-semibold">Welcome to ChatRoom</h1>
                <h2 className="hidden mb-4 font-sans text-xl text-gray-900 md:text-2xl md:block">Join Chat Room</h2>
                <div className="mb-4">
                    <label className="block mb-2 text-gray-700">User Name</label>
                    <input
                        type="text"
                        className="w-full p-2 border rounded border-cyan-950"
                        value={UserName}
                        required
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Enter your name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-gray-700 ">Chat Room</label>
                    <input
                        type="text"
                        className="w-full p-2 border rounded border-cyan-950"
                        value={ChatRoom}
                        required
                        onChange={(e) => setChatRoom(e.target.value)}
                        placeholder="Enter chat room name"
                    />
                </div>
                <button
                    className="w-full p-2 text-white bg-blue-600 rounded hover:bg-blue-700"
                    onClick={handleJoin}
                >
                    Join Chat Room
                </button>
            </div>
        </div>
    );
}

WaitingRoom.propTypes = {
    JoinChatRoom: PropTypes.func.isRequired
};

export default WaitingRoom;
