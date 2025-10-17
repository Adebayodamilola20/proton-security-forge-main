import { useState } from "react";
import { galleryItems } from "@/data/gallery";
import { X } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>("");

  const openLightbox = (url: string, title: string) => {
    setSelectedImage(url);
    setSelectedTitle(title);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setSelectedTitle("");
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-primary via-accent to-primary text-white">
        <div className="container-custom px-4">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">Gallery</h1>
              <p className="text-xl text-gray-200">
                A visual journey through our operations, training, and achievements
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {galleryItems.map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 50}>
                <div
                  className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer hover:shadow-2xl transition-all duration-300"
                  onClick={() => openLightbox(item.url, item.title)}
                >
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="text-highlight text-xs font-semibold mb-1">{item.category}</div>
                      <div className="text-white font-semibold">{item.title}</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Note about replacement */}
          <AnimatedSection delay={500}>
            <div className="mt-12 bg-highlight/10 border-l-4 border-highlight p-6 rounded-r-lg">
              <p className="text-primary font-semibold mb-2">📸All Images is update here </p>
              <p className="text-gray-600 text-sm">
                 <code className="bg-primary/10 px-2 py-1 rounded"></code> With actual  photos from operations, training sessions, and events.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-highlight transition-colors p-2"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>
          <div className="max-w-6xl max-h-[90vh] flex flex-col items-center">
            <img
              src={selectedImage}
              alt={selectedTitle}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="mt-4 text-white text-center">
              <h3 className="text-xl font-semibold">{selectedTitle}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
