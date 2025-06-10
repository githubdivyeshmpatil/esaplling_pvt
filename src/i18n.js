import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Example translations (add more as needed)
const resources = {
  en: {
    translation: {
      "HOME": "Home",
      "Consumer Electronics": "Consumer Electronics",
      "About us": "About us",
      "Vision Mission": "Vision Mission",
      "Acquisition": "Acquisition",
      "Certification": "Certification",
      "Quality Assurance": "Quality Assurance",
      "Management": "Management",
      "Recognition": "Recognition",
      "Coporate": "Corporate",
      "Facility": "Facility",
      "Industry": "Industry",
      "Expansions": "Expansions",
      "Collabration": "Collaboration",
      "Welcome": "Welcome",
      "Contact": "Contact"
    }
  },
  hi: {
    translation: {
      "HOME": "होम",
      "Consumer Electronics": "उपभोक्ता इलेक्ट्रॉनिक्स",
      "About us": "हमारे बारे में",
      "Vision Mission": "दृष्टि मिशन",
      "Acquisition": "अधिग्रहण",
      "Certification": "प्रमाणन",
      "Quality Assurance": "गुणवत्ता आश्वासन",
      "Management": "प्रबंधन",
      "Recognition": "मान्यता",
      "Coporate": "कॉर्पोरेट",
      "Facility": "सुविधा",
      "Industry": "उद्योग",
      "Expansions": "विस्तार",
      "Collabration": "सहयोग",
      "Welcome": "स्वागत है",
      "Contact": "संपर्क करें"
    }
  },
  es: {
    translation: {
      "HOME": "Inicio",
      "Consumer Electronics": "Electrónica de Consumo",
      "About us": "Sobre nosotros",
      "Vision Mission": "Visión y Misión",
      "Acquisition": "Adquisición",
      "Certification": "Certificación",
      "Quality Assurance": "Aseguramiento de Calidad",
      "Management": "Gestión",
      "Recognition": "Reconocimiento",
      "Coporate": "Corporativo",
      "Facility": "Instalación",
      "Industry": "Industria",
      "Expansions": "Expansiones",
      "Collabration": "Colaboración"
    }
  }
  // Add more languages as needed
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n; 