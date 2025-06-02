import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Spring Security 6 (OAuth2, JWT, Keycloak)',
      provider: 'Spring Academy',
      date: '2024',
      description: 'Comprehensive certification covering modern Spring Security implementations including OAuth2, JWT tokens, and Keycloak integration for enterprise applications.',
      skills: ['OAuth2', 'JWT', 'Keycloak', 'Spring Security', 'Authentication', 'Authorization'],
      link: '#', // Replace with actual certification link
      verified: true,
      badge: '🔐'
    },
    {
      title: 'Microservices with Java & Docker',
      provider: 'Docker Academy',
      date: '2024',
      description: 'Advanced certification in building, deploying, and managing microservices architecture using Java Spring Boot and Docker containerization.',
      skills: ['Microservices', 'Docker', 'Spring Boot', 'Container Orchestration', 'DevOps'],
      link: '#', // Replace with actual certification link
      verified: true,
      badge: '🐳'
    }
  ];

  const upcomingCertifications = [
    {
      title: 'AWS Certified Solutions Architect',
      provider: 'Amazon Web Services',
      status: 'Planned',
      expectedDate: 'Q2 2024',
      description: 'Preparing for AWS Solutions Architect certification to enhance cloud architecture skills.'
    },
    {
      title: 'Kubernetes Administrator (CKA)',
      provider: 'Cloud Native Computing Foundation',
      status: 'Planned',
      expectedDate: 'Q3 2024',
      description: 'Planning to obtain Kubernetes Administrator certification for container orchestration expertise.'
    }
  ];

  return (
    <section id="certifications" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications & Learning
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications
          </p>
        </motion.div>

        {/* Current Certifications */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center"
          >
            <Award className="mr-3 text-primary-600" size={28} />
            Completed Certifications
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="card hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{cert.badge}</div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                        {cert.title}
                      </h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                        <span className="font-medium">{cert.provider}</span>
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{cert.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {cert.verified && (
                      <div className="flex items-center space-x-1 text-green-600 dark:text-green-400">
                        <CheckCircle size={16} />
                        <span className="text-xs font-medium">Verified</span>
                      </div>
                    )}
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Upcoming Certifications */}
        {/* <div>
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center"
          >
            <Calendar className="mr-3 text-primary-600" size={28} />
            Upcoming Certifications
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8">
            {upcomingCertifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="card border-2 border-dashed border-gray-300 dark:border-dark-600 hover:border-primary-300 dark:hover:border-primary-600 transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {cert.title}
                    </h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-medium">{cert.provider}</span>
                      <span className="text-xs bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 px-2 py-1 rounded-full">
                        {cert.status}
                      </span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {cert.expectedDate}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div> */}

        {/* Learning Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 card bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 border-primary-200 dark:border-primary-800"
        >
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Commitment to Continuous Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              I believe in staying current with the latest technologies and best practices. 
              These certifications represent my commitment to professional growth and my dedication 
              to delivering cutting-edge solutions. I regularly invest time in learning new technologies, 
              attending workshops, and contributing to the developer community.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;