import { Quote } from 'lucide-react';

const headshotImage = '/assets/a57aaf222687a3d0bcf9ea711e1f7081b4c43674.png';
const metaIcon = '/assets/e9f83b2ef7258259f590c205926e33019d8aff9d.png';

export function Instructor() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-5xl sm:text-6xl font-bold text-center mb-16 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
          Your Instructor
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Bio */}
          <div>
            <Quote className="w-16 h-16 mb-6" style={{ color: '#434CE7' }} fill="#434CE7" />
            
            <div className="space-y-6 text-gray-900 text-lg leading-relaxed">
              <p className="font-semibold">
                "Hi, I'm Helena Ronis. As the Co-founder and CEO of AllFactors, a marketing tracking and analytics software, I'm immersed daily in the data, trends, and strategies that drive real revenue for businesses, including my own.
              </p>
              
              <p>
                I'm not teaching theory. I'm in the trenches every day, working with ad platforms, analyzing conversion funnels, and optimizing campaigns for our own growth and our customer's success.
              </p>
              
              <p>
                My experience isn't from a textbook. It's forged in the demanding, fast-paced industry, where every ad dollar counts and measurable ROI is the only metric that matters.
              </p>
              
              <p>
                I've scaled marketing efforts from scratch, and navigated the ever-changing landscape of paid advertising platforms.
              </p>
              
              <p>
                In this crash course, I'm sharing the exact, practical playbook I use to run profitable ad campaigns, distilled from years of hands-on experience.
              </p>
              
              <p>
                You'll gain direct access to the tactical knowledge, strategic mindset, and data-driven approach needed to run ads profitably.
              </p>
              
              <p>
                You'll develop a practical, repeatable skill you can apply across platforms and businesses.
              </p>
              
              <p>
                I'm excited to teach you this skill. Good job investing in yourself.
              </p>
              
              <p>
                See you in the workshop!"
              </p>
            </div>
          </div>

          {/* Right: Headshot and Social Links */}
          <div className="flex flex-col items-center">
            <div className="mb-8 relative">
              <div className="bg-white p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                <img 
                  src={headshotImage} 
                  alt="Helena Ronis" 
                  className="w-full max-w-md rounded-2xl"
                />
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-900 font-semibold text-lg mb-4" style={{ fontFamily: "'Geist Mono', monospace" }}>Expert In</p>
              <div className="flex gap-3 flex-wrap justify-center">
                {/* Google */}
                <div className="relative group">
                  <div className="bg-white p-3 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] cursor-pointer transition-transform hover:scale-110">
                    <div className="w-10 h-10 flex items-center justify-center">
                      <svg className="w-10 h-10" viewBox="0 0 48 48">
                        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                        <path fill="none" d="M0 0h48v48H0z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Google Ads
                  </div>
                </div>
                
                {/* Meta */}
                <div className="relative group">
                  <div className="bg-white p-3 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] cursor-pointer transition-transform hover:scale-110">
                    <div className="w-10 h-10 flex items-center justify-center">
                      <img 
                        src={metaIcon} 
                        alt="Meta" 
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Meta Ads
                  </div>
                </div>
                
                {/* LinkedIn */}
                <div className="relative group">
                  <div className="bg-white p-3 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] cursor-pointer transition-transform hover:scale-110">
                    <div className="w-10 h-10 rounded-lg bg-[#0A66C2] flex items-center justify-center">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    LinkedIn Ads
                  </div>
                </div>
                
                {/* YouTube */}
                <div className="relative group">
                  <div className="bg-white p-3 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] cursor-pointer transition-transform hover:scale-110">
                    <div className="w-10 h-10 rounded-lg bg-[#FF0000] flex items-center justify-center">
                      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="white">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    YouTube Ads
                  </div>
                </div>
                
                {/* Reddit */}
                <div className="relative group">
                  <div className="bg-white p-3 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] cursor-pointer transition-transform hover:scale-110">
                    <div className="w-10 h-10 rounded-lg bg-[#FF4500] flex items-center justify-center">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Reddit Ads
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
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