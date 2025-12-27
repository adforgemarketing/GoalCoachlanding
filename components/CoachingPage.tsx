
import React, { useState } from 'react';
import Logo from './Logo';

interface CoachingPageProps {
  type: 'coaching' | 'jobs';
}

const CoachingPage: React.FC<CoachingPageProps> = ({ type }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  const config = {
    coaching: {
      title: 'Premium Coaching',
      highlight: 'Coming Soon',
      description: "We're hand-selecting elite certified coaches to help you reach the next level. Get 1-on-1 performance analysis, custom training plans, and priority support.",
      icon: 'psychology',
      features: [
        { icon: 'calendar_month', text: 'On-demand sessions' },
        { icon: 'video_call', text: 'Live video reviews' },
        { icon: 'analytics', text: 'Data-driven insights' }
      ]
    },
    jobs: {
      title: 'Join Our Team',
      highlight: 'Hiring Soon',
      description: "We're looking for world-class engineers, designers, and fitness experts. Join GoalCoach and build the future of competitive athletic platforms.",
      icon: 'work',
      features: [
        { icon: 'public', text: 'Remote-first culture' },
        { icon: 'paid', text: 'Competitive equity' },
        { icon: 'workspace_premium', text: 'Growth opportunities' }
      ]
    }
  }[type];

  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center py-20 px-6 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[160px] pointer-events-none animate-pulse"></div>
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl w-full text-center relative z-10 animate-slide-up">
        {/* Animated Badge with Logo */}
        <div className="mb-10 inline-flex items-center justify-center w-36 h-36 rounded-[2.5rem] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-2xl transition-transform hover:scale-105 duration-500 overflow-visible p-6">
           <Logo className="w-full h-full" />
        </div>

        <h1 className="text-5xl font-black tracking-tight text-slate-900 dark:text-white sm:text-7xl lg:text-8xl mb-6 leading-tight">
          {config.title} <br />
          <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
            {config.highlight}
          </span>
        </h1>

        <p className="text-lg sm:text-2xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
          {config.description}
        </p>

        {/* Action Card */}
        <div className="max-w-xl mx-auto p-2 bg-white/50 dark:bg-white/5 backdrop-blur-2xl rounded-[2rem] border border-white dark:border-white/10 shadow-2xl mb-16 transform hover:-translate-y-1 transition-all duration-300">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Join the exclusive waitlist" 
                className="flex-1 rounded-2xl border-none bg-white dark:bg-slate-900 px-6 py-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary font-semibold shadow-inner"
              />
              <button 
                type="submit"
                className="bg-primary text-white px-8 py-4 rounded-2xl font-black hover:bg-primary/90 transition-all active:scale-95 whitespace-nowrap shadow-xl shadow-primary/20"
              >
                Notify Me
              </button>
            </form>
          ) : (
            <div className="py-4 px-8 text-primary font-bold flex items-center justify-center gap-4 animate-fade-in">
              <span className="material-symbols-outlined text-2xl">verified</span>
              Success! We'll reach out to you soon.
            </div>
          )}
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {config.features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center gap-3 p-6 rounded-3xl bg-white/30 dark:bg-white/5 border border-white dark:border-white/5 hover:border-primary/40 transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-2xl">{feature.icon}</span>
              </div>
              <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{feature.text}</span>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <a 
            href="#home" 
            className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 font-bold hover:text-primary transition-colors group"
          >
            <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
            Return to Dashboard
          </a>
        </div>
      </div>
    </section>
  );
};

export default CoachingPage;
