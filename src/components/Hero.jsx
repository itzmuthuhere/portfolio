import { motion } from 'framer-motion';
import { Download, ArrowDown, Code, Database, Cloud, Sparkles, Zap, Globe } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    // Download resume from public folder
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/Muthu CV.pdf`;
    link.download = 'Muthu_Raja_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center bg-white dark:bg-dark-900">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center space-x-3 mt-5"
              >
                <div className="flex items-center space-x-2 professional-card px-4 py-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="font-medium text-gray-700 dark:text-gray-300 text-sm">Available for Work</span>
                </div>
                <div className="flex items-center space-x-2 professional-card px-4 py-2">
                  <Code className="text-accent-600" size={16} />
                  <span className="font-medium text-gray-700 dark:text-gray-300 text-sm">Full Stack Developer</span>
                </div>
              </motion.div> */}

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mt-5"
              >
                Hi, I'm{' '}
                <span className="text-accent-600">
                  Muthu Raja
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-4"
              >
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Building scalable full-stack solutions with{' '}
                  <span className="font-semibold text-accent-600">
                    Java, Spring Boot, React & Cloud Technologies
                  </span>
                </p>

                <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl">
                  Passionate full-stack developer with 2+ years of experience building
                  enterprise-grade applications and modern web solutions.
                </p>
              </motion.div>
            </div>

            {/* Tech Stack Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              <div className="professional-card px-4 py-3 flex items-center space-x-3 hover:shadow-md transition-shadow duration-200">
                <Code className="text-accent-600" size={20} />
                <span className="font-medium text-gray-700 dark:text-gray-300">Java & Spring Boot</span>
              </div>
              <div className="professional-card px-4 py-3 flex items-center space-x-3 hover:shadow-md transition-shadow duration-200">
                <Database className="text-accent-600" size={20} />
                <span className="font-medium text-gray-700 dark:text-gray-300">React & TypeScript</span>
              </div>
              <div className="professional-card px-4 py-3 flex items-center space-x-3 hover:shadow-md transition-shadow duration-200">
                <Cloud className="text-accent-600" size={20} />
                <span className="font-medium text-gray-700 dark:text-gray-300">Cloud & DevOps</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={handleDownloadResume}
                className="btn-primary flex items-center justify-center space-x-2 px-8 py-3"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </button>

              <button
                onClick={() => scrollToSection('experience')}
                className="btn-secondary flex items-center justify-center space-x-2 px-8 py-3"
              >
                <span>View My Work</span>
                <ArrowDown size={18} />
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 dark:border-dark-700"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-600 mb-1">2+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-600 mb-1">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-600 mb-1">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Technologies</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-80 h-80 rounded-full bg-gradient-to-br from-accent-500 to-accent-600 p-1 shadow-xl"
              >
                <div className="w-full h-full rounded-full bg-white dark:bg-dark-800 flex items-center justify-center overflow-hidden">
                  <img
                    src={`${process.env.PUBLIC_URL}/IMG_5464.png`}
                    alt="Profile Picture"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </motion.div>

              {/* Floating Tech Icons */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -top-4 -right-4 w-16 h-16 professional-card rounded-full flex items-center justify-center shadow-lg"
              >
                <Code className="text-accent-600" size={24} />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-4 -left-4 w-16 h-16 professional-card rounded-full flex items-center justify-center shadow-lg"
              >
                <Database className="text-accent-600" size={24} />
              </motion.div>

              <motion.div
                animate={{
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute top-1/2 -left-8 w-12 h-12 professional-card rounded-full flex items-center justify-center shadow-lg"
              >
                <Cloud className="text-accent-600" size={20} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;