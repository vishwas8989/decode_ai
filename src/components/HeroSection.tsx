import React from 'react';
import { Code, ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="relative bg-gradient-to-r from-blue-800 to-purple-900 min-h-screen flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 left-20 text-9xl text-white font-mono">{'{}'}</div>
        <div className="absolute bottom-20 right-20 text-9xl text-white font-mono">{'</>'}</div>
        <div className="absolute top-1/3 left-1/2 text-6xl text-white font-mono">{'for()'}</div>
        <div className="absolute bottom-1/3 right-1/3 text-6xl text-white font-mono">{'if()'}</div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center justify-center p-2 bg-white rounded-full mb-6 animate-bounce">
            <Code className="h-10 w-10 text-blue-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            KNIT <span className="text-orange-400">Programming</span> Club
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mb-8">
            Fostering innovation, collaboration, and excellence in programming 
            at Kamla Nehru Institute of Technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#join"
              className="px-8 py-3 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 transition-colors duration-300"
            >
              Join The Club
            </a>
            <a
              href="#about"
              className="px-8 py-3 bg-white text-blue-800 font-medium rounded-md hover:bg-gray-100 transition-colors duration-300"
            >
              Learn More
            </a>
          </div>
          
          <div className="mt-8 sm:mt-12">
            <button
              onClick={scrollToAbout}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300"
              aria-label="Scroll Down"
            >
              <ChevronDown className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Bottom diagonal cutout */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path d="M0 100L1440 0V100H0Z" fill="white" />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;