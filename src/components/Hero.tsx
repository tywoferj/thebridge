interface HeroProps {
  onApplyClick: () => void;
}

export default function Hero({ onApplyClick }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -top-40 -right-40 animate-float"></div>
        <div className="absolute w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -bottom-40 -left-40 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="inline-block px-4 py-2 bg-blue-400/10 border border-blue-400/30 rounded-full">
                <span className="text-sm font-semibold text-cyan-400">Empowering Future Leaders</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-white">Bridge Your</span>
                <span className="block text-gradient">Future Today</span>
              </h1>

              <p className="text-lg text-gray-300 leading-relaxed max-w-md">
                Transform your potential into excellence. Access world-class education, mentorship, and opportunities designed for ambitious Nigerian students and NYSC corpers.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <button
                onClick={onApplyClick}
                className="px-8 py-4 bg-gradient-accent text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 group flex items-center justify-center gap-2"
              >
                Apply Now
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>

              <button
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105"
              >
                Explore Programs
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="glass-effect p-4 rounded-lg">
                <p className="text-2xl font-bold text-cyan-400">10K+</p>
                <p className="text-xs text-gray-400">Scholars</p>
              </div>
              <div className="glass-effect p-4 rounded-lg">
                <p className="text-2xl font-bold text-cyan-400">50+</p>
                <p className="text-xs text-gray-400">Programs</p>
              </div>
              <div className="glass-effect p-4 rounded-lg">
                <p className="text-2xl font-bold text-cyan-400">100%</p>
                <p className="text-xs text-gray-400">Success Rate</p>
              </div>
            </div>
          </div>

          <div className="relative opacity-0 animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
            <div className="relative flex items-center justify-center">
              {/* Soft platform to hide image cutoff */}
              <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-slate-950/90 blur-xl rounded-full border border-cyan-500/10" />

              <img
                src="/Students.webp"
                alt="Students at The Bridge"
                className="relative z-10 w-auto object-contain max-h-[520px] sm:max-h-[580px] lg:max-h-[640px]"
              />

              <div className="absolute -bottom-6 -right-6 bg-gradient-accent p-4 rounded-lg shadow-2xl shadow-cyan-500/40 animate-float z-20">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold">Excellence</p>
                    <p className="text-white/80 text-sm">Certified Program</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}