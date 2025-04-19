import React, { useState } from 'react';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  category: 'upcoming' | 'past';
}

const EventsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'upcoming' | 'past'>('all');

  const events: Event[] = [
    {
      id: 1,
      title: 'Annual Hackathon 2025',
      date: 'March 15-16, 2025',
      time: '9:00 AM - 6:00 PM',
      location: 'KNIT Main Auditorium',
      description: 'A 36-hour coding marathon where students create innovative solutions to real-world problems. Prizes worth ₹50,000 to be won!',
      image: 'https://images.pexels.com/photos/7102/notes-macbook-study-conference.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
      category: 'upcoming',
    },
    {
      id: 2,
      title: 'Web Development Workshop',
      date: 'February 10, 2025',
      time: '2:00 PM - 5:00 PM',
      location: 'Computer Science Lab',
      description: 'Learn modern web development techniques using React and Node.js. Hands-on session with industry experts.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      category: 'upcoming',
    },
    {
      id: 3,
      title: 'Competitive Programming Contest',
      date: 'January 20, 2025',
      time: '10:00 AM - 1:00 PM',
      location: 'Online (Zoom)',
      description: 'Test your algorithmic skills in this fast-paced coding competition. Great preparation for coding interviews.',
      image: 'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      category: 'past',
    },
    {
      id: 4,
      title: 'Introduction to Machine Learning',
      date: 'December 5, 2024',
      time: '3:00 PM - 6:00 PM',
      location: 'Conference Hall',
      description: 'A beginner-friendly session on the basics of machine learning with Python and scikit-learn.',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      category: 'past',
    },
  ];

  const filteredEvents = activeFilter === 'all' 
    ? events 
    : events.filter(event => event.category === activeFilter);

  return (
    <div id="events" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Events</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Join us for exciting programming events, workshops, and competitions designed to enhance your coding skills.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-2 text-sm font-medium rounded-l-md ${
                activeFilter === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } border border-gray-300`}
            >
              All Events
            </button>
            <button
              onClick={() => setActiveFilter('upcoming')}
              className={`px-6 py-2 text-sm font-medium ${
                activeFilter === 'upcoming'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } border-t border-b border-r border-gray-300`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setActiveFilter('past')}
              className={`px-6 py-2 text-sm font-medium rounded-r-md ${
                activeFilter === 'past'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } border-t border-b border-r border-gray-300`}
            >
              Past
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="group bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-6">
                  <div className="flex items-center mb-2">
                    <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                      event.category === 'upcoming' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {event.category === 'upcoming' ? 'Upcoming' : 'Past'}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                  </div>
                  {event.category === 'upcoming' && (
                    <a
                      href="#register"
                      className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
                    >
                      Register Now
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#calendar"
            className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-300"
          >
            View Full Calendar
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventsSection;