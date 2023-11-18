import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from '../locales/en.json'
import zh_Hans from '../locales/zh-Hans.json'
import zh_Hant from '../locales/zh-Hant.json'
import ja from '../locales/ja.json'
import ko from '../locales/ko.json'

const resources = {
  'en': {
    translation: en,
  },
  'zh-Hans': {
    translation: zh_Hans,
  },
  'zh-Hant': {
    translation: zh_Hant,
  },
  'ja': {
    translation: ja,
  },
  'ko': {
    translation: ko,
  },
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
