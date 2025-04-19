import React, { useState } from 'react';
import { BookOpen, Code, Youtube, Globe, ChevronRight } from 'lucide-react';

interface Resource {
  id: number;
  title: string;
  description: string;
  link: string;
  icon: JSX.Element;
  category: 'tutorial' | 'article' | 'video' | 'tool';
}

const ResourcesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'tutorial' | 'article' | 'video' | 'tool'>('all');

  const resources: Resource[] = [
    {
      id: 1,
      title: 'Introduction to Data Structures',
      description: 'A comprehensive guide to basic data structures like arrays, linked lists, and trees.',
      link: 'https://www.example.com',
      icon: <BookOpen className="h-5 w-5" />,
      category: 'article',
    },
    {
      id: 2,
      title: 'Web Development Bootcamp',
      description: 'Learn HTML, CSS, JavaScript, and modern frameworks through this step-by-step tutorial.',
      link: 'https://www.example.com',
      icon: <Code className="h-5 w-5" />,
      category: 'tutorial',
    },
    {
      id: 3,
      title: 'Algorithm Visualization',
      description: 'Interactive tool to visualize sorting, searching, and graph algorithms.',
      link: 'https://www.example.com',
      icon: <Globe className="h-5 w-5" />,
      category: 'tool',
    },
    {
      id: 4,
      title: 'Machine Learning Basics',
      description: 'Video series exploring the fundamentals of machine learning algorithms.',
      link: 'https://www.example.com',
      icon: <Youtube className="h-5 w-5" />,
      category: 'video',
    },
    {
      id: 5,
      title: 'Competitive Programming Techniques',
      description: 'Advanced strategies for solving competitive programming problems efficiently.',
      link: 'https://www.example.com',
      icon: <BookOpen className="h-5 w-5" />,
      category: 'article',
    },
    {
      id: 6,
      title: 'Git and GitHub for Beginners',
      description: 'Learn version control basics with Git and collaboration with GitHub.',
      link: 'https://www.example.com',
      icon: <Code className="h-5 w-5" />,
      category: 'tutorial',
    },
  ];

  const filteredResources = activeCategory === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === activeCategory);

  const categoryOptions = [
    { value: 'all', label: 'All Resources' },
    { value: 'tutorial', label: 'Tutorials' },
    { value: 'article', label: 'Articles' },
    { value: 'video', label: 'Videos' },
    { value: 'tool', label: 'Tools' },
  ];

  return (
    <div id="resources" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Learning Resources</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            Curated learning materials to help you master programming concepts and stay updated with the latest technologies.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categoryOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setActiveCategory(option.value as any)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                activeCategory === option.value
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <div
              key={resource.id}
              className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-600 rounded-md mr-3">
                  {resource.icon}
                </div>
                <h3 className="text-lg font-semibold">{resource.title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{resource.description}</p>
              <div className="mt-auto">
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  Access Resource
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-4">
            Looking for specific learning resources? We're here to help!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            Request Resource
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResourcesSection;