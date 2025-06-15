import React from 'react';
import { Mic, Users, Zap, Target } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <Mic className="w-8 h-8" />,
      title: "100+ Episodes",
      description: "Recorded across multiple podcast shows"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "50K+ Community",
      description: "Engaged followers across all platforms"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Hyderabad Hustlers",
      description: "Co-founded the city's premier podcast platform"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Content Strategy",
      description: "Helping creators build authentic brands"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-deep-black mb-8 leading-tight">
              BUILDING
              <br />
              <span className="text-warm-yellow">COMMUNITIES</span>
              <br />
              THROUGH STORIES
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                What started as a passion for storytelling has evolved into a mission to amplify voices that matter. As the co-founder of <strong className="text-warm-yellow">Hyderabad Hustlers</strong>, I've had the privilege of creating a platform where entrepreneurs, creators, and changemakers share their authentic journeys.
              </p>
              
              <p>
                My journey in content creation began with a simple belief: every person has a story worth telling. Through podcasting, I've discovered the power of authentic conversations to inspire, educate, and build genuine connections within our community.
              </p>
              
              <p>
                Today, I focus on helping creators find their voice, build their personal brands, and create content that resonates with their audience. Whether it's through one-on-one mentoring, collaborative projects, or speaking engagements, I'm committed to fostering a creator economy that values authenticity over algorithms.
              </p>
            </div>

            <div className="mt-8">
              <button className="bg-warm-yellow text-deep-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105">
                Learn More About My Journey
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-2xl hover:bg-warm-yellow hover:text-deep-black transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="text-warm-yellow group-hover:text-deep-black mb-4">
                  {achievement.icon}
                </div>
                <h3 className="font-bold text-xl mb-2 text-deep-black">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 group-hover:text-deep-black">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;