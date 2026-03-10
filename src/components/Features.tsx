import { Users, Target, Zap, Award, BookOpen, Briefcase } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'World-Class Education',
    description: 'Access premium courses curated by industry experts with real-world applications.',
  },
  {
    icon: Users,
    title: 'Expert Mentorship',
    description: 'Learn directly from accomplished professionals and successful entrepreneurs.',
  },
  {
    icon: Briefcase,
    title: 'Career Opportunities',
    description: 'Connect with top companies and secure internships or full-time positions.',
  },
  {
    icon: Award,
    title: 'Certified Programs',
    description: 'Earn recognized certifications that enhance your professional portfolio.',
  },
  {
    icon: Target,
    title: 'Personalized Guidance',
    description: 'Get tailored career roadmaps aligned with your goals and aspirations.',
  },
  {
    icon: Zap,
    title: 'Cutting-Edge Skills',
    description: 'Master in-demand skills in technology, business, and leadership.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block px-4 py-2 bg-blue-400/10 border border-blue-400/30 rounded-full">
            <span className="text-sm font-semibold text-cyan-400">Why Choose The Bridge</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="text-white">Transform Your Future</span>
            <span className="block text-gradient">with Premium Benefits</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We provide everything you need to excel in your academic and professional journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="relative h-full glass-effect p-8 rounded-xl hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>

                  <div className="relative space-y-4">
                    <div className="w-14 h-14 bg-gradient-accent rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300 group-hover:scale-110">
                      <Icon size={24} className="text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>

                    <div className="pt-4 flex items-center text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Learn more
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}