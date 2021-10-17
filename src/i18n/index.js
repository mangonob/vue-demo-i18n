import VueI18n from "vue-i18n";
import zhCN from "./zh-CN";
import en from "./en";
import Vue from "vue";

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: navigator.language,
  messages: {
    en,
    "zh-CN": zhCN,
  },
});

export default i18n;
