
import React from 'react';
import HeroGraphic from './HeroGraphic';

const VisualFeature: React.FC = () => {
  return (
    <section id="visual-feature" className="py-12 pb-24 bg-background-light dark:bg-background-dark transition-colors duration-300">
      <div className="px-6 lg:px-40 flex justify-center">
        <div className="max-w-[1200px] w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Phone Showcase Side */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start order-2 lg:order-1">
             <HeroGraphic />
          </div>

          {/* Text Content Side */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8 animate-fade-in order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-[0.2em] text-xs">
              <span className="w-8 h-[2px] bg-primary"></span>
              The Interface
            </div>
            <h2 className="text-4xl font-black tracking-tighter text-slate-900 dark:text-white leading-[1.1] sm:text-5xl">
              Clean, bold, and <br />
              <span className="text-primary underline decoration-[#44fa02] underline-offset-8">competitive</span>
            </h2>
            <p className="text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
              Designed for high-intensity tracking and community challenges. Manage your training programs with ease using our award-winning mobile dashboard.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Dynamic Programs", icon: "fitness_center", desc: "Adaptive daily sessions" },
                { title: "Social Leaderboards", icon: "groups", desc: "Compete with athletes" },
                { title: "Advanced Analytics", icon: "insights", desc: "Track every milestone" },
                { title: "AI Integration", icon: "smart_toy", desc: "Smarter recovery plans" }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-2 group">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white dark:bg-white/5 shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                  </div>
                  <span className="font-black text-slate-900 dark:text-white text-base">{item.title}</span>
                  <span className="text-xs text-slate-500 font-semibold">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisualFeature;
