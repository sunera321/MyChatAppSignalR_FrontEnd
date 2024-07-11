import { LogLevel, HubConnectionBuilder } from '@microsoft/signalr';
import WaitingRoom from './Components/WaitingRoom';
import ChatRoom from './Components/ChatRoom';
import ChatBox from './massageBox/ChatBox';
import React, { useState } from 'react';

function App() {
    const [connection, setConnection] = useState(null);
    const [usermessages, setusermessages] = useState([]);
    const [loading, setLoading] = useState(false);

    const joinChatRoom = async (UserName, ChatRoom) => {
        setLoading(true);
        try {
            const connection = new HubConnectionBuilder()
                .withUrl("https://chatroomappwithsignalr-dxctc2fhehczeyfb.eastus-01.azurewebsites.net/chat")
                .configureLogging(LogLevel.Information)
                .build();

            connection.on("ReceiveMessage", (user, message) => {
                setusermessages(prevMessages => [...prevMessages, { user, message, isSystem: true }]);
            });

            connection.on("ReceiveSpecificMessage", (user, message) => {
                setusermessages(prevMessages => [...prevMessages, { user, message }]);
            });

            connection.onclose(() => {
                console.log("Connection closed");
            });

            try {
                await connection.start();
                alert("connected");
            } catch (err) {
                console.error("Error while starting connection: ", err);
                setLoading(false);
                return;
            }

            await connection.invoke("JoinSpecificChatRoom", { UserName, ChatRoom });
            setConnection(connection);
        } catch (error) {
            console.error("Connection error: ", error);
        } finally {
            setLoading(false);
        }
    };

    const sendMessage = async (message) => {
        if (connection) {
            try {
                await connection.invoke("SendMessage", message);
            } catch (error) {
                console.error("SendMessage error: ", error);
            }
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <header className="p-4 text-center text-white bg-blue-600">
                <h1 className="text-2xl">Welcome to ChatRoom</h1>
            </header>
            <main className="container flex-grow p-20 mx-auto">
                {loading ? (
                    <div className="flex items-center justify-center h-full">
                        <div className="loader"></div> {/* You can add a loading spinner here */}
                        <p>Connecting to chat room...</p>
                    </div>
                ) : (
                    !connection ? (
                        <WaitingRoom JoinChatRoom={joinChatRoom} />
                    ) : (
                        <div className="flex flex-col h-full">
                            <ChatRoom usermessages={usermessages} />
                            <ChatBox sendMessage={sendMessage} />  
                        </div>
                    )
                )}
            </main>
        </div>
    );
}

export default App;
