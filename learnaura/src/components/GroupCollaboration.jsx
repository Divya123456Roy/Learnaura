import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion"; // ✅ Adding animations
import { FiSend, FiUpload, FiCheckCircle, FiXCircle } from "react-icons/fi"; // ✅ Icons for better UI

const GroupCollaboration = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: "Alice", text: "Hey team! Let's start the discussion." },
    { id: 2, sender: "Bob", text: "Sure! Let's plan our project tasks." },
  ]);
  const [messageInput, setMessageInput] = useState("");
  const [files, setFiles] = useState([{ name: "📄 Project_Plan.pdf" }]);
  const [tasks, setTasks] = useState([
    { id: 1, task: "Complete research", completed: false },
    { id: 2, task: "Prepare presentation", completed: false },
  ]);
  const [taskInput, setTaskInput] = useState("");

  const sendMessage = () => {
    if (messageInput.trim()) {
      setMessages([...messages, { id: messages.length + 1, sender: "You", text: messageInput }]);
      setMessageInput("");
    }
  };

  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, { id: tasks.length + 1, task: taskInput, completed: false }]);
      setTaskInput("");
    }
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      setFiles([...files, { name: `📂 ${uploadedFile.name}` }]);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <motion.h2 
        className="text-4xl font-extrabold mb-6 text-center text-blue-600"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🤝 Group Collaboration
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Chat Section */}
        <div className="bg-white p-5 rounded-lg shadow-lg md:col-span-1">
          <h3 className="text-xl font-semibold mb-3">💬 Team Chat</h3>
          <div className="h-48 overflow-y-auto border p-3 bg-gray-100 rounded-lg space-y-2">
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                className={`p-3 w-fit max-w-xs rounded-lg text-white ${
                  msg.sender === "You" ? "ml-auto bg-blue-500 text-right shadow-md" : "bg-gray-600 text-left shadow-md"
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
          <div className="flex mt-3">
            <input
              type="text"
              placeholder="Type a message..."
              className="border p-2 w-full rounded-l-lg focus:ring-2 focus:ring-blue-500"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
            />
            <motion.button
              onClick={sendMessage}
              className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-all hover:scale-105 flex items-center space-x-2"
              whileTap={{ scale: 0.9 }}
            >
              <FiSend size={18} />
            </motion.button>
          </div>
        </div>

        {/* Shared Files Section */}
        <div className="bg-white p-5 rounded-lg shadow-lg md:col-span-1">
          <h3 className="text-xl font-semibold mb-3">📂 Shared Files</h3>
          <ul className="border p-3 h-48 overflow-y-auto bg-gray-100 rounded-lg space-y-2">
            {files.map((file, index) => (
              <motion.li
                key={index}
                className="p-2 border-b bg-white rounded-md shadow-sm flex justify-between items-center cursor-pointer hover:bg-blue-50 transition-all"
                whileHover={{ scale: 1.02 }}
              >
                {file.name}
              </motion.li>
            ))}
          </ul>
          <label className="cursor-pointer mt-3 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all inline-flex items-center space-x-2">
            <FiUpload size={18} />
            <span>Upload File</span>
            <input type="file" onChange={handleFileUpload} className="hidden" />
          </label>
        </div>

        {/* Task List Section */}
        <div className="bg-white p-5 rounded-lg shadow-lg md:col-span-1">
          <h3 className="text-xl font-semibold mb-3">📌 Task List</h3>
          <ul className="border p-3 h-48 overflow-y-auto bg-gray-100 rounded-lg space-y-2">
            {tasks.map((task) => (
              <motion.li
                key={task.id}
                className="flex justify-between items-center p-3 border-b bg-white rounded-md shadow-sm cursor-pointer hover:bg-green-50 transition-all"
                whileHover={{ scale: 1.02 }}
              >
                <span className={task.completed ? "line-through text-gray-500" : ""}>{task.task}</span>
                <button
                  onClick={() => toggleTaskCompletion(task.id)}
                  className={`px-3 py-1 rounded-lg flex items-center space-x-2 ${
                    task.completed ? "bg-gray-400 text-white" : "bg-green-600 text-white hover:bg-green-700"
                  }`}
                >
                  {task.completed ? <FiXCircle size={16} /> : <FiCheckCircle size={16} />}
                </button>
              </motion.li>
            ))}
          </ul>
          <div className="flex mt-3">
            <input
              type="text"
              placeholder="New Task..."
              className="border p-2 w-full rounded-l-lg focus:ring-2 focus:ring-blue-500"
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
            />
            <motion.button
              onClick={addTask}
              className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-all hover:scale-105"
              whileTap={{ scale: 0.9 }}
            >
              ➕
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="p-6 text-center">
        <Link
          to="/group-collaboration"
          className="text-lg font-semibold text-blue-600 hover:underline transition-all hover:text-blue-800"
        >
          🤝 Go to Group Collaboration
        </Link>
        <Routes>
          <Route path="/group-collaboration" element={<GroupCollaboration />} />
        </Routes>
      </div>
    </Router>
  );
};

export default GroupCollaboration;
