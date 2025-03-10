import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion"; // ✅ Added animations

const DiscussionForums = () => {
  const [discussions, setDiscussions] = useState([
    {
      id: 1,
      title: "Best resources to learn React?",
      author: "Alice",
      comments: ["Check out the official docs!", "YouTube tutorials are great too!"],
    },
    {
      id: 2,
      title: "How to get started with Machine Learning?",
      author: "Bob",
      comments: ["Start with Python and basic ML concepts.", "Coursera has great courses!"],
    },
  ]);

  const [newTopic, setNewTopic] = useState("");
  const [selectedDiscussion, setSelectedDiscussion] = useState(null);
  const [newComment, setNewComment] = useState("");

  const addDiscussion = () => {
    if (newTopic.trim()) {
      setDiscussions([...discussions, { id: discussions.length + 1, title: newTopic, author: "You", comments: [] }]);
      setNewTopic("");
    }
  };

  const addComment = (id) => {
    if (newComment.trim()) {
      setDiscussions(
        discussions.map((discussion) =>
          discussion.id === id ? { ...discussion, comments: [...discussion.comments, newComment] } : discussion
        )
      );
      setNewComment("");
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
        🗨 Discussion Forums
      </motion.h2>

      {/* Create New Discussion */}
      <div className="mb-6 bg-white p-5 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Start a Discussion</h3>
        <div className="flex">
          <input
            type="text"
            placeholder="Enter topic title..."
            className="border p-2 w-full rounded-l-lg focus:ring-2 focus:ring-blue-500"
            value={newTopic}
            onChange={(e) => setNewTopic(e.target.value)}
          />
          <motion.button
            onClick={addDiscussion}
            className="bg-blue-600 text-white px-6 py-2 rounded-r-lg hover:bg-blue-700 transition-all hover:scale-105"
            whileTap={{ scale: 0.9 }}
          >
            ➕ Post
          </motion.button>
        </div>
      </div>

      {/* List of Discussions */}
      <div className="bg-white p-5 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-3">Recent Discussions</h3>
        <ul className="border p-3 h-64 overflow-y-auto space-y-2">
          {discussions.length === 0 ? (
            <p className="text-gray-500">No discussions yet.</p>
          ) : (
            discussions.map((discussion) => (
              <motion.li
                key={discussion.id}
                className="p-3 border-b cursor-pointer bg-gray-50 hover:bg-gray-200 transition-all rounded-md"
                onClick={() => setSelectedDiscussion(discussion)}
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="font-bold">{discussion.title}</h4>
                <p className="text-sm text-gray-600">Posted by {discussion.author}</p>
              </motion.li>
            ))
          )}
        </ul>
      </div>

      {/* Discussion Details & Comments */}
      {selectedDiscussion && (
        <motion.div 
          className="bg-white p-5 mt-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-3">{selectedDiscussion.title}</h3>
          <p className="text-gray-700 mb-4">Posted by {selectedDiscussion.author}</p>

          {/* Comments */}
          <h4 className="font-semibold mb-2">Comments:</h4>
          <ul className="border p-3 h-32 overflow-y-auto bg-gray-100 rounded-lg space-y-2">
            {selectedDiscussion.comments.length === 0 ? (
              <p className="text-gray-500">No comments yet.</p>
            ) : (
              selectedDiscussion.comments.map((comment, index) => (
                <motion.li 
                  key={index} 
                  className="p-2 border-b bg-white rounded-md shadow-sm"
                  whileHover={{ scale: 1.02 }}
                >
                  {comment}
                </motion.li>
              ))
            )}
          </ul>

          {/* Add Comment */}
          <div className="flex mt-4">
            <input
              type="text"
              placeholder="Write a comment..."
              className="border p-2 w-full rounded-l-lg focus:ring-2 focus:ring-green-500"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <motion.button
              onClick={() => addComment(selectedDiscussion.id)}
              className="bg-green-600 text-white px-6 py-2 rounded-r-lg hover:bg-green-700 transition-all hover:scale-105"
              whileTap={{ scale: 0.9 }}
            >
              💬 Add
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="p-6">
        <nav className="mb-4 text-center">
          <Link 
            to="/discussion-forums" 
            className="text-lg font-semibold text-blue-600 hover:underline transition-all hover:text-blue-800"
          >
            🗨 Go to Discussion Forums
          </Link>
        </nav>
        <Routes>
          <Route path="/discussion-forums" element={<DiscussionForums />} />
        </Routes>
      </div>
    </Router>
  );
};

export default DiscussionForums;
