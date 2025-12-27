
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-background-light dark:bg-background-dark transition-colors duration-300">
      <div className="px-6 lg:px-40 flex justify-center">
        <div className="max-w-[1200px] w-full rounded-3xl bg-primary px-6 py-16 text-center sm:px-12 relative overflow-hidden shadow-2xl">
          {/* Abstract patterns background */}
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to crush your goals?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
              Join thousands of competitors who have elevated their training. 
              Start your account today.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <button className="w-full sm:w-auto flex items-center justify-center rounded-xl bg-white px-10 py-4 text-sm font-black text-primary hover:bg-slate-50 transition-all shadow-xl hover:shadow-2xl active:scale-95 uppercase tracking-widest">
                Join now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
