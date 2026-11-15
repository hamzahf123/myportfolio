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
    <div className="bg-[#030014] min-h-screen relative overflow-hidden">

      {/* Soft Glow Blobs */}
      <BlurBlob position={{ top: '20%', left: '15%' }} size={{ width: '35%', height: '40%' }} />
      <BlurBlob position={{ top: '60%', left: '80%' }} size={{ width: '30%', height: '35%' }} />
      <BlurBlob position={{ top: '80%', left: '25%' }} size={{ width: '25%', height: '30%' }} />

      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f15_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f15_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_100%)] pointer-events-none"></div>
      
      <div className="relative pt-20">
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
