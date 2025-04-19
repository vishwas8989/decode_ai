import React from 'react';
import { Code2, Users, Trophy, BookOpen } from 'lucide-react';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: <Code2 className="h-6 w-6 text-blue-600" />,
      title: 'Skill Development',
      description:
        'Enhance programming skills through workshops, coding sessions, and hands-on projects.',
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: 'Community Building',
      description:
        'Connect with like-minded individuals to share knowledge and collaborate on projects.',
    },
    {
      icon: <Trophy className="h-6 w-6 text-blue-600" />,
      title: 'Competitive Programming',
      description:
        'Prepare for coding competitions like ACM ICPC, Google CodeJam, and Hackathons.',
    },
    {
      icon: <BookOpen className="h-6 w-6 text-blue-600" />,
      title: 'Learning Resources',
      description:
        'Access curated learning materials, tutorials, and industry insights for continuous growth.',
    },
  ];

  return (
    <div id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Our Club
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Founded in 2015, the KNIT Programming Club is dedicated to fostering a culture of
            programming excellence and innovation among students of all backgrounds.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              To create a vibrant community of programmers who collaborate, learn, and grow together,
              pushing the boundaries of what's possible through code. We aim to bridge the gap between
              academic knowledge and industry requirements, preparing students for successful careers
              in technology.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be recognized as a center of excellence for programming and software development,
              producing skilled programmers who make significant contributions to the tech industry.
              We envision a future where every KNIT student, regardless of their major, possesses
              fundamental programming skills.
            </p>
          </div>
          <div className="md:w-1/2 flex items-center justify-center">
            <img
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Students collaborating on code"
              className="rounded-lg shadow-lg max-h-96 object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;