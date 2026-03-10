import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const faqs = [
  {
    question: 'What is The Bridge?',
    answer:
      'The Bridge is a talent and learning platform that connects ambitious Nigerian students, graduates, and NYSC corpers with world-class programs, mentors, and career opportunities.',
  },
  {
    question: 'Who can apply?',
    answer:
      'We primarily serve Nigerian undergraduates, recent graduates, and NYSC members. However, some programs are also open to early-career professionals within their first few years after school.',
  },
  {
    question: 'Do I have to live in Lagos?',
    answer:
      'No. Many of our pathways are hybrid or fully remote. As long as you have a stable internet connection, you can participate from any part of Nigeria.',
  },
  {
    question: 'Is The Bridge free?',
    answer:
      'Some programs are fully sponsored, others are subsidised. We also work with partners to provide scholarships, discounts, and flexible payment options so that cost is not a barrier.',
  },
  {
    question: 'What kind of support will I get?',
    answer:
      'Depending on the pathway, you may get access to mentors, peer communities, career coaching, interview prep sessions, and introductions to hiring partners.',
  },
  {
    question: 'Can I combine The Bridge with a full-time job or heavy course load?',
    answer:
      'Many of our learners balance The Bridge with school or work. Programmes are designed with flexible schedules, recorded sessions, and clear expectations so you can plan around your reality.',
  },
  {
    question: 'Do you offer certificates or badges?',
    answer:
      'Yes. Selected pathways include certificates of completion or digital badges that you can add to your CV, LinkedIn profile, or portfolio once you meet the programme requirements.',
  },
  {
    question: 'How much does a typical programme cost?',
    answer:
      'Pricing varies by pathway. Some are fully sponsored, while others are subsidised. We communicate fees clearly before you apply, and some programmes include scholarships or flexible payment options.',
  },
  {
    question: 'How does The Bridge choose mentors and facilitators?',
    answer:
      'Our mentors and facilitators are experienced professionals and educators, including partners in tech and universities in the UK and Nigeria. We look for people who combine strong expertise with a passion for teaching.',
  },
  {
    question: 'What happens after I finish a programme?',
    answer:
      'Graduates may gain access to alumni opportunities such as advanced pathways, referrals, exclusive events, and community channels where you can continue to network and grow.',
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-gray-100">
      <Navigation onApplyClick={() => {}} />
      <section className="max-w-5xl mx-auto px-4 py-24">
        <Link to="/" className="text-cyan-400 text-sm mb-6 inline-block">
          ← Back to Home
        </Link>

        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-wide text-cyan-400 uppercase">
            Support for future leaders
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold mt-3">
            Frequently asked questions about The Bridge programmes
          </h1>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Everything you need to know about timelines, commitments, fees, and what life looks like inside The Bridge
            community.
          </p>
        </div>

        <div className="bg-slate-900/70 backdrop-blur-xl border border-slate-700/60 rounded-3xl shadow-2xl shadow-slate-950/60 px-4 sm:px-8 py-8 sm:py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className={`rounded-2xl overflow-hidden transition-all duration-300 animate-scale-in border ${
                    isOpen ? 'border-teal-400/70 bg-slate-900' : 'border-slate-700/70 bg-slate-900/60'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className={`w-full flex items-center justify-between px-4 sm:px-5 py-4 text-left ${
                      isOpen ? 'bg-gradient-to-r from-teal-500 to-orange-400 text-slate-950' : ''
                    }`}
                  >
                    <span
                      className={`font-semibold ${
                        isOpen ? 'text-slate-950' : 'text-slate-50'
                      }`}
                    >
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-slate-950' : 'text-cyan-400'
                      }`}
                    />
                  </button>
                  <div
                    className={`px-4 sm:px-5 pb-4 text-sm text-gray-200 transform origin-top transition-all duration-300 ${
                      isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    {faq.answer}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
