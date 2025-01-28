import React from 'react';
import { TrendingUp, Star, AlertCircle } from 'lucide-react';
import type { Progress } from '../types';

const mockProgress: Progress = {
  userId: 'user1',
  subject: 'Biology',
  topicsCompleted: 15,
  totalTopics: 25,
  lastStudySession: new Date('2024-03-17'),
  timeSpent: 2400, // in minutes
  strengths: ['Cell Biology', 'Photosynthesis'],
  areasForImprovement: ['Genetics', 'Evolution']
};

export function ProgressTracker() {
  const progressPercentage = (mockProgress.topicsCompleted / mockProgress.totalTopics) * 100;
  const hoursSpent = Math.floor(mockProgress.timeSpent / 60);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">Subject Progress</h3>
        <span className="text-sm text-gray-500">
          Last studied: {new Date(mockProgress.lastStudySession).toLocaleDateString()}
        </span>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">{mockProgress.subject}</span>
            <span className="text-sm font-medium text-gray-700">
              {progressPercentage.toFixed(0)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-indigo-600 h-2.5 rounded-full"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-indigo-50 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <TrendingUp className="h-5 w-5 text-indigo-600" />
              <span className="font-medium text-gray-700">Time Invested</span>
            </div>
            <p className="text-2xl font-bold text-indigo-600">{hoursSpent}h</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Star className="h-5 w-5 text-green-600" />
              <span className="font-medium text-gray-700">Topics Completed</span>
            </div>
            <p className="text-2xl font-bold text-green-600">
              {mockProgress.topicsCompleted}/{mockProgress.totalTopics}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Strengths</h4>
            <div className="flex flex-wrap gap-2">
              {mockProgress.strengths.map((strength, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                >
                  {strength}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Areas for Improvement</h4>
            <div className="flex flex-wrap gap-2">
              {mockProgress.areasForImprovement.map((area, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
