import { Target, Layers, DollarSign, BarChart3, Users, TrendingUp } from 'lucide-react';

export function Skills() {
  const skills = [
    {
      icon: Layers,
      title: "Campaign Architecture",
      description: "Build campaigns the right way. Learn to avoid common pitfalls to make sure your ads are optimized from day one."
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Find and reach your exact ideal customer with laser-focused audience targeting on the major ad platforms."
    },
    {
      icon: DollarSign,
      title: "Budget Optimization",
      description: "Manage every dollar efficiently with the right bidding strategies and budget allocation techniques."
    },
    {
      icon: BarChart3,
      title: "Analytics & Tracking",
      description: "Set up proper tracking to measure what matters, analyze results and make data-driven decisions"
    },
    {
      icon: Users,
      title: "Ad Creative Mastery",
      description: "Create ads that grab attention and drive action using proven copywriting formulas and hooks."
    },
    {
      icon: TrendingUp,
      title: "Scaling Strategies",
      description: "Use data to identify winning ads, scale them, and cut underperformers before they drain your budget."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-5xl sm:text-6xl font-bold text-center mb-6 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
          The Skills You'll Gain
        </h2>
        
        <p className="text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto">
          Practical, actionable skills you can implement immediately.
        </p>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7" style={{ color: '#434CE7' }} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {skill.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a href="#pricing" className="inline-block px-8 py-4 bg-[#16A34A] text-white rounded-full hover:bg-[#15803D] transition-colors text-lg font-semibold shadow-lg">
            Get Your Ticket Now
          </a>
        </div>
      </div>
    </section>
  );
}