
import React, { useRef, useMemo } from 'react';
import { LinkedInIcon, WhatsAppIcon, DocumentIcon } from './icons';

const PARALLAX_STRENGTH = {
  bg: 5,
  particles: 20,
  content: 40,
};
const NUM_PARTICLES = 50;

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!heroRef.current) return;
    const { clientX, clientY } = e;
    const { offsetWidth, offsetHeight } = heroRef.current;
    
    const x = (clientX - offsetWidth / 2) / (offsetWidth / 2);
    const y = (clientY - offsetHeight / 2) / (offsetHeight / 2);

    for (const child of heroRef.current.children) {
        const layer = child as HTMLElement;
        const strength = Number(layer.dataset.strength) || 0;
        layer.style.transform = `translate3d(${-x * strength}px, ${-y * strength}px, 0)`;
    }
  };
  
  const particles = useMemo(() => {
    return Array.from({ length: NUM_PARTICLES }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      opacity: Math.random() * 0.5 + 0.2,
      animationDuration: `${Math.random() * 15 + 10}s`,
      animationDelay: `${Math.random() * 5}s`,
    }));
  }, []);

  return (
    <section 
      id="hero" 
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen flex items-center justify-center relative overflow-hidden p-6"
      style={{ perspective: '1000px' }}
    >
      {/* Background Layer */}
      <div 
        data-strength={PARALLAX_STRENGTH.bg}
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{ willChange: 'transform' }}
      >
        <div className="absolute inset-0 bg-dark-bg"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] bg-vermilion rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      {/* Particles Layer */}
      <div 
        data-strength={PARALLAX_STRENGTH.particles}
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{ willChange: 'transform' }}
      >
        {particles.map(p => (
          <div
            key={p.id}
            className="absolute rounded-full bg-neon-accent animate-float"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              animationDuration: p.animationDuration,
              animationDelay: p.animationDelay,
            }}
          />
        ))}
      </div>

      {/* Content Layer */}
      <div 
        data-strength={PARALLAX_STRENGTH.content}
        className="text-center z-10 transition-transform duration-300 ease-out"
        style={{ willChange: 'transform' }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-grotesk tracking-tight mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Solving Problems with{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-vermilion to-neon-accent">
            Tech & Empathy
          </span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-light-gray mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Fresh Graduate IS Student @ Universitas Indonesia | Ex Bank Mandiri (BCM Dept / IT Risk Management)
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <a href="https://drive.google.com/file/d/1WaiUJ8ttDCk6eCt6xGQwvxNu1UQIs_8A/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-vermilion text-white font-semibold rounded-lg shadow-glow hover:bg-neon-accent transition-all duration-300 transform hover:scale-105">
            <DocumentIcon /> View My CV
          </a>
          <a href="https://www.linkedin.com/in/dafasr/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-vermilion text-white font-semibold rounded-lg hover:bg-vermilion hover:shadow-glow transition-all duration-300 transform hover:scale-105">
            <LinkedInIcon /> Connect on LinkedIn
          </a>
          <a href="https://wa.me/6285155060832" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-light-gray text-light-gray font-semibold rounded-lg hover:border-vermilion hover:text-white transition-all duration-300 transform hover:scale-105">
            <WhatsAppIcon /> Contact via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;