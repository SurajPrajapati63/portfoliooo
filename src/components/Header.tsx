
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinkClass = "relative text-gray-700 transition-colors hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <a
            href="#home"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Go to home"
            className="flex items-center gap-3 text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent"
          >
            <img
              src="/clipart2381085.png"
              alt="Suraj Prajapati logo"
              className="h-10 w-10 rounded-full object-cover"
            />
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className={navLinkClass}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={navLinkClass}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className={navLinkClass}
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className={navLinkClass}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className={navLinkClass}
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={navLinkClass}
            >
              Contact
            </button>
          </div>

          <Button 
            onClick={() => scrollToSection('contact')}
            className="hidden md:block bg-gradient-primary hover:opacity-90 text-white"
          >
            Hire Me
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <div className="w-6 h-6 flex flex-col justify-center">
              <span className={`block h-0.5 w-6 bg-gray-700 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-700 mt-1 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-700 mt-1 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 mt-4">
              <button onClick={() => scrollToSection('home')} className={`${navLinkClass} text-left`}>Home</button>
              <button onClick={() => scrollToSection('about')} className={`${navLinkClass} text-left`}>About</button>
              <button onClick={() => scrollToSection('skills')} className={`${navLinkClass} text-left`}>Skills</button>
              <button onClick={() => scrollToSection('services')} className={`${navLinkClass} text-left`}>Services</button>
              <button onClick={() => scrollToSection('projects')} className={`${navLinkClass} text-left`}>Projects</button>
              <button onClick={() => scrollToSection('contact')} className={`${navLinkClass} text-left`}>Contact</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
