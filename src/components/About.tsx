import { useEffect, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSection, setHoveredSection] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const chartData = [
    { label: 'Blockchain', percentage: 30, color: 'from-blue-500 to-blue-600', delay: '0s' },
    { label: 'Development', percentage: 25, color: 'from-cyan-500 to-cyan-600', delay: '0.1s' },
    { label: 'Learning', percentage: 20, color: 'from-blue-400 to-blue-500', delay: '0.2s' },
    { label: 'Design', percentage: 15, color: 'from-cyan-400 to-cyan-500', delay: '0.3s' },
    { label: 'Innovation', percentage: 10, color: 'from-blue-300 to-blue-400', delay: '0.4s' },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl top-20 right-20 animate-pulse"></div>
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
            About Me
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <p
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              I'm a <span className="text-cyan-400 font-semibold">3rd-year B.Tech CSE student</span> specializing in <span className="text-blue-400 font-semibold">Blockchain Technology</span>. My journey in tech is driven by curiosity and a passion for creating decentralized solutions that make a difference.
            </p>

            <p
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              I believe in the philosophy of <span className="text-cyan-400 font-semibold">"Think. Build. Repeat."</span> — constantly learning, experimenting, and iterating to create innovative solutions in the blockchain space.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-6 rounded-xl border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                <h3 className="text-3xl font-bold text-cyan-400 mb-2" style={{ fontFamily: '"Rajdhani", sans-serif' }}>
                  3+
                </h3>
                <p className="text-gray-400" style={{ fontFamily: '"Inter", sans-serif' }}>Years Learning</p>
              </div>
              <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-6 rounded-xl border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                <h3 className="text-3xl font-bold text-cyan-400 mb-2" style={{ fontFamily: '"Rajdhani", sans-serif' }}>
                  10+
                </h3>
                <p className="text-gray-400" style={{ fontFamily: '"Inter", sans-serif' }}>Projects Built</p>
              </div>
            </div>
          </div>

          <div
            className={`relative flex items-center justify-center transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <svg viewBox="0 0 400 400" className="transform -rotate-90">
                {chartData.map((item, index) => {
                  const previousPercentages = chartData.slice(0, index).reduce((acc, curr) => acc + curr.percentage, 0);
                  const circumference = 2 * Math.PI * 140;
                  const offset = (previousPercentages / 100) * circumference;
                  const dasharray = `${(item.percentage / 100) * circumference} ${circumference}`;

                  return (
                    <g key={index}>
                      <circle
                        cx="200"
                        cy="200"
                        r="140"
                        fill="none"
                        stroke={`url(#gradient-${index})`}
                        strokeWidth={hoveredSection === index ? "45" : "40"}
                        strokeDasharray={dasharray}
                        strokeDashoffset={-offset}
                        className="transition-all duration-500 cursor-pointer"
                        style={{
                          filter: hoveredSection === index ? 'drop-shadow(0 0 10px rgba(6, 182, 212, 0.8))' : 'none',
                          animationDelay: item.delay,
                        }}
                        onMouseEnter={() => setHoveredSection(index)}
                        onMouseLeave={() => setHoveredSection(null)}
                      />
                      <defs>
                        <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor={item.color.includes('blue-500') ? '#3b82f6' : item.color.includes('cyan-500') ? '#06b6d4' : item.color.includes('blue-400') ? '#60a5fa' : item.color.includes('cyan-400') ? '#22d3ee' : '#93c5fd'} />
                          <stop offset="100%" stopColor={item.color.includes('blue-600') ? '#2563eb' : item.color.includes('cyan-600') ? '#0891b2' : item.color.includes('blue-500') ? '#3b82f6' : item.color.includes('cyan-500') ? '#06b6d4' : '#60a5fa'} />
                        </linearGradient>
                      </defs>
                    </g>
                  );
                })}
              </svg>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div
                    className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
                    style={{ fontFamily: '"Orbitron", sans-serif' }}
                  >
                    100%
                  </div>
                  <div className="text-gray-400 text-lg mt-2" style={{ fontFamily: '"Inter", sans-serif' }}>
                    Dedicated
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`mt-16 grid grid-cols-2 md:grid-cols-5 gap-4 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {chartData.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-lg border border-cyan-500/10 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredSection(index)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${item.color}`}></div>
              <div>
                <div className="text-white font-semibold" style={{ fontFamily: '"Rajdhani", sans-serif' }}>
                  {item.label}
                </div>
                <div className="text-cyan-400 text-sm" style={{ fontFamily: '"Inter", sans-serif' }}>
                  {item.percentage}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
