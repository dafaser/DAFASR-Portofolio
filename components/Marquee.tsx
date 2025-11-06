
import React from 'react';

const marqueeTexts = [
  "Passionate about creating positive impact through problem-solving.",
  "Every challenge is a chance to grow, learn, and contribute.",
  "Focused on progress, not perfection.",
  "Great work starts with curiosity and dedication.",
  "I believe meaningful solutions come from understanding people.",
  "Consistency beats motivation — small steps every day.",
  "Listening first, executing with clarity.",
  "Good decisions come from good data, empathy, and structure.",
  "Learning doesn’t stop at graduation — it's a lifelong process.",
  "Professional mindset, humble attitude, strong work ethic."
];

const MarqueeItems: React.FC = () => (
  <>
    {marqueeTexts.map((text, index) => (
      <React.Fragment key={index}>
        <span className="text-xl md:text-2xl font-semibold font-grotesk whitespace-nowrap px-12 text-white text-glow">
          {text}
        </span>
        <span className="text-vermilion text-2xl mx-4 shrink-0">◆</span>
      </React.Fragment>
    ))}
  </>
);

const Marquee: React.FC = () => {
  return (
    <section className="bg-dark-card h-[120px] flex items-center overflow-hidden border-y border-border-gray">
      <div className="flex animate-marquee">
        <div className="flex items-center shrink-0">
          <MarqueeItems />
        </div>
        <div className="flex items-center shrink-0" aria-hidden="true">
          <MarqueeItems />
        </div>
      </div>
    </section>
  );
};

export default Marquee;
