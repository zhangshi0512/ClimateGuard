import React from 'react';
import { Calendar, Users, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { communityUpdates } from '../data/updates';

const CommunityUpdates = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Community Updates</h1>
        
        <div className="space-y-8">
          {communityUpdates.map((update) => (
            <div key={update.id} className="flex flex-col md:flex-row gap-6 pb-8 border-b border-gray-100 last:border-0">
              <div className="md:w-1/3">
                <img
                  src={update.image}
                  alt={update.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="md:w-2/3 space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">{update.title}</h2>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(update.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {update.location}
                  </div>
                </div>
                <p className="text-gray-600">{update.description}</p>
                <Link 
                  to={`/updates/${update.id}`}
                  className="px-4 py-2 text-sky-600 font-medium hover:text-sky-700 inline-flex items-center"
                >
                  Read more
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <div className="flex items-center space-x-3 mb-6">
          <Users className="h-6 w-6 text-sky-600" />
          <h2 className="text-2xl font-semibold text-gray-900">Get Involved</h2>
        </div>
        
        <p className="text-gray-600 mb-6">
          Join our community efforts to build a more resilient and prepared neighborhood.
          Sign up for regular updates and volunteer opportunities.
        </p>
        
        <form className="flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default CommunityUpdates;