import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HOME_EN from 'src/locales/en/home.json'
import DETAIL_EN from 'src/locales/en/detail.json'
import HOME_VI from 'src/locales/vi/home.json'
import DETAIL_VI from 'src/locales/vi/detail.json'

export const locales = {
  en: 'English',
  vi: 'Tiếng Việt'
} as const

export const resources = {
  en: {
    home: HOME_EN,
    detail: DETAIL_EN
  },
  vi: {
    home: HOME_VI,
    detail: DETAIL_VI
  }
} as const

export const defaultNS = 'home'

// eslint-disable-next-line import/no-named-as-default-member
i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  ns: ['home', 'detail'],
  fallbackLng: 'vi',
  defaultNS,
  interpolation: {
    escapeValue: false // react already safes from xss
  }
})
