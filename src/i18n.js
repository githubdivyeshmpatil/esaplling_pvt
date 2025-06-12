import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translations from "./translations.json";

const resources = {
  en: { translation: translations.en },
  hi: { translation: translations.hi },
  mr: { translation: translations.mr },
gu: { translation: translations.gu },
or: { translation: translations.or },

};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
