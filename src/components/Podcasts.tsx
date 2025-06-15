import React from 'react';
import { PlayCircle, Clock, Calendar, ExternalLink } from 'lucide-react';

const Podcasts = () => {
  const featuredEpisodes = [
    {
      id: 1,
      title: "From Startup to Scale: The Entrepreneur's Journey",
      guest: "Priya Sharma",
      description: "Exploring the challenges and victories of building a tech startup in Hyderabad's growing ecosystem.",
      duration: "45 min",
      date: "Dec 15, 2024",
      thumbnail: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400",
      platforms: {
        youtube: "#",
        spotify: "#"
      }
    },
    {
      id: 2,
      title: "Content Creation in the Digital Age",
      guest: "Arjun Reddy",
      description: "Deep dive into building authentic personal brands and creating content that truly connects with audiences.",
      duration: "38 min",
      date: "Dec 10, 2024",
      thumbnail: "https://images.pexels.com/photos/7688334/pexels-photo-7688334.jpeg?auto=compress&cs=tinysrgb&w=400",
      platforms: {
        youtube: "#",
        spotify: "#"
      }
    },
    {
      id: 3,
      title: "The Psychology of Hustle Culture",
      guest: "Dr. Kavitha Menon",
      description: "Understanding the mental health implications of hustle culture and finding sustainable success.",
      duration: "52 min",
      date: "Dec 8, 2024",
      thumbnail: "https://images.pexels.com/photos/7688347/pexels-photo-7688347.jpeg?auto=compress&cs=tinysrgb&w=400",
      platforms: {
        youtube: "#",
        spotify: "#"
      }
    },
    {
      id: 4,
      title: "Building Communities That Last",
      guest: "Raghav Kumar",
      description: "Strategies for creating and nurturing online communities that drive real-world impact.",
      duration: "41 min",
      date: "Dec 5, 2024",
      thumbnail: "https://images.pexels.com/photos/7688335/pexels-photo-7688335.jpeg?auto=compress&cs=tinysrgb&w=400",
      platforms: {
        youtube: "#",
        spotify: "#"
      }
    },
    {
      id: 5,
      title: "Women in Tech: Breaking Barriers",
      guest: "Sneha Patel",
      description: "Highlighting the achievements and challenges of women breaking barriers in the tech industry.",
      duration: "47 min",
      date: "Dec 1, 2024",
      thumbnail: "https://images.pexels.com/photos/7688348/pexels-photo-7688348.jpeg?auto=compress&cs=tinysrgb&w=400",
      platforms: {
        youtube: "#",
        spotify: "#"
      }
    },
    {
      id: 6,
      title: "The Future of Work in India",
      guest: "Vikram Singh",
      description: "Exploring how remote work and digital transformation are reshaping India's workforce.",
      duration: "43 min",
      date: "Nov 28, 2024",
      thumbnail: "https://images.pexels.com/photos/7688349/pexels-photo-7688349.jpeg?auto=compress&cs=tinysrgb&w=400",
      platforms: {
        youtube: "#",
        spotify: "#"
      }
    }
  ];

  return (
    <section id="podcasts" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-deep-black mb-6">
            FEATURED
            <br />
            <span className="text-warm-yellow">EPISODES</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dive into conversations that matter. From startup journeys to personal growth, 
            each episode brings you closer to the stories that shape our community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredEpisodes.map((episode) => (
            <div
              key={episode.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="relative">
                <img
                  src={episode.thumbnail}
                  alt={episode.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <PlayCircle className="w-16 h-16 text-white" />
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{episode.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{episode.date}</span>
                  </div>
                </div>
                
                <h3 className="font-bold text-xl text-deep-black mb-2 line-clamp-2">
                  {episode.title}
                </h3>
                
                <p className="text-warm-yellow font-semibold mb-3">
                  with {episode.guest}
                </p>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {episode.description}
                </p>
                
                <div className="flex gap-2">
                  <button className="flex-1 bg-warm-yellow text-deep-black py-2 px-4 rounded-full font-semibold hover:bg-yellow-400 transition-colors duration-200 flex items-center justify-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    YouTube
                  </button>
                  <button className="flex-1 bg-deep-black text-white py-2 px-4 rounded-full font-semibold hover:bg-warm-gray transition-colors duration-200 flex items-center justify-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Spotify
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-deep-black text-white px-8 py-4 rounded-full font-semibold hover:bg-warm-gray transition-all duration-300 transform hover:scale-105">
            View All Episodes
          </button>
        </div>
      </div>
    </section>
  );
};

export default Podcasts;