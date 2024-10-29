import React from 'react';
import { MapPin } from 'lucide-react';
import { useLocation } from '../contexts/LocationContext';

const LocationSelector = () => {
  const { currentLocation, setCurrentLocation, availableLocations } = useLocation();

  return (
    <div className="flex items-center text-gray-600">
      <MapPin className="h-5 w-5" />
      <select
        value={currentLocation.id}
        onChange={(e) => {
          const location = availableLocations.find(loc => loc.id === e.target.value);
          if (location) setCurrentLocation(location);
        }}
        className="ml-2 bg-transparent border-none focus:ring-0 text-gray-600 cursor-pointer hover:text-gray-900"
      >
        {availableLocations.map((location) => (
          <option key={location.id} value={location.id}>
            {location.name}, {location.state}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LocationSelector;