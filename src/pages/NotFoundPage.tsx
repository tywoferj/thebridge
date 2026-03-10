import { Link, useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-gray-100 flex flex-col">
      <Navigation />

      <main className="flex-1 flex items-center justify-center px-4 pt-24 pb-16">
        <div className="max-w-2xl w-full text-center space-y-8">
          <div className="flex justify-center">
            <img
              src="https://images.pexels.com/photos/4109995/pexels-photo-4109995.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Confused student looking at laptop"
              className="w-full max-w-md rounded-2xl shadow-2xl border border-slate-800 object-cover"
            />
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold tracking-widest text-teal-400 uppercase">
              404 – Page not found
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold">
              Looks like this class hasn&apos;t started yet.
            </h1>
            <p className="text-slate-300">
              The page you&apos;re looking for doesn&apos;t exist or has moved.
              Maybe you took a wrong turn on your learning journey — it happens to the best of us.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-6 py-3 rounded-full border border-slate-600 text-slate-100 hover:bg-slate-800/60 transition-colors"
            >
              Go Back
            </button>
            <Link
              to="/"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-teal-500 to-orange-400 text-slate-950 font-semibold hover:opacity-90 transition-opacity"
            >
              Back to Home
            </Link>
          </div>

          <p className="text-xs text-slate-400">
            Tip: Use the navigation at the top to jump to the right part of The Bridge.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

