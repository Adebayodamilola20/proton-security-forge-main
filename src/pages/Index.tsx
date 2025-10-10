import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Shield, Award, Users, Globe } from "lucide-react";
import { directors } from "@/data/directors";
import { services } from "@/data/services";
import DirectorCard from "@/components/DirectorCard";
import AnimatedSection from "@/components/AnimatedSection";
import heroImage from "@/assets/IMG_2209.jpg";
import trainingImage from "@/assets/IMG_2208.jpg";

const Index = () => {
  // Show only first 3 directors on homepage
  const featuredDirectors = directors.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Proton Security Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/50 to-primary/70"></div>
        </div>
        
        <div className="relative z-10 container-custom px-4 text-white text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Premier Security <span className="text-highlight">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
              Protecting what matters most with world-class training, advanced technology, and unmatched expertise
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <Button size="lg" className="btn-highlight text-lg px-8">
                  Our Services <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="btn-outline-highlight text-lg px-8">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <AnimatedSection delay={0}>
              <div>
                <div className="text-5xl font-bold text-highlight mb-2">25+</div>
                <div className="text-lg">Years Experience</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div>
                <div className="text-5xl font-bold text-highlight mb-2">10k+</div>
                <div className="text-lg">Trained Professionals</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div>
                <div className="text-5xl font-bold text-highlight mb-2">500+</div>
                <div className="text-lg">Corporate Clients</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div>
                <div className="text-5xl font-bold text-highlight mb-2">40+</div>
                <div className="text-lg">Countries Served</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <div className="inline-block bg-highlight/10 text-highlight px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  WHO WE ARE
                </div>
                <h2 className="text-4xl font-bold text-primary mb-6">
                  Setting the Standard in Security Excellence
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Proton Security is a premier provider of comprehensive security solutions, combining cutting-edge technology with decades of expertise to deliver unparalleled protection for businesses and organizations worldwide.
                </p>
                <p className="text-gray-600 mb-8">
                  Our team of certified professionals brings together military, law enforcement, and corporate security experience to create customized solutions that address your unique security challenges.
                </p>
                <Link to="/about">
                  <Button className="btn-highlight">
                    Learn More About Us <ArrowRight className="ml-2" />
                  </Button>
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-gradient-to-br from-primary to-accent text-white p-6 hover:scale-105 transition-transform">
                  <Shield size={40} className="mb-4 text-highlight" />
                  <h3 className="text-xl font-bold mb-2">Certified Excellence</h3>
                  <p className="text-sm">Industry-leading certifications and standards</p>
                </Card>
                <Card className="bg-gradient-to-br from-accent to-primary text-white p-6 hover:scale-105 transition-transform">
                  <Award size={40} className="mb-4 text-highlight" />
                  <h3 className="text-xl font-bold mb-2">Award Winning</h3>
                  <p className="text-sm">Recognized for exceptional service delivery</p>
                </Card>
                <Card className="bg-gradient-to-br from-primary to-accent text-white p-6 hover:scale-105 transition-transform">
                  <Users size={40} className="mb-4 text-highlight" />
                  <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                  <p className="text-sm">Highly trained security professionals</p>
                </Card>
                <Card className="bg-gradient-to-br from-accent to-primary text-white p-6 hover:scale-105 transition-transform">
                  <Globe size={40} className="mb-4 text-highlight" />
                  <h3 className="text-xl font-bold mb-2">Global Reach</h3>
                  <p className="text-sm">International security operations</p>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="inline-block bg-highlight/10 text-highlight px-4 py-1 rounded-full text-sm font-semibold mb-4">
                WHAT WE OFFER
              </div>
              <h2 className="text-4xl font-bold text-primary mb-4">Comprehensive Security Solutions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From corporate security to specialized training, we provide end-to-end solutions tailored to your needs
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 100}>
                <Card className="group h-full hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-t-transparent hover:border-t-accent">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-highlight/20 transition-colors">
                      <service.icon className="text-accent group-hover:text-highlight transition-colors" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-highlight rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={300}>
            <div className="text-center mt-12">
              <Link to="/services">
                <Button size="lg" className="btn-highlight">
                  View All Services <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Training Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <img
                src={trainingImage}
                alt="Security Training"
                className="rounded-lg shadow-2xl"
              />
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div>
                <div className="inline-block bg-highlight/20 text-highlight px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  TRAINING & DEVELOPMENT
                </div>
                <h2 className="text-4xl font-bold mb-6">
                  World-Class Security Training Programs
                </h2>
                <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                  Our comprehensive training programs are designed to develop highly skilled security professionals capable of handling any situation with confidence and expertise.
                </p>
                <ul className="space-y-3 mb-8">
                  {["Basic Security Training", "Advanced Tactical Operations", "Crisis Management", "Specialized Certifications"].map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-200">
                      <div className="w-2 h-2 bg-highlight rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/training">
                  <Button size="lg" className="btn-highlight">
                    Explore Training Programs <ArrowRight className="ml-2" />
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Board Members Preview */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="inline-block bg-highlight/10 text-highlight px-4 py-1 rounded-full text-sm font-semibold mb-4">
                LEADERSHIP TEAM
              </div>
              <h2 className="text-4xl font-bold text-primary mb-4">Meet Our Board of Directors</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experienced leaders driving innovation and excellence in security solutions
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {featuredDirectors.map((director, index) => (
              <AnimatedSection key={director.id} delay={index * 100}>
                <DirectorCard director={director} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={300}>
            <div className="text-center">
              <Link to="/board">
                <Button size="lg" className="btn-highlight">
                  See More <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary via-accent to-primary text-white">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-6">Ready to Secure Your Future?</h2>
              <p className="text-xl mb-8 text-gray-200">
                Partner with Proton Security for comprehensive protection and peace of mind
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="btn-highlight text-lg px-8">
                    Request Consultation
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="btn-outline-highlight text-lg px-8">
                    View Services
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Index;
