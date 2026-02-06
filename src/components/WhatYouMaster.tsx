import { Layout, Users, Sparkles, DollarSign, BarChart, Rocket } from 'lucide-react';

export function WhatYouMaster() {
  const topics = [
    {
      icon: Layout,
      title: 'Campaign Structure & Setup',
      description: 'Learn the exact framework for structuring campaigns for each ad platform'
    },
    {
      icon: Users,
      title: 'Audience Targeting Mastery',
      description: 'Discover how to find and target your ideal customers across all major ad platforms'
    },
    {
      icon: Sparkles,
      title: 'High-Converting Ad Creative',
      description: 'See how to create ads that grab attention and drive action using proven copywriting formulas'
    },
    {
      icon: DollarSign,
      title: 'Budget Optimization',
      description: 'Learn how to maximize ROI with smart bidding strategies and budget allocation techniques'
    },
    {
      icon: BarChart,
      title: 'Analytics & Tracking',
      description: 'Understand how to set up proper tracking to measure what matters and make data-driven decisions'
    },
    {
      icon: Rocket,
      title: 'Scaling Strategies',
      description: 'Learn how to identify winning ads, scale them, and cut underperformers before they drain your budget.'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-5xl sm:text-6xl font-bold text-center mb-6 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
          What You'll Master in 2 Days
        </h2>
        
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Practical, actionable skills you can implement immediately
        </p>

        {/* Topics Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {topics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: '#434CE7' + '1A' }}>
                  <Icon className="w-6 h-6" style={{ color: '#434CE7' }} strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{topic.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{topic.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a 
            href="#pricing" 
            className="inline-block bg-[#16A34A] text-white hover:bg-[#15803D] px-10 py-4 rounded-full font-semibold text-lg transition-all shadow-lg"
          >
            Get Your Ticket Now
          </a>
        </div>
      </div>
    </section>
  );
}