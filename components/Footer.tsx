import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-white py-8 dark:border-gray-800 dark:bg-[#141022] transition-colors duration-300">
      <div className="px-6 lg:px-40 flex justify-center">
        <div className="max-w-[1200px] w-full flex flex-col-reverse md:flex-row justify-between items-center gap-4">
          
          <div className="text-sm text-slate-500 dark:text-slate-400">
            © 2025 GoalCoach Inc. All rights reserved.
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-white transition-colors">
              Terms of Use
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;