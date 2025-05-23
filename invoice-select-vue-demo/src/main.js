import Vue from "vue";
import App from "./App.vue";

import { defineCustomElements } from "invoice-select/loader";

// 注册自定义元素
defineCustomElements();

Vue.config.productionTip = false;

// 忽略自定义元素
Vue.config.ignoredElements = [/^invoice-/];

new Vue({
  render: (h) => h(App),
}).$mount("#app");
