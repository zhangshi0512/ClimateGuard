import React, { createContext, useContext, useState } from 'react';

interface Location {
  id: string;
  name: string;
  state: string;
}

interface LocationContextType {
  currentLocation: Location;
  setCurrentLocation: (location: Location) => void;
  availableLocations: Location[];
}

const availableLocations: Location[] = [
  { id: 'sf', name: 'San Francisco', state: 'CA' },
  { id: 'nyc', name: 'New York City', state: 'NY' },
  { id: 'chi', name: 'Chicago', state: 'IL' },
  { id: 'mia', name: 'Miami', state: 'FL' },
  { id: 'sea', name: 'Seattle', state: 'WA' },
];

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export const LocationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLocation, setCurrentLocation] = useState<Location>(availableLocations[0]);

  return (
    <LocationContext.Provider value={{ 
      currentLocation, 
      setCurrentLocation,
      availableLocations 
    }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
};