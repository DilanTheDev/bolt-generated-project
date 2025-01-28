import React from 'react';
import { MessageSquare, ThumbsUp } from 'lucide-react';
import type { ForumPost } from '../types';

const mockPosts: ForumPost[] = [
  {
    id: '1',
    userId: 'user1',
    title: 'Help with Quadratic Equations',
    content: 'I\'m struggling with factoring quadratic equations. Any tips?',
    subject: 'Mathematics',
    tags: ['algebra', 'quadratics'],
    createdAt: new Date('2024-03-17T10:00:00'),
    updatedAt: new Date('2024-03-17T10:00:00'),
    replies: [
      {
        id: '1',
        userId: 'user2',
        content: 'Try using the FOIL method!',
        createdAt: new Date('2024-03-17T10:30:00'),
        updatedAt: new Date('2024-03-17T10:30:00')
      }
    ]
  },
  {
    id: '2',
    userId: 'user3',
    title: 'Chemistry Revision Resources',
    content: 'Looking for good resources for organic chemistry revision.',
    subject: 'Chemistry',
    tags: ['organic-chemistry', 'revision'],
    createdAt: new Date('2024-03-16T15:00:00'),
    updatedAt: new Date('2024-03-16T15:00:00'),
    replies: []
  }
];

export function ForumPreview() {
  return (
    <div className="space-y-4">
      {mockPosts.map((post) => (
        <div key={post.id} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-medium text-gray-900">{post.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{post.content}</p>
            </div>
          </div>
          <div className="mt-3 flex items-center space-x-4 text-sm text-gray-500">
            <span className="inline-flex items-center space-x-1">
              <MessageSquare className="h-4 w-4" />
              <span>{post.replies.length}</span>
            </span>
            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
            <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs">
              {post.subject}
            </span>
          </div>
        </div>
      ))}
      <button className="w-full py-2 text-sm text-indigo-600 hover:text-indigo-700 font-medium">
        View All Discussions →
      </button>
    </div>
  );
}
