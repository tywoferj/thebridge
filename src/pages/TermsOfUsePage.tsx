import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-gray-100">
      <Navigation onApplyClick={() => {}} />
      <section className="max-w-4xl mx-auto px-4 py-24">
        <Link to="/" className="text-cyan-400 text-sm mb-6 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-6">Terms of Use</h1>
        <p className="text-gray-300 mb-4">
          These Terms of Use govern your access to and use of The Bridge website, applications, and learning
          platforms. By using our services, you agree to be bound by these Terms and all applicable laws and
          regulations.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Eligibility and accounts</h2>
        <p className="text-gray-300 mb-4">
          You may use The Bridge if you are a student, graduate, NYSC member, or early-career professional, and
          capable of entering into a binding agreement under Nigerian law. You are responsible for maintaining the
          confidentiality of any login details associated with your account and for all activities under your
          account.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Acceptable use</h2>
        <p className="text-gray-300 mb-4">
          You agree not to misuse our content, platforms, or community spaces. Prohibited behaviour includes:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>Plagiarising course materials or submitting others’ work as your own.</li>
          <li>Harassing, bullying, or discriminating against other learners, mentors, or staff.</li>
          <li>Attempting to gain unauthorised access to our systems or data.</li>
          <li>Uploading malware, spam, or any content that is illegal under Nigerian law.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Intellectual property</h2>
        <p className="text-gray-300 mb-4">
          All course materials, designs, trademarks, and other content provided by The Bridge or our partners
          remain their respective intellectual property. You are granted a limited, non-exclusive, non-transferable
          licence to access and use the content solely for personal learning and non-commercial purposes. You may
          not copy, redistribute, sell, or publicly display our content without prior written consent.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Third-party content and links</h2>
        <p className="text-gray-300 mb-4">
          Our programs may include links to third-party websites or resources (such as partner universities,
          scholarship bodies, or tools). We are not responsible for the content, policies, or practices of these
          third parties and you access them at your own risk.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Disclaimer</h2>
        <p className="text-gray-300 mb-4">
          While we work hard to provide high-quality programs and accurate information, The Bridge is provided on
          an &quot;as is&quot; and &quot;as available&quot; basis. We do not guarantee that participation in our programs will
          result in a particular job, admission, or outcome. Nothing on our platforms should be taken as legal,
          financial, or professional advice.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Limitation of liability</h2>
        <p className="text-gray-300 mb-4">
          To the fullest extent permitted by law, The Bridge, its founders, partners, and staff shall not be liable
          for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or data
          arising from your use of (or inability to use) our services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Indemnity</h2>
        <p className="text-gray-300 mb-4">
          You agree to indemnify and hold harmless The Bridge and its partners from any claims, liabilities, and
          expenses (including legal fees) arising out of your misuse of the platforms or violation of these Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Termination</h2>
        <p className="text-gray-300 mb-4">
          We may suspend or terminate your access to The Bridge if you violate these Terms, abuse our community, or
          engage in unlawful activity. Where appropriate, we may also report serious misconduct to relevant
          institutions or authorities.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Governing law</h2>
        <p className="text-gray-300 mb-4">
          These Terms are governed by the laws of the Federal Republic of Nigeria. Any disputes arising out of or
          relating to your use of The Bridge shall be subject to the exclusive jurisdiction of the courts of
          Nigeria.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Changes to these terms</h2>
        <p className="text-gray-300 mb-4">
          We may update these Terms from time to time to reflect changes in our services or legal requirements.
          When we do, we will update the date on this page. Your continued use of The Bridge after any changes
          become effective means you accept the updated Terms.
        </p>

        <p className="text-xs text-gray-500">
          This document is provided for general information and does not constitute legal advice. You should seek
          independent legal counsel for advice specific to your situation.
        </p>
      </section>
      <Footer />
    </div>
  );
}

