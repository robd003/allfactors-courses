import { Monitor, Video, MessageCircle, BookOpen, Calendar, Check } from 'lucide-react';

interface AgendaDay {
  date: string;
  time: string;
  topics: {
    title: string;
    description: string;
    time?: string;
  }[];
}

interface TwoDayAgendaProps {
  eventDates: {
    displayDates: string;
  };
  agenda: {
    dayOne: AgendaDay;
    dayTwo: AgendaDay;
  };
}

export function TwoDayAgenda({ agenda, eventDates }: TwoDayAgendaProps) {
  const features = [
    {
      icon: Monitor,
      title: 'Live on Zoom',
      description: 'Interactive sessions'
    },
    {
      icon: Video,
      title: 'Replay Access',
      description: 'Watch anytime'
    },
    {
      icon: MessageCircle,
      title: 'Q&A Sessions (VIP)',
      description: 'Get answers'
    },
    {
      icon: BookOpen,
      title: 'Resources',
      description: 'Templates included'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-5xl sm:text-6xl font-bold text-center mb-6 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
          Your 2-Day Paid Ads Crash Course
        </h2>
        
        <div className="text-center mb-4">
            <p className="text-gray-700 text-lg font-medium">
              {eventDates.displayDates}
            </p>
          </div>
          
          <div className="text-center mb-16">
            <p className="text-gray-600 text-lg">
              {agenda.dayOne.time}
            </p>
          </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-sm"
              >
                <div className="flex justify-center mb-4">
                  <Icon className="w-12 h-12" style={{ color: '#434CE7' }} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Days Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Day 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-6 h-6" style={{ color: '#434CE7' }} strokeWidth={2} />
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Day 1</h3>
                <p className="text-gray-600">
                  {agenda.dayOne.date} •{' '}
                  {agenda.dayOne.time}
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              {agenda.dayOne.topics.map((topic, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <div>
                    {topic.time ? (
                      <p className="text-gray-900 font-semibold text-lg">
                        {topic.title} <span className="text-gray-600 font-normal text-base">• {topic.time}</span>
                      </p>
                    ) : (
                      <p className="text-gray-900 font-semibold text-lg">{topic.title}</p>
                    )}
                    <p className="text-gray-600 text-base">{topic.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Day 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-6 h-6" style={{ color: '#434CE7' }} strokeWidth={2} />
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Day 2</h3>
                <p className="text-gray-600">
                  {agenda.dayTwo.date} •{' '}
                  {agenda.dayTwo.time}
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              {agenda.dayTwo.topics.map((topic, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <div>
                    {topic.time ? (
                      <p className="text-gray-900 font-semibold text-lg">
                        {topic.title} <span className="text-gray-600 font-normal text-base">• {topic.time}</span>
                      </p>
                    ) : (
                      <p className="text-gray-900 font-semibold text-lg">{topic.title}</p>
                    )}
                    <p className="text-gray-600 text-base">{topic.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
