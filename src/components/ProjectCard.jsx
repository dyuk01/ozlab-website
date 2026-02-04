import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-lg group cursor-pointer h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative h-64 sm:h-80 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="absolute inset-0 bg-accent/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
        <div className="text-center text-white">
          <h3 className="font-heading text-2xl sm:text-3xl mb-3">{project.title}</h3>
          <p className="font-body text-sm sm:text-base mb-4 opacity-90">{project.description}</p>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {project.tags?.map((tag, i) => (
              <span 
                key={i}
                className="px-3 py-1 bg-white/20 rounded-full text-xs font-body"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-center gap-2 text-sm">
            <span className="font-body">{project.category}</span>
            <span className="text-white/60">•</span>
            <span className="font-body">{project.year}</span>
          </div>
          <motion.div
            className="mt-4 inline-flex items-center gap-2"
            whileHover={{ x: 5 }}
          >
            <ExternalLink size={18} />
            <span className="font-body text-sm">View Project</span>
          </motion.div>
        </div>
      </div>

      {/* Default overlay with title */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
        <h3 className="font-heading text-xl sm:text-2xl text-white mb-1">{project.title}</h3>
        <p className="font-body text-sm text-white/80">{project.category} • {project.year}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
