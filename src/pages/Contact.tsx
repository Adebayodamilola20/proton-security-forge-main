import { useState, useEffect, ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Loader2 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const ContactCard = ({ icon, title, info }: { icon: ReactNode, title: string, info: string[] }) => (
  <div className="min-w-[300px] flex-shrink-0">
    <Card className="h-full text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-t-accent bg-white shadow-sm">
      <CardContent className="p-8">
        <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
          {icon}
        </div>
        <h3 className="font-bold text-primary mb-2 text-lg">{title}</h3>
        {info.map((line, idx) => (
          <p key={idx} className="text-sm text-gray-600 leading-relaxed">{line}</p>
        ))}
      </CardContent>
    </Card>
  </div>
);

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });


  useEffect(() => {
    const PUBLIC_KEY = 'MobE0Sl28TVS8Mbcl';
    emailjs.init(PUBLIC_KEY);
    console.log("EmailJS Initialized with Public Key:", PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS Credentials
      const SERVICE_ID = 'service_rk1k1qk';
      const TEMPLATE_ID = 'template_yu0kfni';

      console.log("Sending email with data:", formData);
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

      console.log("EmailJS Send Result:", result);

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

      {/* Contact Info Scrolling Banner */}
      <section className="py-12 bg-background overflow-hidden border-b border-gray-100">
        <div className="container-custom">
          <div className="relative group overflow-hidden">
            <div className="flex animate-infinite-scroll hover:[animation-play-state:paused] whitespace-nowrap gap-6 py-6 transition-all duration-800">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-6 shrink-0">
                  <ContactCard icon={<Phone className="text-accent" />} title="Phone" info={["08032023600", "07032027481"]} />
                  <ContactCard icon={<Mail className="text-accent" />} title="Email" info={["info@protonsecurity.com",]} />
                  <ContactCard icon={<MapPin className="text-accent" />} title="Lagos HQ" info={["10, Jibowu street, Yaba,", "Lagos, Nigeria."]} />
                  <ContactCard icon={<MapPin className="text-accent" />} title="Abuja Office" info={["Plot 1031, Mabushi District,", "Cadastral Zone, FCT-Abuja"]} />
                  <ContactCard icon={<MapPin className="text-accent" />} title="Ibadan Office" info={["1,Paul Hendrickse Road, ", "Off Aare Avenue,New Bodija,Ibandan "]} />
                  <ContactCard icon={<MapPin className="text-accent" />} title="Port-Harcourt Office" info={["4,Graceland Avenue, ", "Tombia Extension,GRA Phase 2,Port-Harcourt"]} />
                  <ContactCard icon={<MapPin className="text-accent" />} title="Lagos Office" info={["15,Akanbi Cresent, ","Onitiri,Lagos State"]} />
                  <ContactCard icon={<Clock className="text-accent" />} title="Hours" info={["Mon - Fri: 8AM - 6PM", "24/7 Emergency Support"]} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form and Map Section */}
      <section className="section-padding bg-background">
        <div className="container-custom px-4">
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

            {/* Google Maps */}
            <AnimatedSection delay={200}>
              <Card className="h-full">
                <CardContent className="p-0 h-full min-h-[600px]">
                  <div className="w-full h-full relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.0824!2d3.3736!3d6.5134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d65a!2sJibowu%2C%20Yaba%2C%20Lagos!5e0!3m2!1sen!2sng!4v1733674000000!5m2!1sen!2sng"
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
