import React from 'react';
import { Instagram, Linkedin, Youtube, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-deep-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Shoaib Khan</h3>
            <p className="text-gray-400">
              Podcaster, Content Creator, and Co-founder of Hyderabad Hustlers. 
              Building communities through authentic storytelling.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-warm-yellow">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-400 hover:text-warm-yellow transition-colors">Home</a>
              <a href="#about" className="block text-gray-400 hover:text-warm-yellow transition-colors">About</a>
              <a href="#podcasts" className="block text-gray-400 hover:text-warm-yellow transition-colors">Podcasts</a>
              <a href="#gallery" className="block text-gray-400 hover:text-warm-yellow transition-colors">Gallery</a>
              <a href="#contact" className="block text-gray-400 hover:text-warm-yellow transition-colors">Contact</a>
            </div>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-warm-yellow">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-warm-gray p-3 rounded-full hover:bg-warm-yellow hover:text-deep-black transition-all duration-300 transform hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-warm-gray p-3 rounded-full hover:bg-warm-yellow hover:text-deep-black transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="bg-warm-gray p-3 rounded-full hover:bg-warm-yellow hover:text-deep-black transition-all duration-300 transform hover:scale-110"
              >
                <Youtube size={20} />
              </a>
              <a
                href="#"
                className="bg-warm-gray p-3 rounded-full hover:bg-warm-yellow hover:text-deep-black transition-all duration-300 transform hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Let's create something amazing together
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-warm-gray pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 Shoaib Khan. All rights reserved.
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Built with</span>
              <Heart size={16} className="text-warm-yellow" />
              <span>by [Developer Name]</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;