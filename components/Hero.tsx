
import React from 'react';

const Hero: React.FC = () => {
  return (
    <header className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-32 bg-background-light dark:bg-background-dark transition-colors duration-300">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="flex flex-col items-center px-6 relative z-10 max-w-5xl mx-auto text-center">
        
        {/* Live Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-[13px] font-semibold text-black dark:text-white shadow-sm dark:border-gray-800 dark:bg-white/5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          v1.0 is now live
        </div>
        
        {/* Main Headline */}
        <h1 className="text-[32px] sm:text-[64px] lg:text-[72px] font-[900] tracking-tight text-[#1a202c] dark:text-white leading-[1.1] mb-8">
          GoalCoach, built for <br />
          <span className="relative inline-block text-primary whitespace-nowrap">
            goal-driven competitors.
            <div className="absolute -bottom-1 left-0 w-full h-[6px] sm:h-[10px] bg-primary/15 -z-10 rounded-full"></div>
          </span>
        </h1>
        
        {/* Sub-headline */}
        <p className="text-[17px] sm:text-[20px] text-slate-500 dark:text-slate-400 max-w-[700px] leading-relaxed font-medium mb-12">
          Log your fitness goals, train independently, and compete with others to push your limits.
        </p>
        
        {/* App Store Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a href="#" className="hover:scale-105 transition-transform duration-200">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
              alt="Download on the App Store" 
              className="h-[52px] sm:h-[60px]"
            />
          </a>
          <a href="#" className="hover:scale-105 transition-transform duration-200">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
              alt="Get it on Google Play" 
              className="h-[52px] sm:h-[60px]"
            />
          </a>
        </div>

        {/* Social Proof Pill */}
        <div className="inline-flex items-center gap-6 p-4 px-6 rounded-[2rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.04)] animate-slide-up">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <img 
                key={i}
                className="w-10 h-10 rounded-full border-2 border-white dark:border-[#1e202e] object-cover"
                src={`https://i.pravatar.cc/150?img=${i + 15}`} 
                alt={`User ${i}`}
              />
            ))}
          </div>
          <div className="flex flex-col items-start gap-0.5">
            <div className="flex gap-0.5 text-[#ffc107]">
              {[1, 2, 3, 4, 5].map((i) => (
                <span 
                  key={i} 
                  className="material-symbols-outlined text-[20px]" 
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              ))}
            </div>
            <p className="text-slate-600 dark:text-slate-400 font-bold text-xs">
              Trusted by <span className="text-[#1a202c] dark:text-white">10,000+ users</span>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;