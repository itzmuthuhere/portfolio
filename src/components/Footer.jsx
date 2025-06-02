import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Code2, 
  Mail, 
  Phone, 
  MapPin, 
  Heart,
  ExternalLink,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    // Download resume from public folder
    const link = document.createElement('a');
    link.href = '/portfolio/Muthu CV.pdf';
    link.download = 'Muthu_Raja_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const quickLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Skills', id: 'skills' },
    { name: 'Education', id: 'education' },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/muthu-raja',
      color: 'hover:text-blue-600'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/muthu-raja',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'LeetCode',
      icon: Code2,
      url: 'https://leetcode.com/muthu-raja',
      color: 'hover:text-orange-600'
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: 'rajamuthu107@gmail.com',
      href: 'mailto:rajamuthu107@gmail.com'
    },
    {
      icon: Phone,
      text: '+91-6369366095',
      href: 'tel:+916369366095'
    },
    {
      icon: MapPin,
      text: 'Chennai, India',
      href: '#'
    }
  ];

  return (
    <footer id="contact" className="bg-gray-900 dark:bg-black text-white">
      {/* Main Footer Content */}
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-4">Muthu Raja</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Full Stack Developer passionate about building scalable, secure, and 
              user-friendly applications. Specializing in Java, Spring Boot, React, 
              and cloud technologies with 2+ years of professional experience.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <contact.icon size={18} />
                  <span>{contact.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links & Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-gray-800 rounded-lg text-gray-300 ${social.color} transition-all duration-200 hover:scale-110`}
                  title={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>

            {/* Tech Stack */}
            <div>
              <h5 className="font-medium mb-2 text-gray-200">Built With</h5>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="px-2 py-1 bg-gray-800 rounded text-gray-300">React</span>
                <span className="px-2 py-1 bg-gray-800 rounded text-gray-300">Tailwind</span>
                <span className="px-2 py-1 bg-gray-800 rounded text-gray-300">Framer Motion</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between"
        >
          <div className="flex items-center space-x-2 text-gray-300 mb-4 md:mb-0">
            <span>© 2024 Muthu Raja. Made with</span>
            <Heart className="text-red-500" size={16} fill="currentColor" />
            <span>and lots of ☕</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-gray-400 text-sm">
              Hosted on GitHub Pages
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors duration-200"
              title="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Call to Action Banner */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-primary-600 py-8"
      >
        <div className="container-max text-center">
          <h3 className="text-xl font-bold mb-2">Let's Build Something Amazing Together!</h3>
          <p className="text-blue-100 mb-4">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:rajamuthu107@gmail.com"
              className="inline-flex items-center justify-center space-x-2 bg-white text-primary-600 font-medium py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <Mail size={18} />
              <span>Get In Touch</span>
            </a>
            <a
               onClick={handleDownloadResume}// Replace with actual resume link
              download="Muthu_Raja_Resume.pdf"
              className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white font-medium py-2 px-6 rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-200"
            >
              <ExternalLink size={18} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;