import { CheckCircle2 } from 'lucide-react';

export function WhatYouGet() {
  const deliverables = [
    {
      category: 'Live Training',
      items: [
        '2 full days of intensive, hands-on training',
        'Live Q&A sessions during each training block',
        'Real-time feedback on your campaigns',
        'Interactive exercises and activities'
      ]
    },
    {
      category: 'Resources & Materials',
      items: [
        'Complete ad campaign templates and frameworks',
        'Targeting cheat sheets for all major platforms',
        'Ad copywriting formulas that convert',
        'Creative design guidelines and examples',
        'Tracking and analytics setup guides'
      ]
    },
    {
      category: 'Post-Workshop Support',
      items: [
        'Lifetime access to workshop recordings',
        'PDF workbook with all slides and notes',
        'Campaign audit checklist',
        'Private community access (VIP & Elite only)',
        'Certificate of completion'
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
            What You Get
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to launch and scale profitable ad campaigns immediately.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {deliverables.map((section, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">{section.category}</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {section.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}