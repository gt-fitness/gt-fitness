import { useTranslation } from "react-i18next";

type LocalizedField = { en: string; fr: string } | string;

/**
 * Hook to extract the correct language string from bilingual JSON data.
 * Supports both { en: "...", fr: "..." } objects and plain strings.
 */
export const useLocalized = () => {
  const { i18n } = useTranslation();
  const lang = (i18n.language?.substring(0, 2) || "en") as "en" | "fr";

  const l = (field: LocalizedField): string => {
    if (typeof field === "string") return field;
    return field[lang] || field.en || "";
  };

  return { l, lang };
};
