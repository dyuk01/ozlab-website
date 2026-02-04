import { motion } from 'framer-motion';

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            variants={item}
            className="font-heading text-5xl sm:text-6xl md:text-7xl text-text-primary text-center mb-12"
          >
            About Us
          </motion.h2>
          
          <motion.div variants={item} className="space-y-8 text-center max-w-4xl mx-auto">
            <p className="font-body text-lg sm:text-xl text-text-dark leading-relaxed">
              OZ LAB (Opportunity Zone LAB) is where student entrepreneurs transform bold ideas into 
              real-world impact. We're not just a club—we're a launchpad for the next generation of 
              innovators, creators, and change-makers.
            </p>
            <p className="font-body text-lg sm:text-xl text-text-dark leading-relaxed">
              Through hands-on projects, mentorship, and a collaborative community, we bridge the gap 
              between academic learning and entrepreneurial execution. Whether you're building your 
              first prototype, seeking co-founders, or exploring emerging technologies, OZ LAB provides 
              the resources, network, and support to turn your vision into reality.
            </p>
            <p className="font-body text-lg sm:text-xl text-text-dark/90 leading-relaxed italic">
              Every breakthrough starts with opportunity. We create the zone where possibilities become 
              achievements.
            </p>
          </motion.div>

          <motion.div 
            variants={item}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            <div className="text-center p-8 bg-bg-primary/50 rounded-lg hover:bg-bg-primary/70 transition-colors">
              <h3 className="font-heading text-3xl text-accent mb-4">Build</h3>
              <p className="font-body text-text-dark leading-relaxed">
                From concept to prototype, we provide the tools and guidance to bring your ideas to life. 
                Access workshops, technical resources, and expert mentorship.
              </p>
            </div>
            <div className="text-center p-8 bg-bg-primary/50 rounded-lg hover:bg-bg-primary/70 transition-colors">
              <h3 className="font-heading text-3xl text-accent mb-4">Connect</h3>
              <p className="font-body text-text-dark leading-relaxed">
                Join a diverse community of ambitious students, industry professionals, and alumni. 
                Find co-founders, advisors, and lifelong collaborators.
              </p>
            </div>
            <div className="text-center p-8 bg-bg-primary/50 rounded-lg hover:bg-bg-primary/70 transition-colors">
              <h3 className="font-heading text-3xl text-accent mb-4">Launch</h3>
              <p className="font-body text-text-dark leading-relaxed">
                Take your project from prototype to market. We offer pitch opportunities, funding 
                connections, and pathways to real-world deployment.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
