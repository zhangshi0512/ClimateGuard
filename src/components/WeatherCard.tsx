import React from 'react';
import { LucideIcon } from 'lucide-react';

interface WeatherCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  detail: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ icon: Icon, title, value, detail }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-all hover:shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-600 font-medium">{title}</h3>
        <Icon className="h-6 w-6 text-sky-600" />
      </div>
      <div>
        <p className="text-3xl font-bold text-gray-900">{value}</p>
        <p className="text-sm text-gray-500 mt-1">{detail}</p>
      </div>
    </div>
  );
}

export default WeatherCard;