
import React from 'react';

const HeroGraphic: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-12 w-full overflow-visible">
      <div className="relative w-full flex items-center justify-center" style={{ perspective: '1200px' }}>
        
        {/* The 3D Perspective Container */}
        <div 
          className="relative z-10 animate-float transition-all duration-1000 ease-out"
          style={{ 
            transform: 'rotateX(8deg) rotateY(-22deg) rotateZ(4deg)',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Main Phone Body */}
          <div className="relative w-[300px] sm:w-[340px] aspect-[9/19] bg-[#1a1a1a] rounded-[3.5rem] p-2.5 shadow-[20px_40px_80px_-15px_rgba(0,0,0,0.3),-10px_20px_40px_-10px_rgba(2,44,250,0.1)] ring-1 ring-white/20">
            
            {/* Screen Content */}
            <div className="w-full h-full bg-white rounded-[2.8rem] overflow-hidden relative flex flex-col select-none">
              
              {/* Header / Brand */}
              <div className="pt-10 pb-2 px-6 flex flex-col items-center">
                <h1 className="text-[14px] font-[900] italic tracking-tighter text-black uppercase leading-none">
                  GOAL COACH UNITE
                </h1>
              </div>

              {/* Title & Get Started */}
              <div className="px-6 py-5 flex justify-between items-center">
                <h2 className="text-2xl font-[800] text-black">Programs</h2>
                <div className="bg-[#022cfa] text-white text-[10px] font-black px-4 py-2.5 rounded-full shadow-lg shadow-primary/20 flex items-center gap-1 cursor-pointer hover:scale-105 transition-transform">
                  <span className="text-sm leading-none">+</span> Get Started
                </div>
              </div>

              {/* My Plan Card */}
              <div className="px-4 mb-3">
                <div className="border-[1.5px] border-[#022cfa]/20 rounded-[2rem] p-5 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] relative">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex flex-col gap-1.5">
                      <span className="text-base font-black text-black">My Plan</span>
                      <span className="bg-[#022cfa] text-[8px] font-black text-white px-2.5 py-1 rounded-full w-fit tracking-wider">IN PROGRESS</span>
                    </div>
                    <span className="material-symbols-outlined text-slate-300">expand_more</span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-1 mb-6 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-slate-400">calendar_today</span>
                      <span className="text-[10px] font-black text-slate-500">30 Days</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 border-x border-slate-100">
                      <span className="material-symbols-outlined text-[16px] text-slate-400">bolt</span>
                      <span className="text-[10px] font-black text-slate-500">3x Weekly</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-slate-400">timer</span>
                      <span className="text-[10px] font-black text-slate-500">30m Sessions</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-[9px] font-black text-slate-400 tracking-widest uppercase">
                      <span>PLAN PROGRESS</span>
                      <span className="text-[#022cfa]">17%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="bg-[#022cfa] h-full w-[17%] rounded-full shadow-[0_0_8px_rgba(2,44,250,0.4)]"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Coach Button */}
              <div className="px-4 mb-6">
                <div className="w-full bg-[#022cfa] py-4.5 rounded-[1.5rem] text-white font-black text-[13px] text-center shadow-xl shadow-primary/30 uppercase tracking-[0.15em]">
                  AI COACH
                </div>
              </div>

              {/* Sessions Header */}
              <div className="px-6 flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-[#022cfa] text-[18px] font-bold">format_list_bulleted</span>
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">TRAINING SESSIONS</h3>
              </div>

              {/* Session Card */}
              <div className="px-4 mb-4">
                <div className="border border-slate-100 rounded-[1.8rem] p-4 flex items-center gap-4 bg-[#f8fafc]/50">
                  <div className="w-11 h-11 rounded-2xl bg-[#44fa02] flex items-center justify-center text-white shrink-0 shadow-lg shadow-accent/20">
                    <span className="material-symbols-outlined text-2xl font-black">check</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-[9px] font-black text-[#44fa02] uppercase tracking-wider mb-0.5">SESSION 1</div>
                    <div className="text-[14px] font-black text-black leading-tight">Foundation & Baseline</div>
                  </div>
                  <span className="material-symbols-outlined text-slate-300">chevron_right</span>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="mt-auto bg-white border-t border-slate-50 px-6 py-5 flex justify-between items-center">
                <div className="flex flex-col items-center gap-1.5 text-slate-300">
                  <span className="material-symbols-outlined text-[20px]">bar_chart</span>
                  <span className="text-[8px] font-black tracking-wider">STATS</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 text-slate-300">
                  <span className="material-symbols-outlined text-[20px]">emoji_events</span>
                  <span className="text-[8px] font-black tracking-wider">CHALLENGES</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <div className="w-10 h-10 bg-[#022cfa]/5 rounded-xl flex items-center justify-center text-[#022cfa]">
                    <span className="material-symbols-outlined text-[22px] font-bold">fitness_center</span>
                  </div>
                  <span className="text-[8px] font-black text-[#022cfa] tracking-wider">PROGRAM</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 text-slate-300">
                  <span className="material-symbols-outlined text-[20px]">settings</span>
                  <span className="text-[8px] font-black tracking-wider">SETTINGS</span>
                </div>
              </div>

              {/* Status Bar / Notch Simulation */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#1a1a1a] rounded-b-[1.2rem] flex justify-center items-center gap-4">
                <div className="w-10 h-1 bg-[#222] rounded-full"></div>
                <div className="w-2 h-2 bg-[#222] rounded-full"></div>
              </div>
              <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-28 h-1 bg-slate-200 rounded-full"></div>
            </div>
          </div>

          {/* Glossy Overlay */}
          <div className="absolute inset-0 pointer-events-none rounded-[3.5rem] bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-50 z-20"></div>
        </div>

        {/* Dynamic Background Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 blur-[120px] -z-10 rounded-full opacity-30 pointer-events-none"></div>
        <div className="absolute -bottom-10 left-0 w-32 h-32 bg-accent/20 blur-[80px] -z-10 rounded-full pointer-events-none animate-pulse"></div>
      </div>
    </div>
  );
};

export default HeroGraphic;