import { User } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 md:px-12 lg:px-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-64 h-64 bg-blue-400/5 rounded-full blur-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl w-full relative z-10">
        <div
          className={`space-y-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}
        >
          <div className="space-y-4">
            <h2
              className="text-xl md:text-2xl text-cyan-400 tracking-wider"
              style={{ fontFamily: '"Orbitron", sans-serif' }}
            >
              Hello, I'm
            </h2>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-400 bg-clip-text text-transparent leading-tight"
              style={{ fontFamily: '"Audiowide", sans-serif' }}
            >
              Varun Choudhary
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
          </div>

          <p
            className="text-xl md:text-2xl text-gray-300 leading-relaxed"
            style={{ fontFamily: '"Rajdhani", sans-serif' }}
          >
            <span className="text-cyan-400 font-semibold">B.Tech CSE</span> | Blockchain Developer
          </p>

          <p
            className="text-lg md:text-xl text-gray-400 leading-relaxed w-full md:w-[85%]"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            3rd year student passionate about building decentralized solutions and crafting innovative blockchain experiences. Transforming ideas into reality, one block at a time.
          </p>

          <div className="flex gap-6 pt-4">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg font-semibold text-white shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/70 transform hover:-translate-y-1 transition-all duration-300">
              View Projects
            </button>
            <button className="px-8 py-4 border-2 border-cyan-400 rounded-lg font-semibold text-cyan-400 hover:bg-cyan-400/10 transform hover:-translate-y-1 transition-all duration-300">
              Contact Me
            </button>
          </div>
        </div>

        <div
          className={`relative flex items-center justify-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500 animate-pulse"></div>

            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-cyan-400/30 shadow-2xl shadow-cyan-500/50 transform group-hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-cyan-900/80 flex items-center justify-center">
                <User className="w-48 h-48 text-cyan-300" strokeWidth={1.5} />
              </div>
            </div>

            <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg rotate-12 opacity-80 animate-float shadow-lg shadow-blue-500/50"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-400 rounded-lg -rotate-12 opacity-80 animate-float shadow-lg shadow-cyan-500/50" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/4 -right-12 w-16 h-16 border-4 border-cyan-400/50 rounded-lg rotate-45 animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
