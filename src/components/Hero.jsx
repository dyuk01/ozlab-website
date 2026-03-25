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
      className="fixed inset-0 z-0 min-h-screen min-h-[100svh] w-full overflow-hidden bg-[#c8b7de]"
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
        <div className="relative w-full h-full overflow-hidden">
          <p className="font-heading text-black leading-[0.84] tracking-[-0.03em] absolute -top-[2%] left-[22%] text-[clamp(4.35rem,14vw,15rem)]">
            OPPORTUNITY
          </p>
          <p className="font-heading text-[#f4f0e9] leading-[0.86] tracking-[-0.03em] absolute top-[11.8%] left-[0%] text-[clamp(4.15rem,13vw,13.75rem)]">
            ZONE
          </p>
          <p className="font-heading text-black leading-[0.84] tracking-[-0.03em] absolute top-[33.5%] left-[-3%] text-[clamp(4.3rem,13.8vw,14.7rem)]">
            OPPORTUNITY
          </p>
          <p className="font-heading text-[#f4f0e9] leading-[0.86] tracking-[-0.03em] absolute top-[47.5%] right-[1%] text-[clamp(4.15rem,12.8vw,13.6rem)]">
            ZONE
          </p>
          <p className="font-heading text-[#f4f0e9] leading-[0.84] tracking-[-0.03em] absolute bottom-[4.5%] left-[23%] text-[clamp(4.15rem,12.8vw,13.6rem)]">
            OPPORTUNITY
          </p>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-black/70 hover:text-black transition-colors z-10"
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
