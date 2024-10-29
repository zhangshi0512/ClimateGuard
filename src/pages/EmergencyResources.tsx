import React from 'react';
import { Phone, MapPin, Shield, BookOpen, Stethoscope, Building2, } from 'lucide-react';

const EmergencyResources = () => {
  const resources = [
    {
      title: "Emergency Contacts",
      icon: Phone,
      items: [
        { name: "Emergency Services", value: "911" },
        { name: "Police Department", value: "(555) 123-4567" },
        { name: "Fire Department", value: "(555) 123-4568" },
        { name: "Poison Control", value: "(800) 222-1222" }
      ]
    },
    {
      title: "Emergency Shelters",
      icon: Building2,
      items: [
        { name: "Community Center", value: "123 Main St" },
        { name: "High School Gym", value: "456 School Ave" },
        { name: "Recreation Center", value: "789 Park Rd" }
      ]
    },
    {
      title: "Medical Facilities",
      icon: Stethoscope,
      items: [
        { name: "General Hospital", value: "1.2 miles away" },
        { name: "Urgent Care Center", value: "0.8 miles away" },
        { name: "Emergency Clinic", value: "2.1 miles away" }
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Emergency Resources</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center space-x-3">
                <resource.icon className="h-6 w-6 text-sky-600" />
                <h2 className="text-xl font-semibold text-gray-900">{resource.title}</h2>
              </div>
              <div className="space-y-3">
                {resource.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-600">{item.name}</span>
                    <span className="font-medium text-gray-900">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <div className="flex items-center space-x-3 mb-6">
          <BookOpen className="h-6 w-6 text-sky-600" />
          <h2 className="text-2xl font-semibold text-gray-900">Emergency Preparedness Guide</h2>
        </div>
        
        <div className="prose max-w-none">
          <p className="text-gray-600">Download our comprehensive guide for emergency preparedness, including:</p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center text-gray-600">
              <Shield className="h-5 w-5 mr-2 text-sky-600" />
              Emergency kit checklist
            </li>
            <li className="flex items-center text-gray-600">
              <MapPin className="h-5 w-5 mr-2 text-sky-600" />
              Evacuation routes and meeting points
            </li>
            <li className="flex items-center text-gray-600">
              <Stethoscope className="h-5 w-5 mr-2 text-sky-600" />
              First aid procedures
            </li>
          </ul>
          <button className="mt-6 px-6 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors">
            Download Guide (PDF)
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmergencyResources;