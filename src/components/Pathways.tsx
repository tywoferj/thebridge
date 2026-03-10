interface PathwayItem {
  id: string;
  type: 'student' | 'corper';
  title: string;
  image: string;
  benefits: string[];
  programs: number;
  description: string;
}

const pathways: PathwayItem[] = [
  {
    id: 'students',
    type: 'student',
    title: 'General Students',
    image: '/focused-female.webp',
    description: 'Unlock your potential while still in school',
    benefits: ['Scholarships', 'Internships', 'Mentorship', 'Certification'],
    programs: 25,
  },
  {
    id: 'corpers',
    type: 'corper',
    title: 'NYSC Corpers',
    image: '/NYSC.webp',
    description: 'Bridge your service year to career success',
    benefits: ['Career Transition', 'Professional Skills', 'Job Placement', 'Networking'],
    programs: 18,
  },
];

export default function Pathways() {
  return (
    <section id="pathways" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 -top-96 -left-96"></div>
        <div className="absolute w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 -bottom-96 -right-96"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block px-4 py-2 bg-blue-400/10 border border-blue-400/30 rounded-full">
            <span className="text-sm font-semibold text-cyan-400">Tailored Pathways</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="text-white">Choose Your</span>
            <span className="block text-gradient">Success Journey</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {pathways.map((pathway, index) => (
            <div
              key={pathway.id}
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <div className="group relative h-full rounded-2xl overflow-hidden cursor-pointer">
                <div className="absolute inset-0">
                  <img
                    src={pathway.image}
                    alt={pathway.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                </div>

                <div className="relative h-full flex flex-col justify-end p-8 text-white min-h-96">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-3xl font-bold mb-2">{pathway.title}</h3>
                        <p className="text-gray-300 text-sm">{pathway.description}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-4xl font-bold text-gradient">{pathway.programs}</p>
                        <p className="text-xs text-gray-400">Programs</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {pathway.benefits.map((benefit, idx) => (
                        <div
                          key={idx}
                          className="glass-effect px-3 py-2 rounded-lg text-sm font-medium text-cyan-300 border-cyan-300/30 opacity-0 group-hover:opacity-100 transition-all duration-300"
                          style={{ animationDelay: `${0.3 + 0.1 * idx}s` }}
                        >
                          {benefit}
                        </div>
                      ))}
                    </div>

                    <button className="w-full mt-4 px-6 py-3 bg-gradient-accent text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 opacity-0 group-hover:opacity-100">
                      Explore {pathway.title}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}