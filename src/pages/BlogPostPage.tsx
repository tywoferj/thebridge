import { useParams, Link } from 'react-router-dom';
import { blogPosts } from './BlogPage';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function renderContent(slug: string) {
  switch (slug) {
    case 'how-your-nysc-year-can-supercharge-your-career':
      return (
        <>
          <p className="text-gray-300 mb-4">
            For many corpers, NYSC is simply something to “get out of the way”. You pack your box, collect your
            khaki, and count down to POP. But your service year can also be 12 months of intense growth — the one
            year you deliberately design your learning, your network, and your portfolio.
          </p>
          <p className="text-gray-300 mb-4">
            Imagine this: two corpers are posted to the same PPA in Lagos. One does the bare minimum, shows up
            late, scrolls Instagram during CDS, and goes home. The other treats every week like a sprint — asking
            questions, taking online courses at night, volunteering on real projects, and connecting with senior
            colleagues. One year later, both collect discharge certificates… but only one has a CV that tells a
            powerful story.
          </p>
          <h2 className="text-xl font-semibold text-white mt-6 mb-3">Turn your PPA into a project lab</h2>
          <p className="text-gray-300 mb-4">
            Whether you&apos;re posted to a school, a startup, a government office, or a small business, there is usually
            a real problem waiting to be solved. It could be messy record‑keeping, outdated processes, or even
            social media that nobody is managing. Pick one problem, get permission, and treat it like a structured
            project with clear before‑and‑after results.
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
            <li>Document the current state (how long things take, what tools are used).</li>
            <li>Propose a simple improvement and build a small team around it.</li>
            <li>Measure the impact — time saved, errors reduced, engagement increased.</li>
          </ul>
          <h2 className="text-xl font-semibold text-white mt-6 mb-3">Build a Lagos‑sized network from any state</h2>
          <p className="text-gray-300 mb-4">
            You don&apos;t need to be in Lekki to network. Join online communities, attend events when you can, and be
            deliberate about following up. After every meaningful conversation, send a thank‑you message and stay in
            touch. One introduction from NYSC can lead to the job you want three years from now.
          </p>
          <p className="text-gray-300 mb-4">
            If you treat NYSC as a bridge — not a break — you&apos;ll come out with more than a certificate. You&apos;ll have
            projects you&apos;re proud of, people who can vouch for your value, and a clearer sense of where you&apos;re
            headed next.
          </p>
        </>
      );
    case 'from-jamb-to-job-market-a-nigerian-students-journey':
      return (
        <>
          <p className="text-gray-300 mb-4">
            If you grew up in Nigeria, your education story probably started with WAEC timetables pinned to the
            living‑room wall and relatives asking, “what&apos;s your JAMB score?” From there it&apos;s a long road: post‑UTME,
            strikes, crowded lecture halls, group assignments that you secretly carry on your own.
          </p>
          <p className="text-gray-300 mb-4">
            Somewhere along the line, the conversation quietly switches from “have you gained admission?” to “where
            will you work after school?”. The jump from JAMB to the job market feels huge — but students who win
            don&apos;t wait until final year to start preparing.
          </p>
          <h2 className="text-xl font-semibold text-white mt-6 mb-3">Every semester is a season</h2>
          <p className="text-gray-300 mb-4">
            Think of each semester as a season with one major growth goal: maybe it&apos;s understanding data analysis,
            building your writing portfolio, or finally becoming comfortable with public speaking. Instead of trying
            to “fix your life” in final year, stack small wins semester by semester.
          </p>
          <h2 className="text-xl font-semibold text-white mt-6 mb-3">Use school projects as portfolio pieces</h2>
          <p className="text-gray-300 mb-4">
            That research project, group presentation, or final‑year thesis doesn&apos;t have to die on your laptop.
            Clean it up, host it online if you can, and describe the problem, your role, and the outcome. Recruiters
            are not only looking for big brand names — they want evidence that you can take ideas from concept to
            completion.
          </p>
          <p className="text-gray-300 mb-4">
            By the time you reach the job market, you want your story to read like a journey — not just a list of
            courses. The Bridge exists to help you build that story with structure, feedback, and real opportunities.
          </p>
        </>
      );
    case 'five-tech-skills-every-non-tech-student-needs':
      return (
        <>
          <p className="text-gray-300 mb-4">
            In 2026, every industry in Nigeria is being reshaped by technology — from banking apps your parents now
            use, to EdTech platforms powering remote learning. You don&apos;t have to become a full‑time software engineer
            to benefit, but you do need a basic toolkit.
          </p>
          <h2 className="text-xl font-semibold text-white mt-6 mb-3">1. Spreadsheet literacy</h2>
          <p className="text-gray-300 mb-4">
            Whether you study Law or Agriculture, you will eventually deal with numbers. Being able to clean data,
            use formulas, and create simple dashboards in Excel or Google Sheets immediately makes you more useful in
            any role.
          </p>
          <h2 className="text-xl font-semibold text-white mt-6 mb-3">2. Digital research and fact‑checking</h2>
          <p className="text-gray-300 mb-4">
            Employers love people who can find trustworthy information quickly. Learning how to search effectively,
            filter credible sources, and summarise findings clearly is a “meta‑skill” that powers everything else.
          </p>
          <h2 className="text-xl font-semibold text-white mt-6 mb-3">3–5. Collaboration tools, basic automation, and storytelling</h2>
          <p className="text-gray-300 mb-4">
            Tools like Notion, Trello, and Slack, simple automation with no‑code tools, and the ability to turn data
            into clear stories (slides, reports, one‑pagers) will keep you relevant even as roles change. These are
            the skills we quietly train into every Bridge pathway — regardless of your primary discipline.
          </p>
        </>
      );
    case 'networking-in-lagos-on-a-student-budget':
      return (
        <>
          <p className="text-gray-300 mb-4">
            When people talk about “networking in Lagos”, you might picture rooftop events in Victoria Island, N20k
            cocktails, and arriving in an Uber you can barely afford. In reality, some of the strongest
            relationships are built in quiet corners: after meetups, in Telegram groups, or over consistent DMs.
          </p>
          <p className="text-gray-300 mb-4">
            The goal is not to collect selfies with celebrities — it&apos;s to build a small circle of people who know
            what you&apos;re trying to build and are willing to recommend you when opportunities show up.
          </p>
          <h2 className="text-xl font-semibold text-white mt-6 mb-3">Start with events you can actually reach</h2>
          <p className="text-gray-300 mb-4">
            Universities, hubs, and communities across Lagos regularly host free or low‑cost events. Pick one meet‑up
            each month that aligns with your interests. Volunteer to help with registration or logistics — it&apos;s one
            of the easiest ways to meet organisers and speakers without forcing awkward introductions.
          </p>
          <h2 className="text-xl font-semibold text-white mt-6 mb-3">Follow‑ups are where the magic happens</h2>
          <p className="text-gray-300 mb-4">
            After a good conversation, send a short message on LinkedIn or email thanking the person and referencing
            something specific you discussed. Share a small update a few weeks later. Networking on a budget is less
            about big entrances and more about consistent, thoughtful touchpoints over time.
          </p>
        </>
      );
    case 'balancing-school-side-hustle-and-family-expectations':
      return (
        <>
          <p className="text-gray-300 mb-4">
            Many Nigerian students are juggling more than lectures: a small business, freelance gigs, siblings to
            care for, and parents who expect first‑class results. If you feel like you&apos;re constantly “on”, you&apos;re
            not alone.
          </p>
          <p className="text-gray-300 mb-4">
            The danger is silent burnout — waking up one morning and realising you hate school, your side hustle, and
            everyone who keeps asking for favours. To avoid this, you need systems, not just willpower.
          </p>
          <h2 className="text-xl font-semibold text-white mt-6 mb-3">Design your non‑negotiables</h2>
          <p className="text-gray-300 mb-4">
            Decide which activities are non‑negotiable each week (e.g. key classes, core client work, rest) and block
            them on your calendar. Everything else — group hangouts, extra shifts, random events — comes after these
            anchors.
          </p>
          <h2 className="text-xl font-semibold text-white mt-6 mb-3">Communicate boundaries with love</h2>
          <p className="text-gray-300 mb-4">
            Family expectations are real, especially when they&apos;re supporting your education. Instead of disappearing,
            explain your schedule and why certain time blocks are important. Offer alternatives (“I can help on
            Saturday morning instead”) so that you&apos;re still present without burning out.
          </p>
        </>
      );
    case 'why-global-opportunities-are-closer-than-you-think':
      return (
        <>
          <p className="text-gray-300 mb-4">
            A decade ago, “global opportunity” meant travelling abroad. Today, it often means opening your laptop in
            Ibadan or Kaduna and working with teams in London, Nairobi, or Toronto. Remote internships, online
            scholarships, and global communities have changed the rules.
          </p>
          <p className="text-gray-300 mb-4">
            The real question is no longer “is it possible?” but “am I preparing myself to be seen?”. Global
            programmes still demand solid fundamentals — communication, reliability, and the ability to work across
            time zones and cultures.
          </p>
          <h2 className="text-xl font-semibold text-white mt-6 mb-3">Make yourself discoverable</h2>
          <p className="text-gray-300 mb-4">
            A simple, well‑written LinkedIn profile, a portfolio site, or even a consistently updated GitHub or
            Behance account can make a big difference. When someone Googles your name, what do they find?
          </p>
          <p className="text-gray-300 mb-4">
            The Bridge exists to give you the skills, projects, and community that put you in the same conversation
            as talent anywhere in the world — without losing your Nigerian identity or story.
          </p>
        </>
      );
    default:
      return null;
  }
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-gray-100">
        <Navigation onApplyClick={() => {}} />
        <section className="max-w-3xl mx-auto px-4 py-24">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Link to="/blog" className="text-cyan-400">
            ← Back to Blog
          </Link>
        </section>
        <Footer />
      </div>
    );
  }

  const url = encodeURIComponent(`https://thebridge.local/blog/${post.slug}`);
  const text = encodeURIComponent(post.title);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-gray-100">
      <Navigation onApplyClick={() => {}} />
      <article className="max-w-3xl mx-auto px-4 py-24">
        <Link to="/blog" className="text-cyan-400 text-sm mb-4 inline-block">
          ← Back to Blog
        </Link>

        <img src={post.image} alt={post.title} className="w-full h-72 object-cover rounded-2xl mb-6" />
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center justify-between text-xs text-cyan-300 uppercase tracking-wide mb-6">
          <span>{post.tags.join(' • ')}</span>
          <span>
            {post.readTime} • By {post.author}
          </span>
        </div>

        {renderContent(slug!)}

        {/* Social share */}
        <div className="mt-8 mb-10">
          <h2 className="text-sm font-semibold text-gray-200 mb-2">Share this article</h2>
          <div className="flex gap-3 text-sm">
            <a
              href={`https://twitter.com/intent/tweet?url=${url}&text=${text}`}
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400 hover:text-cyan-300"
            >
              Twitter
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400 hover:text-cyan-300"
            >
              Facebook
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400 hover:text-cyan-300"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Subtle CTA */}
        <div className="glass-effect rounded-2xl p-6 mt-8">
          <h2 className="text-xl font-semibold mb-2">Ready to cross the bridge?</h2>
          <p className="text-gray-300 mb-4">
            If this article resonated with you, your next step might be joining a Bridge pathway, finding a
            mentor, or exploring our LMS.
          </p>
          <Link
            to="/#home"
            className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-accent text-white text-sm font-semibold hover:scale-105 transition-transform"
          >
            Explore programs →
          </Link>
        </div>
      </article>
      <Footer />
    </div>
  );
}

