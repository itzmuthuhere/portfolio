import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen, Award, Users } from 'lucide-react';

const Education = () => {
  const education = {
    degree: 'Bachelor of Engineering (B.E.)',
    major: 'Mechanical Engineering',
    institution: 'Loyola Institute of Technology',
    duration: '2017 - 2021',
    location: 'Chennai, India',
    description: 'Comprehensive engineering education with strong foundation in problem-solving, analytical thinking, and project management. Developed critical thinking skills and technical aptitude that seamlessly translated to software development.',
    highlights: [
      'Strong foundation in mathematics and analytical problem-solving',
      'Project management and team collaboration experience',
      'Technical documentation and presentation skills',
      'Engineering design principles and systematic thinking'
    ],
    relevantCourses: [
      'Engineering Mathematics',
      'Computer Programming',
      'Project Management',
      'Technical Communication',
      'Quality Control & Assurance',
      'Industrial Engineering'
    ]
  };

  const additionalLearning = [
    {
      title: 'Full Stack Development Bootcamp',
      provider: 'Self-Directed Learning',
      duration: '2022 - 2023',
      description: 'Intensive self-study program covering modern web development technologies',
      skills: ['Java', 'Spring Boot', 'React', 'Database Design', 'REST APIs']
    },
    {
      title: 'Cloud Computing Fundamentals',
      provider: 'Online Courses',
      duration: '2023',
      description: 'Comprehensive study of cloud platforms and DevOps practices',
      skills: ['Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Microservices']
    },
    {
      title: 'Advanced Security Practices',
      provider: 'Professional Development',
      duration: '2024',
      description: 'Specialized training in application security and authentication',
      skills: ['OAuth2', 'JWT', 'Encryption', 'RBAC', 'Security Best Practices']
    }
  ];

  return (
    <section id="education" className="section-padding bg-white dark:bg-dark-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Learning
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Strong educational foundation combined with continuous professional development
          </p>
        </motion.div>

        {/* Formal Education */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <GraduationCap className="mr-3 text-primary-600" size={28} />
            Formal Education
          </h3>

          <div className="card hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
              {/* Institution Info */}
              <div className="lg:w-1/3 mb-6 lg:mb-0">
                <div className="w-20 h-20 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                  <GraduationCap className="text-primary-600 dark:text-primary-400" size={40} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {education.institution}
                </h4>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>{education.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} />
                    <span>{education.location}</span>
                  </div>
                </div>
              </div>

              {/* Degree Details */}
              <div className="lg:w-2/3">
                <div className="mb-4">
                  <h5 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {education.degree}
                  </h5>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">
                    {education.major}
                  </p>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {education.description}
                </p>

                {/* Key Highlights */}
                <div className="mb-6">
                  <h6 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Key Highlights
                  </h6>
                  <ul className="space-y-2">
                    {education.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                        <span className="text-gray-600 dark:text-gray-300">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Relevant Courses */}
                <div>
                  <h6 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Relevant Coursework
                  </h6>
                  <div className="flex flex-wrap gap-2">
                    {education.relevantCourses.map((course, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Learning */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <BookOpen className="mr-3 text-primary-600" size={28} />
            Professional Development
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalLearning.map((learning, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {learning.title}
                  </h4>
                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-medium">{learning.provider}</span>
                    <span>{learning.duration}</span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {learning.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {learning.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="text-blue-600 dark:text-blue-400" size={32} />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Continuous Learning
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Committed to staying updated with latest technologies and industry best practices
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-green-600 dark:text-green-400" size={32} />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Knowledge Sharing
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Active participant in developer communities and knowledge sharing initiatives
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-purple-600 dark:text-purple-400" size={32} />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Excellence Pursuit
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Dedicated to achieving excellence through continuous improvement and learning
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;