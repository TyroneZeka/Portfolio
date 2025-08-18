import { Experience, Education } from '@/types';

const AboutPage = () => {
  // Sample data - replace with your actual information
  const experiences: Experience[] = [
    {
      id: '1',
      title: 'Senior AI Engineer',
      company: 'Tech Innovations Inc.',
      period: '2023 - Present',
      description: 'Leading AI initiatives and developing state-of-the-art machine learning solutions. Architecting scalable ML systems and mentoring junior engineers in best practices.',
      technologies: ['PyTorch', 'TensorFlow', 'Python', 'AWS', 'Kubernetes', 'MLOps'],
    },
    {
      id: '2',
      title: 'Machine Learning Engineer',
      company: 'Data Science Solutions',
      period: '2021 - 2023',
      description: 'Developed and deployed production ML models for computer vision and NLP applications. Improved model performance by 30% through advanced optimization techniques.',
      technologies: ['Python', 'Scikit-learn', 'Docker', 'Apache Spark', 'PostgreSQL'],
    },
    {
      id: '3',
      title: 'AI Research Intern',
      company: 'University Research Lab',
      period: '2020 - 2021',
      description: 'Conducted research on deep learning applications in computer vision. Published findings in peer-reviewed conferences and collaborated on grant proposals.',
      technologies: ['PyTorch', 'OpenCV', 'CUDA', 'Linux', 'Git'],
    },
  ];

  const education: Education[] = [
    {
      id: '1',
      degree: 'Master of Science in Computer Science',
      institution: 'Ocean University of China',
      period: '2023 - 2026',
      description: 'Specialized in Artificial Intelligence and Deep Learning. Thesis on "Transformer Based Models for Timeseries Data Quality Control."',
    },
    {
      id: '2',
      degree: 'Bachelor of Science in Computer Engineering',
      institution: 'Ocean University of China',
      period: '2018 - 2022',
      description: 'Graduated with distinction. Focused on software engineering and AI applications.',
    },
  ];

  const skills = {
    'Programming Languages': ['Python', 'JavaScript/TypeScript', 'JAVA', 'R', 'SQL'],
    'ML/AI Frameworks': ['PyTorch', 'Scikit-learn', 'Keras', 'OpenCV'],
    'Cloud & DevOps': ['Azure', 'Docker', 'Kubernetes', 'MLflow', 'Git'],
    'Specializations': ['Deep Learning', 'Computer Vision', 'NLP', 'MLOps', 'Neural Networks'],
  };

  const achievements = [
    'Published A research paper in a top-tier AI conferences',
    'Led development of ML systems serving 1M+ users',
    'Reduced model inference time by 60% through optimization',
    'Mentored 10+ junior engineers in AI best practices',
    'Speaker at 3 international AI conferences',
    'Winner of AI Innovation Award 2023',
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-400 mb-6">
            About Me
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-500 mb-6">
              I&apos;m a passionate AI engineer with a deep love for building intelligent systems that solve real-world problems. 
              With over 3 years of experience in machine learning and deep learning, I specialize in creating scalable AI solutions 
              that bridge the gap between cutting-edge research and practical applications.
            </p>
            <p className="text-lg text-gray-500">
              My journey in AI began during my computer science studies, where I was fascinated by the potential of neural networks. 
              Since then, I&apos;ve worked on diverse projects ranging from computer vision systems to natural language processing 
              applications, always with a focus on delivering robust, production-ready solutions.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-400 mb-8 text-center">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{category}</h3>
                <ul className="space-y-2">
                  {skillList.map((skill, index) => (
                    <li key={index} className="text-gray-600">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-400 mb-8 text-center">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.id} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                    <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 font-medium">{exp.period}</span>
                </div>
                <p className="text-gray-600 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-400 mb-8 text-center">
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.id} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                    <p className="text-lg text-blue-600 font-semibold">{edu.institution}</p>
                  </div>
                  <span className="text-gray-500 font-medium">{edu.period}</span>
                </div>
                {edu.description && (
                  <p className="text-gray-600">{edu.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-400 mb-8 text-center">
            Key Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700">{achievement}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Personal Philosophy */}
        <section className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-400 mb-6">
            My Philosophy
          </h2>
          <p className="text-lg text-gray-500 max-w-4xl mx-auto">
            I believe that the most impactful AI solutions come from understanding both the technical complexities 
            and the human needs they serve. My approach combines rigorous engineering practices with creative 
            problem-solving, always keeping ethics and fairness at the forefront of development. I&apos;m committed to 
            making AI accessible, explainable, and beneficial for everyone.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
