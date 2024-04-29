import Vue from "vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import { Icon } from "@iconify/vue2";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import i18n from "./i18n";
import "@/style.css";

Vue.use(Antd);
Vue.component("Icon", Icon);

new Vue({
  el: "#app",
  router,
  store,
  i18n,
  render: (h) => h(App),
});
