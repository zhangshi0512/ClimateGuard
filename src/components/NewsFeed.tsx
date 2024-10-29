import React from 'react';
import { Link } from 'react-router-dom';

interface NewsItem {
  id: number;
  title: string;
  content: string;
  date: string;
  image: string;
}

interface NewsFeedProps {
  news: NewsItem[];
}

const NewsFeed: React.FC<NewsFeedProps> = ({ news }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {news.map((item) => (
        <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <p className="text-sm text-gray-500 mb-2">
              {new Date(item.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.content}</p>
            <Link 
              to={`/updates/${item.id}`}
              className="mt-4 inline-flex items-center text-sky-600 font-medium hover:text-sky-700"
            >
              Read more <span className="ml-1">→</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewsFeed;