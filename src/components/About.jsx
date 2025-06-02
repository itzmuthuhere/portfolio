import { motion } from 'framer-motion';
import { Server, Shield, Cloud, Zap, Users, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Server,
      title: 'Backend Expertise',
      description: 'Specialized in Java, Spring Boot, and microservices architecture'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Experience with Azure, Docker, Kubernetes, and CI/CD pipelines'
    },
    {
      icon: Shield,
      title: 'Security Focus',
      description: 'Implementation of OAuth2, JWT, RBAC, and data encryption'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimization with Redis caching and real-time processing'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Strong team player with excellent communication skills'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Focused on delivering scalable, maintainable solutions'
    }
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-dark-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Summary
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Backend-Heavy Full Stack Developer
              </h3>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Passionate Full Stack Developer with 2+ years of experience building 
                enterprise-grade applications. I specialize in backend development with 
                Java and Spring Boot, while maintaining strong frontend skills in React 
                and modern web technologies.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My expertise lies in designing and implementing scalable microservices 
                architectures, integrating cloud solutions, and ensuring robust security 
                practices. I have a proven track record of delivering high-performance 
                applications in fintech and enterprise environments.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm committed to writing clean, maintainable code and staying updated 
                with the latest industry trends and best practices in software development, 
                DevOps, and cloud technologies.
              </p>
            </div>

            {/* Key Strengths */}
            <div className="bg-gray-50 dark:bg-dark-800 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Key Strengths
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                  Microservices Architecture & Design Patterns
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                  Cloud Integration & DevOps Practices
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                  Security Implementation & Best Practices
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                  Performance Optimization & Scalability
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                      <highlight.icon className="text-primary-600 dark:text-primary-400" size={24} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              2+
            </div>
            <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              10+
            </div>
            <div className="text-gray-600 dark:text-gray-400">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              15+
            </div>
            <div className="text-gray-600 dark:text-gray-400">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              100%
            </div>
            <div className="text-gray-600 dark:text-gray-400">Client Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;