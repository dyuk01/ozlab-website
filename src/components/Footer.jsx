import { motion } from 'framer-motion';
import { Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-bg-primary border-t border-accent/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl text-text-primary mb-4">OZ LAB</h3>
            <p className="font-body text-text-dark/80 text-sm leading-relaxed">
              Empowering student entrepreneurs to transform ideas into reality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg text-text-dark mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="font-body text-text-dark/80 hover:text-accent transition-colors text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="font-body text-text-dark/80 hover:text-accent transition-colors text-sm"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#team" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#team')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="font-body text-text-dark/80 hover:text-accent transition-colors text-sm"
                >
                  Team
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="font-body text-text-dark/80 hover:text-accent transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-heading text-lg text-text-dark mb-4">Connect</h4>
            <div className="flex gap-4">
              <motion.a
                href="https://linkedin.com/company/ozlab"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-bg-secondary rounded-lg hover:bg-accent transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-accent group-hover:text-white" />
              </motion.a>
              <motion.a
                href="https://github.com/ozlab"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-bg-secondary rounded-lg hover:bg-accent transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="GitHub"
              >
                <Github size={20} className="text-accent group-hover:text-white" />
              </motion.a>
              <motion.a
                href="mailto:contact@ozlab.edu"
                className="p-3 bg-bg-secondary rounded-lg hover:bg-accent transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Email"
              >
                <Mail size={20} className="text-accent group-hover:text-white" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-text-dark/60 text-sm">
            © {currentYear} OZ LAB. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            className="font-body text-text-dark/60 hover:text-accent transition-colors text-sm"
            whileHover={{ y: -2 }}
          >
            Back to Top ↑
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
