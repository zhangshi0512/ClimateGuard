import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Sun, Wind, Droplets, ThermometerSun } from 'lucide-react';
import WeatherCard from '../components/WeatherCard';
import AlertBanner from '../components/AlertBanner';
import NewsFeed from '../components/NewsFeed';

const Home = () => {
  const alerts = [
    {
      id: 1,
      type: 'warning' as const,
      message: 'High wind advisory in effect until 6:00 PM PST',
      icon: Wind,
    },
    {
      id: 2,
      type: 'danger' as const,
      message: 'Flash flood warning for low-lying areas',
      icon: AlertTriangle,
    },
  ];

  const news = [
    {
      id: 1,
      title: "Emergency Preparedness Workshop",
      content: "Join us this Saturday for a community workshop on emergency preparedness.",
      date: "2024-03-15",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "New Weather Station Installation",
      content: "Local weather monitoring capabilities enhanced with new station deployment.",
      date: "2024-03-14",
      image: "https://images.unsplash.com/photo-1590055531615-f16d36ffe8ec?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <>
      <div className="space-y-3">
        {alerts.map((alert) => (
          <Link key={alert.id} to={`/alerts/${alert.id}`}>
            <AlertBanner alerts={[alert]} />
          </Link>
        ))}
      </div>

      <section className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link to="/weather">
          <WeatherCard
            icon={ThermometerSun}
            title="Temperature"
            value="72°F"
            detail="Feels like 75°F"
          />
        </Link>
        <Link to="/weather">
          <WeatherCard
            icon={Droplets}
            title="Humidity"
            value="65%"
            detail="Moderate"
          />
        </Link>
        <Link to="/weather">
          <WeatherCard
            icon={Wind}
            title="Wind Speed"
            value="12 mph"
            detail="NW direction"
          />
        </Link>
        <Link to="/weather">
          <WeatherCard
            icon={Sun}
            title="UV Index"
            value="6"
            detail="Moderate"
          />
        </Link>
      </section>

      <section className="mt-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Community Updates</h2>
          <Link to="/updates" className="text-sky-600 hover:text-sky-700 font-medium">
            View all updates →
          </Link>
        </div>
        <NewsFeed news={news} />
      </section>
    </>
  );
}

export default Home;