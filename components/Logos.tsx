import React from 'react';

const Logos: React.FC = () => {
  return (
    <section className="py-12 border-y border-slate-100 dark:border-gray-800 bg-white dark:bg-[#141022] transition-colors duration-300">
      <div className="px-6 lg:px-40 flex justify-center">
        <div className="max-w-[1200px] w-full flex flex-col items-center gap-6 text-center">
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* Overlapping Avatars */}
            <div className="flex items-center -space-x-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <img 
                  key={i}
                  className="w-12 h-12 rounded-full border-[3px] border-white dark:border-[#141022] object-cover shadow-sm"
                  src={`https://i.pravatar.cc/150?img=${i + 12}`} 
                  alt={`User ${i}`}
                />
              ))}
            </div>
            
            {/* Text only (Stars moved to Hero) */}
            <div className="flex flex-col items-center sm:items-start justify-center h-full">
              <p className="text-slate-600 dark:text-slate-400 font-medium text-sm">
                Trusted by <span className="font-bold text-slate-900 dark:text-white">10,000+ users</span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Logos;