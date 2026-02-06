import { Target, TrendingUp, Zap, Shield, BarChart3, Lightbulb, CheckCircle2 } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: Target,
      title: 'Create High-Converting Campaigns',
      description: 'Learn the exact targeting strategies that generate ROI from day one'
    },
    {
      icon: TrendingUp,
      title: 'Scale Profitably',
      description: 'Understand when and how to scale winning campaigns without burning your budget'
    },
    {
      icon: Zap,
      title: 'Master Multiple Platforms',
      description: 'Get hands-on training for Facebook, Instagram, Google Ads, and more'
    },
    {
      icon: Shield,
      title: 'Avoid Costly Mistakes',
      description: 'Discover the common pitfalls that waste thousands and how to avoid them'
    },
    {
      icon: BarChart3,
      title: 'Track & Optimize',
      description: 'Set up proper tracking and learn to read data like a pro marketer'
    },
    {
      icon: Lightbulb,
      title: 'Proven Ad Frameworks',
      description: 'Use our battle-tested templates and formulas for winning ad creative'
    }
  ];

  const outcomes = [
    'Launch your first profitable ad campaign within 7 days',
    'Reduce your cost per acquisition by 40% or more',
    'Build a predictable customer acquisition system',
    'Understand pixel tracking and conversion optimization',
    'Write ad copy that actually converts',
    'Design scroll-stopping creatives without being a designer',
    'Scale from $50/day to $500/day with confidence',
    'Create lookalike audiences that perform'
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Benefits */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
            What You'll Master
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Practical, hands-on training you can implement immediately to start seeing results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="p-8 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all bg-white">
                <div className="w-11 h-11 bg-gray-900 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* Outcomes Section */}
        <div className="bg-gray-50 rounded-3xl p-10 sm:p-16 border border-gray-200">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              By the End of This Workshop
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {outcomes.map((outcome, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-5 rounded-xl border border-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}