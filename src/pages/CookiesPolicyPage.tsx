import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function CookiesPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-gray-100">
      <Navigation onApplyClick={() => {}} />
      <section className="max-w-4xl mx-auto px-4 py-24">
        <Link to="/" className="text-cyan-400 text-sm mb-6 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-6">Cookies Policy</h1>
        <p className="text-gray-300 mb-4">
          This Cookies Policy explains how The Bridge uses cookies and similar technologies on our website and
          learning platforms in line with applicable data protection laws, including the Nigeria Data Protection
          Act (NDPA) and, where relevant, the EU General Data Protection Regulation (GDPR).
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">What are cookies?</h2>
        <p className="text-gray-300 mb-4">
          Cookies are small text files stored on your device when you visit a website. They help us remember your
          preferences, keep you signed in, and understand how you interact with our content. Cookies may be
          &quot;first‑party&quot; (set by The Bridge) or &quot;third‑party&quot; (set by service providers such as analytics or
          communication tools).
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Types of cookies we use</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>
            <span className="font-semibold">Strictly necessary cookies:</span> required for the website and learning
            platforms to function, such as keeping you logged in and managing session security.
          </li>
          <li>
            <span className="font-semibold">Performance and analytics cookies:</span> help us understand how visitors
            use our site (for example, which pages are most visited) so we can improve content and usability.
          </li>
          <li>
            <span className="font-semibold">Preference cookies:</span> remember your settings, such as preferred
            programme categories or interface options, so that you have a more personalised experience.
          </li>
          <li>
            <span className="font-semibold">Communication cookies:</span> support features such as forms, feedback
            widgets, or emails triggered from our website.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">How we use cookies</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>Authentication and security for your learner or corper account.</li>
          <li>Remembering your progress in certain forms or applications.</li>
          <li>Analytics to understand which pages are most useful to Nigerian students and NYSC corpers.</li>
          <li>Improving the performance and reliability of our website and LMS.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Your choices and managing cookies</h2>
        <p className="text-gray-300 mb-4">
          You can manage or disable cookies in your browser settings. Most browsers allow you to block cookies,
          delete existing ones, or receive a warning before a cookie is stored. Please note that some features of
          The Bridge (such as secure login or maintaining your session) may not work properly if essential cookies
          are disabled.
        </p>
        <p className="text-gray-300 mb-4">
          Where required by law, we will ask for your consent before placing non‑essential cookies (for example,
          certain analytics or marketing cookies). You can withdraw your consent at any time by adjusting your
          browser settings or contacting us.
        </p>

        <p className="text-xs text-gray-500">
          For more information about how we handle your personal data overall, please read our Privacy Policy.
        </p>
      </section>
      <Footer />
    </div>
  );
}

