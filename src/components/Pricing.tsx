import { Check } from 'lucide-react';

export function Pricing() {
  // Determine if early bird pricing is active (before Feb 16, 2026)
  const now = new Date();
  const earlyBirdDeadline = new Date('2026-02-16T00:00:00');
  const isEarlyBird = now < earlyBirdDeadline;

  const tiers = [
    {
      name: 'General',
      originalPrice: '$999',
      earlyBirdPrice: '$299',
      regularPrice: '$599',
      time: '3pm-4pm PST (daily)',
      features: [
        {
          text: 'Training: 2 Days of LIVE Paid Ads Training on Zoom ($999 value)',
          included: true
        },
        {
          text: 'Replay: Access to the video recording + Resources & Community',
          included: true
        },
        {
          text: 'Direct Access to Helena (in the VIP Room): Be in the room LIVE as Helena coaches entrepreneurs on their ad strategies. You\'ll watch and learn from questions, ask your own questions. Take notes and apply instantly to your own business ($2,999 value)',
          included: false
        },
        {
          text: '1:1 Call With Helena to Troubleshoot your Ads: Personalized call to resolve your ads problems or help you setup ads from scratch to avoid mistakes and maximize profit ($9,999 value)',
          included: false
        }
      ],
      buttonText: 'Get Your Ticket'
    },
    {
      name: 'VIP',
      originalPrice: '$2999',
      earlyBirdPrice: '$499',
      regularPrice: '$799',
      time: '3pm-5pm PST (daily)',
      featured: true,
      features: [
        {
          text: 'Training: 2 Days of LIVE Paid Ads Training on Zoom ($999 value)',
          included: true
        },
        {
          text: 'Replay: Access to the video recording + Resources & Community',
          included: true
        },
        {
          text: 'Direct Access to Helena (in the VIP Room): Be in the room LIVE as Helena coaches entrepreneurs on their ad strategies. You\'ll watch and learn from questions, ask your own questions. Take notes and apply instantly to your own business ($2,999 value)',
          included: true
        },
        {
          text: '1:1 Call With Helena to Troubleshoot your Ads: Personalized call to resolve your ads problems or help you setup ads from scratch to avoid mistakes and maximize profit ($9,999 value)',
          included: false
        }
      ],
      buttonText: 'Get Your VIP Ticket'
    },
    {
      name: '1:1',
      originalPrice: '$9999',
      earlyBirdPrice: '$1699',
      regularPrice: '$4999',
      time: '3pm-5pm PST (daily) + 1:1 call',
      features: [
        {
          text: 'Training: 2 Days of LIVE Paid Ads Training on Zoom ($999 value)',
          included: true
        },
        {
          text: 'Replay: Access to the video recording + Resources & Community',
          included: true
        },
        {
          text: 'Direct Access to Helena (in the VIP Room): Be in the room LIVE as Helena coaches entrepreneurs on their ad strategies. You\'ll watch and learn from questions, and take notes you can apply instantly to your own business ($2,999 value)',
          included: true
        },
        {
          text: '1:1 Call With Helena to Troubleshoot your Ads: Personalized call to resolve your ads problems or help you setup ads from scratch to avoid mistakes and maximize profit ($9,999 value)',
          included: true
        }
      ],
      buttonText: 'Get Your 1:1 Ticket'
    }
  ];

  return (
    <section className="py-24 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-4 text-gray-900 px-4" style={{ fontFamily: "'Playfair Display', serif" }}>
          Get Your Ticket
        </h2>
        <p className="text-center text-gray-600 text-base sm:text-lg mb-16 px-4">
          Invest in yourself. Gain the skills that will serve you forever.
        </p>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 sm:p-8 flex flex-col transition-all relative ${
                tier.featured 
                  ? 'border-4 border-[#434CE7] shadow-xl md:scale-105' 
                  : 'border-2 border-gray-200 hover:border-gray-300'
              }`}
            >
              {/* Popular Badge */}
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#434CE7] text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                    Popular
                  </span>
                </div>
              )}
              
              {/* Tier Name */}
              <h3 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-gray-900">
                {tier.name}
              </h3>

              {/* Pricing */}
              <div className="text-center mb-4">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="text-gray-800 line-through text-2xl sm:text-3xl lg:text-4xl font-bold">{tier.originalPrice}</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-[#16A34A] font-extrabold text-2xl sm:text-3xl lg:text-4xl">
                      {isEarlyBird ? tier.earlyBirdPrice : tier.regularPrice}
                    </span>
                    {isEarlyBird && (
                      <span className="text-[#16A34A] font-semibold text-xs sm:text-sm whitespace-nowrap">
                        Early Bird
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-gray-800 text-lg sm:text-xl lg:text-2xl font-bold">
                  {isEarlyBird ? `${tier.regularPrice} after 2/15` : ''}
                </p>
              </div>

              {/* Time */}
              <p className="text-center text-gray-600 text-sm sm:text-base mb-6 pb-6 border-b border-gray-200">
                {tier.time}
              </p>

              {/* Features */}
              <div className="flex-1 space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => {
                  // Split the text at ": " (colon + space) to separate title from description
                  const separatorIndex = feature.text.indexOf(': ');
                  const title = separatorIndex !== -1 ? feature.text.substring(0, separatorIndex + 1) : '';
                  const description = separatorIndex !== -1 ? feature.text.substring(separatorIndex + 1) : feature.text;
                  
                  return (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check 
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          feature.included ? 'text-[#16A34A]' : 'text-gray-300'
                        }`}
                        strokeWidth={2.5}
                      />
                      <p className={`text-sm sm:text-base leading-relaxed break-words ${
                        feature.included ? 'text-gray-900' : 'text-gray-400 line-through'
                      }`}>
                        {title && <span className="font-bold">{title}</span>}
                        {description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* CTA Button */}
              <button className="w-full py-4 bg-[#16A34A] text-white rounded-full hover:bg-[#15803D] transition-colors font-semibold text-lg shadow-lg">
                {tier.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}