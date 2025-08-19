'use client';

import { useState } from 'react';
import { Project } from '@/types';

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Sample projects data - you'll replace this with your actual projects
  const projects: Project[] = [
    {
      id: '1',
      title: 'MAE-MRF: A Transformer Based SST Quality Control Model',
      description: 'Advanced deep learning model for ocean sst quality control using self-supervised learning.',
      longDescription: 'This project implements a sophisticated quality control system in Ocean SST data using PyTorch and self-supervised learning techniques. The model achieves 97%+ accuracy on custom datasets by leveraging pre-trained Masked autoencoder architectures and fine-tuning the classification head for specific use cases. Features include data augmentation, advanced optimization techniques, and comprehensive model evaluation.',
      technologies: ['PyTorch', 'Python', 'Timeseries', 'Self-Supervised Learning', 'Masked Autoencoders', 'Quality Control'],
      github: 'https://github.com/TyroneZeka/MAE-MRF',
      // demo: 'https://your-demo-link.com',
      category: 'Deep Learning',
      featured: true,
    },
    {
      id: '2',
      title: 'Real-time Sentiment Analysis',
      description: 'NLP model for analyzing sentiment in social media posts with real-time processing capabilities.',
      longDescription: 'A comprehensive natural language processing solution that analyzes sentiment in real-time from various text sources. Built using transformer models (BERT/RoBERTa) and deployed with FastAPI for high-throughput processing. Includes preprocessing pipelines, model fine-tuning, and deployment on cloud infrastructure.',
      technologies: ['TensorFlow', 'BERT', 'FastAPI', 'NLP', 'Python', 'Docker'],
      github: 'https://github.com/TyroneZeka/sentiment-analyzer',
      category: 'NLP',
      featured: false,
    },
    {
      id: '3',
      title: 'Battery Health Forecasting Project',
      description: 'A model to predict the Remaining Useful Life (RUL) of lithium-ion batteries',
      longDescription: 'This project focuses on predicting the Remaining Useful Life (RUL) of lithium-ion batteries using advanced machine learning techniques. It leverages historical battery data, using 2 datasets, the Nasa dataset and the Oxford Battery Dataset, including charge/discharge cycles and environmental conditions, to train models that can accurately forecast battery lifespan. The solution includes data preprocessing, feature engineering, and model evaluation components.',
      technologies: ['PyTorch', 'Time Series', 'BiLSTM', 'Quality Control', 'AWS', 'Python'],
      github: 'https://github.com/TyroneZeka/battery-health-forecasting',
      category: 'Deep Learning',
      featured: true,
    },
    {
      id: '4',
      title: 'ZimLaw Assistant',
      description: 'An AI-powered legal assistant for Zimbabwe, built with RAG to help citizens understand their rights under the law.',
      longDescription: 'High-performance RAG model for legal document analysis and citizen assistance. Also can be used for legal research and case law analysis.',
      technologies: ['RAG', 'Ollama', 'Deepseek', 'LLama', 'Python'],
      github: 'https://github.com/TyroneZeka/ZimLaw-Assistant',
      category: 'RAG',
      featured: true,
    },
    {
      id: '5',
      title: 'Recommendation Engine',
      description: 'Collaborative filtering and content-based recommendation system with hybrid approaches.',
      longDescription: 'Sophisticated recommendation system combining collaborative filtering, content-based filtering, and deep learning approaches. Implements matrix factorization, neural collaborative filtering, and handles cold start problems. Deployed as a scalable microservice with real-time inference capabilities.',
      technologies: ['Python', 'Scikit-learn', 'TensorFlow', 'Apache Spark', 'Redis'],
      github: 'https://github.com/TyroneZeka/Database-Design-Ecommerce-',
      category: 'Machine Learning',
      featured: false,
    },
    {
      id: '6',
      title: 'Time Series Forecasting',
      description: 'Advanced time series analysis and forecasting using LSTM and Prophet models.',
      longDescription: 'Comprehensive time series forecasting solution using multiple approaches including LSTM networks, Prophet, and ARIMA models. Features automated model selection, uncertainty quantification, and handles multiple seasonality patterns. Includes interactive dashboards for visualization and monitoring.',
      technologies: ['PyTorch', 'Prophet', 'Pandas', 'Plotly', 'Time Series Analysis'],
      github: 'https://github.com/TyroneZeka/time-series-forecasting',
      category: 'Machine Learning',
      featured: false,
    },
  ];

  const categories = ['All', 'Deep Learning', 'AI Engineering', 'Machine Learning', 'Computer Vision', 'NLP'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-200 mb-4">
            My Projects
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A collection of AI and machine learning projects showcasing various techniques
            and applications in deep learning, NLP, and more.
          </p>
        </div>

        {/* Featured Projects */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-200 mb-8">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
                      {project.category}
                    </span>
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-medium">
                      Featured
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-800 font-medium"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Category Filter */}
        <section className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* All Projects */}
        <section>
          <h2 className="text-3xl font-bold text-gray-200 mb-8">
            All Projects {selectedCategory !== 'All' && `- ${selectedCategory}`}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500"></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-medium">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-800 font-medium"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectsPage;
