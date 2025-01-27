import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import type { Flashcard as FlashcardType } from '../types';

export function Flashcard({ flashcard }: { flashcard: FlashcardType }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="w-full max-w-md h-64 cursor-pointer perspective"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
        isFlipped ? 'rotate-y-180' : ''
      }`}>
        <div className="absolute w-full h-full bg-white rounded-xl shadow-lg p-6 backface-hidden">
          <div className="flex flex-col items-center justify-center h-full">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Question</h3>
            <p className="text-center text-gray-600">{flashcard.question}</p>
          </div>
        </div>
        <div className="absolute w-full h-full bg-indigo-600 text-white rounded-xl shadow-lg p-6 backface-hidden rotate-y-180">
          <div className="flex flex-col items-center justify-center h-full">
            <h3 className="text-xl font-semibold mb-2">Answer</h3>
            <p className="text-center">{flashcard.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FlashcardDeck() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const mockFlashcards: FlashcardType[] = [
    {
      id: '1',
      question: 'What is photosynthesis?',
      answer: 'The process by which plants convert light energy into chemical energy',
      subject: 'Biology',
      createdBy: 'user1'
    },
    // Add more mock flashcards here
  ];

  return (
    <div className="flex flex-col items-center space-y-4">
      <Flashcard flashcard={mockFlashcards[currentIndex]} />
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setCurrentIndex(i => Math.max(0, i - 1))}
          className="p-2 rounded-full bg-indigo-100 hover:bg-indigo-200 text-indigo-600"
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <span className="text-gray-600">
          {currentIndex + 1} / {mockFlashcards.length}
        </span>
        <button
          onClick={() => setCurrentIndex(i => Math.min(mockFlashcards.length - 1, i + 1))}
          className="p-2 rounded-full bg-indigo-100 hover:bg-indigo-200 text-indigo-600"
          disabled={currentIndex === mockFlashcards.length - 1}
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
