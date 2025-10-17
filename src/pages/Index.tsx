import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Shield, Award, Users, Globe, MessageCircle, Send, Trash2 } from "lucide-react";
import { directors } from "@/data/directors";
import { services } from "@/data/services";
import DirectorCard from "@/components/DirectorCard";
import AnimatedSection from "@/components/AnimatedSection";
import heroImage from "@/assets/IMG_2209.jpg";
import trainingImage from "@/assets/IMG_2208.jpg";

// WARNING: SECURITY RISK! This key should NEVER be hardcoded in production client-side code.
// Please move this API key to a secure backend environment variable and use a proxy server.
const API_KEY = "b71a861324284e6a803e294253a09ba6"; 

// Define the bounce animation keyframes for the chat button
const BOUNCE_ANIMATION_STYLE = `
@keyframes pulse-bounce {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.6), 0 0 5px rgba(255, 255, 255, 0.4);
  }
}
.intermittent-bounce {
    animation: pulse-bounce 0.5s ease-in-out infinite alternate; 
}
`;

const Index = () => {
  // FIXED: Filter directors with images before slicing
  const featuredDirectors = directors
    .filter(d => d.images && d.images.length > 0)
    .slice(0, 3);
  
  const chatMessagesRef = useRef(null);

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false); 
  const [isThrottled, setIsThrottled] = useState(false);

  // Function to handle automatic scroll
  const scrollToBottom = () => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isChatOpen]);

  useEffect(() => {
    setIsBouncing(true);

    const initialStopTimer = setTimeout(() => {
        setIsBouncing(false);
    }, 5000); 

    const intervalId = setInterval(() => {
        setIsBouncing(true);

        const innerStopTimer = setTimeout(() => {
            setIsBouncing(false);
        }, 5000); 

        return () => clearTimeout(innerStopTimer);
    }, 9000); 

    return () => {
        clearTimeout(initialStopTimer);
        clearInterval(intervalId);
    };
  }, []); 
  
  // Function to clear the messages
  const clearChat = () => {
      setMessages([]);
      setInputValue("");
      const initialMessage = {
          id: 1,
          text: "Hello! I'm the Proton Security AI assistant. How can I help you with our services or training today?",
          sender: "ai",
      };
      setMessages([initialMessage]);
  };
  
  // Initialize chat with a welcome message on mount
  useEffect(() => {
      if (messages.length === 0) {
          clearChat();
      }
  }, []);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading || isThrottled) return;

    const userMessage = { id: Date.now(), text: inputValue, sender: "user" };
    setMessages((prev) => [...prev, userMessage]); 
    const userInput = inputValue;
    setInputValue("");
    setIsLoading(true);
    setIsThrottled(true);

    setTimeout(() => {
        setIsThrottled(false);
    }, 3000);

    try {
      let conversationContext = "";
      
      messages.slice(1).forEach((msg) => {
        if (msg.sender === "user") {
          conversationContext += `User: ${msg.text}\n`;
        } else if (msg.sender === "ai") {
          conversationContext += `Assistant: ${msg.text}\n`;
        }
      });
      
      conversationContext += `User: ${userInput}\nAssistant:`;

      const response = await fetch("https://gateway.pixazo.ai/llama-2/v1/getData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Ocp-Apim-Subscription-Key": API_KEY,
        },
        body: JSON.stringify({
          system: `You are a helpful AI assistant for Proton Security, a premier provider of security solutions. Respond professionally, focusing on security services, training, and expertise. Keep responses concise and helpful. 

IF ASKED FOR CONTACT INFORMATION, USE THE FOLLOWING EXACT DETAILS:
Company Address: 10 Jibowo Yaba Lagos Nigeria (***REPLACE THIS WITH YOUR REAL ADDRESS***)
Email: info@protonsecurity.com (***REPLACE THIS WITH YOUR REAL EMAIL***)
Phone: +234 8032023600 (REPLACE THIS WITH YOUR REAL PHONE NUMBER***)



`,
          prompt: conversationContext,
          max_tokens: 500,
          seed: 8,
          temperature: 0.6,
          top_p: 1,
          top_k: 1
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: "No error details provided." }));
        console.error("API Error Status:", response.status, "Details:", errorData);
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      const aiText = data.choices?.[0]?.text || 
                     data.generated_text || 
                     data.response || 
                     data.content || 
                     "I couldn't generate a response. The API returned a success status but no text. Please try again.";

      const aiResponse = {
        id: Date.now() + 1,
        text: aiText.trim(),
        sender: "ai",
      };
      setMessages((prev) => [...prev, aiResponse]);
    } catch (error) {
      console.error("Error calling Pixazo.ai Llama-2 API:", error);
      
      let errorMessage = "Sorry, there was an error processing your request. Please try again.";

      if (error.message.includes("API error: 429")) {
          errorMessage = "🚨 **Rate Limit Exceeded (Error 429)**: You've sent too many requests too quickly. Please wait a moment and try again, or **click the trash icon to clear the chat** and try a shorter query.";
      } else if (error.message.includes("API error: 401") || error.message.includes("API error: 403")) {
          errorMessage = "🚨 Error: API Key is unauthorized or invalid. Please check your Pixazo.ai subscription key and billing.";
      } else if (error.message.includes("API error: 400")) {
          errorMessage = "⚠️ Error: Bad Request. The request or conversation history is likely too long. **Click the trash icon to clear the chat** and try a shorter message.";
      } else if (error.message.includes("API error: 5")) {
          errorMessage = `💥 Server Error: The Pixazo.ai server is experiencing an issue. Please try again shortly.`;
      } else if (error.message.includes("Failed to fetch")) {
          errorMessage = "🔌 Connection Error: Failed to connect to the Pixazo.ai server. Check your network.";
      } else { 
          errorMessage = `❌ Unexpected Error: ${error.message}. Please check the browser console for details.`;
      }

      const errorResponse = {
        id: Date.now() + 1,
        text: errorMessage,
        sender: "ai",
      };
      setMessages((prev) => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen">
      
      <style>{BOUNCE_ANIMATION_STYLE}</style>

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
              PROTON SECURITY <span className="text-highlight">SERVICES</span>
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
                <div className="text-5xl font-bold text-highlight mb-2">21+</div>
                <div className="text-lg">Years Experience</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div>
                <div className="text-5xl font-bold text-highlight mb-2">5k+</div>
                <div className="text-lg">Trained Professionals</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div>
                <div className="text-5xl font-bold text-highlight mb-2">60+</div>
                <div className="text-lg">Corporate Clients</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div>
                <div className="text-5xl font-bold text-highlight mb-2">7+</div>
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
                  <h3 className="text-xl font-bold mb-2">Gig Secured Logistics</h3>
                  <p className="text-sm">Combines security, and technology to move goods efficiently.</p>
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

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="inline-block bg-highlight/10 text-highlight px-4 py-1 rounded-full text-sm font-semibold mb-4">
                CLIENT TESTIMONIALS
              </div>
              <h2 className="text-4xl font-bold text-primary mb-4">What Our Clients Say</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Trusted by industry leaders worldwide for exceptional security solutions
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <AnimatedSection delay={0}>
              <Card className="h-full hover:shadow-lg transition-shadow border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "Proton Security transformed our corporate security infrastructure. Their professionalism and expertise are unmatched. Highly recommended!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold mr-3">
                      JM
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">John Martinez</h4>
                      <p className="text-sm text-gray-500">CEO, Tech Global Inc.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Testimonial 2 */}
            <AnimatedSection delay={100}>
              <Card className="h-full hover:shadow-lg transition-shadow border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "The training programs are world-class. Our security team is now more confident and capable than ever before. Excellent investment!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold mr-3">
                      SA
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">Sarah Anderson</h4>
                      <p className="text-sm text-gray-500">Director, Retail Solutions Ltd</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Testimonial 3 */}
            <AnimatedSection delay={200}>
              <Card className="h-full hover:shadow-lg transition-shadow border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "Outstanding service! Their event security management for our annual conference was flawless. Professional team, highly efficient."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold mr-3">
                      DW
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">David Williams</h4>
                      <p className="text-sm text-gray-500">Event Manager, Prestige Events</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Testimonial 4 */}
            <AnimatedSection delay={300}>
              <Card className="h-full hover:shadow-lg transition-shadow border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "Best security partner we've ever worked with. Their attention to detail and rapid response capabilities are exceptional. Five stars!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold mr-3">
                      ER
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">Emma Roberts</h4>
                      <p className="text-sm text-gray-500">Security Manager, Global Bank</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Testimonial 5 */}
            <AnimatedSection delay={400}>
              <Card className="h-full hover:shadow-lg transition-shadow border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "Their crisis management training saved our team during a critical situation. Professional, thorough, and highly effective. Thank you!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold mr-3">
                      MC
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">Michael Chen</h4>
                      <p className="text-sm text-gray-500">Operations Director, Manufacturing Co</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Testimonial 6 */}
            <AnimatedSection delay={500}>
              <Card className="h-full hover:shadow-lg transition-shadow border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "Reliable, professional, and always available. Proton Security has been protecting our facilities for 5 years. Couldn't be happier!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold mr-3">
                      LT
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">Lisa Thompson</h4>
                      <p className="text-sm text-gray-500">Facility Manager, Healthcare Group</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
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

      {/* Chat Toggle Button */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 z-50 bg-gradient-to-r from-primary to-accent text-white p-4 rounded-full shadow-lg transition-transform duration-200 ${
          isChatOpen 
            ? "scale-100" 
            : (isBouncing 
                ? "intermittent-bounce" 
                : "hover:scale-110") 
        }`}
        aria-label="Open Chat"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Box */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-full max-w-[calc(100vw-48px)] md:max-w-md h-[420px] md:h-[500px] bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl flex flex-col">
          {/* Chat Header */}
          <div className="bg-white/5 backdrop-blur-sm border-b border-white/10 p-4 rounded-t-2xl flex justify-between items-center">
            <h3 className="font-semibold text-white">Proton Security AI</h3>
            <div className="flex gap-2">
              <button
                onClick={clearChat}
                className="text-white/80 hover:text-red-500 transition-colors p-1"
                title="Clear Chat History"
              >
                <Trash2 size={20} />
              </button>
              <button
                onClick={toggleChat}
                className="text-white/80 hover:text-white transition-colors text-xl font-bold"
                title="Close Chat"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div ref={chatMessagesRef} className="flex-1 p-4 overflow-y-auto space-y-4 bg-white/5">
            {messages.length === 0 ? (
              <p className="text-white/70 text-center italic text-sm">Ask me anything about our security services, training, or solutions!</p>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                      message.sender === "user"
                        ? "bg-gradient-to-r from-primary to-accent text-white"
                        : "bg-white/20 backdrop-blur-md text-white border border-white/20"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                  </div>
                </div>
              ))
            )}
            {/* Loading Spinner */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/20 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white/5 backdrop-blur-sm border-t border-white/10 rounded-b-2xl">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={isThrottled ? "Please wait..." : "Type your message..."}
                className="flex-1 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/50 rounded-full focus:outline-none focus:ring-2 focus:ring-accent/50"
                disabled={isLoading || isThrottled}
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !inputValue.trim() || isThrottled}
                className="bg-gradient-to-r from-primary to-accent text-white p-3 rounded-full hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity flex items-center justify-center"
                title={isThrottled ? "Waiting for request cooldown" : "Send Message"}
              >
                {isLoading ? (
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <Send size={20} />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;