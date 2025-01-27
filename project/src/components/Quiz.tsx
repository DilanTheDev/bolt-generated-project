import React, { useState } from 'react';
import type { Quiz as QuizType, QuizQuestion } from '../types';

export function Quiz({ quiz }: { quiz: QuizType }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return score + (answer === quiz.questions[index].correctAnswer ? 1 : 0);
    }, 0);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      {!showResults ? (
        <div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{quiz.title}</h2>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-600 h-2 rounded-full transition-all"
                style={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl text-gray-700">
              {quiz.questions[currentQuestion].question}
            </h3>
            <div className="space-y-3">
              {quiz.questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className={`w-full p-4 text-left rounded-lg transition ${
                    selectedAnswers[currentQuestion] === index
                      ? 'bg-indigo-100 border-2 border-indigo-600'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-between">
            <button
              onClick={() => setCurrentQuestion(q => q - 1)}
              disabled={currentQuestion === 0}
              className="px-6 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
            >
              Previous
            </button>
            {currentQuestion === quiz.questions.length - 1 ? (
              <button
                onClick={() => setShowResults(true)}
                className="px-6 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
              >
                Finish Quiz
              </button>
            ) : (
              <button
                onClick={() => setCurrentQuestion(q => q + 1)}
                className="px-6 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
              >
                Next
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Quiz Results</h2>
          <div className="text-6xl font-bold text-indigo-600 mb-6">
            {calculateScore()}/{quiz.questions.length}
          </div>
          <button
            onClick={() => {
              setShowResults(false);
              setCurrentQuestion(0);
              setSelectedAnswers([]);
            }}
            className="px-6 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}
