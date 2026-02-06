import { Video } from 'react-feather';

export function WhatsIncluded() {
  const features = [
    {
      emoji: '🗓️',
      title: 'Live Training',
      subtitle: 'Thursday 2/26 & Friday 2/27',
      description: '2 days on Zoom\nWatch step-by-step ads setup.'
    },
    {
      emoji: '🎥',
      title: 'Replay Access',
      description: "Can't make it live? Get video replay access to recordings so you can learn on your schedule."
    },
    {
      emoji: '📚',
      title: 'Worksheets & Templates',
      description: "Campaign planning templates, audience workbooks, and checklists you'll use immediately."
    },
    {
      emoji: '💬',
      title: 'Community',
      description: 'Join our student community to share wins, ask questions, and stay connected after the workshop.'
    },
    {
      emoji: '🙋',
      title: 'Live Q&A (VIP)',
      description: 'Personalized Q&A based on your use case. Ask a specific question based on your needs (VIP & 1:1 tiers).'
    },
    {
      emoji: '🎯',
      title: 'Personal Coaching (1:1)',
      description: '1:1 strategy call included with 1:1 tier to troubleshoot your ads setup live on a separate call (1:1 tiers only).'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-5xl sm:text-6xl font-bold text-center mb-4 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
          What's Included
        </h2>
        <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
          Everything you need in one place to achieve success with your ads
        </p>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm text-center transition-all hover:shadow-md hover:-translate-y-1"
            >
              {/* Emoji & Title */}
              <div className="flex items-center justify-center gap-2 mb-4">
                {feature.image ? <img src={feature.image} alt={feature.title} className="text-4xl" /> : <span className="text-4xl">{feature.emoji}</span>}
                <h3 className="text-xl font-bold text-[#434CE7]">
                  {feature.title}
                </h3>
              </div>

              {/* Subtitle (if exists) */}
              {feature.subtitle && (
                <p className="text-gray-900 font-bold text-lg mb-2">
                  {feature.subtitle}
                </p>
              )}

              {/* Description */}
              <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
                {feature.description}
              </p>
            </div>
          ))}
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