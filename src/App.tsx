import { useState, useEffect } from 'react';
import IntroAnimation from './components/IntroAnimation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {showIntro ? (
        <IntroAnimation />
      ) : (
        <main className="bg-gradient-to-br from-black via-gray-900 to-blue-950 min-h-screen">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Footer />
        </main>
      )}
    </div>
  );
}

export default App;
