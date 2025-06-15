import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Recording Session with Tech Entrepreneur",
      category: "Behind the Scenes"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/7688334/pexels-photo-7688334.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Hyderabad Hustlers Studio Setup",
      category: "Studio"
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/7688347/pexels-photo-7688347.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Guest Interview: Mental Health Expert",
      category: "Interview"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/7688335/pexels-photo-7688335.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Community Event Highlights",
      category: "Events"
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/7688348/pexels-photo-7688348.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Women in Tech Panel Discussion",
      category: "Panel"
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/7688349/pexels-photo-7688349.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Podcast Equipment & Setup",
      category: "Equipment"
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/7688350/pexels-photo-7688350.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Live Recording Event",
      category: "Live"
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/7688351/pexels-photo-7688351.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Content Creation Workshop",
      category: "Workshop"
    }
  ];

  const categories = ["All", "Behind the Scenes", "Studio", "Interview", "Events", "Panel", "Equipment", "Live", "Workshop"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const newIndex = direction === 'prev' 
      ? (selectedImage - 1 + filteredItems.length) % filteredItems.length
      : (selectedImage + 1) % filteredItems.length;
    
    setSelectedImage(newIndex);
  };

  return (
    <section id="gallery" className="py-20 bg-deep-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            BEHIND THE
            <br />
            <span className="text-warm-yellow">SCENES</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get an exclusive look at the creative process, guest interactions, and the 
            vibrant community that makes Hyderabad Hustlers special.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-warm-yellow text-deep-black'
                  : 'bg-warm-gray text-white hover:bg-medium-gray'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group cursor-pointer relative overflow-hidden rounded-2xl aspect-square"
              onClick={() => openModal(index)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-sm mb-1">{item.title}</p>
                  <p className="text-warm-yellow text-xs">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-warm-yellow transition-colors z-10"
            >
              <X size={32} />
            </button>
            
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-warm-yellow transition-colors"
            >
              <ChevronLeft size={32} />
            </button>
            
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-warm-yellow transition-colors"
            >
              <ChevronRight size={32} />
            </button>

            <div className="max-w-4xl max-h-full">
              <img
                src={filteredItems[selectedImage].src}
                alt={filteredItems[selectedImage].title}
                className="max-w-full max-h-full object-contain"
              />
              <div className="text-center mt-4">
                <h3 className="text-white font-semibold text-lg mb-1">
                  {filteredItems[selectedImage].title}
                </h3>
                <p className="text-warm-yellow text-sm">
                  {filteredItems[selectedImage].category}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;