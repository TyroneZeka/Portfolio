import Link from 'next/link';

export default function Home() {
  const featuredTechnologies = [
    'PyTorch', 'TensorFlow', 'Python', 'Machine Learning', 'Deep Learning', 
    'Computer Vision', 'NLP', 'MLOps', 'AWS', 'Docker'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              AI Engineer &amp; 
              <span className="text-blue-600"> Deep Learning</span> Specialist
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Passionate about building intelligent systems that solve real-world problems 
              through cutting-edge deep learning and artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/projects"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                View My Projects
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies I Work With
            </h2>
            <p className="text-lg text-gray-600">
              Leveraging the latest tools and frameworks in AI and machine learning
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {featuredTechnologies.map((tech, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-lg p-4 text-gray-400 text-center hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                <span className="font-semibold">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600">
              A showcase of my latest AI and machine learning projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Project Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Neural Network Classifier</h3>
                <p className="text-gray-600 mb-4">
                  Deep learning model for image classification using PyTorch and transfer learning techniques.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">PyTorch</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Computer Vision</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">CNN</span>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">NLP Sentiment Analysis</h3>
                <p className="text-gray-600 mb-4">
                  Advanced natural language processing model for real-time sentiment analysis of social media data.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">TensorFlow</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">NLP</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">BERT</span>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">MLOps Pipeline</h3>
                <p className="text-gray-600 mb-4">
                  End-to-end machine learning pipeline with automated training, testing, and deployment.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">MLflow</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Docker</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">AWS</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/projects"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Projects
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Collaborate?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s work together to bring your AI ideas to life
          </p>
          <Link 
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
