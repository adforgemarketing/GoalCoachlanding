import React from 'react';

const featureList = [
  {
    icon: 'monitor_heart',
    title: 'Track Metrics',
    desc: 'Log workouts, heart rate, and performance stats in real-time. Syncs with all major wearables.'
  },
  {
    icon: 'flag',
    title: 'Set Milestones',
    desc: 'Define your fitness goals and break them down into achievable daily and weekly targets.'
  },
  {
    icon: 'groups',
    title: 'Join Challenges',
    desc: 'Compete in global leaderboards or create private competition groups with your friends.'
  },
  {
    icon: 'smart_toy',
    title: 'AI Coaching',
    desc: 'Get personalized training plans adapted to your performance and recovery data.'
  },
  {
    icon: 'insights',
    title: 'Visual Analytics',
    desc: 'Visualize your progress with advanced charts, heatmaps, and performance insights.'
  },
  {
    icon: 'share',
    title: 'Share Success',
    desc: 'Post your achievements, PBs, and workout summaries directly to your social feed.'
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="pt-12 pb-24 bg-background-light dark:bg-background-dark transition-colors duration-300">
      <div className="px-6 lg:px-40 flex justify-center">
        <div className="max-w-[1200px] w-full">
          <div className="flex flex-col gap-4 mb-16 text-center sm:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Everything you need to <span className="text-primary">push your limits</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
              Powerful features built for modern athletes. Stop guessing and start training with data-driven insights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureList.map((feature, index) => (
              <div 
                key={index} 
                className="group relative flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 dark:border-gray-800 dark:bg-white/5 dark:hover:border-primary/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 text-primary dark:bg-primary/20 transition-colors group-hover:bg-primary group-hover:text-white">
                  <span className="material-symbols-outlined">{feature.icon}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;