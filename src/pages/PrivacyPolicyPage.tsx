import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-gray-100">
      <Navigation onApplyClick={() => {}} />
      <section className="max-w-4xl mx-auto px-4 py-24">
        <Link to="/" className="text-cyan-400 text-sm mb-6 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-300 mb-4">
          At The Bridge, we are committed to protecting the privacy of Nigerian students, graduates, and NYSC
          members who trust us with their data. This Privacy Policy explains how we collect, use, share, and
          protect your information in line with applicable data protection laws, including the Nigeria Data
          Protection Act (NDPA) and, where relevant, the EU General Data Protection Regulation (GDPR).
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Who we are</h2>
        <p className="text-gray-300 mb-4">
          The Bridge (referred to as &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) provides learning, mentoring, and
          career development programs for young people. For the purposes of data protection law, we act as the
          &quot;data controller&quot; for personal data we collect about you in connection with our services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Information we collect</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>Contact details such as your name, email address, phone number, and location.</li>
          <li>Education and career information, including institution, course of study, NYSC status, and work history.</li>
          <li>
            Application and enrolment data, such as programs you apply for, assessments completed, and progress
            in our pathways.
          </li>
          <li>
            Usage data from our website and LMS, such as pages visited, time spent, device information, and
            approximate location.
          </li>
          <li>
            Communications data, including messages you send to us, survey responses, and feedback provided during
            programs.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Legal bases for processing</h2>
        <p className="text-gray-300 mb-4">
          We process your personal data on one or more of the following legal bases, as permitted under the NDPA,
          GDPR, and other applicable laws:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>
            <span className="font-semibold">Consent:</span> where you have given us clear permission to process your
            data for a specific purpose (for example, to receive newsletters).
          </li>
          <li>
            <span className="font-semibold">Contract:</span> where processing is necessary to enter into or perform
            our agreement with you (for example, to deliver a program you enrolled in).
          </li>
          <li>
            <span className="font-semibold">Legitimate interests:</span> where processing is necessary for our
            legitimate educational and business interests and does not override your rights (for example, improving
            our services, preventing fraud).
          </li>
          <li>
            <span className="font-semibold">Legal obligation:</span> where we are required to process or retain data
            to comply with applicable laws or regulatory requirements.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">How we use your information</h2>
        <p className="text-gray-300 mb-4">
          We use your information only for purposes that are compatible with this Policy, including:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>Delivering learning programs, workshops, and events you register for.</li>
          <li>Managing applications, assessments, and placements into pathways and opportunities.</li>
          <li>Personalising content and recommendations based on your profile and interests.</li>
          <li>Communicating with you about programs, updates, and opportunities that may be relevant to you.</li>
          <li>Improving our website, LMS, and learner experience through analytics and feedback.</li>
          <li>Protecting our platforms against fraud, abuse, and security incidents.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Our service providers (processors) and sharing</h2>
        <p className="text-gray-300 mb-4">
          We do not sell your personal data. We only share it with trusted third parties that help us operate and
          improve The Bridge. These organisations act as &quot;data processors&quot; and may only process your data
          according to our instructions and under appropriate contractual safeguards.
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>
            <span className="font-semibold">Cloud hosting and database providers</span> that store our website,
            learning platforms, and user databases.
          </li>
          <li>
            <span className="font-semibold">Authentication and security tools</span> that manage sign‑in, access
            control, and security monitoring.
          </li>
          <li>
            <span className="font-semibold">Email and communication providers</span> that deliver transactional
            messages, programme announcements, and optional newsletters.
          </li>
          <li>
            <span className="font-semibold">Web analytics providers</span> that help us understand how visitors use
            our website so we can improve content and usability.
          </li>
          <li>
            <span className="font-semibold">Partner universities, employers, and mentors</span> where sharing a
            limited amount of data is necessary to deliver a programme or opportunity that you have applied for.
          </li>
          <li>
            <span className="font-semibold">Regulators, law enforcement, or other authorities</span> where we are
            legally required to disclose information.
          </li>
        </ul>
        <p className="text-gray-300 mb-4">
          Some of these providers may process data outside Nigeria. Where this happens, we take reasonable steps to
          ensure appropriate safeguards are in place, consistent with NDPA and, where applicable, GDPR requirements,
          such as data protection agreements, access controls, and security standards.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Data retention</h2>
        <p className="text-gray-300 mb-4">
          We keep your personal data only for as long as necessary for the purposes described in this Policy or as
          required by law. In general:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>
            <span className="font-semibold">Account and profile data</span> is kept for as long as you have an
            active account with The Bridge and for up to three (3) years after your last interaction with us, so
            that you can return to programmes and for reporting and audit purposes.
          </li>
          <li>
            <span className="font-semibold">Application and assessment data</span> is kept for up to three (3) years
            after the end of the relevant application cycle, to allow us to review cohorts and manage any disputes
            or appeals.
          </li>
          <li>
            <span className="font-semibold">Marketing and communication preferences</span> are kept until you
            unsubscribe or withdraw your consent, at which point we will stop sending you those communications.
          </li>
          <li>
            <span className="font-semibold">Technical logs and analytics data</span> are typically kept for up to
            twelve (12) months, unless we need to retain them longer for security investigations or to comply with
            legal obligations.
          </li>
        </ul>
        <p className="text-gray-300 mb-4">
          When data is no longer required, we will securely delete it or irreversibly anonymise it so that it can no
          longer be linked back to you.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Your rights</h2>
        <p className="text-gray-300 mb-4">
          Depending on your location and applicable law, you may have rights including:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>Access to the personal data we hold about you.</li>
          <li>Correction of inaccurate or incomplete data.</li>
          <li>Deletion of your data in certain circumstances (&quot;right to be forgotten&quot;).</li>
          <li>Restriction or objection to certain types of processing.</li>
          <li>Portability of your data to another service provider, where technically feasible.</li>
          <li>Withdrawal of consent, where we rely on your consent to process data.</li>
        </ul>
        <p className="text-gray-300 mb-4">
          To exercise any of these rights, please contact us using the details below. We may need to verify your
          identity before responding to your request.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Contact us</h2>
        <p className="text-gray-300 mb-4">
          If you have questions about this Privacy Policy or how we handle your personal data, you can contact us
          at <span className="text-cyan-400">privacy@thebridge.ng</span>.
        </p>

        <p className="text-xs text-gray-500">
          This Policy is provided for information only and does not constitute legal advice. We may update it from
          time to time to reflect changes in our practices or applicable law.
        </p>
      </section>
      <Footer />
    </div>
  );
}

