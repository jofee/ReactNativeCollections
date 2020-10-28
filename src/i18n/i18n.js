import I18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';
import en from './locales/en';
import zh from './locales/zh';

const languages = {zh: 'zh', en: 'en'};

const locales = RNLocalize.getLocales();
const systemLanguage = locales[0]?.languageCode; // 用户系统偏好语言
if (systemLanguage) {
  I18n.locale = systemLanguage; //系统语言
} else {
  I18n.locale = languages.zh; // 默认语言
}
I18n.fallbacks = true;
I18n.translations = {
  zh,
  en,
};

export default I18n;
export {languages};
