import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, Facebook, Instagram, Twitter, ChevronDown, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

// A dummy Button component for this single-file React context
const Button = ({ variant, className, children, onClick }: { variant?: string, className?: string, children: any, onClick?: () => void }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-300 ${className} ${variant === 'outline' ? 'border-2' : 'bg-highlight text-primary'
      }`}
  >
    {children}
  </button>
);

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about", hasDropdown: true },
    { name: "Services", path: "/services" },
    { name: "Training", path: "/training" },
    { name: "Board", path: "/board" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <nav className="bg-primary text-white sticky top-0 z-50 shadow-lg">
        <div className="container-custom">
          <div className="flex items-center justify-between h-20 px-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img src={logo} alt="Proton Security Logo" className="w-12 h-12 object-contain" />
              <div>
                <div className="text-xl font-bold">Proton Security</div>
                <div className="text-xs text-accent">Services Nigeria Limited</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                item.hasDropdown ? (
                  <div
                    key={item.path}
                    className="relative group"
                    onMouseEnter={() => setIsAboutDropdownOpen(true)}
                    onMouseLeave={() => setIsAboutDropdownOpen(false)}
                  >
                    <Link
                      to={item.path}
                      className={`flex items-center gap-1 py-2 transition-colors hover:text-highlight ${isActive(item.path) || isActive("/policy") || isActive("/blog")
                        ? "text-highlight font-semibold"
                        : ""
                        }`}
                    >
                      {item.name}
                      <ChevronDown size={16} className={`transition-transform ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
                    </Link>

                    {isAboutDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white text-primary rounded-lg shadow-xl py-2 z-50">
                        <Link
                          to="/policy"
                          className="block px-4 py-2 hover:bg-highlight/10 hover:text-highlight transition-colors"
                          onClick={() => setIsAboutDropdownOpen(false)}
                        >
                          Policy Statement
                        </Link>
                        <Link
                          to="/blog"
                          className="block px-4 py-2 hover:bg-highlight/10 hover:text-highlight transition-colors"
                          onClick={() => setIsAboutDropdownOpen(false)}
                        >
                          Our Blog
                        </Link>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative py-2 transition-colors hover:text-highlight ${isActive(item.path)
                      ? "text-highlight font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-highlight"
                      : ""
                      }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              {/* Login Button */}
              <Link to="/login">
                <Button variant="outline" className="border-highlight text-highlight hover:bg-highlight hover:text-primary transition-colors">
                  Login
                </Button>
              </Link>
            </div>

            <div className="lg:hidden flex items-center">
              <button
                className="text-white hover:text-highlight transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden bg-primary/95 backdrop-blur-sm py-4 px-4 space-y-3 animate-fade-in">
              {navItems.map((item) => (
                item.hasDropdown ? (
                  <div key={item.path}>
                    <button
                      className={`w-full flex items-center justify-between py-2 px-4 rounded transition-colors hover:bg-highlight/10 ${isActive(item.path) || isActive("/policy") || isActive("/blog") ? "bg-highlight/20 text-highlight font-semibold" : ""
                        }`}
                      onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown size={16} className={`transition-transform ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isAboutDropdownOpen && (
                      <div className="ml-4 mt-2 space-y-2">
                        <Link
                          to="/policy"
                          className="block py-2 px-4 rounded transition-colors hover:bg-highlight/10 text-sm"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsAboutDropdownOpen(false);
                          }}
                        >
                          Policy Statement
                        </Link>
                        <Link
                          to="/blog"
                          className="block py-2 px-4 rounded transition-colors hover:bg-highlight/10 text-sm"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsAboutDropdownOpen(false);
                          }}
                        >
                          Our Blog
                        </Link>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block py-2 px-4 rounded transition-colors hover:bg-highlight/10 ${isActive(item.path) ? "bg-highlight/20 text-highlight font-semibold" : ""
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full border-highlight text-highlight hover:bg-highlight hover:text-primary transition-colors">
                  Login
                </Button>
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 text-primary">
        <div key={location.pathname} className="page-fade-in">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src={logo} alt="Proton Security Logo" className="w-10 h-10 object-contain" />
                <div className="text-lg font-bold">Proton Security</div>
              </div>
              <p className="text-sm text-gray-300 mb-4">
                Premier security solutions and training provider committed to excellence and protection.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/protonsecurityservices" className="hover:text-highlight transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="https://www.instagram.com/protonsecurityservices/" className="hover:text-highlight transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://x.com/protonsecurity?s=21" className="hover:text-highlight transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="https://www.linkedin.com/" className="hover:text-highlight transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-highlight">Quick Links</h3>
              <ul className="space-y-2">
                {navItems.slice(0, 5).map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-sm text-gray-300 hover:text-highlight transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-highlight">Our Services</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Corporate Security</li>
                <li>Security Training</li>
                <li>Physical Security</li>
                <li>Consulting</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-highlight">Contact Us</h3>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-start space-x-2">
                  <Phone size={18} className="mt-0.5 flex-shrink-0 text-accent" />
                  <div>
                    <p>08032023600</p>
                    <p>07032027481</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <Mail size={18} className="mt-0.5 flex-shrink-0 text-accent" />
                  <div>
                    <p>info@protonsecurity.com</p>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Proton Security. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;