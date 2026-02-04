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
          
          <motion.div variants={item} className="space-y-6 text-center max-w-4xl mx-auto">
            <p className="font-body text-lg sm:text-xl text-text-dark leading-relaxed">
              OZ LAB (Opportunity Zone LAB) is a university startup club dedicated to fostering 
              innovation and entrepreneurship among students. We provide a platform where ambitious 
              minds can collaborate, learn, and bring their ideas to life.
            </p>
            <p className="font-body text-lg sm:text-xl text-text-dark leading-relaxed">
              Our mission is to create an environment that challenges conventional thinking while 
              providing the resources and support needed to transform dreams into successful ventures. 
              We believe in the power of opportunity and the potential within every student.
            </p>
          </motion.div>

          <motion.div 
            variants={item}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            <div className="text-center p-6 bg-bg-primary/50 rounded-lg">
              <h3 className="font-heading text-3xl text-accent mb-3">Innovate</h3>
              <p className="font-body text-text-dark">
                Push boundaries and explore new possibilities
              </p>
            </div>
            <div className="text-center p-6 bg-bg-primary/50 rounded-lg">
              <h3 className="font-heading text-3xl text-accent mb-3">Collaborate</h3>
              <p className="font-body text-text-dark">
                Work together to achieve greater impact
              </p>
            </div>
            <div className="text-center p-6 bg-bg-primary/50 rounded-lg">
              <h3 className="font-heading text-3xl text-accent mb-3">Elevate</h3>
              <p className="font-body text-text-dark">
                Rise above challenges and reach new heights
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
