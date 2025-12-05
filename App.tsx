import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Organizations from './components/Organizations';
import Skills from './components/Skills';
import Services from './components/Services';
import AskTheUniverse from './components/AskTheUniverse';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';

const App: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-dark-bg font-poppins text-white selection:bg-vermilion selection:text-white">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Education />
        <Experience />
        <Organizations />
        <Skills />
        <Services />
        <AskTheUniverse />
        <Contact />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default App;