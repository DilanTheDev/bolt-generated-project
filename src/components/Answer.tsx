import React from 'react';
    import { Question, Answer } from '../types';

    const mockAnswers: Answer[] = [
      {
        text: 'Paris',
        answerId: 0
      },
      {
        text: 'London',
        answerId: 1
      }
    ];

    return (
      <div className="space-y-6">
        <h2 className="text-lg font-bold text-gray-800">Answers</h2>
        {mockAnswers.map((answer, index) => (
          <Answer key={index} question={mockQuiz[0].question} answer={answer} />
        ))}
      </div>
    );
