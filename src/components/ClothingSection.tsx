import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLocalized } from "@/hooks/use-localized";
import productsData from "@/data/products.json";
import ProductImageCarousel from "@/components/ProductImageCarousel";

const ClothingSection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { l } = useLocalized();

  return (
    <section id="clothing" className="section-padding bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            {t("shop.wearYourPride")}
          </p>
          <h2 className="section-title mb-4">{t("shop.officialGear")}</h2>
          <p className="section-subtitle mx-auto max-w-2xl">
            {t("shop.sectionSubtitle")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {productsData.products.slice(0, 4).map((product) => (
            <div key={product.id} className="group bg-background rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer"
              onClick={() => navigate(`/shop?product=${product.id}`)}>
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <ProductImageCarousel
                    images={product.images}
                    alt={l(product.name)}
                    className="w-full h-full"
                  />
                </div>
              <div className="p-4">
                <h3 className="font-display text-lg font-semibold mb-1">{l(product.name)}</h3>
                <p className="text-muted-foreground text-sm mb-3 line-clamp-1">{l(product.description)}</p>
                <div className="flex items-center gap-2 mb-3">
                  {product.colors.map((color, index) => (
                    <div key={index} className="w-5 h-5 rounded-full border border-border" style={{ backgroundColor: color.hex }} title={l(color.name)} />
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-xl font-semibold">${product.price}</span>
                  <Button variant="athletic" size="sm" onClick={(e) => { e.stopPropagation(); navigate(`/shop?product=${product.id}`); }}>
                    {t("shop.order")}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/shop">
            <Button variant="athleticOutline" size="lg" className="gap-2">
              {t("shop.viewFullCollection")}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ClothingSection;
