import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { AlertTriangle, Wind, ArrowLeft, MapPin, Clock, Shield } from 'lucide-react';

const AlertDetails = () => {
  const { id } = useParams();

  const alerts = {
    "1": {
      type: 'warning',
      title: 'High Wind Advisory',
      message: 'High wind advisory in effect until 6:00 PM PST',
      icon: Wind,
      details: {
        issued: '2024-03-15 08:00 AM PST',
        expires: '2024-03-15 6:00 PM PST',
        affected: 'San Francisco Bay Area',
        severity: 'Moderate',
        description: 'Strong winds expected with gusts up to 45 mph. Secure loose outdoor objects and use caution when driving high-profile vehicles.',
        instructions: [
          'Secure outdoor furniture and decorations',
          'Keep distance from power lines and trees',
          'Drive with caution, especially in high-profile vehicles',
          'Have emergency supplies ready in case of power outages'
        ]
      }
    },
    "2": {
      type: 'danger',
      title: 'Flash Flood Warning',
      message: 'Flash flood warning for low-lying areas',
      icon: AlertTriangle,
      details: {
        issued: '2024-03-15 09:30 AM PST',
        expires: '2024-03-15 9:30 PM PST',
        affected: 'Low-lying areas of San Francisco',
        severity: 'Severe',
        description: 'Flash flooding possible in low-lying areas due to heavy rainfall. Some areas may experience rapid water accumulation.',
        instructions: [
          'Move to higher ground if in flood-prone areas',
          'Do not drive through flooded roadways',
          'Monitor local news and weather updates',
          'Prepare for possible evacuation'
        ]
      }
    }
  };

  const alert = alerts[id as keyof typeof alerts];

  if (!alert) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900">Alert not found</h2>
        <Link to="/" className="text-sky-600 hover:text-sky-700 mt-4 inline-block">
          Return home
        </Link>
      </div>
    );
  }

  const AlertIcon = alert.icon;

  return (
    <div className="space-y-8">
      <Link to="/" className="inline-flex items-center text-sky-600 hover:text-sky-700">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Dashboard
      </Link>

      <div className={`rounded-lg p-6 ${
        alert.type === 'warning' ? 'bg-amber-50' : 'bg-red-50'
      }`}>
        <div className="flex items-center space-x-4">
          <AlertIcon className={`h-8 w-8 ${
            alert.type === 'warning' ? 'text-amber-600' : 'text-red-600'
          }`} />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{alert.title}</h1>
            <p className={`mt-1 ${
              alert.type === 'warning' ? 'text-amber-800' : 'text-red-800'
            }`}>{alert.message}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="flex items-center space-x-3">
            <Clock className="h-5 w-5 text-gray-400" />
            <div>
              <p className="text-sm text-gray-500">Issued</p>
              <p className="font-medium text-gray-900">{alert.details.issued}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Clock className="h-5 w-5 text-gray-400" />
            <div>
              <p className="text-sm text-gray-500">Expires</p>
              <p className="font-medium text-gray-900">{alert.details.expires}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-gray-400" />
            <div>
              <p className="text-sm text-gray-500">Affected Area</p>
              <p className="font-medium text-gray-900">{alert.details.affected}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Shield className="h-5 w-5 text-gray-400" />
            <div>
              <p className="text-sm text-gray-500">Severity</p>
              <p className="font-medium text-gray-900">{alert.details.severity}</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Description</h2>
            <p className="text-gray-600">{alert.details.description}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Safety Instructions</h2>
            <ul className="space-y-2">
              {alert.details.instructions.map((instruction, index) => (
                <li key={index} className="flex items-start">
                  <span className="h-6 w-6 flex items-center justify-center rounded-full bg-sky-100 text-sky-600 text-sm mr-3 flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-gray-600">{instruction}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlertDetails;