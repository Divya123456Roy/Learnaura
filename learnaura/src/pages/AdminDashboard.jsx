import { Card, CardContent } from "../components/Card";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", users: 400, courses: 240 },
  { name: "Feb", users: 300, courses: 139 },
  { name: "Mar", users: 200, courses: 980 },
  { name: "Apr", users: 278, courses: 390 },
  { name: "May", users: 189, courses: 480 },
];

export default function AdminDashboard() {
  return (
    <div className="flex h-screen">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-blue-800 text-white p-6 flex flex-col space-y-6">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
        <nav className="flex flex-col space-y-4">
          <Link to="/dashboard" className="hover:bg-blue-700 p-2 rounded">Dashboard</Link>
          <Link to="/user-management" className="hover:bg-blue-700 p-2 rounded">UserManagement</Link>
          <Link to="/group-management" className="hover:bg-blue-700 p-2 rounded">GroupManagement</Link>
          <Link to="/content-moderation" className="hover:bg-blue-700 p-2 rounded">ContentModeration</Link>
          <Link to="/platform-analytics" className="hover:bg-blue-700 p-2 rounded">PlatformAnalytics</Link>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent>
              <h2 className="text-lg font-semibold">Total Users</h2>
              <p className="text-2xl">1,234</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h2 className="text-lg font-semibold">Total Courses</h2>
              <p className="text-2xl">56</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h2 className="text-lg font-semibold">Active Enrollments</h2>
              <p className="text-2xl">789</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">User & Course Growth</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#8884d8" strokeWidth={2} />
              <Line type="monotone" dataKey="courses" stroke="#82ca9d" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <Button className="mt-4">Manage Users</Button>
      </main>
    </div>
  );
}
