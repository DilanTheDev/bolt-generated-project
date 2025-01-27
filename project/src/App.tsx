import React from 'react';
import { Navigation } from './components/Navigation';
import { FlashcardDeck } from './components/Flashcard';
import { StudyPlanWidget } from './components/StudyPlan';
import { ProgressTracker } from './components/Progress';
import { ForumPreview } from './components/Forum';
import { ResourceLibrary } from './components/Resources';
import { Brain } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <header className="mb-8">
          <div className="flex items-center space-x-4">
            <Brain className="h-10 w-10 text-indigo-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Welcome back, Student</h1>
              <p className="text-gray-600">Continue your learning journey</p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Study Tools Section */}
          <section className="col-span-1 md:col-span-2 lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Continue Learning</h2>
              <FlashcardDeck />
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Study Plan</h2>
              <StudyPlanWidget />
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Progress Overview</h2>
              <ProgressTracker />
            </div>
          </section>

          {/* Sidebar */}
          <aside className="col-span-1 space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Discussions</h2>
              <ForumPreview />
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Study Resources</h2>
              <ResourceLibrary />
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default App;
