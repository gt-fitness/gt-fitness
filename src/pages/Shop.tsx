import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Check, ShoppingBag } from "lucide-react";
import productsData from "@/data/products.json";
import { useToast } from "@/hooks/use-toast";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { toast } = useToast();

  const [selectedProduct, setSelectedProduct] = useState<
    (typeof productsData.products)[0] | null
  >(null);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");

  // Pre-order popup state
  const [showPreOrder, setShowPreOrder] = useState(false);
  const [preOrderEmail, setPreOrderEmail] = useState("");
  const [preOrderQuantity, setPreOrderQuantity] = useState(1);

  // Open product from URL param
  useEffect(() => {
    const productId = searchParams.get("product");
    if (productId) {
      const product = productsData.products.find(
        (p) => p.id === parseInt(productId),
      );
      if (product) {
        setSelectedProduct(product);
        setSelectedColor(0);
        setSelectedSize("");
      }
    }
  }, [searchParams]);

  const openProduct = (product: (typeof productsData.products)[0]) => {
    setSelectedProduct(product);
    setSelectedColor(0);
    setSelectedSize("");
    setSearchParams({ product: product.id.toString() });
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
    setSearchParams({});
  };

  const handlePreOrder = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        description: "You need to select a size before pre-ordering.",
        variant: "destructive",
      });
      return;
    }
    setShowPreOrder(true);
  };

  const submitPreOrder = () => {
    if (!preOrderEmail || !preOrderEmail.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Pre-order submitted!",
      description: `We'll notify you at ${preOrderEmail} when your order ships.`,
    });

    // Reset states
    setShowPreOrder(false);
    setPreOrderEmail("");
    setPreOrderQuantity(1);
    closeProductModal();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            Wear Your Pride
          </p>
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
                  <h3 className="font-display text-xl font-semibold mb-1">
                    {product.name}
                  </h3>
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
                    <span className="font-display text-2xl font-semibold">
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
      {selectedProduct && !showPreOrder && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4 overflow-y-auto"
          onClick={closeProductModal}
        >
          <button
            className="absolute top-6 right-6 text-background hover:text-background/80 transition-colors"
            onClick={closeProductModal}
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
              <h2 className="font-display text-3xl font-semibold mb-2">
                {selectedProduct.name}
              </h2>
              <p className="font-display text-2xl font-semibold mb-4">
                ${selectedProduct.price}
              </p>
              <p className="text-muted-foreground mb-6">
                {selectedProduct.description}
              </p>

              {/* Color Selection */}
              <div className="mb-5">
                <p className="text-sm font-medium mb-2">
                  Color: {selectedProduct.colors[selectedColor].name}
                </p>
                <div className="flex gap-2">
                  {selectedProduct.colors.map((color, index) => (
                    <button
                      key={index}
                      className={`w-9 h-9 rounded-full border-2 transition-all ${
                        selectedColor === index
                          ? "border-foreground scale-110"
                          : "border-border"
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
                <Button
                  variant="athletic"
                  size="xl"
                  className="w-full gap-2"
                  disabled={!selectedSize}
                  onClick={handlePreOrder}
                >
                  <ShoppingBag className="w-5 h-5" />
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

      {/* Pre-Order Popup */}
      {showPreOrder && selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setShowPreOrder(false)}
        >
          <button
            className="absolute top-6 right-6 text-background hover:text-background/80 transition-colors"
            onClick={() => setShowPreOrder(false)}
          >
            <X className="w-8 h-8" />
          </button>
          <div
            className="max-w-md w-full bg-background rounded-2xl overflow-hidden p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="font-display text-2xl font-semibold mb-6 text-center">
              Complete Pre-Order
            </h2>

            {/* Order Summary */}
            <div className="bg-secondary rounded-xl p-4 mb-6">
              <div className="flex gap-4">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-semibold">{selectedProduct.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    Color: {selectedProduct.colors[selectedColor].name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Size: {selectedSize}
                  </p>
                  <p className="font-semibold mt-1">${selectedProduct.price}</p>
                </div>
              </div>
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label className="text-sm font-medium mb-2 block">
                Email Address
              </label>
              <Input
                type="email"
                placeholder="your@email.com"
                value={preOrderEmail}
                onChange={(e) => setPreOrderEmail(e.target.value)}
                className="w-full"
              />
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="text-sm font-medium mb-2 block">Quantity</label>
              <div className="flex items-center gap-3">
                <button
                  className="w-10 h-10 rounded-lg bg-secondary font-semibold transition-colors hover:bg-muted"
                  onClick={() =>
                    setPreOrderQuantity(Math.max(1, preOrderQuantity - 1))
                  }
                >
                  -
                </button>
                <span className="w-12 text-center font-semibold text-lg">
                  {preOrderQuantity}
                </span>
                <button
                  className="w-10 h-10 rounded-lg bg-secondary font-semibold transition-colors hover:bg-muted"
                  onClick={() => setPreOrderQuantity(preOrderQuantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Total */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
              <span className="font-medium">Total</span>
              <span className="font-display text-2xl font-semibold">
                ${(selectedProduct.price * preOrderQuantity).toFixed(2)}
              </span>
            </div>

            {/* Submit Button */}
            <Button
              variant="athletic"
              size="xl"
              className="w-full gap-2"
              onClick={submitPreOrder}
            >
              <Check className="w-5 h-5" />
              Confirm Pre-Order
            </Button>

            <p className="text-muted-foreground text-xs text-center mt-4">
              You'll receive a confirmation email with payment details.
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Shop;
