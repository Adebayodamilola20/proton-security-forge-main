import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, Facebook, Instagram, Twitter, ChevronDown, Sun, Moon } from "lucide-react";
// Assuming Button component import is correct in your setup
// import { Button } from "@/components/ui/button";

// A dummy Button component for this single-file React context
const Button = ({ variant, className, children, onClick }) => (
    <button
        onClick={onClick}
        className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-300 ${className} ${
            variant === 'outline' ? 'border-2' : 'bg-highlight text-primary'
        }`}
    >
        {children}
    </button>
);


// Removed TypeScript syntax from the function signature
const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // State for theme
  const location = useLocation();

  // Effect to load theme from localStorage on mount and ensure smooth transition class is present
  useEffect(() => {
    // Add transition class globally for smooth color changes on the root element
    document.documentElement.classList.add("transition-colors", "duration-300");
    
    const savedTheme = localStorage.getItem("theme");
    
    // Check system preference only if no saved theme is found
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    let initialDarkMode = false;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
        initialDarkMode = true;
    }

    setIsDarkMode(initialDarkMode);
    if (initialDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

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
    // Base container: PITCH BLACK
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-black transition-colors duration-300">
      {/* Navbar: PITCH BLACK */}
      <nav className="bg-primary dark:bg-black text-white sticky top-0 z-50 shadow-lg transition-colors duration-300">
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
                item.hasDropdown ? (
                  <div 
                    key={item.path}
                    className="relative group"
                    onMouseEnter={() => setIsAboutDropdownOpen(true)}
                    onMouseLeave={() => setIsAboutDropdownOpen(false)}
                  >
                    <Link
                      to={item.path}
                      className={`flex items-center gap-1 py-2 transition-colors hover:text-highlight ${
                        isActive(item.path) || isActive("/policy") || isActive("/blog")
                          ? "text-highlight font-semibold"
                          : ""
                      }`}
                    >
                      {item.name}
                      <ChevronDown size={16} className={`transition-transform ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
                    </Link>
                    
                    {isAboutDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-black text-primary dark:text-white rounded-lg shadow-xl py-2 z-50 transition-colors duration-300">
                        <Link
                          to="/policy"
                          // Dropdown link hover/active set to near black (950) for minimum contrast
                          className="block px-4 py-2 hover:bg-highlight/10 dark:hover:bg-gray-950 hover:text-highlight transition-colors"
                          onClick={() => setIsAboutDropdownOpen(false)}
                        >
                          Policy Statement
                        </Link>
                        <Link
                          to="/blog"
                          // Dropdown link hover/active set to near black (950) for minimum contrast
                          className="block px-4 py-2 hover:bg-highlight/10 dark:hover:bg-gray-950 hover:text-highlight transition-colors"
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
                    className={`relative py-2 transition-colors hover:text-highlight ${
                      isActive(item.path)
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
                <Button variant="outline" className="border-highlight text-highlight hover:bg-highlight hover:text-primary dark:border-gray-700 dark:text-white dark:hover:bg-gray-950 dark:hover:text-white transition-colors">
                  Login
                </Button>
              </Link>

              {/* Theme Toggle Button (Brightness Icon) - TOP RIGHT */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {/* Shows Sun icon in dark mode, Moon icon in light mode */}
                {isDarkMode ? <Sun size={20} className="text-highlight" /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button and Theme Toggle */}
            <div className="lg:hidden flex items-center space-x-4">
              {/* Theme Toggle Button - Mobile */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDarkMode ? <Sun size={20} className="text-highlight" /> : <Moon size={20} />}
              </button>
              <button
                className="text-white hover:text-highlight transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation: PITCH BLACK with slight transparency */}
          {isMenuOpen && (
            <div className="lg:hidden bg-primary/95 dark:bg-black/95 backdrop-blur-sm py-4 px-4 space-y-3 animate-fade-in transition-colors duration-300">
              {navItems.map((item) => (
                item.hasDropdown ? (
                  <div key={item.path}>
                    <button
                      // Mobile dropdown button active/hover set to near black (950) for minimum contrast
                      className={`w-full flex items-center justify-between py-2 px-4 rounded transition-colors hover:bg-highlight/10 dark:hover:bg-gray-950 ${
                        isActive(item.path) || isActive("/policy") || isActive("/blog") ? "bg-highlight/20 dark:bg-gray-950 text-highlight font-semibold" : ""
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
                          // Mobile link hover/active set to near black (950) for minimum contrast
                          className="block py-2 px-4 rounded transition-colors hover:bg-highlight/10 dark:hover:bg-gray-950 text-sm"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsAboutDropdownOpen(false);
                          }}
                        >
                          Policy Statement
                        </Link>
                        <Link
                          to="/blog"
                          // Mobile link hover/active set to near black (950) for minimum contrast
                          className="block py-2 px-4 rounded transition-colors hover:bg-highlight/10 dark:hover:bg-gray-950 text-sm"
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
                    // Mobile link hover/active set to near black (950) for minimum contrast
                    className={`block py-2 px-4 rounded transition-colors hover:bg-highlight/10 dark:hover:bg-gray-950 ${
                      isActive(item.path) ? "bg-highlight/20 dark:bg-gray-950 text-highlight font-semibold" : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full border-highlight text-highlight hover:bg-highlight hover:text-primary dark:border-gray-700 dark:text-white dark:hover:bg-gray-950 dark:hover:text-white transition-colors">
                  Login
                </Button>
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content: PITCH BLACK */}
      <main className="flex-1 dark:bg-black text-primary dark:text-gray-100 transition-colors duration-300">
        {children}
      </main>

      {/* Footer: PITCH BLACK */}
      <footer className="bg-primary dark:bg-black text-white section-padding transition-colors duration-300">
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
              <p className="text-sm text-gray-300 dark:text-gray-400 mb-4">
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
                    <Link to={item.path} className="text-sm text-gray-300 dark:text-gray-400 hover:text-highlight transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-highlight">Our Services</h3>
              <ul className="space-y-2 text-sm text-gray-300 dark:text-gray-400">
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
              <div className="space-y-3 text-sm text-gray-300 dark:text-gray-400">
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

          <div className="border-t border-gray-700 dark:border-gray-950 pt-8 text-center text-sm text-gray-400 dark:text-gray-500">
            <p>&copy; {new Date().getFullYear()} Proton Security. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;