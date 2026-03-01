import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLocalized } from "@/hooks/use-localized";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Check, ShoppingBag } from "lucide-react";
import productsData from "@/data/products.json";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import ProductImageCarousel from "@/components/ProductImageCarousel";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { toast } = useToast();
  const { t } = useTranslation();
  const { l } = useLocalized();

  const [selectedProduct, setSelectedProduct] = useState<
    (typeof productsData.products)[0] | null
  >(null);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [showOrder, setShowOrder] = useState(false);
  const [orderEmail, setOrderEmail] = useState("");
  const [orderPhoneNumber, setOrderPhoneNumber] = useState("");
  const [orderQuantity, setOrderQuantity] = useState(1);

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

  const handleOrder = () => {
    if (!selectedSize) {
      toast({
        title: t("shop.pleaseFillSize"),
        description: t("shop.pleaseFillSizeDesc"),
        variant: "destructive",
      });
      return;
    }
    setShowOrder(true);
  };

  const submitOrder = () => {
    if (!orderEmail || !orderEmail.includes("@")) {
      toast({
        title: t("shop.invalidEmail"),
        description: t("shop.invalidEmailDesc"),
        variant: "destructive",
      });
      return;
    }

    if (!orderPhoneNumber) {
      toast({
        title: t("shop.invalidPhoneNumber"),
        description: t("shop.invalidPhoneNumberDesc"),
        variant: "destructive",
      });
      return;
    }

    emailjs
      .send(
        "service_72t9ydk",
        "template_v0ik319",
        {
          name: selectedProduct ? l(selectedProduct.name) : "Unknown Product",
          email: orderEmail,
          phone: orderPhoneNumber,
          size: selectedSize,
          color: selectedProduct
            ? l(selectedProduct.colors[selectedColor].name)
            : "Unknown Color",
          quantity: orderQuantity,
          price: selectedProduct?.price,
          total: selectedProduct
            ? (selectedProduct.price * orderQuantity).toFixed(2)
            : "0",
        },
        "Xf5YpvGv31U33P0Ti",
      )
      .then(
        () => {
          toast({
            title: t("shop.orderSuccess"),
            description: t("shop.orderSuccessDesc", { email: orderEmail }),
          });
          setShowOrder(false);
          setOrderEmail("");
          setOrderPhoneNumber("");
          setOrderQuantity(1);
          closeProductModal();
        },
        () => {
          toast({
            variant: "destructive",
            title: t("shop.orderError"),
            description: t("shop.orderErrorDesc"),
          });
        },
      );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-28 pb-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            {t("shop.wearYourPride")}
          </p>
          <h1 className="section-title mb-6">{t("shop.officialGear")}</h1>
          <p className="section-subtitle mx-auto max-w-2xl">
            {t("shop.sectionSubtitle")}
          </p>
        </div>
      </section>

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
                  <ProductImageCarousel
                    images={product.images}
                    alt={l(product.name)}
                    className="w-full h-full"
                  />
                  {product.status && (
                    <span className="absolute top-3 left-3 bg-foreground text-background text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                      {l(product.status)}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-semibold mb-1">
                    {l(product.name)}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                    {l(product.description)}
                  </p>
                  <div className="flex items-center gap-2 mb-3">
                    {product.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-5 h-5 rounded-full border border-border"
                        style={{ backgroundColor: color.hex }}
                        title={l(color.name)}
                      />
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl font-semibold">
                      ${product.price}
                    </span>
                    <Button variant="athletic" size="sm">
                      {t("shop.viewDetails")}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProduct && !showOrder && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 flex items-start md:items-center justify-center p-4 overflow-y-auto"
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
              <ProductImageCarousel
                images={selectedProduct.images}
                alt={l(selectedProduct.name)}
                className="w-full h-full"
              />
            </div>
            <div className="p-6 flex flex-col">
              <h2 className="font-display text-3xl font-semibold mb-2">
                {l(selectedProduct.name)}
              </h2>
              <p className="font-display text-2xl font-semibold mb-4">
                ${selectedProduct.price}
              </p>
              <p className="text-muted-foreground mb-6">
                {l(selectedProduct.description)}
              </p>
              <div className="mb-5">
                <p className="text-sm font-medium mb-2">
                  {t("shop.color")}:{" "}
                  {l(selectedProduct.colors[selectedColor].name)}
                </p>
                <div className="flex gap-2">
                  {selectedProduct.colors.map((color, index) => (
                    <button
                      key={index}
                      className={`w-9 h-9 rounded-full border-2 transition-all ${selectedColor === index ? "border-foreground scale-110" : "border-border"}`}
                      style={{ backgroundColor: color.hex }}
                      onClick={() => setSelectedColor(index)}
                    />
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <p className="text-sm font-medium mb-2">{t("shop.size")}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.sizes.map((size) => (
                    <button
                      key={size}
                      className={`w-11 h-11 rounded-lg font-medium text-sm transition-all ${selectedSize === size ? "bg-foreground text-background" : "bg-secondary text-muted-foreground hover:text-foreground"}`}
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
                  onClick={handleOrder}
                >
                  <ShoppingBag className="w-5 h-5" />
                  {t("shop.orderNow")}
                </Button>
                <p className="text-muted-foreground text-sm text-center mt-3">
                  {t("shop.expectedShipping")}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {showOrder && selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setShowOrder(false)}
        >
          <button
            className="absolute top-6 right-6 text-background hover:text-background/80 transition-colors"
            onClick={() => setShowOrder(false)}
          >
            <X className="w-8 h-8" />
          </button>
          <div
            className="max-w-md w-full bg-background rounded-2xl overflow-hidden p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="font-display text-2xl font-semibold mb-6 text-center">
              {t("shop.completeOrder")}
            </h2>
            <div className="bg-secondary rounded-xl p-4 mb-6">
              <div className="flex gap-4">
                <img
                  src={selectedProduct.image}
                  alt={l(selectedProduct.name)}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-semibold">{l(selectedProduct.name)}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t("shop.color")}:{" "}
                    {l(selectedProduct.colors[selectedColor].name)}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {t("shop.size")}: {selectedSize}
                  </p>
                  <p className="font-semibold mt-1">${selectedProduct.price}</p>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label className="text-sm font-medium mb-2 block">
                {t("shop.emailAddress")}
              </label>
              <Input
                type="email"
                placeholder="your@email.com"
                value={orderEmail}
                onChange={(e) => setOrderEmail(e.target.value)}
                className="w-full"
              />
              <label className="text-sm font-medium mb-2 mt-5 block">
                {t("shop.phoneNumber")}
              </label>
              <Input
                type="tel"
                placeholder="+1 414-115-1245"
                value={orderPhoneNumber}
                onChange={(e) => setOrderPhoneNumber(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="mb-6">
              <label className="text-sm font-medium mb-2 block">
                {t("shop.quantity")}
              </label>
              <div className="flex items-center gap-3">
                <button
                  className="w-10 h-10 rounded-lg bg-secondary font-semibold transition-colors hover:bg-muted"
                  onClick={() =>
                    setOrderQuantity(Math.max(1, orderQuantity - 1))
                  }
                >
                  -
                </button>
                <span className="w-12 text-center font-semibold text-lg">
                  {orderQuantity}
                </span>
                <button
                  className="w-10 h-10 rounded-lg bg-secondary font-semibold transition-colors hover:bg-muted"
                  onClick={() => setOrderQuantity(orderQuantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
              <span className="font-medium">{t("shop.total")}</span>
              <span className="font-display text-2xl font-semibold">
                ${(selectedProduct.price * orderQuantity).toFixed(2)}
              </span>
            </div>
            <Button
              variant="athletic"
              size="xl"
              className="w-full gap-2"
              onClick={submitOrder}
            >
              <Check className="w-5 h-5" />
              {t("shop.confirmOrder")}
            </Button>
            <p className="text-muted-foreground text-xs text-center mt-4">
              {t("shop.confirmationEmail")}
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Shop;
