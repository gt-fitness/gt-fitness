import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "APEX Performance Tee",
    description: "Lightweight, moisture-wicking fabric for peak performance",
    price: 49.99,
    colors: ["#0D0D0D", "#1a1a2e", "#FF4500"],
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80",
  },
  {
    id: 2,
    name: "Elite Training Shorts",
    description: "Maximum mobility with built-in compression liner",
    price: 59.99,
    colors: ["#0D0D0D", "#1F4E79"],
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&q=80",
  },
  {
    id: 3,
    name: "Stealth Hoodie",
    description: "Premium heavyweight hoodie for recovery and warmth",
    price: 89.99,
    colors: ["#0D0D0D", "#2C2C2C", "#FF4500"],
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80",
  },
  {
    id: 4,
    name: "Warrior Tank",
    description: "Deep cut armholes for unrestricted movement",
    price: 39.99,
    colors: ["#0D0D0D", "#FFFFFF"],
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&q=80",
  },
];

const ClothingSection = () => {
  return (
    <section id="clothing" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.2em] mb-4 font-body">
            Wear Your Pride
          </p>
          <h2 className="section-title mb-6">
            Official <span className="gradient-text">Gear</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Premium athletic wear designed for performance and built to last. 
            Represent the ApexFit movement.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_hsl(24_100%_50%/0.2)]"
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Product Info */}
              <div className="p-5">
                <h3 className="font-display text-xl mb-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Colors */}
                <div className="flex items-center gap-2 mb-4">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      className="w-6 h-6 rounded-full border-2 border-border transition-transform hover:scale-110"
                      style={{ backgroundColor: color }}
                      title={`Color option ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Price & Button */}
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl text-primary">
                    ${product.price}
                  </span>
                  <Button variant="athletic" size="sm">
                    Pre-Order
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop">
            <Button variant="athleticOutline" size="lg" className="gap-2">
              View Full Collection
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ClothingSection;
