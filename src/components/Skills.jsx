import { motion } from 'framer-motion';
import { 
  Code, 
  Server, 
  Monitor, 
  Cloud, 
  Database, 
  Shield,
  TestTube,
  GitBranch
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'SQL', level: 85 },
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 }
      ]
    },
    {
      title: 'Backend Technologies',
      icon: Server,
      color: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400',
      skills: [
        { name: 'Spring Boot', level: 90 },
        { name: 'Microservices', level: 85 },
        { name: 'REST APIs', level: 90 },
        { name: 'JPA/Hibernate', level: 80 },
        { name: 'Apache Kafka', level: 75 },
        { name: 'WebSockets', level: 70 }
      ]
    },
    {
      title: 'Frontend Technologies',
      icon: Monitor,
      color: 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400',
      skills: [
        { name: 'React.js', level: 85 },
        { name: 'Redux', level: 80 },
        { name: 'Zustand', level: 75 },
        { name: 'Material UI', level: 80 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Responsive Design', level: 90 }
      ]
    },
    {
      title: 'DevOps & Cloud',
      icon: Cloud,
      color: 'bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 80 },
        { name: 'Jenkins', level: 75 },
        { name: 'Kubernetes', level: 70 },
        { name: 'Azure', level: 75 },
        { name: 'CI/CD', level: 80 }
      ]
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Redis', level: 75 },
        { name: 'PostgreSQL', level: 70 },
        { name: 'Database Design', level: 85 },
        { name: 'Query Optimization', level: 80 }
      ]
    },
    {
      title: 'Testing & Security',
      icon: Shield,
      color: 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400',
      skills: [
        { name: 'JUnit', level: 85 },
        { name: 'SonarQube', level: 75 },
        { name: 'OAuth2', level: 80 },
        { name: 'JWT', level: 85 },
        { name: 'RBAC', level: 80 },
        { name: 'AES Encryption', level: 75 }
      ]
    }
  ];

  const tools = [
    'IntelliJ IDEA', 'VS Code', 'Postman', 'JMeter', 'Azure DevOps', 
    'GitHub', 'Jira', 'Confluence', 'SonarQube', 'Maven', 'Gradle', 'npm'
  ];

  return (
    <section id="skills" className="section-padding bg-white dark:bg-dark-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive expertise across the full technology stack with focus on modern, scalable solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="card hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${category.color}`}>
                  <category.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="bg-primary-600 h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="card"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
              <GitBranch className="text-gray-600 dark:text-gray-400" size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Tools & Development Environment
            </h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {tools.map((tool, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="px-4 py-2 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Skill Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="text-primary-600 dark:text-primary-400" size={32} />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Full Stack Expertise
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              End-to-end development capabilities from database design to user interface
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Cloud className="text-green-600 dark:text-green-400" size={32} />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Cloud Native
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              Modern cloud architectures with containerization and microservices
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-red-600 dark:text-red-400" size={32} />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Security Focused
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              Implementation of robust security practices and authentication systems
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;