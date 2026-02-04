import { motion } from 'framer-motion';
import { achievements } from '../data/achievements';

const Timeline = () => {
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
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0 }
  };

  // Sort achievements by year (newest first)
  const sortedAchievements = [...achievements].sort((a, b) => b.year - a.year);

  return (
    <section id="timeline" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-bg-primary">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          className="font-heading text-5xl sm:text-6xl md:text-7xl text-text-primary text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Timeline
        </motion.h2>
        
        <motion.div 
          className="relative"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 transform md:-translate-x-1/2" />
          
          <div className="space-y-12">
            {sortedAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                variants={item}
                className="relative pl-20 md:pl-0 md:flex md:items-center md:gap-8"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-accent rounded-full transform md:-translate-x-1/2 z-10" />
                
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:ml-auto md:pl-8'}`}>
                  <div className={`bg-bg-secondary p-6 rounded-lg shadow-lg ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <div className="flex items-center gap-3 mb-2 md:justify-end">
                      <span className="font-heading text-3xl text-accent">{achievement.year}</span>
                      <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-body">
                        {achievement.category}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl text-text-dark mb-2">{achievement.title}</h3>
                    <p className="font-body text-text-dark/80">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
