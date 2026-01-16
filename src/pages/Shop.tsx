import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { X, Check } from "lucide-react";
import productsData from "@/data/products.json";

const Shop = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof productsData.products[0] | null>(null);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");

  const openProduct = (product: typeof productsData.products[0]) => {
    setSelectedProduct(product);
    setSelectedColor(0);
    setSelectedSize("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-28 pb-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Wear Your Pride</p>
          <h1 className="section-title mb-6">Official Gear</h1>
          <p className="section-subtitle mx-auto max-w-2xl">
            Premium athletic wear designed for performance and built to last.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productsData.products.map((product) => (
              <div
                key={product.id}
                className="group bg-card rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer"
                onClick={() => openProduct(product)}
              >
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <h3 className="font-display text-xl font-semibold mb-1">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>

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

                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl font-semibold">${product.price}</span>
                    <Button variant="athletic" size="sm">View Details</Button>
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
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedProduct(null)}
        >
          <button
            className="absolute top-6 right-6 text-background hover:text-background/80 transition-colors"
            onClick={() => setSelectedProduct(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div
            className="max-w-4xl w-full bg-background rounded-2xl overflow-hidden grid md:grid-cols-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-square">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col">
              <h2 className="font-display text-3xl font-semibold mb-2">{selectedProduct.name}</h2>
              <p className="font-display text-2xl font-semibold mb-4">${selectedProduct.price}</p>
              <p className="text-muted-foreground mb-6">{selectedProduct.description}</p>

              {/* Color Selection */}
              <div className="mb-5">
                <p className="text-sm font-medium mb-2">Color: {selectedProduct.colors[selectedColor].name}</p>
                <div className="flex gap-2">
                  {selectedProduct.colors.map((color, index) => (
                    <button
                      key={index}
                      className={`w-9 h-9 rounded-full border-2 transition-all ${
                        selectedColor === index ? "border-foreground scale-110" : "border-border"
                      }`}
                      style={{ backgroundColor: color.hex }}
                      onClick={() => setSelectedColor(index)}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <p className="text-sm font-medium mb-2">Size</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.sizes.map((size) => (
                    <button
                      key={size}
                      className={`w-11 h-11 rounded-lg font-medium text-sm transition-all ${
                        selectedSize === size
                          ? "bg-foreground text-background"
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
                <Button variant="athletic" size="xl" className="w-full gap-2" disabled={!selectedSize}>
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
