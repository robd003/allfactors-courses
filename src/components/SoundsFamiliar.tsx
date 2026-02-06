export function SoundsFamiliar() {
  const painPoints = [
    {
      emoji: '💰',
      title: 'Burning Cash',
      description: "You're spending money on ads but can't figure out if they're actually working at all or just disappearing into the void."
    },
    {
      emoji: '😤',
      title: 'Overwhelmed',
      description: "Facebook Ads, Google Ads, LinkedIn Ads, TikTok... where do you even start? Too many platforms, too many settings, zero clarity."
    },
    {
      emoji: '🚫',
      title: 'No Direction',
      description: "You want to grow but don't know the fundamentals. YouTube tutorials are fragmented, and agencies are too expensive."
    },
    {
      emoji: '⏰',
      title: 'Wasting Time',
      description: "You're spending hours tinkering with settings without a framework or strategy to guide your decisions, constantly guessing what to do."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-5xl sm:text-6xl font-bold text-center mb-16 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
          Sounds Familiar?
        </h2>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-12 border-l-[5px] border-[#FF6347] min-h-[240px]"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{point.emoji}</span>
                <h3 className="text-2xl font-bold text-[#FF6347]">{point.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Transition Text */}
        <p className="text-2xl font-bold text-center text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
          It's time to change that.
        </p>
      </div>
    </section>
  );
}