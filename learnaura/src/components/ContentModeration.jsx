import { useState } from "react";

const reportedContent = [
  { id: 1, user: "JohnDoe", content: "Spam message here...", status: "Pending" },
  { id: 2, user: "JaneSmith", content: "Offensive language used", status: "Pending" },
  { id: 3, user: "MarkLee", content: "Plagiarized content", status: "Pending" },
];

export default function ContentModeration() {
  const [contentList, setContentList] = useState(reportedContent);
  const [search, setSearch] = useState("");

  const handleApprove = (id) => {
    setContentList((prev) => prev.map(item => item.id === id ? { ...item, status: "Approved" } : item));
  };

  const handleDelete = (id) => {
    setContentList((prev) => prev.filter(item => item.id !== id));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center">LearnAura Content Moderation</h2>
      <input
        type="text"
        placeholder="Search reported content..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 w-full p-3 border rounded shadow-sm"
      />
      <div className="space-y-6">
        {contentList
          .filter((item) => item.content.toLowerCase().includes(search.toLowerCase()))
          .map((item) => (
            <div key={item.id} className="p-6 bg-white shadow-lg rounded-lg border">
              <p className="text-gray-700"><strong>User:</strong> {item.user}</p>
              <p className="text-gray-900 mt-3 text-lg">{item.content}</p>
              <p className={`mt-2 text-sm font-semibold ${item.status === 'Approved' ? 'text-green-500' : 'text-red-500'}`}>Status: {item.status}</p>
              <div className="mt-4 flex space-x-4">
                <button onClick={() => handleApprove(item.id)} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-md">Approve</button>
                <button onClick={() => handleDelete(item.id)} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow-md">Delete</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
