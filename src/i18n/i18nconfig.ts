import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import th from './th.json'
import Languagedetector from "i18next-browser-languagedetector";

export const defaultNS = 'th'
export const resources = {
  TH: {
    th,
  },
}as const

i18n
  .use(Languagedetector)
  .use(initReactI18next) 
  .init({
    resources,
    defaultNS,
  });

  export default i18n;