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
        fadeOut ? 'opacity-0 scale-110' : 'opacity-100'
      }`}
    >
      <div className="relative w-full flex justify-center items-center h-screen">
        {words.map((word, index) => (
          <div
            key={word}
            className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ${
              index === currentWord
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-75'
            }`}
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
              textAlign: 'center',
              // wave effect: more skew for each word for dramatic style
              transform: `
                ${index === currentWord ? '' : 'scaleX(0.8)'}
                skewY(${index === currentWord ? (index % 2 === 0 ? '-6deg' : '6deg') : '0deg'})
                translate(-50%, -50%)
              `,
              fontWeight: 'bold',
              color: 'white',
              fontSize: '5em',
              letterSpacing: '0.02em',
              transition: 'filter 0.6s, opacity 0.6s, transform 0.7s',
              filter: index === currentWord ? 'blur(0)' : 'blur(8px)',
            }}
          >
            {word}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntroAnimation;
