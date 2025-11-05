import { useEffect, useState } from 'react';
import { Code2, Database, GitBranch, Blocks, Globe, Cpu, Lock, Zap } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const skills = [
    {
      name: 'Blockchain',
      icon: Blocks,
      color: 'from-blue-500 to-cyan-500',
      description: 'Smart Contracts & DApps',
    },
    {
      name: 'Solidity',
      icon: Code2,
      color: 'from-cyan-500 to-blue-400',
      description: 'Ethereum Development',
    },
    {
      name: 'Web3',
      icon: Globe,
      color: 'from-blue-400 to-cyan-400',
      description: 'Decentralized Web',
    },
    {
      name: 'React',
      icon: Zap,
      color: 'from-cyan-400 to-blue-500',
      description: 'Frontend Development',
    },
    {
      name: 'Node.js',
      icon: Cpu,
      color: 'from-blue-500 to-cyan-400',
      description: 'Backend Services',
    },
    {
      name: 'Git',
      icon: GitBranch,
      color: 'from-cyan-500 to-blue-500',
      description: 'Version Control',
    },
    {
      name: 'Database',
      icon: Database,
      color: 'from-blue-400 to-cyan-500',
      description: 'Data Management',
    },
    {
      name: 'Cryptography',
      icon: Lock,
      color: 'from-cyan-400 to-blue-400',
      description: 'Security & Encryption',
    },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl bottom-20 left-20 animate-pulse"></div>
      </div>

      <div className="max-w-7xl w-full relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent mb-4"
            style={{ fontFamily: '"Audiowide", sans-serif' }}
          >
            Skills & Expertise
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
          <p
            className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            A diverse toolkit for building the decentralized future
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-8 rounded-2xl border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 cursor-pointer">
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>

                  <div className="absolute inset-0 rounded-2xl shadow-lg shadow-transparent group-hover:shadow-cyan-500/30 transition-shadow duration-500"></div>

                  <div className="relative z-10">
                    <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>

                    <h3
                      className="text-2xl font-bold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors duration-300"
                      style={{ fontFamily: '"Rajdhani", sans-serif' }}
                    >
                      {skill.name}
                    </h3>

                    <p
                      className="text-gray-400 text-center text-sm"
                      style={{ fontFamily: '"Inter", sans-serif' }}
                    >
                      {skill.description}
                    </p>

                    <div className="mt-6 h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000`}
                      ></div>
                    </div>
                  </div>

                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className={`mt-16 text-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p
            className="text-xl text-gray-300 mb-6"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Always learning, always growing
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['TypeScript', 'Python', 'Rust', 'AWS', 'Docker'].map((tech, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-blue-900/50 to-cyan-900/50 rounded-full border border-cyan-500/30 text-cyan-400 font-semibold hover:border-cyan-500 hover:scale-105 transition-all duration-300 cursor-pointer"
                style={{ fontFamily: '"Rajdhani", sans-serif' }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
