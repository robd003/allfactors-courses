import { Check } from 'lucide-react';

export function WhoThisIsFor() {
  const audiences = [
    {
      title: 'Entrepreneurs',
      description: 'Ready to scale your business and acquire customers efficiently? Learn to turn ad spend into predictable growth.'
    },
    {
      title: 'Agency Owners',
      description: 'Achieve superior results for clients and expand your service offerings with practical ad tactics you can implement immediately.'
    },
    {
      title: 'Marketing Managers',
      description: 'Elevate your performance and hit those ambitious KPIs. Learn how to turn ad spend into predictable, repeatable results.'
    },
    {
      title: 'Freelancers',
      description: 'Ready to level up your offerings and earn more for your skills?  Learn how to run paid ads and add it to your services.'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-5xl sm:text-6xl font-bold text-center mb-16 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
          Who This Is For
        </h2>

        {/* Audience Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="bg-emerald-50 rounded-2xl p-8 border-l-4 border-emerald-500"
            >
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" strokeWidth={2.5} />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{audience.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{audience.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-8 text-center">
          <p className="text-gray-700 text-lg leading-relaxed">
            This crash course is designed for beginners to intermediates. No prior paid ads experience required.
            We'll start with the fundamentals and build up to advanced strategies by day 2.
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
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