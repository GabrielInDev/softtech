
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="relative z-10 flex items-center space-x-2"
          aria-label="SoftTech Innovations"
        >
          <div className="flex items-center">
            <span className="text-primary font-bold text-2xl">Soft</span>
            <span className="text-foreground font-bold text-2xl">Tech</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-md transition-all duration-300 relative 
                ${location.pathname === link.path 
                  ? "text-primary font-medium" 
                  : "text-foreground hover:text-primary"
                }
              `}
            >
              {link.name}
              {location.pathname === link.path && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full transform origin-left animate-fade-in" />
              )}
            </Link>
          ))}
          <Button className="ml-4 shadow-sm">Get Started</Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden relative z-10 p-2"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-background/95 backdrop-blur-sm z-0 flex items-center justify-center">
            <nav className="flex flex-col items-center space-y-6 p-8 animate-fade-in">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xl px-4 py-2 rounded-md transition-all duration-300
                    ${location.pathname === link.path 
                      ? "text-primary font-medium" 
                      : "text-foreground hover:text-primary"
                    } stagger-${index + 1} animate-fade-in-up
                  `}
                >
                  {link.name}
                </Link>
              ))}
              <Button 
                className="mt-4 w-full shadow-sm stagger-5 animate-fade-in-up"
              >
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
