import { directors } from "@/data/directors";
import DirectorCard from "@/components/DirectorCard";
import AnimatedSection from "@/components/AnimatedSection";

const Board = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-primary via-accent to-primary text-white">
        <div className="container-custom px-4">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">Board of Directors</h1>
              <p className="text-xl text-gray-200">
                Meet the experienced leaders driving Proton Security's vision and excellence
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Directors Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our board comprises distinguished professionals with decades of combined experience in security, 
                military operations, corporate leadership, and strategic management. Each member brings unique 
                expertise that shapes our commitment to excellence.
              </p>
            </div>
          </AnimatedSection>

          {/* Executive Team Heading */}
          <AnimatedSection delay={200}>
            <div className="text-left">
              <div className="inline-block">
                <h2 className="text-4xl font-bold text-primary mb-2">
                  Head Of Executives
                </h2>
                <div className="w-24 h-2 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mx-auto mt-1 mb-12"></div>
              </div>
            </div>
          </AnimatedSection>

          {/* First Group - Up to Babatunde Ikotun */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
            {directors.slice(0, 5).map((director, index) => (
              <AnimatedSection key={director.id} delay={index * 100}>
                <DirectorCard director={director} />
              </AnimatedSection>
            ))}
          </div>

          {/* Second Group - From John Chinwendu Down */}
          <AnimatedSection delay={300}>
            <div className="text-left">
              <div className="inline-block">
                <h2 className="text-3xl font-bold text-primary mb-2">
                  Managers 
                </h2>
                <div className="w-20 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mx-auto mt-1 mb-12"></div>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {directors.slice(5).map((director, index) => (
              <AnimatedSection key={director.id} delay={index * 100}>
                <DirectorCard director={director} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Board;
