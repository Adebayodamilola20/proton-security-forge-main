import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import img4 from "@/assets/IMG_2251.jpg";

const Ourblog = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const observerRef = useRef(null);
  const postsPerPage = 6;

  useEffect(() => {
    // Reset visible items when page changes
    setVisibleItems([]);
    
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.blog-item');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, [currentPage]);

  // All blog posts (you can add more here)
  const allBlogPosts = [
    {
      id: 1,
      title: "10 Event Security Tips for Companies and Individuals",
      date: "October 15, 2025",
      excerpt: "Ensuring the safety and security of events, whether for a company or personal gathering, is paramount in today's volatile world.",
      image: img4
    },
    {
      id: 2,
      title: "Why Proton Security is the Top Choice for Your Event Security",
      date: "October 10, 2025",
      excerpt: "Are you planning an event that needs rock-solid security? Whether you're hosting a corporate conference in Lagos, a lavish wedding in Abuja...",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "5 Tips to Stay Safe This Valentine Season",
      date: "October 5, 2025",
      excerpt: "Valentine: A season for love, romance, and celebration. But amidst the romantic dinners and thoughtful gifts, it's crucial not to let your guard down...",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop"
    },
    {
      id: 4,
      title: "Building a Security Culture in Your Organization",
      date: "September 28, 2025",
      excerpt: "How organizations can foster a security-first mindset among employees and stakeholders. Creating a culture of security awareness is essential...",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop"
    },
    {
      id: 5,
      title: "Risk Assessment Fundamentals",
      date: "September 20, 2025",
      excerpt: "A comprehensive guide to conducting thorough security risk assessments for businesses. Learn the methodologies and frameworks used by professionals...",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
    },
    {
      id: 6,
      title: "Emergency Response Planning",
      date: "September 15, 2025",
      excerpt: "Essential strategies for developing effective emergency response protocols and procedures. Preparedness is key to minimizing impact during crisis situations.",
      image: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?w=800&h=600&fit=crop"
    },
    // Page 2 posts
    {
      id: 7,
      title: "Advanced Surveillance Technologies in Modern Security",
      date: "September 10, 2025",
      excerpt: "Explore the cutting-edge surveillance technologies revolutionizing the security industry. From AI-powered cameras to facial recognition systems.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop"
    },
    {
      id: 8,
      title: "Executive Protection: Best Practices for VIP Security",
      date: "September 5, 2025",
      excerpt: "Learn the essential strategies and techniques used in executive protection. Discover how to provide world-class security for high-profile individuals.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=600&fit=crop"
    },
    {
      id: 9,
      title: "Securing Your Business Against Cyber Threats",
      date: "August 30, 2025",
      excerpt: "In today's digital age, cybersecurity is as important as physical security. Learn how to protect your business from cyber attacks and data breaches.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop"
    },
    {
      id: 10,
      title: "Crisis Management: Preparing for the Unexpected",
      date: "August 25, 2025",
      excerpt: "Every organization needs a solid crisis management plan. Learn how to prepare for and respond to unexpected emergencies effectively.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop"
    },
    {
      id: 11,
      title: "Access Control Systems: A Complete Guide",
      date: "August 20, 2025",
      excerpt: "Understand the different types of access control systems and how to choose the right one for your organization's security needs.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop"
    },
    {
      id: 12,
      title: "The Role of Security Guards in Modern Security",
      date: "August 15, 2025",
      excerpt: "Security guards remain a crucial component of comprehensive security. Discover their evolving role in today's tech-driven security landscape.",
      image: "https://images.unsplash.com/photo-1556745753-b2904692b3cd?w=800&h=600&fit=crop"
    },
    // Page 3 posts
    {
      id: 13,
      title: "Retail Security: Preventing Loss and Ensuring Safety",
      date: "August 10, 2025",
      excerpt: "Retail businesses face unique security challenges. Learn effective strategies to prevent theft and ensure customer and employee safety.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop"
    },
    {
      id: 14,
      title: "Fire Safety and Security Integration",
      date: "August 5, 2025",
      excerpt: "Fire safety is an essential part of comprehensive security. Discover how to integrate fire safety systems with your security infrastructure.",
      image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=800&h=600&fit=crop"
    },
    {
      id: 15,
      title: "Security Training: Building a Skilled Team",
      date: "July 30, 2025",
      excerpt: "The quality of your security team determines the effectiveness of your security operations. Learn best practices for security training programs.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=600&fit=crop"
    },
    {
      id: 16,
      title: "Perimeter Security: Your First Line of Defense",
      date: "July 25, 2025",
      excerpt: "Effective perimeter security is crucial for protecting your premises. Explore the latest technologies and strategies for perimeter protection.",
      image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=800&h=600&fit=crop"
    },
    {
      id: 17,
      title: "Security Analytics: Data-Driven Decision Making",
      date: "July 20, 2025",
      excerpt: "Leverage security analytics to make informed decisions and improve your security operations. Learn how data can enhance your security posture.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    },
    {
      id: 18,
      title: "Mobile Security Patrols: Flexibility and Coverage",
      date: "July 15, 2025",
      excerpt: "Mobile security patrols offer flexibility and wide coverage. Discover how to implement effective mobile patrol strategies for your organization.",
      image: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=800&h=600&fit=crop"
    }
  ];

  // Calculate total pages
  const totalPages = Math.ceil(allBlogPosts.length / postsPerPage);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allBlogPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Latest Posts</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest news, insights, and updates from Proton Security.
          </p>
        </div>
        
        {/* Blog Posts Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post, index) => (
            <div
              key={post.id}
              data-index={index}
              className={`blog-item bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-700 ${
                visibleItems.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-20'
              }`}
            >
              {/* Image */}
              <div className="h-64 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {post.date}
                </p>
                <p className="text-gray-700 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link to={`/blog/${post.id}`}>
                  <button className="inline-flex items-center text-highlight font-semibold hover:text-primary transition-colors group">
                    More 
                    <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 mt-16">
          <button 
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={`px-4 py-2 border rounded-lg transition-colors ${
              currentPage === 1 
                ? 'border-gray-300 text-gray-400 cursor-not-allowed' 
                : 'border-primary text-primary hover:bg-primary hover:text-white'
            }`}
          >
            Previous
          </button>
          <div className="flex gap-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`w-10 h-10 rounded-lg transition-colors ${
                  currentPage === index + 1
                    ? 'bg-primary text-white'
                    : 'border border-gray-300 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <button 
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 border rounded-lg transition-colors ${
              currentPage === totalPages 
                ? 'border-gray-300 text-gray-400 cursor-not-allowed' 
                : 'border-primary text-primary hover:bg-primary hover:text-white'
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ourblog;