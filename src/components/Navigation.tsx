import React, { useState } from 'react';
import {
  Menu, Home, BookOpen, Brain, Users, Calendar, Library,
  Clock, Award, MessageSquare, FileText, Activity, Settings
} from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: <Home className="h-5 w-5" />, text: "Dashboard", href: "/" },
    { icon: <BookOpen className="h-5 w-5" />, text: "Flashcards", href: "/flashcards" },
    { icon: <Calendar className="h-5 w-5" />, text: "Study Plans", href: "/plans" },
    { icon: <Activity className="h-5 w-5" />, text: "Progress", href: "/progress" },
    { icon: <Users className="h-5 w-5" />, text: "Study Groups", href: "/groups" },
    { icon: <MessageSquare className="h-5 w-5" />, text: "Forums", href: "/forums" },
    { icon: <Library className="h-5 w-5" />, text: "Resources", href: "/resources" },
    { icon: <Brain className="h-5 w-5" />, text: "Practice", href: "/practice" },
    { icon: <Clock className="h-5 w-5" />, text: "Time Management", href: "/time" },
    { icon: <FileText className="h-5 w-5" />, text: "Notes", href: "/notes" },
    { icon: <Award className="h-5 w-5" />, text: "Achievements", href: "/achievements" },
    { icon: <Settings className="h-5 w-5" />, text: "Settings", href: "/settings" }
  ];

  return (
    <nav className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="flex items-center space-x-2 text-xl font-bold">
              <Brain className="h-6 w-6" />
              <span>GCSE Study Hub</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              {menuItems.slice(0, 6).map((item, index) => (
                <NavLink key={index} icon={item.icon} text={item.text} href={item.href} />
              ))}
              <div className="relative group">
                <button className="flex items-center space-x-1 hover:text-indigo-200">
                  <Menu className="h-5 w-5" />
                  <span>More</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block">
                  {menuItems.slice(6).map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50"
                    >
                      {item.icon}
                      <span>{item.text}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-indigo-700"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-base hover:bg-indigo-700"
              >
                {item.icon}
                <span>{item.text}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ icon, text, href }: { icon: React.ReactNode; text: string; href: string }) {
  return (
    <a 
      href={href} 
      className="flex items-center space-x-1 hover:text-indigo-200 transition-colors"
    >
      {icon}
      <span>{text}</span>
    </a>
  );
}
