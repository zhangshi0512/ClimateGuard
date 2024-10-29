import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Alert {
  id: number;
  type: 'warning' | 'danger';
  message: string;
  icon: LucideIcon;
}

interface AlertBannerProps {
  alerts: Alert[];
}

const AlertBanner: React.FC<AlertBannerProps> = ({ alerts }) => {
  return (
    <div className="space-y-3">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className={`rounded-lg p-4 ${
            alert.type === 'warning'
              ? 'bg-amber-50 border border-amber-200'
              : 'bg-red-50 border border-red-200'
          }`}
        >
          <div className="flex items-center">
            <alert.icon
              className={`h-5 w-5 ${
                alert.type === 'warning' ? 'text-amber-600' : 'text-red-600'
              }`}
            />
            <p
              className={`ml-3 text-sm font-medium ${
                alert.type === 'warning' ? 'text-amber-800' : 'text-red-800'
              }`}
            >
              {alert.message}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AlertBanner;