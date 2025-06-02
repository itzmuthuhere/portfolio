import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Github, Linkedin, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Skills', id: 'skills' },
    { name: 'Education', id: 'education' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-dark-900/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between py-4">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              Muthu Raja
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Full Stack Developer
            </p>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Contact Info & Social Links */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                rajamuthu107@gmail.com
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                +91-6369366095
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <a
                href="https://linkedin.com/in/muthu-raja"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/muthu-raja"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://leetcode.com/muthu-raja"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Code2 size={20} />
              </a>
            </div>
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-600 transition-colors"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white dark:bg-dark-800 rounded-lg shadow-lg mt-2 p-4"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </button>
              ))}
            </nav>
            
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-dark-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    rajamuthu107@gmail.com
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    +91-6369366095
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <a
                    href="https://linkedin.com/in/muthu-raja"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://github.com/muthu-raja"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://leetcode.com/muthu-raja"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <Code2 size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;