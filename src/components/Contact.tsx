import React, { useState } from 'react';
import { Mail, Instagram, Linkedin, Send, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-warm-yellow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-deep-black mb-6">
            LET'S
            <br />
            <span className="text-white">CONNECT</span>
          </h2>
          <p className="text-xl text-deep-black max-w-3xl mx-auto">
            Have a story to share? Want to collaborate? Or just want to say hello? 
            I'd love to hear from you. Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-deep-black mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-deep-black mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-warm-yellow focus:border-transparent transition-all duration-200"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-deep-black mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-warm-yellow focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-deep-black mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-warm-yellow focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell me about your project, idea, or just say hello..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-deep-black text-white py-4 rounded-xl font-semibold hover:bg-warm-gray transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-deep-black rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-warm-yellow p-3 rounded-full">
                    <Mail className="w-6 h-6 text-deep-black" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-300">shoaib@hyderabadhustlers.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-warm-yellow p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-deep-black" />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-gray-300">Hyderabad, India</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-warm-yellow p-3 rounded-full">
                    <Phone className="w-6 h-6 text-deep-black" />
                  </div>
                  <div>
                    <p className="font-semibold">Response Time</p>
                    <p className="text-gray-300">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-deep-black mb-6">Follow Me</h3>
              <div className="space-y-4">
                <a
                  href="#"
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-warm-yellow transition-all duration-300 group"
                >
                  <Instagram className="w-6 h-6 text-pink-600 group-hover:text-deep-black" />
                  <div>
                    <p className="font-semibold text-deep-black">Instagram</p>
                    <p className="text-gray-600 group-hover:text-deep-black">@shoaibkhan</p>
                  </div>
                </a>
                
                <a
                  href="#"
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-warm-yellow transition-all duration-300 group"
                >
                  <Linkedin className="w-6 h-6 text-blue-600 group-hover:text-deep-black" />
                  <div>
                    <p className="font-semibold text-deep-black">LinkedIn</p>
                    <p className="text-gray-600 group-hover:text-deep-black">Shoaib Khan</p>
                  </div>
                </a>
                
                <a
                  href="#"
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-warm-yellow transition-all duration-300 group"
                >
                  <Mail className="w-6 h-6 text-red-600 group-hover:text-deep-black" />
                  <div>
                    <p className="font-semibold text-deep-black">Direct Email</p>
                    <p className="text-gray-600 group-hover:text-deep-black">Quick response guaranteed</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;