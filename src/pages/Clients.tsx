import ClientMarquee from "@/components/ClientMarquee";
import Testimonials from "@/components/Testimonials";
import AnimatedSection from "@/components/AnimatedSection";

const Clients = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-primary via-accent to-primary text-white">
        <div className="container-custom px-4">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">Our Clients</h1>
              <p className="text-xl text-gray-200">
                Trusted by leading organizations worldwide
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Client Logos Marquee */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">Trusted By Industry Leaders</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We're proud to serve over 500 corporate clients across diverse industries
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <ClientMarquee />
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="mt-8 bg-highlight/10 border-l-4 border-highlight p-6 rounded-r-lg">
              <p className="text-primary font-semibold mb-2">🏢 REPLACE CLIENT LOGOS HERE</p>
              <p className="text-gray-600 text-sm">
                Update client logos in <code className="bg-primary/10 px-2 py-1 rounded">src/data/clients.ts</code> with your actual client company logos.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />
    </div>
  );
};

export default Clients;
