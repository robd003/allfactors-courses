import { Clock, TrendingUp, Zap } from 'lucide-react';

export function SkillShift() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
            The Skill Shift
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The advertising landscape is changing fast. Here's why now is the perfect time to master paid ads.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Organic Reach is Declining
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Social media algorithms have made organic reach nearly impossible. Businesses that don't invest in paid advertising are being left behind. The average organic reach on Facebook is now less than 2%, making paid ads essential for visibility.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Paid Ads Skills are in High Demand
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Companies are desperately searching for professionals who can profitably run paid campaigns. Paid ads specialists command premium salaries and have endless opportunities for freelance work, with average salaries ranging from $70K-$120K+.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Competitive Advantage
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Most entrepreneurs waste thousands on ads because they don't understand the fundamentals. By mastering paid advertising, you'll gain a massive competitive advantage and the ability to scale your business predictably and profitably.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}