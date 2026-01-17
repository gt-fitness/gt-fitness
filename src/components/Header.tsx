import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import gtLogo from "@/assets/gt-logo-dark.png";

const navItems = [
  { name: "Community", href: "#community" },
  { name: "Challenges", href: "#challenges" },
  { name: "Workouts", href: "#workouts" },
  { name: "Shop", href: "#clothing" },
  { name: "Gallery", href: "#gallery" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Detect active section
      const sections = navItems.map(item => item.href.replace('#', ''));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-background/95 backdrop-blur-xl shadow-lg border-b border-border/30" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img 
                src={gtLogo} 
                alt="GT Fitness" 
                className="h-10 md:h-11 w-auto transition-transform duration-300 group-hover:scale-105" 
              />
              <div className="absolute -inset-2 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <div className="flex items-center bg-secondary/50 backdrop-blur-sm rounded-full px-2 py-1.5 border border-border/30">
              {navItems.map((item) => {
                const sectionId = item.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                      isActive 
                        ? "text-primary-foreground" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute inset-0 bg-primary rounded-full animate-fade-in" />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </button>
                );
              })}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button 
              variant="clean" 
              size="sm" 
              className="group px-6"
              onClick={() => navigate("/join")}
            >
              Join Now
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-secondary/50 border border-border/30"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`absolute transition-all duration-300 ${isOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"}`}>
              <Menu size={20} />
            </span>
            <span className={`absolute transition-all duration-300 ${isOpen ? "rotate-0 opacity-100" : "-rotate-180 opacity-0"}`}>
              <X size={20} />
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-6 space-y-1">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="w-full flex items-center justify-between px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-xl transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.name}
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </button>
            ))}
            <div className="pt-4 px-4">
              <Button 
                variant="clean" 
                className="w-full h-12 group"
                onClick={() => {
                  setIsOpen(false);
                  navigate("/join");
                }}
              >
                Join Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
