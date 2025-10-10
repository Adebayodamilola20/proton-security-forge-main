import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Training", path: "/training" },
    { name: "Board", path: "/board" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-primary text-white sticky top-0 z-50 shadow-lg">
        <div className="container-custom">
          <div className="flex items-center justify-between h-20 px-4">
            {/* Logo - REPLACE LOGO HERE */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-highlight rounded-lg flex items-center justify-center font-bold text-primary text-xl">
                PS
              </div>
              <div>
                <div className="text-xl font-bold">Proton Security</div>
                <div className="text-xs text-accent">Premier Security Solutions</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative py-2 transition-colors hover:text-highlight ${
                    isActive(item.path)
                      ? "text-highlight font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-highlight"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/login">
                <Button variant="outline" className="border-highlight text-highlight hover:bg-highlight hover:text-primary">
                  Login
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white hover:text-highlight transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden bg-primary/95 backdrop-blur-sm py-4 px-4 space-y-3 animate-fade-in">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block py-2 px-4 rounded transition-colors hover:bg-highlight/10 ${
                    isActive(item.path) ? "bg-highlight/20 text-highlight font-semibold" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full border-highlight text-highlight hover:bg-highlight hover:text-primary">
                  Login
                </Button>
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-highlight rounded-lg flex items-center justify-center font-bold text-primary">
                  PS
                </div>
                <div className="text-lg font-bold">Proton Security</div>
              </div>
              <p className="text-sm text-gray-300 mb-4">
                Premier security solutions and training provider committed to excellence and protection.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-highlight transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="hover:text-highlight transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="hover:text-highlight transition-colors">
                  <Twitter size={20} />
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
                <li>Cybersecurity</li>
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
                    <p>+1 (555) 123-4567</p>
                    <p>+1 (555) 987-6543</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <Mail size={18} className="mt-0.5 flex-shrink-0 text-accent" />
                  <div>
                    <p>info@protonsecurity.com</p>
                    <p>support@protonsecurity.com</p>
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
