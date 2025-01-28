import React from 'react';
import { FileText, Video, Headphones, Link as LinkIcon } from 'lucide-react';
import type { Resource } from '../types';

const mockResources: Resource[] = [
  {
    id: '1',
    title: 'Biology Cell Structure Notes',
    type: 'document',
    subject: 'Biology',
    url: '#',
    description: 'Comprehensive notes on cell structure and function',
    tags: ['cells', 'biology', 'notes'],
    createdBy: 'user1',
    createdAt: new Date('2024-03-15')
  },
  {
    id: '2',
    title: 'Chemistry Equations Video',
    type: 'video',
    subject: 'Chemistry',
    url: '#',
    description: 'Video explanation of balancing chemical equations',
    tags: ['chemistry', 'equations', 'video'],
    createdBy: 'user2',
    createdAt: new Date('2024-03-16')
  }
];

const resourceIcons = {
  document: <FileText className="h-5 w-5" />,
  video: <Video className="h-5 w-5" />,
  audio: <Headphones className="h-5 w-5" />,
  link: <LinkIcon className="h-5 w-5" />
};

export function ResourceLibrary() {
  return (
    <div className="space-y-4">
      {mockResources.map((resource) => (
        <a
          key={resource.id}
          href={resource.url}
          className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
        >
          <div className="flex items-start space-x-3">
            <div className="text-indigo-600">
              {resourceIcons[resource.type]}
            </div>
            <div>
              <h3 className="font-medium text-gray-900">{resource.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {resource.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </a>
      ))}
      <button className="w-full py-2 text-sm text-indigo-600 hover:text-indigo-700 font-medium">
        Browse All Resources →
      </button>
    </div>
  );
}
