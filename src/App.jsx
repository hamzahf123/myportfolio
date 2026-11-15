import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from './components/BlurBlob';

const App = () => {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-ink-950 font-sans text-platinum">

      {/* Ambient light: champagne, deep navy and a trace of platinum */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <BlurBlob tone="gold" position={{ top: '6%', left: '14%' }} size={{ width: '58vw', height: '58vw' }} />
        <BlurBlob tone="navy" position={{ top: '62%', left: '92%' }} size={{ width: '64vw', height: '64vw' }} delay="-12s" />
        <BlurBlob tone="platinum" position={{ top: '100%', left: '30%' }} size={{ width: '48vw', height: '48vw' }} delay="-24s" />
      </div>
      <div aria-hidden="true" className="vignette" />
      <div aria-hidden="true" className="grain" />

      <div className="relative z-10">
        <Navbar />
        <main>
          <About />
          <Skills />
          <Experience />
          <Work />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
