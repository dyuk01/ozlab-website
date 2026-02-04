import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-bg-primary/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <a 
          href="#" 
          onClick={handleLinkClick}
          className="font-heading text-2xl sm:text-3xl text-text-primary hover:text-accent transition-colors"
        >
          OZ LAB
        </a>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 lg:gap-8">
          <li>
            <a 
              href="#about" 
              onClick={handleLinkClick}
              className="font-body text-text-dark hover:text-accent transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              onClick={handleLinkClick}
              className="font-body text-text-dark hover:text-accent transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#team" 
              onClick={handleLinkClick}
              className="font-body text-text-dark hover:text-accent transition-colors"
            >
              Team
            </a>
          </li>
          <li>
            <a 
              href="#timeline" 
              onClick={handleLinkClick}
              className="font-body text-text-dark hover:text-accent transition-colors"
            >
              Timeline
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              onClick={handleLinkClick}
              className="font-body text-text-dark hover:text-accent transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-text-dark hover:text-accent transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-bg-primary/95 backdrop-blur-sm border-t border-accent/20"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col py-4 px-4 space-y-4">
            <li>
              <a 
                href="#about" 
                onClick={handleLinkClick}
                className="font-body text-text-dark hover:text-accent transition-colors block"
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                onClick={handleLinkClick}
                className="font-body text-text-dark hover:text-accent transition-colors block"
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#team" 
                onClick={handleLinkClick}
                className="font-body text-text-dark hover:text-accent transition-colors block"
              >
                Team
              </a>
            </li>
            <li>
              <a 
                href="#timeline" 
                onClick={handleLinkClick}
                className="font-body text-text-dark hover:text-accent transition-colors block"
              >
                Timeline
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={handleLinkClick}
                className="font-body text-text-dark hover:text-accent transition-colors block"
              >
                Contact
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;
