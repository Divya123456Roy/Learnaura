import React from "react";
import { FaUsers, FaBookOpen, FaChartLine, FaBars } from "react-icons/fa";

export default function About() {
  return (
    <div className="bg-blue-500">
      {/* Navbar */}
      <nav className="bg-white text-gray-900 px-6 py-4 shadow-md">
        <div className="container mx-auto flex justify-center space-x-6">
          <a href="/" className="hover:text-pink-500">Home</a>
          <a href="/about" className="hover:text-pink-500">About</a>
          <a href="/services" className="hover:text-pink-500">Services</a>
        </div>
      </nav>

      {/* About Section */}
      <div className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white">About LearnAura</h1>
          <p className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto">
            LearnAura is an innovative online platform designed to foster collaborative
            learning and build a strong community of learners with shared academic and
            professional goals. By providing an interactive space for knowledge-sharing,
            discussions, and group collaboration, we empower users to enhance their learning
            journey and achieve their aspirations.
          </p>
        </div>

        {/* Key Features */}
        <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <FaUsers className="text-5xl text-pink-500 mx-auto" />
            <h3 className="text-2xl font-semibold mt-4">Collaborative Learning</h3>
            <p className="text-gray-600 mt-2">
              Connect with like-minded learners, form study groups, and engage in discussions.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <FaBookOpen className="text-5xl text-blue-500 mx-auto" />
            <h3 className="text-2xl font-semibold mt-4">Resource Sharing</h3>
            <p className="text-gray-600 mt-2">
              Share and access study materials, articles, notes, and presentations.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <FaChartLine className="text-5xl text-green-500 mx-auto" />
            <h3 className="text-2xl font-semibold mt-4">Progress Tracking</h3>
            <p className="text-gray-600 mt-2">
              Monitor learning progress, earn achievements, and stay motivated through gamification.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="container mx-auto mt-16 text-center">
          <h2 className="text-4xl font-bold text-white">Our Vision</h2>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            To create a scalable and user-friendly digital learning ecosystem where knowledge is
            accessible to everyone, enabling a community-driven approach to education.
          </p>
        </div>
      </div>
    </div>
  );
}
