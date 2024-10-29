import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Heart, DollarSign, LifeBuoy, Filter, Plus } from 'lucide-react';
import { helpPosts } from '../data/helpPosts';

type PostType = 'all' | 'discussion' | 'fundraising' | 'rescue';

const HelpChannel = () => {
  const [selectedType, setSelectedType] = useState<PostType>('all');

  const filteredPosts = selectedType === 'all' 
    ? helpPosts 
    : helpPosts.filter(post => post.type === selectedType);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Help Channel</h1>
        <Link
          to="/help/new"
          className="inline-flex items-center px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors"
        >
          <Plus className="h-4 w-4 mr-2" />
          New Post
        </Link>
      </div>

      <div className="flex items-center space-x-4 overflow-x-auto pb-2">
        <button
          onClick={() => setSelectedType('all')}
          className={`px-4 py-2 rounded-full flex items-center space-x-2 ${
            selectedType === 'all'
              ? 'bg-sky-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <Filter className="h-4 w-4" />
          <span>All Posts</span>
        </button>
        <button
          onClick={() => setSelectedType('discussion')}
          className={`px-4 py-2 rounded-full flex items-center space-x-2 ${
            selectedType === 'discussion'
              ? 'bg-sky-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <MessageCircle className="h-4 w-4" />
          <span>Discussions</span>
        </button>
        <button
          onClick={() => setSelectedType('fundraising')}
          className={`px-4 py-2 rounded-full flex items-center space-x-2 ${
            selectedType === 'fundraising'
              ? 'bg-sky-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <DollarSign className="h-4 w-4" />
          <span>Fundraising</span>
        </button>
        <button
          onClick={() => setSelectedType('rescue')}
          className={`px-4 py-2 rounded-full flex items-center space-x-2 ${
            selectedType === 'rescue'
              ? 'bg-sky-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <LifeBuoy className="h-4 w-4" />
          <span>Rescue Requests</span>
        </button>
      </div>

      <div className="space-y-4">
        {filteredPosts.map((post) => (
          <Link
            key={post.id}
            to={`/help/${post.id}`}
            className="block bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:border-sky-200 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  {post.type === 'fundraising' && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      <DollarSign className="h-3 w-3 mr-1" />
                      Fundraising
                    </span>
                  )}
                  {post.type === 'rescue' && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      <LifeBuoy className="h-3 w-3 mr-1" />
                      Rescue Request
                    </span>
                  )}
                </div>
                <h2 className="text-xl font-semibold text-gray-900">{post.title}</h2>
                <p className="text-gray-600 line-clamp-2">{post.content}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span>·</span>
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-gray-500">
                <div className="flex items-center">
                  <MessageCircle className="h-5 w-5 mr-1" />
                  <span>{post.comments.length}</span>
                </div>
                <div className="flex items-center">
                  <Heart className="h-5 w-5 mr-1" />
                  <span>{post.likes}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HelpChannel;