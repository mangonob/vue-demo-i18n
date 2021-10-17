import Vue from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import i18n from "./i18n";

Vue.config.productionTip = false;

Vue.use(Antd);

new Vue({
  render: (h) => h(App),
  i18n,
}).$mount("#app");
