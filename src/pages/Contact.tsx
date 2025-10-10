import { useState, useEffect } from "react";  // Added useEffect for init
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Loader2 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  // Initialize EmailJS once on component mount (Uses your Public Key for auth)
  useEffect(() => {
    const PUBLIC_KEY = 'iGFdyWHL16gdFMaSO';  // Your EmailJS Public Key
    emailjs.init(PUBLIC_KEY);
    console.log("EmailJS Initialized with Public Key:", PUBLIC_KEY);  // Debug log
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS Credentials
      const SERVICE_ID = 'service_bx69i3r';
      const TEMPLATE_ID = 'vergo_damilola2007';

      console.log("Sending email with data:", formData);  // Debug: Log form data
      console.log("Using Service ID:", SERVICE_ID, "Template ID:", TEMPLATE_ID);  // Debug: Verify IDs

      // Send email using EmailJS (Fixed: Simplified params; to_email set in dashboard)
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message
        }
      );

      console.log("EmailJS Send Result:", result);  // Debug: Success response (status: 200)

      toast({
        title: "Message Sent Successfully!",
        description: "We've received your message and will get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error: any) {
      // Enhanced error logging
      console.error("EmailJS Error Details:", {
        message: error.message || 'Unknown error',
        status: error.status,
        text: error.text,
        full: error
      });
      toast({
        title: "Failed to Send Message",
        description: "Please try again or contact us directly via phone or email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-primary via-accent to-primary text-white">
        <div className="container-custom px-4">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-gray-200">
                Get in touch with our team to discuss your security needs
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <AnimatedSection>
              <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-t-accent">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="text-accent" size={28} />
                  </div>
                  <h3 className="font-bold text-primary mb-2">Phone</h3>
                  <p className="text-sm text-gray-600">+234 8172005516</p>
                  <p className="text-sm text-gray-600">+234 8032023600</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-t-accent">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="text-accent" size={28} />
                  </div>
                  <h3 className="font-bold text-primary mb-2">Email</h3>
                  <p className="text-sm text-gray-600">info@protonsecurity.com</p>
                  <p className="text-sm text-gray-600">support@protonsecurity.com</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-t-accent">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="text-accent" size={28} />
                  </div>
                  <h3 className="font-bold text-primary mb-2">Address</h3>
                  <p className="text-sm text-gray-600">10, Jibowu street, Yaba,</p>
                  <p className="text-sm text-gray-600">Lagos, Nigeria.</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-t-accent">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="text-accent" size={28} />
                  </div>
                  <h3 className="font-bold text-primary mb-2">Business Hours</h3>
                  <p className="text-sm text-gray-600">Mon - Fri: 8AM - 6PM</p>
                  <p className="text-sm text-gray-600">24/7 Emergency Support</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          {/* Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection>
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-primary mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="Your full name"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="your.email@example.com"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-primary mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="What is this regarding?"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full min-h-[150px]"
                        placeholder="Tell us more about your security needs..."
                        disabled={isSubmitting}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="btn-highlight w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Google Maps with Red Marker Pinpoint (Original Iframe) */}
            <AnimatedSection delay={200}>
              <Card className="h-full">
                <CardContent className="p-0 h-full min-h-[600px]">
                  <div className="w-full h-full relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.3636!3d6.5134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae2b6f5e9%3A0x3e27b3e2b3e2b3e2!2s10%20Jibowu%20St%2C%20Yaba%2C%20Lagos!5e0!3m2!1sen!2sng!4v1234567890123!5m2!1sen!2sng&markers=color:red%7Clabel:P%7C6.5134,3.3636"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Proton Security - 10 Jibowu Street, Yaba, Lagos"
                    />
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
