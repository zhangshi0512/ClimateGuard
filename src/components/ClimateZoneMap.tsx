import React, { useState, useEffect } from 'react';
import { MapPin, Cloud, Sun, Wind } from 'lucide-react';

interface ClimateZoneMapProps {
  cityName: string;
  state: string;
}

const ClimateZoneMap: React.FC<ClimateZoneMapProps> = ({ cityName, state }) => {
  const [radarOpacity, setRadarOpacity] = useState(0.6);
  const [frame, setFrame] = useState(0);

  // Simulate radar animation
  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % 8);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4">
      <div className="relative bg-gray-900 rounded-lg overflow-hidden" style={{ height: '500px' }}>
        {/* Base Satellite Layer */}
        <div className="absolute inset-0">
          <img
            src="https://s.yimg.com/ny/api/res/1.2/Pu2gXjLBQLZWNqQkNtxm1Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2024-09/54de2550-7b8b-11ef-ae9f-6888c539eaf8"
            alt="Satellite view"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Weather System Overlays */}
        <svg className="absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* High Pressure System */}
          <circle
            cx="30"
            cy="40"
            r="15"
            fill="url(#highPressureGradient)"
            className="animate-pulse"
            style={{ animationDuration: '3s' }}
          />

          {/* Low Pressure System */}
          <circle
            cx="70"
            cy="60"
            r="20"
            fill="url(#lowPressureGradient)"
            className="animate-pulse"
            style={{ animationDuration: '3s' }}
          />

          {/* Precipitation Patterns */}
          {[...Array(50)].map((_, i) => (
            <circle
              key={i}
              cx={40 + Math.sin(frame * 0.5 + i) * 20}
              cy={50 + Math.cos(frame * 0.5 + i) * 15}
              r="0.5"
              fill="white"
              fillOpacity={0.3 + Math.sin(frame * 0.1 + i) * 0.2}
            />
          ))}

          <defs>
            <radialGradient id="highPressureGradient">
              <stop offset="0%" stopColor="rgba(255, 100, 100, 0.2)" />
              <stop offset="100%" stopColor="rgba(255, 100, 100, 0)" />
            </radialGradient>
            <radialGradient id="lowPressureGradient">
              <stop offset="0%" stopColor="rgba(100, 100, 255, 0.2)" />
              <stop offset="100%" stopColor="rgba(100, 100, 255, 0)" />
            </radialGradient>
          </defs>
        </svg>

        {/* Radar Intensity Overlay */}
        <div 
          className="absolute inset-0 mix-blend-screen transition-opacity duration-300"
          style={{ 
            opacity: radarOpacity,
            background: `radial-gradient(
              circle at ${50 + Math.sin(frame * 0.5) * 10}% ${50 + Math.cos(frame * 0.5) * 10}%,
              rgba(0, 255, 255, 0.1),
              rgba(0, 128, 255, 0.05),
              transparent
            )`
          }}
        />

        {/* City Marker */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-red-500 rounded-full animate-ping opacity-25" />
            <div className="relative w-4 h-4 bg-red-500 rounded-full">
              <MapPin className="h-4 w-4 text-white" />
            </div>
          </div>
        </div>

        {/* Controls Overlay */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Radar Intensity
            </label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={radarOpacity}
              onChange={(e) => setRadarOpacity(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 bg-sky-100 rounded-lg text-sky-600 hover:bg-sky-200">
              <Cloud className="h-4 w-4" />
            </button>
            <button className="p-2 bg-amber-100 rounded-lg text-amber-600 hover:bg-amber-200">
              <Sun className="h-4 w-4" />
            </button>
            <button className="p-2 bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200">
              <Wind className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Legend */}
        <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded bg-gradient-to-r from-red-500/20 to-transparent" />
              <span className="text-sm font-medium">High Pressure</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded bg-gradient-to-r from-blue-500/20 to-transparent" />
              <span className="text-sm font-medium">Low Pressure</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded bg-white/30" />
              <span className="text-sm font-medium">Precipitation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Data Readout */}
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-red-600" />
            <h3 className="font-medium text-gray-900">{cityName}, {state}</h3>
          </div>
          <span className="text-sm text-gray-500">Live Data</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-2 text-sm">
            <Cloud className="h-4 w-4 text-sky-600" />
            <span className="text-gray-600">Cloud Cover: 65%</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Sun className="h-4 w-4 text-amber-600" />
            <span className="text-gray-600">Visibility: 8.5 miles</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Wind className="h-4 w-4 text-gray-600" />
            <span className="text-gray-600">Wind: 12 mph NW</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClimateZoneMap;