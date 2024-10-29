import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import WeatherDetails from './pages/WeatherDetails';
import EmergencyResources from './pages/EmergencyResources';
import CommunityUpdates from './pages/CommunityUpdates';
import CommunityUpdateDetail from './pages/CommunityUpdateDetail';
import AlertDetails from './pages/AlertDetails';
import EventRegistration from './pages/EventRegistration';
import HelpChannel from './pages/HelpChannel';
import PostDetail from './pages/PostDetail';
import NewPost from './pages/NewPost';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="weather" element={<WeatherDetails />} />
          <Route path="resources" element={<EmergencyResources />} />
          <Route path="updates" element={<CommunityUpdates />} />
          <Route path="updates/:id" element={<CommunityUpdateDetail />} />
          <Route path="alerts/:id" element={<AlertDetails />} />
          <Route path="register/:id" element={<EventRegistration />} />
          <Route path="help" element={<HelpChannel />} />
          <Route path="help/new" element={<NewPost />} />
          <Route path="help/:id" element={<PostDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;