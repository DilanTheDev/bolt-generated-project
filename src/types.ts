// ... (previous types remain unchanged)

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface Quiz {
  id: string;
  title: string;
  subject: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  questions: QuizQuestion[];
  totalQuestions: number;
}

export interface QuizProgress {
  userId: string;
  quizId: string;
  score: number;
  completedAt: Date;
  incorrectAnswers: string[];
  timeSpent: number;
}
