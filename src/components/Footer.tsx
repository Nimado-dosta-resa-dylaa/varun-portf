import { Github, Linkedin, Mail, Twitter, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative px-6 md:px-12 lg:px-24 py-16 border-t border-cyan-500/20">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3
              className="text-3xl font-bold bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent mb-4"
              style={{ fontFamily: '"Audiowide", sans-serif' }}
            >
              Varun Choudhary
            </h3>
            <p
              className="text-gray-400 leading-relaxed"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              B.Tech CSE Student specializing in Blockchain Technology. Building the decentralized future, one block at a time.
            </p>
          </div>

          <div>
            <h4
              className="text-xl font-bold text-white mb-4"
              style={{ fontFamily: '"Rajdhani", sans-serif' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Skills', 'Projects'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-xl font-bold text-white mb-4"
              style={{ fontFamily: '"Rajdhani", sans-serif' }}
            >
              Connect With Me
            </h4>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-lg border border-cyan-500/20 flex items-center justify-center hover:border-cyan-500/50 hover:scale-110 transition-all duration-300 group"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-lg border border-cyan-500/20 flex items-center justify-center hover:border-cyan-500/50 hover:scale-110 transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-lg border border-cyan-500/20 flex items-center justify-center hover:border-cyan-500/50 hover:scale-110 transition-all duration-300 group"
              >
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-lg border border-cyan-500/20 flex items-center justify-center hover:border-cyan-500/50 hover:scale-110 transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
              </a>
            </div>
            <p
              className="text-gray-400 text-sm"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              varun.choudhary@example.com
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-cyan-500/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            className="text-gray-500 text-sm"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            © 2025 Varun Choudhary. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <p
              className="text-gray-500 text-sm"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              Think. Build. Repeat.
            </p>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg shadow-blue-500/30"
            >
              <ArrowUp className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
