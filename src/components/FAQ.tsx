import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'Do I need any previous experience with ads?',
      answer: 'No previous experience is required! This workshop is designed for beginners and intermediate users. We\'ll start with the fundamentals and build up to advanced strategies, so you can follow along regardless of your current skill level.'
    },
    {
      question: 'Which platforms will we focus on?',
      answer: 'We\'ll cover the major advertising platforms including Google Ads, Meta Ads (Facebook & Instagram), LinkedIn Ads. You\'ll learn the unique strategies and best practices for each platform, plus how to choose the right platform for your specific business goals.'
    },
    {
      question: 'What if I can\'t attend the live sessions?',
      answer: 'No problem! All sessions are recorded and you\'ll receive full access to the replays within 24 hours of each session. You can watch at your own pace and revisit any sections as many times as you need for a month.'
    },
    {
      question: 'How long is each day\'s training?',
      answer: 'For General ticket holders, the live training runs from 3–4 PM PST each day. For VIP ticket holders, there is an additional session from 4–5 PM PST focused on personalized Q&A. VIP 1:1 coaching calls are scheduled separately after the workshop.'
    },
    {
      question: 'What is the refund policy?',
      answer: 'Due to the digital nature of the workshop, there are no refunds.\nAll sessions will be recorded, and you\'ll get access to all resources, templates, and the community, so you can go through everything at your own pace if you can\'t attend live.'
    },
    {
      question: 'How do I get access after purchase?',
      answer: 'Immediately after purchase you\'ll receive a confirmation email. A day prior to the workshop, you\'ll receive the Zoom link for the live sessions. Replay recordings will be sent within 24 hours of each session.'
    },
    {
      question: 'What\'s the difference between VIP and General access?',
      answer: 'General access includes the 3-4 PM PST 2-day live training, session replays, resources and community. VIP access includes everything in General, plus a separate daily link to the 4–5 PM PST personalized Q&A sessions.'
    },
    {
      question: 'What does the 1:1 coaching call include?',
      answer: 'The 1:1 coaching call (included with the 1:1 tier) is a dedicated 60-minute strategy session where we\'ll review your specific business, troubleshoot your ads setup, and create a customized action plan for your campaigns. This happens after the workshop on a separate scheduled call.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-5xl sm:text-6xl font-bold text-center mb-16 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
          Frequently Asked Questions
        </h2>

        {/* FAQ Items */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:border-gray-300 border-2 border-transparent"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-800 text-base leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-900 text-xl font-semibold mb-6">
            Ready to join?
          </p>
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