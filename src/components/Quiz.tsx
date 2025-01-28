import React from 'react';
    import { Question, Answer } from '../types';

    const mockQuiz: Question[] = [
      {
        id: '1',
        question: 'What is the capital of France?',
        answers: ['Paris', 'London', 'Berlin'],
        correctAnswer: 0
      },
      {
        id: '2',
        question: 'Which planet in our solar system is known as the "Red Planet"?',
        answers: ['Earth', 'Mars', 'Jupiter'],
        correctAnswer: 1
      }
    ];

    const mockAnswers: Answer[] = [
      { text: 'Paris', answerId: 0 },
      { text: 'London', answerId: 1 }
    ];

    return (
      <div className="space-y-6">
        <h2 className="text-lg font-bold text-gray-800">Quiz</h2>
        <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
          {mockQuiz.map((question, index) => (
            <Flashcard key={index} question={question.question} answers={question.answers} correctAnswer={question.correctAnswer + 1} />
          ))}
        </div>
      </div>
    );
