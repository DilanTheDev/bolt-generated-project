export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  subject: string;
  createdBy: string;
  lastReviewed?: Date;
  difficulty?: 'easy' | 'medium' | 'hard';
}

export interface StudyPlan {
  id: string;
  userId: string;
  title: string;
  goals: StudyGoal[];
  startDate: Date;
  endDate: Date;
  subjects: string[];
  dailyTargetHours: number;
}

export interface StudyGoal {
  id: string;
  description: string;
  completed: boolean;
  dueDate: Date;
}

export interface Progress {
  userId: string;
  subject: string;
  topicsCompleted: number;
  totalTopics: number;
  lastStudySession: Date;
  timeSpent: number;
  strengths: string[];
  areasForImprovement: string[];
}

export interface StudySession {
  id: string;
  title: string;
  subject: string;
  startTime: Date;
  duration: number;
  participants: string[];
  resources: string[];
  status: 'scheduled' | 'active' | 'completed';
}

export interface ForumPost {
  id: string;
  userId: string;
  title: string;
  content: string;
  subject: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  replies: ForumReply[];
}

export interface ForumReply {
  id: string;
  userId: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Resource {
  id: string;
  title: string;
  type: 'document' | 'video' | 'audio' | 'link';
  subject: string;
  url: string;
  description: string;
  tags: string[];
  createdBy: string;
  createdAt: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  subjects: string[];
  role: 'student' | 'tutor' | 'admin';
  achievements: Achievement[];
  studyStreak: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt: Date;
}

export interface Note {
  id: string;
  userId: string;
  title: string;
  content: string;
  subject: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Timeline {
  id: string;
  subject: string;
  events: TimelineEvent[];
}

export interface TimelineEvent {
  id: string;
  title: string;
  date: string;
  description: string;
  importance: 'low' | 'medium' | 'high';
}

export interface VocabularyTerm {
  id: string;
  term: string;
  definition: string;
  subject: string;
  examples: string[];
  mastered: boolean;
}

export interface Formula {
  id: string;
  name: string;
  expression: string;
  subject: string;
  description: string;
  variables: { symbol: string; meaning: string }[];
  examples: string[];
}

export interface ReadingList {
  id: string;
  subject: string;
  books: ReadingItem[];
}

export interface ReadingItem {
  id: string;
  title: string;
  author: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  completed: boolean;
}

export interface Question {
  id: string;
  userId: string;
  subject: string;
  title: string;
  content: string;
  answers: Answer[];
  createdAt: Date;
  status: 'open' | 'resolved';
}

export interface Answer {
  id: string;
  userId: string;
  content: string;
  createdAt: Date;
  upvotes: number;
  accepted: boolean;
}
