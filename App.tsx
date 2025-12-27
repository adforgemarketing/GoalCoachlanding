
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import VisualFeature from './components/VisualFeature';
import CTA from './components/CTA';
import Footer from './components/Footer';
import CoachingPage from './components/CoachingPage';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#home');

  // Sync theme and handle hash navigation
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
    }

    const handleHashChange = () => {
      // Normalize hash: empty becomes #home
      const hash = window.location.hash || '#home';
      setCurrentHash(hash);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial check
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update HTML class for Tailwind dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // Simple Router based on the hash
  const renderView = () => {
    // Exact match for pages, fallback to Home for anything else
    if (currentHash === '#coaching') {
      return <CoachingPage type="coaching" />;
    }
    if (currentHash === '#jobs') {
      return <CoachingPage type="jobs" />;
    }
    
    // Default Home View
    return (
      <div className="animate-fade-in">
        <Hero />
        <VisualFeature />
        <Features />
        <CTA />
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark transition-colors duration-500">
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main className="flex-grow">
        {renderView()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
