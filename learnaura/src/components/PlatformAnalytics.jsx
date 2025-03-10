import { useState } from "react";

export default function PlatformAnalytics() {
  const [analyticsData, setAnalyticsData] = useState({
    users: 1500,
    activeUsers: 450,
    posts: 3200,
    reportedContent: 78,
  });

  return (
    <div className="p-6 max-w-5xl mx-auto bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center">LearnAura Platform Analytics</h2>
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded shadow-md text-center">
          <h3 className="text-xl font-semibold">Total Users</h3>
          <p className="text-2xl text-blue-600 font-bold">{analyticsData.users}</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md text-center">
          <h3 className="text-xl font-semibold">Active Users</h3>
          <p className="text-2xl text-green-600 font-bold">{analyticsData.activeUsers}</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md text-center">
          <h3 className="text-xl font-semibold">Total Posts</h3>
          <p className="text-2xl text-purple-600 font-bold">{analyticsData.posts}</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md text-center">
          <h3 className="text-xl font-semibold">Reported Content</h3>
          <p className="text-2xl text-red-600 font-bold">{analyticsData.reportedContent}</p>
        </div>
      </div>
    </div>
  );
}
