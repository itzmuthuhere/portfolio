import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Calendar, 
  MapPin, 
  ExternalLink, 
  Code, 
  Database, 
  Shield, 
  Zap,
  Users,
  TrendingUp
} from 'lucide-react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: 'HEPL - Cavinkare',
      position: 'Full Stack Developer',
      duration: 'May 2024 - Present',
      location: 'Chennai, India',
      type: 'Full-time',
      projects: [
        {
          name: 'Fintech Loan Platform',
          description: 'Developed a comprehensive loan management system with real-time credit scoring and automated decision-making capabilities.',
          technologies: ['Spring Boot', 'Redis', 'JMeter', 'React', 'MySQL'],
          achievements: [
            'Implemented real-time credit scoring algorithm reducing processing time by 60%',
            'Built responsive dashboard for loan officers with real-time analytics',
            'Optimized database queries resulting in 40% faster response times',
            'Integrated Redis caching for improved performance under high load'
          ],
          icon: TrendingUp
        },
        {
          name: 'Trove Collaboration Suite',
          description: 'Enterprise collaboration platform with advanced security features and real-time communication capabilities.',
          technologies: ['Azure Blob Storage', 'MS SSO', 'WebSockets', 'AES Encryption', 'RBAC'],
          achievements: [
            'Implemented end-to-end AES encryption for secure file sharing',
            'Integrated Microsoft SSO reducing login time by 70%',
            'Built real-time messaging system using WebSockets',
            'Designed role-based access control (RBAC) system for enterprise security'
          ],
          icon: Shield
        }
      ]
    },
    {
      company: 'BAssure Solutions',
      position: 'Software Developer',
      duration: 'Apr 2023 - Apr 2024',
      location: 'Bangalore, India',
      type: 'Full-time',
      projects: [
        {
          name: 'Logistics Quotation Portal',
          description: 'Comprehensive quote management system for logistics companies with automated pricing tools and customer management.',
          technologies: ['Spring Boot', 'React', 'MySQL', 'REST APIs'],
          achievements: [
            'Developed automated pricing algorithm reducing manual effort by 80%',
            'Built customer portal for real-time quote tracking',
            'Implemented bulk quote processing for enterprise clients',
            'Created comprehensive reporting dashboard for management'
          ],
          icon: Code
        },
        {
          name: 'B2B eCommerce System',
          description: 'Full-featured B2B eCommerce platform with payment integration, inventory management, and order processing.',
          technologies: ['Spring Boot', 'RazorPay', 'React', 'MongoDB', 'Kafka'],
          achievements: [
            'Integrated RazorPay payment gateway with 99.9% uptime',
            'Built bulk upload system for product catalogs (10,000+ items)',
            'Implemented order management system with real-time tracking',
            'Designed scalable architecture handling 1000+ concurrent users'
          ],
          icon: Database
        }
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Building scalable solutions and driving innovation across fintech and enterprise domains
          </p>
        </motion.div>

        {/* Company Tabs */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3"
          >
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-6 rounded-lg transition-all duration-300 ${
                    activeTab === index
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-white dark:bg-dark-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-dark-600'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <Building2 size={24} className={activeTab === index ? 'text-white' : 'text-primary-600'} />
                    <div>
                      <h3 className="font-semibold text-lg">{exp.company}</h3>
                      <p className={`text-sm ${activeTab === index ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'}`}>
                        {exp.position}
                      </p>
                      <div className={`flex items-center space-x-4 mt-2 text-sm ${activeTab === index ? 'text-blue-100' : 'text-gray-500 dark:text-gray-500'}`}>
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-2/3"
          >
            <div className="space-y-8">
              {experiences[activeTab].projects.map((project, projectIndex) => (
                <div key={projectIndex} className="card">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                        <project.icon className="text-primary-600 dark:text-primary-400" size={24} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {project.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {project.description}
                      </p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {project.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                          <span className="text-gray-600 dark:text-gray-300">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              4+
            </div>
            <div className="text-gray-600 dark:text-gray-400">Major Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              60%
            </div>
            <div className="text-gray-600 dark:text-gray-400">Performance Improvement</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              99.9%
            </div>
            <div className="text-gray-600 dark:text-gray-400">System Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              1000+
            </div>
            <div className="text-gray-600 dark:text-gray-400">Concurrent Users</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;