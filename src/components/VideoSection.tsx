import { Play } from 'lucide-react';

export function VideoSection() {
  return (
    <section id="video" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
            See What You'll Learn
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the practical takeaways and exactly what to expect from the 2-day crash course.
          </p>
        </div>

        {/* Video Placeholder */}
        <div className="relative rounded-3xl overflow-hidden bg-gray-100 aspect-video border border-gray-200">
          {/* Replace this div with your actual video embed */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="text-center">
              <button className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors mb-4 mx-auto">
                <Play className="w-7 h-7 text-white ml-1" fill="white" />
              </button>
              <p className="text-gray-700 font-medium">Click to play preview video</p>
              <p className="text-gray-500 text-sm mt-1">Learn how to setup ads that convert</p>
            </div>
          </div>
          
          {/* When you have your video, replace the above div with:
          <iframe
            className="w-full h-full"
            src="YOUR_VIDEO_URL"
            title="Course Preview"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          */}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[
            { number: '2', label: 'Days of Training' },
            { number: '10+', label: 'Platforms Covered' },
            { number: '100%', label: 'Practical Content' },
            { number: '∞', label: 'Replay Access' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl border border-gray-200">
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}