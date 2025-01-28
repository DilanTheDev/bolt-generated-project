import React from 'react';
import { Calendar, CheckCircle, Clock } from 'lucide-react';
import type { StudyPlan, StudyGoal } from '../types';

const mockStudyPlan: StudyPlan = {
  id: '1',
  userId: 'user1',
  title: 'GCSE Preparation',
  goals: [
    {
      id: '1',
      description: 'Complete Biology Unit 1',
      completed: false,
      dueDate: new Date('2024-03-20')
    },
    {
      id: '2',
      description: 'Practice Math Past Papers',
      completed: true,
      dueDate: new Date('2024-03-18')
    }
  ],
  startDate: new Date('2024-03-01'),
  endDate: new Date('2024-06-30'),
  subjects: ['Biology', 'Mathematics', 'Physics'],
  dailyTargetHours: 3
};

export function StudyPlanWidget() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Calendar className="h-5 w-5 text-indigo-600" />
          <h3 className="text-lg font-semibold text-gray-800">{mockStudyPlan.title}</h3>
        </div>
        <span className="text-sm text-gray-500">
          {new Date().toLocaleDateString()} - Day {Math.ceil((new Date().getTime() - new Date(mockStudyPlan.startDate).getTime()) / (1000 * 60 * 60 * 24))}
        </span>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-indigo-50 rounded-lg">
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-indigo-600" />
            <span className="text-sm font-medium text-gray-700">Daily Target</span>
          </div>
          <span className="text-sm font-semibold text-indigo-600">{mockStudyPlan.dailyTargetHours} hours</span>
        </div>

        <div className="space-y-2">
          <h4 className="font-medium text-gray-700">Today's Goals</h4>
          {mockStudyPlan.goals.map((goal) => (
            <GoalItem key={goal.id} goal={goal} />
          ))}
        </div>
      </div>
    </div>
  );
}

function GoalItem({ goal }: { goal: StudyGoal }) {
  return (
    <div className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg">
      <div className="flex items-center space-x-3">
        <CheckCircle className={`h-5 w-5 ${goal.completed ? 'text-green-500' : 'text-gray-300'}`} />
        <span className={`text-sm ${goal.completed ? 'text-gray-500 line-through' : 'text-gray-700'}`}>
          {goal.description}
        </span>
      </div>
      <span className="text-xs text-gray-500">
        Due {new Date(goal.dueDate).toLocaleDateString()}
      </span>
    </div>
  );
}
