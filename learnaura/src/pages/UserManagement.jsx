import { useState } from "react";
import { FaUserEdit, FaTrash, FaUserShield } from "react-icons/fa";

const initialUsers = [
  { id: 1, name: "Alice", role: "Student", status: "Active" },
  { id: 2, name: "Bob", role: "Professional", status: "Active" },
];

export default function UserManagement() {
  const [users, setUsers] = useState(initialUsers);

  // Function to change role
  const handleRoleChange = (id, newRole) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, role: newRole } : user
      )
    );
  };

  // Function to suspend a user
  const handleSuspend = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id
          ? { ...user, status: user.status === "Active" ? "Suspended" : "Active" }
          : user
      )
    );
  };

  // Function to remove a user
  const handleRemove = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">User Management</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left border-collapse border border-gray-200">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Role</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-t border-gray-200 hover:bg-blue-50">
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">
                    <select
                      value={user.role}
                      onChange={(e) => handleRoleChange(user.id, e.target.value)}
                      className="border rounded px-2 py-1 bg-white"
                    >
                      <option value="Student">Student</option>
                      <option value="Professional">Professional</option>
                    </select>
                  </td>
                  <td
                    className={`px-4 py-2 ${
                      user.status === "Active" ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {user.status}
                  </td>
                  <td className="px-4 py-2 flex space-x-3">
                    <button
                      onClick={() => handleSuspend(user.id)}
                      className="text-yellow-500 hover:text-yellow-600"
                    >
                      <FaUserShield />
                    </button>
                    <button
                      onClick={() => handleRemove(user.id)}
                      className="text-red-500 hover:text-red-600"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
