import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Homepage1 from '../pages/Homepage1';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import About from '../pages/About';
import Services from '../pages/Services';
import AdminDashboard from '../pages/AdminDashboard';
import UserManagement from '../pages/UserManagement';
import GroupManagement from '../components/GroupManagement';
import ContentModeration from '../components/ContentModeration';
import PlatformAnalytics from '../components/PlatformAnalytics';
import Navbar from '../components/Navbar';
import Navbar1 from '../components/Navbar1';
import Footer from '../components/Footer';
import ForgotPassword from '../components/ForgotPassword';
import ProfileManagement from '../components/ProfileManagement';
import StudyGroups from '../components/StudyGroups';
import GroupCollaboration from '../components/GroupCollaboration';
import LearningResources from '../components/LearningResources';
import DiscussionForums from '../components/DiscussionForums';
import ChatMessaging from '../components/ChatMessaging';
import ProgressTracking from '../components/ProgressTracking';
import Gamification from '../components/Gamification';

function Index() {
  const user = {
    name: 'User',
    role: 'user',
   //role: 'admin', // Change this to 'user' for normal user navigation
  };

  return (
    <BrowserRouter>
      {user.role !== 'admin' ? (
        <>
          <Navbar1 />
          <Routes>
            <Route path="/homepage1" element={<Homepage1 />} />
           
          </Routes>
          <Footer />

          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/profile-management" element={<ProfileManagement />} />
            <Route path="/study-groups" element={<StudyGroups />} />
            <Route path="/group-collaboration" element={<GroupCollaboration />} />
            <Route path="/learning-resources" element={<LearningResources />} />
            <Route path="/discussion-forums" element={<DiscussionForums />} />
            <Route path="/chat-messaging" element={<ChatMessaging />} />
            <Route path="/progress-tracking" element={<ProgressTracking />} />
            <Route path="/gamification" element={<Gamification />} />
          </Routes>
          <Footer />
        </>
      ) : (
        <>
          <Routes>
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="/group-management" element={<GroupManagement />} />
            <Route path="/content-moderation" element={<ContentModeration />} />
            <Route path="/platform-analytics" element={<PlatformAnalytics />} />
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
}

export default Index;
