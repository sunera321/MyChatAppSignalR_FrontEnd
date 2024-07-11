import React, { useState } from 'react';
import PropTypes from 'prop-types';

const WaitingRoom = ({ JoinChatRoom }) => {
    const [UserName, setUserName] = useState('');
    const [ChatRoom, setChatRoom] = useState('');

    const handleJoin = () => {
        JoinChatRoom(UserName, ChatRoom);
    };

    return (
        <div>
            <h1 className="text-5xl text-center text-white mb-14">Welcome to ChatRoom</h1>
            <div>
                <div className="max-w-md p-8 mx-auto bg-white rounded-lg shadow-lg">
                    <h2 className="mb-4 text-2xl font-bold">Join Chat Room</h2>
                    <div className="mb-4">
                        <label className="block mb-2 text-gray-700">User Name</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded"
                            value={UserName}
                            onChange={(e) => setUserName(e.target.value)}
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-gray-700">Chat Room</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded"
                            value={ChatRoom}
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
        </div>
    );
}

WaitingRoom.propTypes = {
    JoinChatRoom: PropTypes.func.isRequired
};

export default WaitingRoom;
