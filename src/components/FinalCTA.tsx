import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
          TIME DOES NOT WAIT
        </h2>
        
        <p className="text-xl mb-10 text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Every day you wait is a day your competitors are getting ahead. Join us February 26-27 and master the skills that will transform your business.
        </p>

        {/* Value Props */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <div className="flex items-center gap-2 text-gray-700">
            <CheckCircle2 className="w-5 h-5" />
            <span>Early Bird Pricing Ends Feb 15</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <CheckCircle2 className="w-5 h-5" />
            <span>Limited Spots Available</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <CheckCircle2 className="w-5 h-5" />
            <span>100% Money-Back Guarantee</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mb-8">
          <a 
            href="#pricing" 
            className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white hover:bg-gray-800 px-10 py-5 rounded-full font-medium text-lg transition-all"
          >
            Secure Your Spot Now
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Social Proof */}
        <p className="text-sm text-gray-500">
          Join 1,000+ successful students • Limited spots remaining
        </p>
      </div>
    </section>
  );
}