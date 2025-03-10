import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion"; // ✅ Adding animations
import { FiUsers, FiPlusCircle, FiX } from "react-icons/fi"; // ✅ Icons for better UI

const StudyGroups = () => {
  const [groups, setGroups] = useState([
    { id: 1, name: "C++", members: 10 },
    { id: 2, name: "Java", members: 8 },
    { id: 3, name: "Python", members: 15 },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [newGroup, setNewGroup] = useState("");

  const handleCreateGroup = () => {
    if (newGroup.trim()) {
      setGroups([...groups, { id: groups.length + 1, name: newGroup, members: 1 }]);
      setNewGroup("");
      setShowModal(false);
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
        📚 Study Groups
      </motion.h2>

      {/* Create Group Button */}
      <div className="flex justify-end mb-4">
        <motion.button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-all flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
        >
          <FiPlusCircle size={20} />
          <span>Create Group</span>
        </motion.button>
      </div>

      {/* Study Groups List */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {groups.map((group) => (
          <motion.div
            key={group.id}
            className="bg-white p-5 rounded-lg shadow-lg text-center border border-gray-200 transition-all hover:shadow-xl"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-xl font-semibold flex items-center justify-center space-x-2">
              <FiUsers size={20} /> <span>{group.name}</span>
            </h3>
            <p className="text-gray-600 mt-2">👥 Members: {group.members}</p>
            <motion.button
              className="mt-3 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all"
              whileTap={{ scale: 0.95 }}
            >
              Join Group
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Create Group Modal */}
      {showModal && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="bg-white p-6 rounded-lg shadow-xl w-96 relative"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button onClick={() => setShowModal(false)} className="absolute top-3 right-3 text-gray-600 hover:text-red-500">
              <FiX size={20} />
            </button>
            <h2 className="text-xl font-bold mb-4 text-center">Create a New Study Group</h2>
            <input
              type="text"
              placeholder="Group Name"
              className="border p-2 w-full mb-4 rounded-md focus:ring-2 focus:ring-blue-500"
              value={newGroup}
              onChange={(e) => setNewGroup(e.target.value)}
            />
            <div className="flex justify-end">
              <motion.button
                onClick={() => setShowModal(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded-lg mr-2 hover:bg-gray-500 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                Cancel
              </motion.button>
              <motion.button
                onClick={handleCreateGroup}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                Create
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="p-6 text-center">
        <Link
          to="/study-groups"
          className="text-lg font-semibold text-blue-600 hover:underline transition-all hover:text-blue-800"
        >
          📚 Go to Study Groups
        </Link>
        <Routes>
          <Route path="/study-groups" element={<StudyGroups />} />
        </Routes>
      </div>
    </Router>
  );
};

export default StudyGroups;
