import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Cloud } from 'lucide-react';
import LocationSelector from './LocationSelector';

const Layout = () => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <header className="bg-white/80 backdrop-blur-sm border-b border-sky-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Cloud className="h-8 w-8 text-sky-600" />
              <span className="text-2xl font-bold text-gray-900">ClimateGuard</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/weather" className={`text-sm font-medium ${location.pathname === '/weather' ? 'text-sky-600' : 'text-gray-600 hover:text-sky-600'}`}>
                Weather Details
              </Link>
              <Link to="/resources" className={`text-sm font-medium ${location.pathname === '/resources' ? 'text-sky-600' : 'text-gray-600 hover:text-sky-600'}`}>
                Emergency Resources
              </Link>
              <Link to="/updates" className={`text-sm font-medium ${location.pathname === '/updates' ? 'text-sky-600' : 'text-gray-600 hover:text-sky-600'}`}>
                Community Updates
              </Link>
              <Link to="/help" className={`text-sm font-medium ${location.pathname.startsWith('/help') ? 'text-sky-600' : 'text-gray-600 hover:text-sky-600'}`}>
                Help Channel
              </Link>
            </nav>
            <LocationSelector />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;