
import React, { useState } from 'react';
import Logo from './Logo';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/60 dark:border-white/5 bg-white/70 dark:bg-[#141022]/70 backdrop-blur-xl transition-all duration-300">
      <div className="px-6 lg:px-40 flex h-20 items-center justify-between">
        <a href="#home" className="flex items-center gap-3 cursor-pointer group">
          <div className="flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Logo className="w-12 h-12" />
          </div>
          <h2 className="text-xl font-black tracking-tighter text-slate-900 dark:text-white uppercase leading-none">GoalCoach</h2>
        </a>
        
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-3">
             <a href="#" className="hover:opacity-80 transition-opacity active:scale-95 transform duration-200">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-9" />
             </a>
             <a href="#" className="hover:opacity-80 transition-opacity active:scale-95 transform duration-200">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-9" />
             </a>
          </div>
          
          <button 
            className="md:hidden p-2.5 rounded-xl text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-[#141022] border-b border-slate-200 dark:border-white/5 p-6 flex flex-col gap-5 shadow-2xl animate-fade-in">
          <div className="flex flex-col gap-4">
             <div className="flex justify-center gap-4">
                <a href="#" className="hover:opacity-80 transition-opacity">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-10" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-10" />
                </a>
             </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
