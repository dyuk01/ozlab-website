import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="font-heading text-5xl sm:text-6xl md:text-7xl text-text-primary text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-heading text-3xl text-text-dark mb-6">
                Let's Connect
              </h3>
              <p className="font-body text-text-dark/80 mb-8 leading-relaxed">
                Have a project idea? Want to join our community? Or simply want to learn more 
                about what we do? We'd love to hear from you.
              </p>
            </div>
            
            <div className="space-y-6">
              <motion.a
                href="mailto:contact@ozlab.edu"
                className="flex items-center gap-4 text-text-dark hover:text-accent transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 bg-bg-primary rounded-lg group-hover:bg-accent transition-colors">
                  <Mail size={20} className="text-accent group-hover:text-white transition-colors" />
                </div>
                <span className="font-body">contact@ozlab.edu</span>
              </motion.a>
              
              <motion.a
                href="tel:+1234567890"
                className="flex items-center gap-4 text-text-dark hover:text-accent transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 bg-bg-primary rounded-lg group-hover:bg-accent transition-colors">
                  <Phone size={20} className="text-accent group-hover:text-white transition-colors" />
                </div>
                <span className="font-body">+1 (234) 567-890</span>
              </motion.a>
              
              <motion.div
                className="flex items-center gap-4 text-text-dark group"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 bg-bg-primary rounded-lg group-hover:bg-accent transition-colors">
                  <MapPin size={20} className="text-accent group-hover:text-white transition-colors" />
                </div>
                <span className="font-body">University Campus<br />Building Name, Room 123</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block font-body text-text-dark mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-bg-primary border border-accent/30 rounded-lg focus:outline-none focus:border-accent transition-colors font-body text-text-dark"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block font-body text-text-dark mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-bg-primary border border-accent/30 rounded-lg focus:outline-none focus:border-accent transition-colors font-body text-text-dark"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block font-body text-text-dark mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 bg-bg-primary border border-accent/30 rounded-lg focus:outline-none focus:border-accent transition-colors font-body text-text-dark resize-none"
                placeholder="Tell us about your project or inquiry..."
              />
            </div>
            
            <motion.button
              type="submit"
              className="w-full px-8 py-4 bg-accent text-white font-body rounded-lg hover:bg-accent/90 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
