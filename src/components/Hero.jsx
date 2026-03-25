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
      className="fixed inset-0 z-0 min-h-screen min-h-[100svh] w-full max-w-[100vw] overflow-hidden bg-[#c8b7de]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none select-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="relative h-full w-full max-w-[100vw] overflow-hidden px-1 sm:px-0">
          <p className="font-heading text-black leading-[0.84] tracking-[-0.03em] absolute -top-[1%] left-[4%] text-[clamp(2.35rem,11.5vw,15rem)] sm:-top-[2%] sm:left-[18%] sm:text-[clamp(4rem,14vw,15rem)] md:left-[22%] md:text-[clamp(4.35rem,14vw,15rem)]">
            OPPORTUNITY
          </p>
          <p className="font-heading text-[#f4f0e9] leading-[0.86] tracking-[-0.03em] absolute top-[10%] left-0 text-[clamp(2.2rem,11vw,13.75rem)] sm:top-[11.8%] sm:text-[clamp(3.85rem,13vw,13.75rem)] md:text-[clamp(4.15rem,13vw,13.75rem)]">
            ZONE
          </p>
          <p className="font-heading text-black leading-[0.84] tracking-[-0.03em] absolute top-[30%] left-[-1%] text-[clamp(2.3rem,11.5vw,14.7rem)] sm:top-[33.5%] sm:left-[-3%] sm:text-[clamp(4rem,13.8vw,14.7rem)] md:text-[clamp(4.3rem,13.8vw,14.7rem)]">
            OPPORTUNITY
          </p>
          <p className="font-heading text-[#f4f0e9] leading-[0.86] tracking-[-0.03em] absolute top-[43%] right-0 max-w-[100%] text-right text-[clamp(2.2rem,11vw,13.6rem)] sm:top-[47.5%] sm:right-[1%] sm:text-[clamp(3.85rem,12.8vw,13.6rem)] md:text-[clamp(4.15rem,12.8vw,13.6rem)]">
            ZONE
          </p>
          <p className="font-heading text-[#f4f0e9] leading-[0.84] tracking-[-0.03em] absolute bottom-[3%] left-[8%] text-[clamp(2.2rem,11vw,13.6rem)] sm:bottom-[4.5%] sm:left-[20%] sm:text-[clamp(3.85rem,12.8vw,13.6rem)] md:left-[23%] md:text-[clamp(4.15rem,12.8vw,13.6rem)]">
            OPPORTUNITY
          </p>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-black/70 transition-colors hover:text-black sm:bottom-10"
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
