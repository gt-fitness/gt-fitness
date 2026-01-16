import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { X, Check } from "lucide-react";

const products = [
  {
    id: 1,
    name: "APEX Performance Tee",
    description: "Lightweight, moisture-wicking fabric engineered for peak performance. Features anti-odor technology and four-way stretch for unrestricted movement during the most intense workouts.",
    price: 49.99,
    colors: [
      { name: "Black", hex: "#0D0D0D" },
      { name: "Navy", hex: "#1a1a2e" },
      { name: "Blaze Orange", hex: "#FF4500" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
  },
  {
    id: 2,
    name: "Elite Training Shorts",
    description: "Maximum mobility with built-in compression liner. Quick-dry fabric with zippered pockets keeps your essentials secure during any workout.",
    price: 59.99,
    colors: [
      { name: "Black", hex: "#0D0D0D" },
      { name: "Steel Blue", hex: "#1F4E79" },
    ],
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&q=80",
  },
  {
    id: 3,
    name: "Stealth Hoodie",
    description: "Premium heavyweight hoodie for recovery and warmth. Kangaroo pocket, ribbed cuffs, and oversized fit for ultimate comfort after training.",
    price: 89.99,
    colors: [
      { name: "Black", hex: "#0D0D0D" },
      { name: "Charcoal", hex: "#2C2C2C" },
      { name: "Blaze Orange", hex: "#FF4500" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80",
  },
  {
    id: 4,
    name: "Warrior Tank",
    description: "Deep cut armholes for unrestricted movement. Elongated back hem and breathable mesh panels keep you cool during high-intensity training.",
    price: 39.99,
    colors: [
      { name: "Black", hex: "#0D0D0D" },
      { name: "White", hex: "#FFFFFF" },
    ],
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80",
  },
  {
    id: 5,
    name: "Apex Joggers",
    description: "Tailored athletic fit with tapered leg. Soft fleece interior with moisture-wicking exterior. Perfect from gym to street.",
    price: 79.99,
    colors: [
      { name: "Black", hex: "#0D0D0D" },
      { name: "Grey", hex: "#4A4A4A" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&q=80",
  },
  {
    id: 6,
    name: "Compression Tights",
    description: "Second-skin fit with graduated compression for enhanced blood flow. Flatlock seams prevent chafing during long sessions.",
    price: 69.99,
    colors: [
      { name: "Black", hex: "#0D0D0D" },
    ],
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80",
  },
];

const Shop = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");

  const openProduct = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setSelectedColor(0);
    setSelectedSize("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary uppercase tracking-[0.2em] mb-4 font-body">
            Wear Your Pride
          </p>
          <h1 className="section-title mb-6">
            Official <span className="gradient-text">Gear</span>
          </h1>
          <p className="section-subtitle mx-auto">
            Premium athletic wear designed for performance and built to last. 
            Represent the ApexFit movement in style.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_hsl(24_100%_50%/0.2)] cursor-pointer"
                onClick={() => openProduct(product)}
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
                      <div
                        key={index}
                        className="w-6 h-6 rounded-full border-2 border-border"
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      />
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl text-primary">
                      ${product.price}
                    </span>
                    <Button variant="athletic" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedProduct(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
            onClick={() => setSelectedProduct(null)}
          >
            <X className="w-10 h-10" />
          </button>
          <div
            className="max-w-5xl w-full bg-card rounded-xl overflow-hidden grid md:grid-cols-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-square">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 flex flex-col">
              <h2 className="font-display text-4xl mb-4">{selectedProduct.name}</h2>
              <p className="font-display text-3xl text-primary mb-6">
                ${selectedProduct.price}
              </p>
              <p className="text-muted-foreground mb-6">{selectedProduct.description}</p>

              {/* Color Selection */}
              <div className="mb-6">
                <p className="text-sm font-medium mb-3">
                  Color: {selectedProduct.colors[selectedColor].name}
                </p>
                <div className="flex gap-3">
                  {selectedProduct.colors.map((color, index) => (
                    <button
                      key={index}
                      className={`w-10 h-10 rounded-full border-2 transition-all ${
                        selectedColor === index
                          ? "border-primary scale-110"
                          : "border-border hover:scale-105"
                      }`}
                      style={{ backgroundColor: color.hex }}
                      onClick={() => setSelectedColor(index)}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-8">
                <p className="text-sm font-medium mb-3">Size</p>
                <div className="flex flex-wrap gap-3">
                  {selectedProduct.sizes.map((size) => (
                    <button
                      key={size}
                      className={`w-12 h-12 rounded-md font-display text-lg transition-all ${
                        selectedSize === size
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-muted-foreground hover:text-foreground"
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-auto">
                <Button
                  variant="athletic"
                  size="xl"
                  className="w-full gap-2"
                  disabled={!selectedSize}
                >
                  <Check className="w-5 h-5" />
                  Pre-Order Now
                </Button>
                <p className="text-muted-foreground text-sm text-center mt-3">
                  Expected shipping: 2-3 weeks
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Shop;
