import React, { useState } from 'react';
import './message.html';
function ChatMessage({ message }) {
  return (
    <div className={`message ${message.sender}`}>
      <span className="sender">{message.sender}:</span>
      <span className="text">{message.text}</span>
    </div>
  );
}

function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { sender: 'user', text: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <div className="chat-app">
      <div className="message-list">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatApp;