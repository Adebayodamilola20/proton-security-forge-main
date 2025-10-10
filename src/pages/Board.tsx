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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {directors.map((director, index) => (
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
