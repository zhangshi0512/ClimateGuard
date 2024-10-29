import React from 'react';
import { Cloud, Wind, Droplets, ThermometerSun, Sun, CloudRain, CloudFog, Waves } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { useLocation } from '../contexts/LocationContext';
import ClimateZoneMap from '../components/ClimateZoneMap';

const WeatherDetails = () => {
  const { currentLocation } = useLocation();

  // Updated with Seattle's typical monthly rainfall data (in inches)
  const monthlyData = [
    { name: 'Jan', temp: 47, rainfall: 5.6, humidity: 78 },
    { name: 'Feb', temp: 49, rainfall: 3.5, humidity: 75 },
    { name: 'Mar', temp: 52, rainfall: 3.7, humidity: 73 },
    { name: 'Apr', temp: 56, rainfall: 2.7, humidity: 72 },
    { name: 'May', temp: 62, rainfall: 2.0, humidity: 68 },
    { name: 'Jun', temp: 67, rainfall: 1.5, humidity: 67 },
    { name: 'Jul', temp: 73, rainfall: 0.7, humidity: 65 },
    { name: 'Aug', temp: 73, rainfall: 0.9, humidity: 68 },
    { name: 'Sep', temp: 68, rainfall: 1.6, humidity: 73 },
    { name: 'Oct', temp: 58, rainfall: 3.5, humidity: 77 },
    { name: 'Nov', temp: 51, rainfall: 6.1, humidity: 79 },
    { name: 'Dec', temp: 45, rainfall: 5.6, humidity: 80 }
  ];

  const climateRisks = [
    { risk: 'Flooding', level: 'High', impact: 'Urban areas prone to flash floods' },
    { risk: 'Landslides', level: 'Moderate', impact: 'Risk increases during heavy rainfall' },
    { risk: 'Wind Storms', level: 'Moderate', impact: 'Common during winter months' },
    { risk: 'Air Quality', level: 'Low', impact: 'Generally good, affected by wildfires in summer' }
  ];

  return (
    <div className="space-y-8">
      {/* Current Weather Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Current Weather in {currentLocation.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center space-x-4 bg-gray-50 rounded-lg p-4">
            <ThermometerSun className="h-8 w-8 text-sky-600" />
            <div>
              <p className="text-sm text-gray-600">Temperature</p>
              <p className="text-2xl font-bold text-gray-900">58°F</p>
              <p className="text-sm text-gray-500">Feels like 56°F</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 bg-gray-50 rounded-lg p-4">
            <Wind className="h-8 w-8 text-sky-600" />
            <div>
              <p className="text-sm text-gray-600">Wind</p>
              <p className="text-2xl font-bold text-gray-900">8 mph</p>
              <p className="text-sm text-gray-500">SW direction</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 bg-gray-50 rounded-lg p-4">
            <Droplets className="h-8 w-8 text-sky-600" />
            <div>
              <p className="text-sm text-gray-600">Humidity</p>
              <p className="text-2xl font-bold text-gray-900">77%</p>
              <p className="text-sm text-gray-500">High</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 bg-gray-50 rounded-lg p-4">
            <CloudRain className="h-8 w-8 text-sky-600" />
            <div>
              <p className="text-sm text-gray-600">Precipitation</p>
              <p className="text-2xl font-bold text-gray-900">60%</p>
              <p className="text-sm text-gray-500">Light rain likely</p>
            </div>
          </div>
        </div>
      </div>

      {/* Temperature Trends */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Annual Temperature Trends</h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monthlyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Line yAxisId="left" type="monotone" dataKey="temp" stroke="#0284c7" name="Temperature (°F)" />
              <Line yAxisId="right" type="monotone" dataKey="humidity" stroke="#7c3aed" name="Humidity (%)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Rainfall Distribution */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Monthly Rainfall Distribution</h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="rainfall" fill="#0284c7" name="Rainfall (inches)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Climate Risk Assessment */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <div className="flex items-center space-x-3 mb-6">
          <Waves className="h-6 w-6 text-sky-600" />
          <h2 className="text-2xl font-semibold text-gray-900">Climate Risk Assessment</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk Factor</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk Level</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Potential Impact</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {climateRisks.map((risk, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{risk.risk}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      risk.level === 'High' ? 'bg-red-100 text-red-800' :
                      risk.level === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {risk.level}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{risk.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Regional Climate Zones */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Regional Climate Zones</h2>
        <ClimateZoneMap cityName={currentLocation.name} state={currentLocation.state} />
      </div>
    </div>
  );
}

export default WeatherDetails;