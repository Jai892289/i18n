import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from './locales/en/translation.json';
import hi from './locales/hi/translation.json'; // <- use 'hi' not 'hin'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      hi: { translation: hi },
    },
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
