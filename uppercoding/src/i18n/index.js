import Vue from "vue";
import VueI18n from "vue-i18n";
import zh from "./lang/zh-cn";
import en from "./lang/en-us";

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: "zh",
  messages: { zh, en },
});

export default i18n;
