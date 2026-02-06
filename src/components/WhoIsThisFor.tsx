import { Users, Briefcase, TrendingUp, Target } from 'lucide-react';

export function WhoIsThisFor() {
  const audiences = [
    {
      icon: Users,
      title: 'Entrepreneurs',
      description: 'Business owners who want to master customer acquisition and stop relying on unpredictable marketing channels.'
    },
    {
      icon: Briefcase,
      title: 'Marketing Professionals',
      description: 'Marketers looking to add paid advertising expertise to their skillset and drive measurable results for their company or clients.'
    },
    {
      icon: TrendingUp,
      title: 'Startup Founders',
      description: 'Early-stage founders who need to validate their business model and acquire customers efficiently on a tight budget.'
    },
    {
      icon: Target,
      title: 'Agency Owners',
      description: 'Agency professionals who want to offer paid ads services and deliver consistent ROI for their clients.'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
            Who is this for?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            This crash course is designed for ambitious professionals ready to master paid advertising.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <div 
                key={index}
                className="p-8 rounded-2xl border border-gray-200 bg-white hover:border-gray-300 transition-all"
              >
                <div className="w-11 h-11 bg-gray-900 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{audience.title}</h3>
                <p className="text-gray-600 leading-relaxed">{audience.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}