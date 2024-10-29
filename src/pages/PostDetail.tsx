import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, MessageCircle, Share2, DollarSign, LifeBuoy } from 'lucide-react';
import { helpPosts } from '../data/helpPosts';

const PostDetail = () => {
  const { id } = useParams();
  const [newComment, setNewComment] = useState('');
  
  const post = helpPosts.find(p => p.id.toString() === id);

  if (!post) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900">Post not found</h2>
        <Link to="/help" className="text-sky-600 hover:text-sky-700 mt-4 inline-block">
          Back to Help Channel
        </Link>
      </div>
    );
  }

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the comment to your backend
    alert('Comment submitted successfully!');
    setNewComment('');
  };

  return (
    <div className="space-y-8">
      <Link to="/help" className="inline-flex items-center text-sky-600 hover:text-sky-700">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Help Channel
      </Link>

      <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <div className="space-y-4">
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

          <h1 className="text-3xl font-bold text-gray-900">{post.title}</h1>
          
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span>{post.author}</span>
            <span>·</span>
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>

          <p className="text-gray-600 whitespace-pre-wrap">{post.content}</p>

          <div className="flex items-center space-x-6 pt-4 border-t border-gray-100">
            <button className="flex items-center text-gray-500 hover:text-sky-600">
              <Heart className="h-5 w-5 mr-1" />
              <span>{post.likes}</span>
            </button>
            <button className="flex items-center text-gray-500 hover:text-sky-600">
              <MessageCircle className="h-5 w-5 mr-1" />
              <span>{post.comments.length}</span>
            </button>
            <button className="flex items-center text-gray-500 hover:text-sky-600">
              <Share2 className="h-5 w-5 mr-1" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </article>

      {post.type === 'fundraising' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Fundraising Progress</h2>
          <div className="space-y-4">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-green-600 h-2.5 rounded-full"
                style={{ width: `${(post.raised / post.goal) * 100}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Raised: ${post.raised.toLocaleString()}</span>
              <span className="text-gray-600">Goal: ${post.goal.toLocaleString()}</span>
            </div>
            <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              Contribute Now
            </button>
          </div>
        </div>
      )}

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Comments</h2>
        
        <form onSubmit={handleSubmitComment} className="mb-8">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
            rows={3}
          />
          <div className="mt-2 flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors"
            >
              Post Comment
            </button>
          </div>
        </form>

        <div className="space-y-6">
          {post.comments.map((comment, index) => (
            <div key={index} className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-900">{comment.author}</h3>
                  <p className="text-sm text-gray-500">{new Date(comment.date).toLocaleDateString()}</p>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <Heart className="h-4 w-4" />
                </button>
              </div>
              <p className="mt-2 text-gray-600">{comment.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostDetail;