import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { directors } from "@/data/directors";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Award, Facebook, Instagram } from "lucide-react";
import { TikTokIcon } from "@/components/TikTokIcon";

const DirectorProfile = () => {
  const { id } = useParams();
  const director = directors.find((d) => d.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    if (!director) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % director.images.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [director]);

  // Scroll to top on component mount (route change) - ensures page starts at the top (picture visible)
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  if (!director) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">Director Not Found</h1>
          <Link to="/board">
            <Button className="btn-highlight">Back to Board</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="bg-primary text-white py-4">
        <div className="container-custom px-4">
          <Link to="/board">
            <Button variant="ghost" className="text-white hover:text-highlight hover:bg-white/10">
              <ArrowLeft className="mr-2" size={20} />
              Back to Board
            </Button>
          </Link>
        </div>
      </div>

      {/* Profile Content */}
      <section className="section-padding py-5 ">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Image Slideshow */}
            <div className="relative">
              <Card className="overflow-hidden sticky top-24">
                <CardContent className="p-0">
                  <div className="relative h-[740px]">
                    {director.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${director.name} - ${index + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                          index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    ))}
                  </div>
                  
                  {/* Image indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {director.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentImageIndex 
                            ? 'bg-highlight w-6' 
                            : 'bg-white/50 hover:bg-white/70'
                        }`}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right: Bio and Info */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold text-primary mb-2">{director.name}</h1>
                <p className="text-xl text-highlight font-semibold mb-6">{director.title}</p>
                
                {/* Social Links */}
                <div className="flex space-x-4 mb-8">
                  {director.social.tiktok && (
                    <a 
                      href={director.social.tiktok} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                    >
                      <TikTokIcon className="w-5 h-5 text-white" />
                    </a>
                  )}
                  {director.social.instagram && (
                    <a 
                      href={director.social.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                    >
                      <Instagram className="text-white" size={20} />
                    </a>
                  )}
                  {director.social.facebook && (
                    <a 
                      href={director.social.facebook} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                    >
                      <Facebook className="text-white" size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Bio */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-primary mb-4">Biography</h2>
                  <p className="text-gray-700 leading-relaxed">{director.bio}</p>
                </CardContent>
              </Card>

              {/* Achievements */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <Award className="text-accent" size={32} />
                    <h2 className="text-2xl font-bold text-primary">Key Achievements</h2>
                  </div>
                  <ul className="space-y-4">
                    {director.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start space-x-3 p-3 bg-muted rounded-lg hover:bg-accent/10 transition-colors">
                        <div className="w-2 h-2 bg-highlight rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DirectorProfile;
