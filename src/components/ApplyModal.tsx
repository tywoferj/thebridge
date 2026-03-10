import { useState } from 'react';
import { X } from 'lucide-react';

interface ApplyModalProps {
  onClose: () => void;
}

export default function ApplyModal({ onClose }: ApplyModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    category: 'student',
    institution: '',
    program: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage('Application submitted successfully! We will contact you soon.');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          category: 'student',
          institution: '',
          program: '',
          message: '',
        });
        setTimeout(() => {
          onClose();
        }, 2000);
      }
    } catch (error) {
      setSubmitMessage('Error submitting application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative glass-effect border border-cyan-400/30 rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-cyan-500/20 animate-scale-in">
        <div className="sticky top-0 bg-gradient-to-b from-blue-950/80 to-transparent p-6 border-b border-cyan-400/10 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">Apply to The Bridge</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-blue-400/10 rounded-lg transition-colors"
          >
            <X size={24} className="text-gray-400 hover:text-white" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-blue-900/30 border border-blue-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-blue-900/30 border border-blue-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-blue-900/30 border border-blue-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
              placeholder="+234 (0) 800 000 0000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Category *
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-blue-900/30 border border-blue-400/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
            >
              <option value="student" className="bg-slate-900">Nigerian Student</option>
              <option value="corper" className="bg-slate-900">NYSC Corper</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              {formData.category === 'student' ? 'School/Institution' : 'Deployment State'} *
            </label>
            <input
              type="text"
              name="institution"
              value={formData.institution}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-blue-900/30 border border-blue-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
              placeholder={formData.category === 'student' ? 'Your school name' : 'Your deployment state'}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Preferred Program *
            </label>
            <select
              name="program"
              value={formData.program}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-blue-900/30 border border-blue-400/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
            >
              <option value="" className="bg-slate-900">Select a program</option>
              <option value="tech" className="bg-slate-900">Technology & Innovation</option>
              <option value="business" className="bg-slate-900">Business & Entrepreneurship</option>
              <option value="leadership" className="bg-slate-900">Leadership Development</option>
              <option value="digital" className="bg-slate-900">Digital Skills</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Additional Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-2 bg-blue-900/30 border border-blue-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
              placeholder="Tell us a bit about yourself..."
            />
          </div>

          {submitMessage && (
            <div className={`p-3 rounded-lg text-sm font-medium ${
              submitMessage.includes('successfully')
                ? 'bg-green-500/20 border border-green-400/30 text-green-300'
                : 'bg-red-500/20 border border-red-400/30 text-red-300'
            }`}>
              {submitMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-6 px-6 py-3 bg-gradient-accent text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Submitting...
              </>
            ) : (
              <>
                Submit Application
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </>
            )}
          </button>

          <p className="text-xs text-gray-500 text-center">
            We respect your privacy. Your information will never be shared.
          </p>
        </form>
      </div>
    </div>
  );
}