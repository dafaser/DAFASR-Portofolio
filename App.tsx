
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Organizations from './components/Organizations';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';

const App: React.FC = () => {
  return (
    <div className="bg-dark-bg font-poppins text-white selection:bg-vermilion selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Organizations />
        <Services />
        <Contact />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default App;
