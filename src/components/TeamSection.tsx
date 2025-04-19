import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Rahul Sharma',
      role: 'Club President',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      bio: 'Computer Science senior with expertise in algorithms and full-stack development.',
      social: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
        email: 'mailto:rahul@example.com',
      },
    },
    {
      name: 'Priya Patel',
      role: 'Vice President',
      image: 'https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      bio: 'AI enthusiast specializing in machine learning and competitive programming.',
      social: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
        email: 'mailto:priya@example.com',
      },
    },
    {
      name: 'Ajay Kumar',
      role: 'Technical Lead',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      bio: 'Backend developer with expertise in system architecture and cloud solutions.',
      social: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
        email: 'mailto:ajay@example.com',
      },
    },
    {
      name: 'Neha Gupta',
      role: 'Event Coordinator',
      image: 'https://images.pexels.com/photos/3757004/pexels-photo-3757004.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      bio: 'Creative problem-solver passionate about hackathons and coding competitions.',
      social: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
        email: 'mailto:neha@example.com',
      },
    },
  ];

  return (
    <div id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Passionate individuals dedicated to fostering a culture of innovation and excellence in programming.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative group">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-3">
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-400 transition-colors duration-200"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-400 transition-colors duration-200"
                      >
                        <Linkedin size={18} />
                      </a>
                    )}
                    {member.social.email && (
                      <a
                        href={member.social.email}
                        className="text-white hover:text-blue-400 transition-colors duration-200"
                      >
                        <Mail size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium text-sm mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#join"
            className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-300"
          >
            Join Our Team
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;