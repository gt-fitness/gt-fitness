import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Community", href: "#community" },
  { name: "Challenges", href: "#challenges" },
  { name: "Workouts", href: "#workouts" },
  { name: "Shop", href: "#clothing" },
  { name: "Gallery", href: "#gallery" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="font-display text-3xl tracking-wider text-foreground hover:text-primary transition-colors">
            APEX<span className="text-primary">FIT</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="font-display text-lg tracking-wider text-muted-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </button>
            ))}
            <Button variant="athletic" size="sm">
              Join Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-6 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="font-display text-2xl tracking-wider text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  {item.name}
                </button>
              ))}
              <Button variant="athletic" className="mt-4 w-full">
                Join Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
