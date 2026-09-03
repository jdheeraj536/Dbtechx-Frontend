import { useState } from "react";
import { FaImage, FaTimes } from "react-icons/fa";
import Navbar from "../assets/components/Navbar";
import Footer from "../assets/components/Footer";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Sample gallery items - replace or map with your actual project/office images
  const galleryImages = [
    { id: 1, title: "Office Headquarters - Purnia", category: "Office", url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" },
    { id: 2, title: "Web Development Session", category: "Development", url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80" },
    { id: 3, title: "Client Project Showcase", category: "Projects", url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" },
    { id: 4, title: "UI/UX Designing Phase", category: "Design", url: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80" },
    { id: 5, title: "Team Collaboration", category: "Team", url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" },
    { id: 6, title: "Digital Marketing Strategy", category: "Marketing", url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80" },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between">
      <Navbar />

      <main className="pt-32 pb-24 px-6 lg:px-16 flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold text-red-500 bg-red-500/10 px-3 py-1 rounded-full">
              Our Visual Journey
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-4 mb-4">Project & Office Gallery</h1>
            <p className="text-zinc-400 text-sm md:text-base">
              A glimpse into our workspace, development cycles, and creative milestones at DBTECHX.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((item) => (
              <div 
                key={item.id} 
                onClick={() => setSelectedImage(item)}
                className="group relative bg-[#0b0c10] border border-zinc-800 rounded-2xl overflow-hidden cursor-pointer hover:border-red-500/50 transition-all duration-300 shadow-xl"
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={item.url} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <span className="text-xs font-semibold text-red-400">{item.category}</span>
                      <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between border-t border-zinc-900 bg-black/40">
                  <span className="text-sm font-medium text-zinc-300">{item.title}</span>
                  <FaImage className="text-red-500 text-sm" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal Preview */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full bg-[#0b0c10] border border-zinc-800 rounded-2xl overflow-hidden p-4">
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-zinc-900 border border-zinc-800 text-red-500 p-3 rounded-full hover:bg-zinc-800 transition-colors"
              >
                <FaTimes />
              </button>
              <img 
                src={selectedImage.url} 
                alt={selectedImage.title} 
                className="w-full h-[60vh] object-cover rounded-xl mb-4"
              />
              <div className="px-2">
                <span className="text-xs font-semibold text-red-500">{selectedImage.category}</span>
                <h2 className="text-2xl font-bold text-white mt-1">{selectedImage.title}</h2>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Gallery;