import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Target, Brain, Users, Award, BookOpen } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import trainingImage from "@/assets/IMG_2171.jpg";

const Training = () => {
  const corePrograms = [
    {
      title: "Basic Security Training",
      duration: "4 weeks",
      description: "Foundation course covering essential security principles, procedures, and best practices",
      topics: ["Security Fundamentals", "Access Control", "Emergency Response", "Communication Skills"]
    },
    {
      title: "Advanced Tactical Operations",
      duration: "8 weeks",
      description: "Intensive training in tactical procedures, threat assessment, and advanced security operations",
      topics: ["Tactical Procedures", "Threat Assessment", "Close Protection", "Crisis Response"]
    },
    {
      title: "Executive Protection Specialist",
      duration: "6 weeks",
      description: "Specialized training for VIP and executive protection services",
      topics: ["Route Planning", "Advance Security", "Threat Detection", "Evasive Driving"]
    }
  ];

  const specializedModules = [
    {
      icon: Shield,
      title: "Cybersecurity Fundamentals",
      description: "Understanding digital threats and security protocols"
    },
    {
      icon: Target,
      title: "Counter-Terrorism Training",
      description: "Advanced threat identification and response strategies"
    },
    {
      icon: Users,
      title: "Crowd Management",
      description: "Event security and large-scale crowd control techniques"
    },
    {
      icon: Award,
      title: "First Responder Certification",
      description: "Medical emergency response and life-saving techniques"
    }
  ];

  const psychologicalModules = [
    "Conflict Resolution & De-escalation",
    "Stress Management Under Pressure",
    "Decision Making in Crisis Situations",
    "Behavioral Analysis & Threat Assessment",
    "Team Leadership & Communication",
    "Psychological Resilience Training"
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-24 bg-gradient-to-r from-primary via-accent to-primary text-white">
        <div className="container-custom px-4">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">Training & Recertification</h1>
              <p className="text-xl text-gray-200">
                World-class security training programs designed to develop elite professionals
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <img
                src={trainingImage}
                alt="Training Facility"
                className="rounded-lg shadow-2xl"
              />
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">Excellence Through Training</h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Our comprehensive training programs combine theoretical knowledge with practical, hands-on experience to prepare security professionals for real-world challenges.
                </p>
                <p className="text-gray-600 mb-6">
                  With state-of-the-art facilities, expert instructors, and cutting-edge curriculum, we've trained over 10,000 security professionals who now serve in organizations worldwide.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-accent/10 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-accent mb-1">10k+</div>
                    <div className="text-sm text-gray-600">Graduates</div>
                  </div>
                  <div className="bg-highlight/10 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-1">95%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Programs */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="inline-block bg-highlight/10 text-highlight px-4 py-1 rounded-full text-sm font-semibold mb-4">
                OUR CORE PROGRAMS
              </div>
              <h2 className="text-4xl font-bold text-primary mb-4">Foundation Training Programs</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive courses designed to build expertise from the ground up
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {corePrograms.map((program, index) => (
              <AnimatedSection key={program.title} delay={index * 100}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                      {program.duration}
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{program.title}</h3>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <div className="space-y-2">
                      <div className="font-semibold text-sm text-primary mb-2">Key Topics:</div>
                      {program.topics.map((topic, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-highlight rounded-full mr-2"></div>
                          {topic}
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

      {/* Specialized Modules */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="inline-block bg-accent/10 text-accent px-4 py-1 rounded-full text-sm font-semibold mb-4">
                SPECIALIZED MODULES
              </div>
              <h2 className="text-4xl font-bold text-primary mb-4">Advanced Specializations</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Develop expertise in specific security domains
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedModules.map((module, index) => (
              <AnimatedSection key={module.title} delay={index * 100}>
                <Card className="h-full text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-t-accent">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <module.icon className="text-accent" size={28} />
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2">{module.title}</h3>
                    <p className="text-sm text-gray-600">{module.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Psychological Modules */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Brain size={48} className="text-highlight" />
                  <div>
                    <div className="inline-block bg-highlight/20 text-highlight px-3 py-1 rounded-full text-sm font-semibold mb-2">
                      PSYCHOLOGICAL & STRATEGIC MODULES
                    </div>
                    <h2 className="text-3xl font-bold">Mental Preparedness & Strategy</h2>
                  </div>
                </div>
                <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                  Security excellence requires more than physical skills. Our psychological and strategic training modules develop the mental resilience, decision-making abilities, and leadership qualities essential for effective security professionals.
                </p>
                <p className="text-gray-300 mb-6">
                  These modules integrate cognitive psychology, behavioral science, and strategic thinking to prepare trainees for the complex challenges they'll face in real-world security scenarios.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-2 mb-6">
                    <BookOpen className="text-highlight" size={24} />
                    <h3 className="text-xl font-bold">Course Modules</h3>
                  </div>
                  <div className="space-y-3">
                    {psychologicalModules.map((module, idx) => (
                      <div key={idx} className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                        <div className="w-2 h-2 bg-highlight rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-200">{module}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <AnimatedSection>
            <Card className="bg-gradient-to-r from-accent to-primary text-white">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Training?</h2>
                <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
                  Join thousands of professionals who have elevated their careers through our training programs
                </p>
                <Link to="/contact">
                  <Button size="lg" className="btn-highlight text-lg px-8">
                    Enroll Now
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

export default Training;
