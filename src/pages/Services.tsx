import { services } from "@/data/services";
import { clientLogos } from "@/data/clients";  // New: Import your clients data
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const Services = () => {
  // Duplicate logos for infinite scroll effect
  const duplicatedLogos = [...clientLogos, ...clientLogos];  

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-primary via-accent to-primary text-white">
        <div className="container-custom px-4">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-gray-200">
                Comprehensive security solutions tailored to meet your unique needs
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 100}>
                <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border-2 hover:border-accent group">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-highlight/20 transition-colors">
                        <service.icon className="text-accent group-hover:text-highlight transition-colors" size={32} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-2">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <Check className="text-highlight flex-shrink-0 mt-1" size={20} />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section - Moved to First Position After Services Grid */}
      <section className="py-12 bg-background border-t border-gray-200">  {/* Straight line divider */}
        <div className="container-custom">
          <AnimatedSection delay={0}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary">Our Esteemed Clients</h3>
              <p className="text-gray-600 mt-2">Trusted by leading organizations worldwide</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="marquee-container overflow-hidden rounded-lg bg-white py-4">  {/* White background */}
              <div className="marquee-content flex items-center gap-20 px-4">  {/* Removed invalid h-50; seamless flex line */}
                {duplicatedLogos.map((logo) => {
                  // No shadows, no extra styling: Logos blend directly with white container
                  const logoContainerClass = "flex-shrink-0 w-32 h-32 md:w-40 md:h-40 flex items-center justify-center";
                  
                  return (
                    <div
                      key={logo.id}
                      className={logoContainerClass}
                    >
                      <img
                        src={logo.image}  // Fixed: Use logo.src (not image)
                        alt={logo.alt}
                        className="max-w-full max-h-full object-contain"
                        loading="lazy"
                        title={logo.name}  // Tooltip on hover
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section - Moved to Last Position */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <AnimatedSection>
            <Card className="bg-gradient-to-r from-primary to-accent text-white">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold mb-4">Need a Custom Security Solution?</h2>
                <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
                  Let's discuss your specific security requirements and create a tailored solution
                </p>
                <Link to="/contact">
                  <Button size="lg" className="btn-highlight text-lg px-8">
                    Contact Our Team
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Services;
