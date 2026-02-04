import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section 
      className="min-h-screen flex items-center justify-center bg-bg-primary relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-text-primary/10 rounded-full blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            opacity: { duration: 1.5, delay: 0.2 },
            scale: { duration: 20, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 20, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 20, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            opacity: { duration: 1.5, delay: 0.4 },
            scale: { duration: 25, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 25, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 25, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      </div>

      {/* Large background text - covers full viewport */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1] w-screen h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
      >
        <motion.div
          className="font-heading select-none text-text-primary/30 w-full h-full flex flex-col justify-center relative"
          style={{
            letterSpacing: '0.05em',
            transform: 'scale(1.105)',
            lineHeight: '0.9',
            gap: '4rem',
          }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.45, 0.6, 0.45],
          }}
          transition={{
            opacity: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <motion.span 
            className="font-heading select-none text-text-primary/30"
            style={{ 
              fontSize: 'clamp(8.5rem, 29.75vw, 25.5rem)',
              position: 'absolute',
              top: '5%',
              left: 0,
              whiteSpace: 'nowrap',
              transform: 'translateY(-50%)'
            }}
            initial={{ x: '100vw' }}
            animate={{ 
              x: ['100vw', '-100vw']
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            OPPORTUNITY
          </motion.span>
          <motion.span 
            className="font-heading select-none text-text-primary/30"
            style={{ 
              fontSize: 'clamp(8.5rem, 29.75vw, 25.5rem)',
              position: 'absolute',
              top: '50%',
              right: 0,
              whiteSpace: 'nowrap',
              transform: 'translateY(-50%)'
            }}
            initial={{ x: '-100vw' }}
            animate={{ 
              x: ['-100vw', '100vw']
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
              delay: 3
            }}
          >
            ZONE
          </motion.span>
        </motion.div>
      </motion.div>

      <div className="text-center z-10 px-4 relative w-full max-w-6xl mx-auto">
        <motion.h1 
          className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-text-primary mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          OZ LAB
        </motion.h1>
        <motion.p 
          className="font-body text-base sm:text-lg text-text-dark/80 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
        >
          Empowering student entrepreneurs to transform ideas into reality
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.button
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-text-dark hover:text-accent transition-colors z-10"
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        aria-label="Scroll to next section"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.button>
    </motion.section>
  );
};

export default Hero;
