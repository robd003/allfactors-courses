import { Play } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';

export function Hero() {
  return (
    <>
      {/* Orange Banner */}
      <a 
        href="#pricing" 
        className="block bg-[#FF4500] hover:bg-[#E63E00] transition-colors"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-center">
          <p className="text-white font-medium text-sm">
            HURRY! EARLY BIRD TICKETS SALE ENDS FEB 15TH 💵
          </p>
        </div>
      </a>

      {/* Hero Section */}
      <section className="bg-white pt-16 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            {/* Main Headline */}
            <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              Stop Burning Cash & Start<br />
              <span className="text-[#4F46E5]">Profiting</span> With Paid Ads
            </h1>
            
            <p className="text-xl mb-2 text-gray-700 leading-relaxed">
              2-Day Live Masterclass: Learn How to Run Profitable Paid Ads.
            </p>
            
            <p className="text-lg font-semibold mb-8 text-gray-900">
              Thursday 2/26 - Friday 2/27, 2026
            </p>

            {/* CTA Button */}
            <a 
              href="#pricing" 
              className="inline-block bg-[#16A34A] text-white hover:bg-[#15803D] px-10 py-4 rounded-full font-semibold text-lg transition-all shadow-lg mb-12"
            >
              Get Your Ticket Now
            </a>

            {/* Video Placeholder */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-white p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                <div className="rounded-2xl overflow-hidden aspect-video">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/5i7sAlCOjUk"
                    title="Paid Ads Workshop Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            {/* Countdown Timer */}
            <CountdownTimer />
          </div>
        </div>
      </section>
    </>
  );
}