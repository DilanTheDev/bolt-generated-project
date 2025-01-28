import React, { useState, useEffect } from 'react';
import { BookOpen, Brain, Code, GraduationCap, Languages } from 'lucide-react';
import type { Quiz, QuizQuestion } from '../types';

const DISCORD_WEBHOOK_URL = 'YOUR_DISCORD_WEBHOOK_URL'; // Replace with actual webhook URL

const subjects = [
  {
    id: 1,
    name: 'Mathematics',
    categories: ['Algebra', 'Geometry', 'Calculus'],
    icon: <Brain className="h-6 w-6" />,
  },
  {
    id: 2,
    name: 'English',
    categories: ['Grammar', 'Literature', 'Vocabulary'],
    icon: <BookOpen className="h-6 w-6" />,
  },
  {
    id: 3,
    name: 'Science',
    categories: ['Biology', 'Chemistry', 'Physics'],
    icon: <GraduationCap className="h-6 w-6" />,
  },
  {
    id: 4,
    name: 'Computer Science',
    categories: ['Programming', 'Data Structures', 'Algorithms'],
    icon: <Code className="h-6 w-6" />,
  },
  {
    id: 5,
    name: 'Spanish',
    categories: ['Coming Soon'],
    icon: <Languages className="h-6 w-6" />,
  },
];

const difficulties = ['Beginner', 'Intermediate', 'Advanced'] as const;

const sendDiscordMessage = async () => {
  try {
    await fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: 'BROS TRYNA LEARN SPANISH💀💀💀💀',
      }),
    });
  } catch (error) {
    console.error('Failed to send Discord message:', error);
  }
};

export function FlashcardDeck() {
  const [selectedSubject, setSelectedSubject] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<typeof difficulties[number] | null>(null);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [timeSpent, setTimeSpent] = useState(0);

  const handleSubjectSelect = (subjectId: number) => {
    if (subjectId === 5) {
      alert('BROS TRYNA LEARN SPANISH💀💀💀💀');
      sendDiscordMessage();
      return;
    }
    setSelectedSubject(subjectId);
  };

  const mockQuiz: Quiz = {
    id: '1',
    title: 'Mathematics Quiz',
    subject: 'Mathematics',
    category: 'Algebra',
    difficulty: 'Beginner',
    totalQuestions: 20,
    questions: [
      {
        id: '1',
        question: 'What is the solution to the equation 2x + 5 = 13?',
        options: ['x = 3', 'x = 4', 'x = 5', 'x = 6'],
        correctAnswer: 1,
        explanation: 'To solve 2x + 5 = 13, subtract 5 from both sides to get 2x = 8, then divide both sides by 2 to get x = 4.',
        difficulty: 'Beginner',
      },
    ],
  };

  const handleStartQuiz = () => {
    if (selectedSubject && selectedCategory && selectedDifficulty) {
      setQuizStarted(true);
      setCurrentQuestion(0);
      setScore(0);
      setStartTime(new Date());
    }
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    if (answerIndex === mockQuiz.questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    setCurrentQuestion(currentQuestion + 1);
  };

  useEffect(() => {
    let timer: number;
    if (startTime && quizStarted) {
      timer = window.setInterval(() => {
        const now = new Date();
        const diff = Math.floor((now.getTime() - startTime.getTime()) / 1000);
        setTimeSpent(diff);
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [startTime, quizStarted]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!quizStarted) {
    return (
      <div className="space-y-8">
        <div className="grid grid-cols-2 gap-4">
          {subjects.map((subject) => (
            <button
              key={subject.id}
              onClick={() => handleSubjectSelect(subject.id)}
              className={`p-6 rounded-xl transition-all ${
                selectedSubject === subject.id
                  ? 'bg-indigo-100 border-2 border-indigo-600'
                  : 'bg-white border-2 border-gray-200 hover:border-indigo-400'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="text-indigo-600">{subject.icon}</div>
                <span className="font-semibold text-gray-800">{subject.name}</span>
              </div>
            </button>
          ))}
        </div>

        {selectedSubject && selectedSubject !== 5 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Select Category:</h3>
            <div className="flex flex-wrap gap-3">
              {subjects[selectedSubject - 1].categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-all ${
                    selectedCategory === category
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}

        {selectedCategory && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Select Difficulty:</h3>
            <div className="flex gap-3">
              {difficulties.map((difficulty) => (
                <button
                  key={difficulty}
                  onClick={() => setSelectedDifficulty(difficulty)}
                  className={`px-4 py-2 rounded-full transition-all ${
                    selectedDifficulty === difficulty
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {difficulty}
                </button>
              ))}
            </div>
          </div>
        )}

        {selectedSubject && selectedCategory && selectedDifficulty && (
          <button
            onClick={handleStartQuiz}
            className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Start Quiz
          </button>
        )}
      </div>
    );
  }

  const currentQuizQuestion = mockQuiz.questions[currentQuestion];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            Question {currentQuestion + 1} of {mockQuiz.totalQuestions}
          </h2>
          <p className="text-sm text-gray-600">
            Score: {score} / {currentQuestion + 1}
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
            Time: {formatTime(timeSpent)}
          </div>
          <div className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
            {selectedDifficulty}
          </div>
        </div>
      </div>

      <div className="p-6 bg-white rounded-xl shadow-md">
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          {currentQuizQuestion.question}
        </h3>

        <div className="space-y-3">
          {currentQuizQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={showExplanation}
              className={`w-full p-4 text-left rounded-lg transition ${
                showExplanation
                  ? index === currentQuizQuestion.correctAnswer
                    ? 'bg-green-100 border-2 border-green-600'
                    : selectedAnswer === index
                    ? 'bg-red-100 border-2 border-red-600'
                    : 'bg-gray-50'
                  : selectedAnswer === index
                  ? 'bg-indigo-100 border-2 border-indigo-600'
                  : 'bg-gray-50 hover:bg-gray-100'
              }`}
            >
              <span className="font-medium">
                {String.fromCharCode(65 + index)}. {option}
              </span>
            </button>
          ))}
        </div>

        {showExplanation && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700">{currentQuizQuestion.explanation}</p>
          </div>
        )}

        {showExplanation && currentQuestion < mockQuiz.totalQuestions - 1 && (
          <button
            onClick={handleNextQuestion}
            className="mt-6 w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Next Question
          </button>
        )}

        {showExplanation && currentQuestion === mockQuiz.totalQuestions - 1 && (
          <div className="mt-6 space-y-4">
            <div className="p-6 bg-indigo-50 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-indigo-700 mb-2">
                Quiz Complete!
              </h3>
              <p className="text-indigo-600">
                Final Score: {score} / {mockQuiz.totalQuestions}
              </p>
              <p className="text-indigo-600">
                Time Taken: {formatTime(timeSpent)}
              </p>
            </div>
            <button
              onClick={() => {
                setQuizStarted(false);
                setSelectedSubject(null);
                setSelectedCategory(null);
                setSelectedDifficulty(null);
                setCurrentQuestion(0);
                setScore(0);
                setStartTime(null);
                setTimeSpent(0);
              }}
              className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Start New Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
