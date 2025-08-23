import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { resorce } from './locales';

const supportedLngs = ['en', 'uz'];
i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: 'en',
  supportedLngs,
  interpolation: {
    escapeValue: false,
  },
  resources: resorce,
});

export default i18n;
