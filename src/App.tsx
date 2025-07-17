import { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('projects');

  const projects = [
    {
      title: 'Battery Health Forecasting with Deep Learning',
      description:
        'Developed an LSTM-based model using PyTorch to predict lithium-ion battery state of health (SoH), achieving a mean absolute error of 5–7% on the NASA PCoE Battery Dataset.',
      tags: ['PyTorch', 'LSTM', 'Time Series', 'Python'],
      link: 'https://github.com/TyroneZeka/battery-health-forecasting',
    },
    {
      title: 'Ocean Data Quality Control with MAE and Multi-Frequency Fusion',
      description:
        'Built a Transformer-based MAE with fusion model for ocean SST data quality control, achieving over 90% accuracy in anomaly detection and reconstruction.',
      tags: ['PyTorch', 'Transformer', 'Anomaly Detection', 'Python'],
      link: 'https://github.com/TyroneZeka/MAE-MFF',
    },
    {
      title: 'Mshando: A Springboot-Based Tasker Platform',
      description:
        'Developed a full-stack task outsourcing platform using Java and Spring Boot, implementing RESTful APIs and modular backend services.',
      tags: ['Java', 'SpringBoot', 'Docker', 'MySQL'],
      link: 'https://github.com/TyroneZeka/mshando',
    },
    {
      title: 'Database Design for E-Commerce Platform',
      description:
        'Modeled and implemented a relational database for product management, user authentication, and order tracking using Django and SQL Server.',
      tags: ['Python', 'Django', 'PostgreSQL', 'SQL Server'],
      link: 'https://github.com/TyroneZeka/Database-Ecommerce-Design-',
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 bg-black shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Tyrone Zeka</h1>
          <nav className="space-x-6 hidden md:flex">
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#education" className="hover:text-blue-400 transition">Education</a>
            <a href="#resume" className="hover:text-blue-400 transition">Resume</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4">Hi, I'm Tyrone👋</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Deep Learning Researcher | LLM Enthusiast | MSc Computer Science Student | Building scalable solutions for real-world challenges.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition transform hover:scale-105"
            >
              View My Projects
            </a>
            <a
              href="/TyroneZeka.pdf"
              download
              className="px-6 py-3 rounded-full border border-blue-500 hover:bg-blue-600 transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-800">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img src="/tyrone.jpg?text=Tyrone+Zeka" alt="Profile" className="rounded-lg shadow-lg transform transition duration-300 hover:scale-105 w-full md:w-64 lg:w-80 object-cover aspect-square md:aspect-auto md:h-80 object-top" />
          <div>
            <h3 className="text-3xl font-bold mb-4">About Me</h3>
            <p className="text-gray-300 leading-relaxed">
              As an MSc Computer Science student at Ocean University of China, I bring a strong foundation in machine learning, deep learning, and full-stack development.
              My experience in oceanographic data preprocessing, time-series forecasting, and anomaly detection has equipped me with the skills to handle large datasets, optimize workflows, and drive impactful insights.
              I'm passionate about leveraging advanced analytics and cloud technologies to solve complex, real-world problems.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-10">Technical Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              'Python', 'Java', 'PyTorch',
               'SpringBoot', 'Docker',
              'PostgreSQL', 'MySQL', 'Git', 'Linux',
              'Hadoop', 'Spark', 'AWS',
            ].map((skill) => (
              <div key={skill} className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition">
                <span className="text-xl font-semibold">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-800">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-10">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
                <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-blue-900 text-blue-200 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="text-blue-400 hover:underline">View Project</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
<section id="resume" className="py-16 bg-gray-800">
  <div className="container mx-auto px-6">
    <h3 className="text-3xl font-bold text-center mb-10">My Resume</h3>
    <div className="w-full mx-auto bg-gray-900 p-8 md:p-10 rounded-lg shadow-xl">
      <div className="mb-8">
        <h4 className="text-xl font-bold text-blue-400">Summary</h4>
        <p className="text-gray-300 leading-relaxed mt-2">
          MSc Computer Science student with a strong foundation in machine learning, deep learning, software engineering, and big data technologies.
          Experienced in preprocessing oceanographic datasets, building forecasting models, and developing scalable applications.
          Passionate about leveraging advanced analytics to solve complex, real-world problems.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-lg font-bold text-blue-400 mb-3">Education</h4>
          <ul className="space-y-4">
            <li className="text-gray-300">
              <strong>MSc in Computer Science</strong><br />
              Ocean University of China • 2023 – Present<br />
              Thesis: Ocean SST Data Quality Control Model Based on MAE with Multi-Frequency Fusion<br />
              GPA: 3.7/4.00
            </li>
            <li className="text-gray-300">
              <strong>BSc in Computer Science</strong><br />
              Ocean University of China • 2018 – 2023<br />
              GPA: 3.7/4.00
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold text-blue-400 mb-3">Experience</h4>
          <ul className="space-y-4">
            <li className="text-gray-300">
              <strong>Machine Learning Research Assistant</strong><br />
              Marine Big Data and Cloud Computing Research Group • Sep 2023 – Present<br />
              Developed preprocessing pipelines for Argo ocean data using Python and Hadoop.
            </li>
            <li className="text-gray-300">
              <strong>Software Engineer Intern (Siemens Application)</strong><br />
              Self-Driven Project Development • 2024 – Present<br />
              Built full-stack applications using Java, SpringBoot, and Docker.
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center">
        <a
          href="/TyroneZeka.pdf"
          download
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition"
        >
          Download Full Resume (PDF)
        </a>
      </div>
    </div>
  </div>
</section>

      {/* Education Section */}
      <section id="education" className="py-16 bg-gray-800">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-10">Education & Experience</h3>
          <div className="w-full mx-auto space-y-6">
            <div className="bg-gray-900 p-6 rounded-lg shadow">
              <h4 className="font-bold text-xl">MSc in Computer Science</h4>
              <p className="text-gray-400">Ocean University of China • 2023 – Present</p>
              <ul className="mt-2 text-gray-300 list-disc pl-5 space-y-1">
                <li>GPA: 3.7/4.00</li>
                <li>Thesis: Ocean SST Data Quality Control Model Based on MAE with Multi-Frequency Fusion</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow">
              <h4 className="font-bold text-xl">BSc in Computer Science</h4>
              <p className="text-gray-400">Ocean University of China • 2018 – 2023</p>
              <ul className="mt-2 text-gray-300 list-disc pl-5 space-y-1">
                <li>GPA: 3.7/4.00</li>
                <li>Relevant Coursework: Data Structures & Algorithms, C++, Software Engineering</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>
          <p className="text-gray-300 max-w-xl mx-auto mb-8">
            Interested in collaborating or have any questions? Feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:zekah54@gmail.com" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition">
              Email Me
            </a>
            <a href=" https://github.com/TyroneZeka " target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-full transition">
              GitHub Profile
            </a>
            <a href="https://linkedin.com/in/tyronezeka " target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-blue-800 hover:bg-blue-900 rounded-full transition">
              LinkedIn
            </a>
            <a href="/TyroneZeka.pdf" download className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-full transition">
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-6 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Tyrone Zeka. All rights reserved.</p>
      </footer>
    </div>
  );
}