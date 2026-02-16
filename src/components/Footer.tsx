import { Link } from "react-router-dom";
import { Instagram, Twitter, Youtube } from "lucide-react";
import { useTranslation } from "react-i18next";
import gtLogo from "@/assets/gt-logo-dark.png";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-secondary border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-10 mb-10">
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img src={gtLogo} alt="GT Fitness" className="h-12 w-auto" />
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs mb-5">
              {t("footer.description")}
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/gt_fitnesss?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">
              {t("footer.explore")}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/community"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {t("nav.community")}
                </Link>
              </li>
              <li>
                <Link
                  to="/challenges"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {t("nav.challenges")}
                </Link>
              </li>
              <li>
                <Link
                  to="/workouts"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {t("nav.workouts")}
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {t("nav.gallery")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">
              {t("footer.shop")}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/shop"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {t("footer.allProducts")}
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {t("footer.newArrivals")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {t("footer.bestSellers")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">
              {t("footer.support")}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {t("footer.contactUs")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {t("footer.faq")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {t("footer.shipping")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              {t("footer.privacy")}
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              {t("footer.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
