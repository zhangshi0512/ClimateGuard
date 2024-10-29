import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowLeft, Users } from 'lucide-react';
import { communityUpdates } from '../data/updates';

const CommunityUpdateDetail = () => {
  const { id } = useParams();
  const update = communityUpdates.find(u => u.id.toString() === id);

  if (!update) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900">Update not found</h2>
        <Link to="/updates" className="text-sky-600 hover:text-sky-700 mt-4 inline-block">
          Back to Updates
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <Link to="/updates" className="inline-flex items-center text-sky-600 hover:text-sky-700">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Updates
      </Link>

      <article className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <img
          src={update.image}
          alt={update.title}
          className="w-full h-64 object-cover"
        />
        
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{update.title}</h1>
          
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
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

          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">{update.description}</p>
            <p className="text-gray-600 mb-6">{update.fullContent}</p>
            
            {update.schedule && (
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Event Schedule</h2>
                <ul className="space-y-3">
                  {update.schedule.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="font-medium text-gray-900 mr-3">{item.time}:</span>
                      <span className="text-gray-600">{item.activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {update.registration && (
              <div className="mt-8 p-6 bg-sky-50 rounded-lg">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Registration Information</h2>
                <p className="text-gray-600 mb-4">{update.registration.details}</p>
                <Link 
                  to={`/register/${update.id}`}
                  className="inline-block px-6 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors"
                >
                  Register Now
                </Link>
              </div>
            )}
          </div>
        </div>
      </article>

      {update.relatedUpdates && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Users className="h-6 w-6 text-sky-600" />
            <h2 className="text-2xl font-semibold text-gray-900">Related Updates</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {update.relatedUpdates.map((related) => (
              <Link 
                key={related.id} 
                to={`/updates/${related.id}`}
                className="block group"
              >
                <div className="bg-gray-50 rounded-lg p-6 transition-colors group-hover:bg-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{related.title}</h3>
                  <p className="text-gray-600 text-sm">{related.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CommunityUpdateDetail;