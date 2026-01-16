import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import productsData from "@/data/products.json";

const ClothingSection = () => {
  return (
    <section id="clothing" className="section-padding bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            Wear Your Pride
          </p>
          <h2 className="section-title mb-4">Official Gear</h2>
          <p className="section-subtitle mx-auto max-w-2xl">
            Premium athletic wear designed for performance and built to last.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {productsData.products.slice(0, 4).map((product) => (
            <div
              key={product.id}
              className="group bg-background rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
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
              <div className="p-4">
                <h3 className="font-display text-lg font-semibold mb-1">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-3 line-clamp-1">
                  {product.description}
                </p>

                {/* Colors */}
                <div className="flex items-center gap-2 mb-3">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-5 h-5 rounded-full border border-border"
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>

                {/* Price & Button */}
                <div className="flex items-center justify-between">
                  <span className="font-display text-xl font-semibold">
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

        <div className="text-center mt-10">
          <Link to="/shop">
            <Button variant="athleticOutline" size="lg" className="gap-2">
              View Full Collection
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ClothingSection;
