interface CTAProps {
  onApplyClick: () => void;
}

export default function CTA({ onApplyClick }: CTAProps) {
  return (
    <section id="cta" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-20 blur-3xl"></div>

          <div className="relative glass-effect border-2 border-cyan-400/30 p-12 sm:p-16 space-y-8 text-center">
            <div className="space-y-4 opacity-0 animate-fade-in-up">
              <h2 className="text-4xl sm:text-5xl font-bold text-white">
                Ready to Transform?
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Join thousands of successful Nigerian students and NYSC corpers who have already bridged their way to excellence. Your success story starts here.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <button
                onClick={onApplyClick}
                className="relative px-8 py-4 font-semibold text-white rounded-lg overflow-hidden group transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-accent"></div>
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center gap-2">
                  Apply Today
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>

              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105">
                Schedule a Consultation
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div>
                <p className="text-2xl font-bold text-cyan-400">10K+</p>
                <p className="text-sm text-gray-400">Scholars</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-cyan-400">95%</p>
                <p className="text-sm text-gray-400">Employment</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-cyan-400">4.8/5</p>
                <p className="text-sm text-gray-400">Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}