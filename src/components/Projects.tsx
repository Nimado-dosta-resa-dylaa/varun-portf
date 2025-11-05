import { useEffect, useState } from 'react';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

const Projects = () => {
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

    const element = document.getElementById('projects');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const projects = [
    {
      title: 'DeFi Trading Platform',
      description: 'Decentralized finance platform with automated market making and liquidity pools.',
      tech: ['Solidity', 'React', 'Web3.js', 'Hardhat'],
      color: 'from-blue-600 to-cyan-600',
      featured: true,
    },
    {
      title: 'NFT Marketplace',
      description: 'Full-stack marketplace for creating, buying, and selling NFTs on Ethereum.',
      tech: ['Smart Contracts', 'IPFS', 'Next.js', 'Ethers.js'],
      color: 'from-cyan-600 to-blue-500',
      featured: true,
    },
    {
      title: 'DAO Governance',
      description: 'Decentralized autonomous organization with voting and proposal mechanisms.',
      tech: ['Solidity', 'TypeScript', 'The Graph', 'React'],
      color: 'from-blue-500 to-cyan-500',
      featured: false,
    },
    {
      title: 'Supply Chain Tracker',
      description: 'Blockchain-based supply chain management with real-time tracking.',
      tech: ['Hyperledger', 'Node.js', 'MongoDB', 'React'],
      color: 'from-cyan-500 to-blue-400',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl top-40 left-1/2 transform -translate-x-1/2 animate-pulse"></div>
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
            Featured Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
          <p
            className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Building innovative solutions in the blockchain ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              } ${project.featured ? 'md:col-span-1' : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-full bg-gradient-to-br from-blue-900/40 to-cyan-900/40 p-8 rounded-2xl border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

                <div className="relative z-10">
                  {project.featured && (
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles className="w-5 h-5 text-cyan-400" />
                      <span className="text-cyan-400 text-sm font-semibold" style={{ fontFamily: '"Rajdhani", sans-serif' }}>
                        FEATURED
                      </span>
                    </div>
                  )}

                  <h3
                    className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300"
                    style={{ fontFamily: '"Rajdhani", sans-serif' }}
                  >
                    {project.title}
                  </h3>

                  <p
                    className="text-gray-300 mb-6 leading-relaxed"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-blue-900/50 rounded-lg text-cyan-400 text-sm font-semibold border border-cyan-500/20 group-hover:border-cyan-500/40 transition-colors duration-300"
                        style={{ fontFamily: '"Rajdhani", sans-serif' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg font-semibold text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300">
                      <ExternalLink className="w-4 h-4" />
                      <span style={{ fontFamily: '"Rajdhani", sans-serif' }}>Live Demo</span>
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 border-2 border-cyan-400 rounded-lg font-semibold text-cyan-400 hover:bg-cyan-400/10 transform hover:scale-105 transition-all duration-300">
                      <Github className="w-4 h-4" />
                      <span style={{ fontFamily: '"Rajdhani", sans-serif' }}>Code</span>
                    </button>
                  </div>
                </div>

                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-cyan-500/10 to-transparent rounded-tl-full transform translate-x-16 translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 text-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <button className="px-8 py-4 bg-gradient-to-r from-blue-900/50 to-cyan-900/50 rounded-lg font-semibold text-cyan-400 border-2 border-cyan-500/30 hover:border-cyan-500 hover:scale-105 transition-all duration-300">
            <span style={{ fontFamily: '"Rajdhani", sans-serif' }}>View All Projects</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
