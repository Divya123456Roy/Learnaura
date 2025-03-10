import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion"; // ✅ Adding animations

const ChatMessaging = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: "Alice", text: "Hey! How's your project going?" },
    { id: 2, sender: "Bob", text: "Pretty good! Just wrapping up some details." },
  ]);
  const [messageInput, setMessageInput] = useState("");

  const sendMessage = () => {
    if (messageInput.trim()) {
      setMessages([...messages, { id: messages.length + 1, sender: "You", text: messageInput }]);
      setMessageInput("");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <motion.h2 
        className="text-3xl font-extrabold mb-4 text-center text-blue-600"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        💬 Chat & Messaging
      </motion.h2>

      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
        <div className="h-80 overflow-y-auto border p-3 mb-4 bg-gray-100 rounded-lg space-y-2 scroll-smooth">
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              className={`p-3 w-fit max-w-xs rounded-lg text-white ${
                msg.sender === "You" 
                  ? "ml-auto bg-blue-500 text-right shadow-md" 
                  : "bg-gray-600 text-left shadow-md"
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="font-bold">{msg.sender}: </span>
              {msg.text}
            </motion.div>
          ))}
        </div>

        {/* Input & Send Button */}
        <div className="flex">
          <input
            type="text"
            placeholder="Type a message..."
            className="border p-2 w-full rounded-l-lg focus:ring-2 focus:ring-blue-500"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
          />
          <motion.button
            onClick={sendMessage}
            className="bg-blue-600 text-white px-6 py-2 rounded-r-lg hover:bg-blue-700 transition-all hover:scale-105"
            whileTap={{ scale: 0.9 }}
          >
            🚀 Send
          </motion.button>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="p-6">
        <nav className="mb-4 text-center">
          <Link 
            to="/chat-messaging" 
            className="text-lg font-semibold text-blue-600 hover:underline transition-all hover:text-blue-800"
          >
            ➡ Go to Chat & Messaging
          </Link>
        </nav>
        <Routes>
          <Route path="/chat-messaging" element={<ChatMessaging />} />
        </Routes>
      </div>
    </Router>
  );
};

export default ChatMessaging;
