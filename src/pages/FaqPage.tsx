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
      <section className="max-w-3xl mx-auto px-4 py-24">
        <Link to="/" className="text-cyan-400 text-sm mb-6 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-gray-300 mb-8">
          If you&apos;re a Nigerian student or NYSC corper and you&apos;re wondering how The Bridge works, start with
          these common questions.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="glass-effect rounded-xl overflow-hidden transition-all duration-300 animate-scale-in"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-4 sm:px-6 py-4 text-left"
                >
                  <span className="font-semibold text-white">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-cyan-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`px-4 sm:px-6 pb-4 text-gray-300 text-sm transform origin-top transition-all duration-300 ${
                    isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
}
