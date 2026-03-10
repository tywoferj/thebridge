import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  tags: string[];
  readTime: string;
  author: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-your-nysc-year-can-supercharge-your-career',
    title: 'How Your NYSC Year Can Supercharge Your Career',
    excerpt:
      'Instead of “just serving”, learn how to turn your NYSC year into 12 months of growth, networking, and real work experience across Nigeria.',
    image:
      'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['NYSC', 'Career', 'Nigeria'],
    readTime: '7 min read',
    author: 'Olusola Akinpelu',
  },
  {
    slug: 'from-jamb-to-job-market-a-nigerian-students-journey',
    title: 'From JAMB to Job Market: A Nigerian Student’s Journey',
    excerpt:
      'WAEC, JAMB, ASUU strikes… and still you want to build a global career. Here’s how Nigerian students are doing it in 2026.',
    image:
      'https://images.pexels.com/photos/3184312/pexels-photo-3184312.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Students', 'Career', 'Nigeria'],
    readTime: '8 min read',
    author: 'Morayo Akinpelu',
  },
  {
    slug: 'five-tech-skills-every-non-tech-student-needs',
    title: '5 Tech Skills Every Non‑Tech Student in Nigeria Needs',
    excerpt:
      'You don’t have to be a “tech bro” to benefit from tech. These skills make you valuable in any field — from law to agriculture.',
    image:
      'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Tech', 'Skills'],
    readTime: '6 min read',
    author: 'Olusola Akinpelu',
  },
  {
    slug: 'networking-in-lagos-on-a-student-budget',
    title: 'Networking in Lagos on a Student Budget',
    excerpt:
      'You don’t need a Lekki apartment to build a strong network. Here’s how to meet mentors and peers without breaking the bank.',
    image:
      'https://images.pexels.com/photos/1181562/pexels-photo-1181562.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Networking', 'Lagos'],
    readTime: '5 min read',
    author: 'Olusola Akinpelu',
  },
  {
    slug: 'balancing-school-side-hustle-and-family-expectations',
    title: 'Balancing School, Side Hustle, and Family Expectations',
    excerpt:
      'Between lectures, family responsibilities, and your small business, burnout is real. Learn systems Nigerian students use to stay sane.',
    image:
      'https://images.pexels.com/photos/3968057/pexels-photo-3968057.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Side Hustle', 'Wellbeing'],
    readTime: '7 min read',
    author: 'Morayo Akinpelu',
  },
  {
    slug: 'why-global-opportunities-are-closer-than-you-think',
    title: 'Why Global Opportunities Are Closer Than You Think',
    excerpt:
      'Remote work, international scholarships, and cross‑border internships are no longer out of reach for Nigerian talent.',
    image:
      'https://images.pexels.com/photos/5256816/pexels-photo-5256816.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Global', 'Opportunities'],
    readTime: '6 min read',
    author: 'Olusola Akinpelu',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-gray-100">
      <Navigation onApplyClick={() => {}} />
      <section className="max-w-6xl mx-auto px-4 py-24">
        <Link to="/" className="text-cyan-400 text-sm mb-6 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-4">The Bridge Blog</h1>
        <p className="text-gray-300 mb-10 max-w-2xl">
          Stories, strategies, and straight talk for Nigerian students, graduates, and NYSC corpers who want
          more than “normal”.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="glass-effect rounded-2xl overflow-hidden flex flex-col hover:translate-y-1 hover:shadow-2xl transition-transform duration-300"
            >
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-1 text-xs text-cyan-300 uppercase tracking-wide">
                  <span>{post.tags.join(' • ')}</span>
                  <span>{post.readTime}</span>
                </div>
                <p className="text-[11px] text-gray-400 mb-2">By {post.author}</p>
                <h2 className="font-semibold text-lg mb-2 line-clamp-2">{post.title}</h2>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="mt-auto flex items-center justify-between">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-cyan-400 text-sm font-semibold hover:text-cyan-300"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

