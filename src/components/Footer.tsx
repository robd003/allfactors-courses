export function Footer() {
  const column1Links = [
    'Paid Ads Training',
    'Paid Search Training',
    'Paid Social Training',
    'Performance Marketing Training'
  ];

  const column2Links = [
    'Google Ads Training',
    'YouTube Ads Training',
    'Bing Ads Training',
    'Meta Ads Training',
    'LinkedIn Ads Training',
    'Reddit Ads Training'
  ];

  const column3Links = [
    'Startup Marketing Course',
    'SaaS Marketing Training',
    'B2B Marketing Workshop',
    'B2B Digital Marketing Training'
  ];

  return (
    <footer className="bg-white">
      {/* Final CTA Section */}
      <section className="py-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-6xl sm:text-7xl font-bold mb-6 text-gray-900" 
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            TIME DOES NOT<br />WAIT
          </h2>
          <p className="text-gray-900 text-xl mb-8">
            Get your ticket now. Prices increase automatically on February 15th<br />at midnight.
          </p>
          <a 
            href="#pricing" 
            className="inline-block bg-[#16A34A] text-white hover:bg-[#15803D] px-10 py-4 rounded-full font-semibold text-lg transition-all shadow-lg"
          >
            Get Your Ticket Now
          </a>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200"></div>

      {/* Footer Links */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {/* Column 1 */}
            <div className="space-y-3 text-center md:text-left">
              {column1Links.map((link, index) => (
                <div key={index}>
                  <a 
                    href="#" 
                    className="text-gray-700 hover:text-black transition-colors text-sm"
                  >
                    {link}
                  </a>
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div className="space-y-3 text-center md:text-left">
              {column2Links.map((link, index) => (
                <div key={index}>
                  <a 
                    href="#" 
                    className="text-gray-700 hover:text-black transition-colors text-sm"
                  >
                    {link}
                  </a>
                </div>
              ))}
            </div>

            {/* Column 3 */}
            <div className="space-y-3 text-center md:text-left">
              {column3Links.map((link, index) => (
                <div key={index}>
                  <a 
                    href="#" 
                    className="text-gray-700 hover:text-black transition-colors text-sm"
                  >
                    {link}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Full-width divider */}
      <div className="border-t border-gray-200"></div>

      {/* Copyright */}
      <div className="pt-8 pb-6 px-4 sm:px-6 lg:px-8">
        <div className="text-center text-gray-500 text-sm">
          Copyright © 2025 AllFactors, Inc. |{' '}
          <a 
            href="#" 
            className="text-gray-700 hover:text-black transition-colors"
          >
            Privacy Policy
          </a>
          {' & '}
          <a 
            href="#" 
            className="text-gray-700 hover:text-black transition-colors"
          >
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  );
}