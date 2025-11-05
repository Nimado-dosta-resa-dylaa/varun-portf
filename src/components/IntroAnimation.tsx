import { useState, useEffect } from 'react';

const IntroAnimation = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const words = ['Think.', 'Build.', 'Repeat.'];

  useEffect(() => {
    if (currentWord < words.length) {
      const timer = setTimeout(() => {
        setCurrentWord(currentWord + 1);
      }, 1200);
      return () => clearTimeout(timer);
    } else {
      const fadeTimer = setTimeout(() => {
        setFadeOut(true);
      }, 500);
      return () => clearTimeout(fadeTimer);
    }
  }, [currentWord]);

  return (
    <div
      className={`fixed inset-0 bg-black z-50 flex items-center justify-center transition-all duration-1000 ${
        fadeOut ? 'opacity-0 scale-150' : 'opacity-100'
      }`}
    >
      <div className="relative">
        {words.map((word, index) => (
          <div
            key={word}
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ${
              index === currentWord
                ? 'opacity-100 scale-100 translate-y-0'
                : index < currentWord
                ? 'opacity-0 -translate-y-20'
                : 'opacity-0 translate-y-20'
            }`}
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
            }}
          >
            <h1 className="text-7xl md:text-9xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              {word}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntroAnimation;
