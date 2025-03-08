import React, { useState, useEffect } from 'react';
import { Menu, Search, Sun, Moon } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md dark:bg-gray-900/80 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 lg:hidden">
              <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </button>
            <h1 className={`text-3xl font-black tracking-tighter transition-colors ${
              isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'
            }`}>
              INSIGHT
            </h1>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex space-x-8">
              {['Home', 'Articles', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className={`text-lg font-medium transition-colors ${
                    isScrolled
                      ? 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                isScrolled
                  ? 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  : 'hover:bg-white/10'
              }`}
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-gray-300" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600" />
              )}
            </button>
            <button
              className={`p-2 rounded-full transition-colors ${
                isScrolled
                  ? 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  : 'hover:bg-white/10'
              }`}
            >
              <Search className={`h-5 w-5 ${
                isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-white'
              }`} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}