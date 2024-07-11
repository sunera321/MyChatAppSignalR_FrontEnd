import React from 'react';
import PropTypes from 'prop-types';

const ChatRoom = ({ usermessages }) => {
    return (
        <div className="flex-grow p-4 mb-4 overflow-auto bg-white rounded-lg shadow-lg">
            {usermessages.map((msg, index) => (
                <div key={index} className={`mb-2 p-2 rounded ${msg.isSystem ? 'bg-gray-200' : 'bg-blue-200'}`}>
                    <strong>{msg.user}: </strong>{msg.message}
                </div>
            ))}
        </div>
    );
}

ChatRoom.propTypes = {
    usermessages: PropTypes.arrayOf(
        PropTypes.shape({
            user: PropTypes.string.isRequired,
            message: PropTypes.string.isRequired,
            isSystem: PropTypes.bool.isRequired
        })
    ).isRequired
};

export default ChatRoom;
