import { Link } from "react-router-dom";
import { Instagram, Twitter, Youtube } from "lucide-react";
import gtLogo from "@/assets/gt-logo-dark.png";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img src={gtLogo} alt="GT Fitness" className="h-12 w-auto" />
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs mb-5">
              More Than That. Join the movement that's redefining fitness worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Explore</h4>
            <ul className="space-y-2.5">
              <li><Link to="/community" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Community</Link></li>
              <li><Link to="/challenges" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Challenges</Link></li>
              <li><Link to="/workouts" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Workouts</Link></li>
              <li><Link to="/gallery" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Gallery</Link></li>
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-display font-semibold mb-4">Shop</h4>
            <ul className="space-y-2.5">
              <li><Link to="/shop" className="text-muted-foreground hover:text-foreground transition-colors text-sm">All Products</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">New Arrivals</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Best Sellers</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display font-semibold mb-4">Support</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Contact Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">FAQ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Shipping</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 GT Fitness. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Privacy</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
