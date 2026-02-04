import { motion } from 'framer-motion';
import { Linkedin, Github } from 'lucide-react';
import { team } from '../data/team';

const Team = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="team" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="font-heading text-5xl sm:text-6xl md:text-7xl text-text-primary text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Team
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              variants={item}
              className="group text-center"
            >
              <div className="relative mb-6 overflow-hidden rounded-full w-48 h-48 mx-auto">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <a 
                      href={member.linkedin}
                      className="text-white hover:scale-110 transition-transform"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin size={24} />
                    </a>
                    <a 
                      href={member.github}
                      className="text-white hover:scale-110 transition-transform"
                      aria-label={`${member.name}'s GitHub`}
                    >
                      <Github size={24} />
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="font-heading text-2xl text-text-dark mb-2">{member.name}</h3>
              <p className="font-body text-accent mb-3">{member.role}</p>
              <p className="font-body text-text-dark/80 text-sm leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
