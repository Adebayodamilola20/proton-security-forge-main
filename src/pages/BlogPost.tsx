import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Facebook, Twitter, MessageCircle } from "lucide-react";
import img4 from "@/assets/IMG_2251.jpg"; // Keeping the original import

const BlogPost = () => {
  const { id } = useParams();

  // Blog data - Complete content for all posts
  const blogData = {
    1: {
      title: "10 Event Security Tips for Companies and Individuals",
      date: "October 15, 2025",
      image: img4,
      content: `
        <p>Ensuring the safety and security of events, whether for a company or personal gathering, is paramount in today's volatile world. Here are 10 essential tips to help you secure your events effectively.</p>
        
        <h2>1. Conduct a Thorough Risk Assessment</h2>
        <p>Before any event, perform a comprehensive risk assessment. Identify potential threats such as unauthorized access, crowd control issues, medical emergencies, or even fire hazards. Understanding what could go wrong allows you to prepare adequately.</p>
        
        <h2>2. Hire Professional Security Personnel</h2>
        <p>Professional security guards are trained to handle various situations, from managing crowds to responding to emergencies. Ensure you hire licensed and experienced security personnel who understand the specific needs of your event.</p>
        
        <h2>3. Implement Access Control Measures</h2>
        <p>Control who enters your event by using tickets, ID checks, or invitation lists. Consider using wristbands or badges to distinguish between different access levels (VIP, staff, general admission).</p>
        
        <h2>4. Install Surveillance Systems</h2>
        <p>CCTV cameras and surveillance systems act as both a deterrent and a tool for monitoring activities. Ensure cameras cover all entry points, exits, and high-traffic areas.</p>
        
        <h2>5. Plan Emergency Exits and Evacuation Routes</h2>
        <p>Clearly mark all emergency exits and ensure they are accessible at all times. Communicate evacuation procedures to both staff and attendees, and conduct drills if necessary.</p>
        
        <h2>6. Screen Bags and Personal Items</h2>
        <p>Implement bag checks and metal detectors at entry points to prevent prohibited items from entering the venue. This is especially important for large events or high-profile gatherings.</p>
        
        <h2>7. Coordinate with Local Authorities</h2>
        <p>Inform local law enforcement and emergency services about your event. Their presence or quick response capability can be crucial in handling serious incidents.</p>
        
        <h2>8. Provide Adequate Lighting</h2>
        <p>Well-lit venues reduce the risk of accidents and criminal activities. Ensure all areas, including parking lots and walkways, are properly illuminated.</p>
        
        <h2>9. Train Your Staff</h2>
        <p>All event staff should be trained in basic security protocols, including how to identify suspicious behavior, handle conflicts, and respond to emergencies.</p>
        
        <h2>10. Have a Communication Plan</h2>
        <p>Establish a clear communication system among security personnel, event organizers, and emergency services. Use radios, mobile phones, or apps to stay connected throughout the event.</p>
        
        <h2>Conclusion</h2>
        <p>Event security requires careful planning, professional expertise, and continuous vigilance. By implementing these 10 tips, you can significantly enhance the safety of your events and provide peace of mind for all attendees. At Proton Security, we specialize in providing comprehensive security solutions tailored to your specific needs.</p>
      `
    },
    2: {
      title: "Why Proton Security is the Top Choice for Your Event Security",
      date: "October 10, 2025",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      content: `
        <p>Are you planning an event that needs rock-solid security? Whether you're hosting a corporate conference in Lagos, a lavish wedding in Abuja, or any other gathering, security should be at the top of your priority list.</p>
        
        <h2>Unmatched Expertise and Experience</h2>
        <p>Proton Security has been at the forefront of event security for years. Our team consists of highly trained professionals with extensive experience in managing security for various types of events, from intimate gatherings to large-scale conferences.</p>
        
        <h2>Comprehensive Security Solutions</h2>
        <p>We offer a full range of security services including access control, crowd management, VIP protection, surveillance, and emergency response. Our holistic approach ensures every aspect of your event is covered.</p>
        
        <h2>State-of-the-Art Technology</h2>
        <p>We utilize the latest security technology including advanced CCTV systems, metal detectors, and communication equipment to ensure seamless security operations throughout your event.</p>
        
        <h2>Customized Security Plans</h2>
        <p>Every event is unique, and so are its security needs. We work closely with you to develop a customized security plan that addresses the specific requirements and potential risks of your event.</p>
        
        <h2>24/7 Support and Monitoring</h2>
        <p>Our commitment doesn't end when the event starts. We provide round-the-clock support and monitoring to ensure continuous security throughout your event duration.</p>
        
        <h2>Conclusion</h2>
        <p>When it comes to event security, trust the experts. Proton Security provides peace of mind so you can focus on making your event a success. Contact us today to discuss your security needs.</p>
      `
    },
    3: {
      title: "5 Tips to Stay Safe This Valentine Season",
      date: "October 5, 2025",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
      content: `
        <p>Valentine: A season for love, romance, and celebration. But amidst the romantic dinners and thoughtful gifts, it's crucial not to let your guard down when it comes to safety. This comprehensive guide will equip you with essential Valentine security tips.</p>
        
        <h2>1. Be Cautious with Online Dating</h2>
        <p>If you're meeting someone for the first time, always choose a public place. Let a friend or family member know where you're going and who you're meeting. Consider video calling before meeting in person to verify their identity.</p>
        
        <h2>2. Protect Your Personal Information</h2>
        <p>Be careful about sharing personal details too quickly. Avoid giving out your home address, workplace details, or financial information until you've established trust over time.</p>
        
        <h2>3. Stay Alert in Public Spaces</h2>
        <p>Popular Valentine destinations like restaurants, hotels, and entertainment venues can be crowded. Keep your belongings secure, stay aware of your surroundings, and avoid isolated areas.</p>
        
        <h2>4. Plan Your Transportation</h2>
        <p>Arrange safe transportation before you go out. Use reputable ride-sharing services or taxis, and never accept rides from strangers. If driving, park in well-lit areas.</p>
        
        <h2>5. Trust Your Instincts</h2>
        <p>If something doesn't feel right, it probably isn't. Don't hesitate to leave a situation that makes you uncomfortable, regardless of how it might appear to others.</p>
        
        <h2>Conclusion</h2>
        <p>Valentine's Day should be about celebration and joy, not worry. By following these safety tips, you can enjoy a safe and happy Valentine with your loved ones.</p>
      `
    },
    4: {
      title: "Building a Security Culture in Your Organization",
      date: "September 28, 2025",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
      content: `
        <p>Creating a culture of security awareness is essential for comprehensive organizational protection. Security is not just the responsibility of the security department – it's everyone's responsibility.</p>
        
        <h2>Leadership Commitment</h2>
        <p>Building a security culture starts at the top. Leadership must demonstrate their commitment to security through actions, not just words. This includes allocating resources, participating in security training, and making security a priority in decision-making.</p>
        
        <h2>Regular Training and Awareness Programs</h2>
        <p>Conduct regular security awareness training for all employees. Cover topics such as physical security, cybersecurity, emergency procedures, and incident reporting. Make training engaging and relevant to employees' daily activities.</p>
        
        <h2>Clear Communication Channels</h2>
        <p>Establish clear channels for reporting security concerns. Employees should know how to report suspicious activities, security incidents, or potential vulnerabilities without fear of repercussion.</p>
        
        <h2>Recognition and Reinforcement</h2>
        <p>Recognize and reward employees who demonstrate good security practices. This positive reinforcement helps embed security behaviors into the organizational culture.</p>
        
        <h2>Conclusion</h2>
        <p>A strong security culture doesn't happen overnight. It requires consistent effort, leadership support, and employee engagement. The investment, however, pays dividends in reduced security incidents and enhanced organizational resilience.</p>
      `
    },
    5: {
      title: "Risk Assessment Fundamentals",
      date: "September 20, 2025",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      content: `
        <p>A comprehensive guide to conducting thorough security risk assessments for businesses. Learn the methodologies and frameworks used by industry professionals to identify and mitigate risks.</p>
        
        <h2>Understanding Risk Assessment</h2>
        <p>Risk assessment is the process of identifying, analyzing, and evaluating potential threats to your organization. It forms the foundation of effective security planning and resource allocation.</p>
        
        <h2>The Risk Assessment Process</h2>
        <p>The process typically involves five key steps: asset identification, threat identification, vulnerability assessment, risk analysis, and risk mitigation planning.</p>
        
        <h2>Asset Identification</h2>
        <p>Begin by identifying and cataloging your organization's critical assets. These include physical assets, data, personnel, reputation, and operational capabilities.</p>
        
        <h2>Threat and Vulnerability Analysis</h2>
        <p>Identify potential threats to each asset and assess existing vulnerabilities. Consider both internal and external threats, including natural disasters, cyber attacks, theft, and human error.</p>
        
        <h2>Risk Prioritization</h2>
        <p>Not all risks are equal. Use a risk matrix to prioritize risks based on likelihood and potential impact. This helps you focus resources on the most significant threats.</p>
        
        <h2>Conclusion</h2>
        <p>Regular risk assessments are essential for maintaining effective security. They should be conducted annually and whenever significant changes occur in your organization or operating environment.</p>
      `
    },
    6: {
      title: "Emergency Response Planning",
      date: "September 15, 2025",
      image: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?w=800&h=600&fit=crop",
      content: `
        <p>Essential strategies for developing effective emergency response protocols and procedures. Preparedness is key to minimizing impact during crisis situations.</p>
        
        <h2>The Importance of Planning</h2>
        <p>An effective emergency response plan can mean the difference between a minor incident and a major catastrophe. It provides a structured approach to handling emergencies and ensures everyone knows their role.</p>
        
        <h2>Types of Emergencies to Plan For</h2>
        <p>Your plan should address various scenarios including fires, natural disasters, medical emergencies, security breaches, and workplace violence. Each type of emergency requires specific response procedures.</p>
        
        <h2>Key Components of an Emergency Plan</h2>
        <p>A comprehensive emergency plan includes clear communication protocols, evacuation procedures, emergency contact information, resource allocation, and designated assembly points.</p>
        
        <h2>Training and Drills</h2>
        <p>Regular training and emergency drills are essential. They help familiarize staff with procedures, identify weaknesses in your plan, and build confidence in handling real emergencies.</p>
        
        <h2>Review and Update</h2>
        <p>Emergency plans should be living documents. Review and update them regularly, especially after drills, actual incidents, or organizational changes.</p>
        
        <h2>Conclusion</h2>
        <p>The best time to prepare for an emergency is before it happens. Invest time in developing comprehensive emergency response plans to protect your people and assets.</p>
      `
    },
    7: {
      title: "Advanced Surveillance Technologies in Modern Security",
      date: "September 10, 2025",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
      content: `
        <p>Explore the cutting-edge surveillance technologies revolutionizing the security industry. From AI-powered cameras to facial recognition systems, modern surveillance offers unprecedented capabilities.</p>
        
        <h2>AI-Powered Video Analytics</h2>
        <p>Artificial intelligence has transformed video surveillance from passive recording to active monitoring. AI can detect unusual behavior, recognize faces, count people, and identify objects in real-time.</p>
        
        <h2>Facial Recognition Systems</h2>
        <p>Facial recognition technology enables automatic identification of individuals. While powerful, it's important to implement these systems responsibly, considering privacy implications and legal requirements.</p>
        
        <h2>Cloud-Based Surveillance</h2>
        <p>Cloud storage and processing offer flexibility, scalability, and remote access to surveillance footage. This eliminates the need for extensive on-site infrastructure and provides better disaster recovery options.</p>
        
        <h2>Integration with Other Systems</h2>
        <p>Modern surveillance systems integrate with access control, alarm systems, and building management systems, creating a comprehensive security ecosystem.</p>
        
        <h2>Conclusion</h2>
        <p>While technology advances, remember that surveillance systems are tools to support, not replace, human security personnel. The most effective security combines technology with skilled professionals.</p>
      `
    },
    8: {
      title: "Executive Protection: Best Practices for VIP Security",
      date: "September 5, 2025",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=600&fit=crop",
      content: `
        <p>Learn the essential strategies and techniques used in executive protection. Discover how to provide world-class security for high-profile individuals.</p>
        
        <h2>Understanding Executive Protection</h2>
        <p>Executive protection goes beyond traditional security. It involves anticipating threats, planning routes, coordinating with local authorities, and maintaining discretion while ensuring safety.</p>
        
        <h2>Advance Planning</h2>
        <p>Thorough advance work is crucial. This includes route reconnaissance, identifying safe havens, establishing emergency protocols, and coordinating with venue security.</p>
        
        <h2>Threat Assessment</h2>
        <p>Conduct comprehensive threat assessments considering the protectee's profile, recent activities, travel destinations, and current threat landscape. Update assessments regularly.</p>
        
        <h2>Team Coordination</h2>
        <p>Executive protection requires seamless coordination between team members. Establish clear communication protocols and ensure everyone understands their roles.</p>
        
        <h2>Maintaining Discretion</h2>
        <p>Effective protection should be discreet. The goal is to ensure safety without drawing unnecessary attention or disrupting the protectee's activities.</p>
        
        <h2>Conclusion</h2>
        <p>Executive protection is a specialized field requiring extensive training, experience, and professionalism. Trust Proton Security for your VIP protection needs.</p>
      `
    },
    9: {
      title: "Securing Your Business Against Cyber Threats",
      date: "August 30, 2025",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
      content: `
        <p>In today's digital age, cybersecurity is as important as physical security. Learn how to protect your business from cyber attacks and data breaches.</p>
        
        <h2>Understanding Cyber Threats</h2>
        <p>Cyber threats come in many forms: ransomware, phishing, malware, DDoS attacks, and insider threats. Understanding these threats is the first step in defending against them.</p>
        
        <h2>Multi-Layered Defense</h2>
        <p>Implement a multi-layered security approach including firewalls, antivirus software, intrusion detection systems, and regular security updates.</p>
        
        <h2>Employee Training</h2>
        <p>Employees are often the weakest link in cybersecurity. Regular training on recognizing phishing attempts, creating strong passwords, and following security protocols is essential.</p>
        
        <h2>Data Backup and Recovery</h2>
        <p>Regular backups ensure business continuity if you fall victim to ransomware or data loss. Test your backup and recovery procedures regularly.</p>
        
        <h2>Incident Response Plan</h2>
        <p>Prepare an incident response plan detailing steps to take if a breach occurs. Quick, organized response can minimize damage.</p>
        
        <h2>Conclusion</h2>
        <p>Cybersecurity is an ongoing process, not a one-time project. Stay vigilant, keep systems updated, and consider partnering with security professionals for comprehensive protection.</p>
      `
    },
    10: {
      title: "Crisis Management: Preparing for the Unexpected",
      date: "August 25, 2025",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop",
      content: `
        <p>Every organization needs a solid crisis management plan. Learn how to prepare for and respond to unexpected emergencies effectively.</p>
        
        <h2>What is Crisis Management?</h2>
        <p>Crisis management involves preparing for, responding to, and recovering from events that threaten your organization's operations, reputation, or stakeholders.</p>
        
        <h2>Building a Crisis Management Team</h2>
        <p>Assemble a cross-functional team with clear roles and responsibilities. Include representatives from leadership, communications, operations, legal, and security.</p>
        
        <h2>Communication Strategy</h2>
        <p>Develop a communication plan for internal and external stakeholders. Clear, timely communication can prevent panic and misinformation.</p>
        
        <h2>Scenario Planning</h2>
        <p>Conduct tabletop exercises simulating various crisis scenarios. This helps identify gaps in your plan and prepares your team for real situations.</p>
        
        <h2>Post-Crisis Review</h2>
        <p>After any crisis, conduct a thorough review. What went well? What could be improved? Use these insights to strengthen your crisis management capabilities.</p>
        
        <h2>Conclusion</h2>
        <p>Crisis management is about being prepared for the unexpected. With proper planning and preparation, your organization can weather any storm.</p>
      `
    },
    11: {
      title: "Access Control Systems: A Complete Guide",
      date: "August 20, 2025",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop",
      content: `
        <p>Understand the different types of access control systems and how to choose the right one for your organization's security needs.</p>
        
        <h2>Types of Access Control</h2>
        <p>Access control systems range from traditional lock and key to advanced biometric systems. Common types include card readers, keypads, biometric scanners, and mobile credentials.</p>
        
        <h2>Biometric Systems</h2>
        <p>Biometric access control uses unique physical characteristics like fingerprints, facial features, or iris patterns. These systems offer high security as credentials cannot be shared or stolen.</p>
        
        <h2>Integration with Other Systems</h2>
        <p>Modern access control systems integrate with video surveillance, alarm systems, and visitor management platforms for comprehensive security.</p>
        
        <h2>Access Levels and Zones</h2>
        <p>Implement zone-based access control, granting different permissions based on roles. This ensures people only access areas necessary for their duties.</p>
        
        <h2>Audit Trails and Reporting</h2>
        <p>Access control systems provide valuable data on who accessed what areas and when. Use this information for security audits and investigations.</p>
        
        <h2>Conclusion</h2>
        <p>The right access control system balances security needs, user convenience, and budget. Consult with security professionals to design a system that fits your organization.</p>
      `
    },
    12: {
      title: "The Role of Security Guards in Modern Security",
      date: "August 15, 2025",
      image: "https://images.unsplash.com/photo-1556745753-b2904692b3cd?w=800&h=600&fit=crop",
      content: `
        <p>Security guards remain a crucial component of comprehensive security. Discover their evolving role in today's tech-driven security landscape.</p>
        
        <h2>Beyond Traditional Duties</h2>
        <p>Modern security guards do more than patrol and monitor. They serve as customer service representatives, first responders to emergencies, and key integrators of security technology.</p>
        
        <h2>Human Element in Security</h2>
        <p>Technology like CCTV and access control systems provide data, but guards provide the critical human analysis, decision-making, and physical presence needed for effective deterrence and response.</p>
        
        <h2>Technology Integration</h2>
        <p>Today's guards are trained to operate advanced security systems, including drone surveillance, remote monitoring platforms, and sophisticated communication tools. They act as the on-site intelligence hub.</p>
        
        <h2>Specialized Training</h2>
        <p>Security personnel are increasingly specializing in areas like executive protection, fire safety, and specialized crowd control, providing expertise beyond general security.</p>
        
        <h2>Conclusion</h2>
        <p>The combination of trained, professional security guards and modern technology creates the most robust security framework. Invest in both for optimal protection.</p>
      `
    },
    13: {
        title: "Home Security Essentials: Protecting Your Family and Assets",
        date: "August 10, 2025",
        image: "https://images.unsplash.com/photo-1543886566-d4af53018449?w=800&h=600&fit=crop",
        content: `
          <p>Protecting your home is a fundamental responsibility. This guide covers the essential measures you can take to secure your residence against intruders and other threats.</p>
          
          <h2>Secure Doors and Windows</h2>
          <p>Start with the basics. Install solid core doors and high-quality, deadbolt locks on all external doors. Use window locks, especially on ground-floor and easily accessible windows.</p>
          
          <h2>Invest in a Security System</h2>
          <p>A monitored home security system—including motion sensors, door/window contacts, and a loud alarm—is a powerful deterrent. Consider smart systems that allow remote monitoring.</p>
          
          <h2>Outdoor Lighting and Landscaping</h2>
          <p>Good lighting eliminates hiding spots. Install motion-sensor lights around entry points and walkways. Trim shrubs and trees near windows to improve visibility and eliminate cover for potential intruders.</p>
          
          <h2>Neighborhood Watch and Awareness</h2>
          <p>Be an active member of your community. Participate in neighborhood watch programs and look out for your neighbors. Most break-ins are crimes of opportunity—awareness is a major defense.</p>
          
          <h2>Protect Valuables and Personal Data</h2>
          <p>Store high-value items in a secure safe. Be cautious about publicly sharing vacation plans on social media, which can signal an empty house to criminals. Shred documents with personal information.</p>
          
          <h2>Conclusion</h2>
          <p>A layered approach to home security—combining physical barriers, electronic systems, and good habits—offers the best protection for your family and assets. Your peace of mind is worth the investment.</p>
        `
      },
  };

  const post = blogData[id];

  if (!post) {
    return (
      <div className="section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-highlight hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Generate share URLs
  const shareUrl = encodeURIComponent(window.location.href);
  const shareText = encodeURIComponent(post.title);
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
  const twitterUrl = `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`;
  const whatsappUrl = `https://wa.me/?text=${shareText}%20${shareUrl}`;

  return (
    <div className="section-padding bg-gray-50">
      <div className="container-custom max-w-4xl">
        {/* Back Button */}
        <Link 
          to="/blog" 
          className="inline-flex items-center text-highlight hover:text-primary transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>

        {/* Article */}
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Featured Image */}
          <div className="w-full h-96 overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            {/* Date */}
            <div className="inline-block px-3 py-1 bg-highlight/10 text-highlight text-sm font-semibold rounded-full mb-6">
              {post.date}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8">
              {post.title}
            </h1>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                lineHeight: '1.8',
              }}
            />

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-primary mb-4">Share this article</h3>
              <div className="flex gap-4">
                <a 
                  href={facebookUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  aria-label="Share on Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href={twitterUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors"
                  aria-label="Share on Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
                  aria-label="Share on WhatsApp"
                >
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;