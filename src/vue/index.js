import Vue from "vue";
import Vuex from "vuex";
import store from "./store";
import "document-register-element";
import filters from "./filters";
import plugins from "./plugins";
import components from "./components";

Vue.config.devtools = true;
Vue.use(Vuex);

const vuexStore = new Vuex.Store(store);

/* Register Filters */
Object.entries(filters).forEach(filter => {
  Vue.use(...filter);
});

/* Register Plugins */
plugins.forEach(plugin => {
  Vue.use(plugin);
});

/* Register Components */
Object.entries(components).forEach(component => {
  const [name, module] = component;
  module.store = vuexStore;
  Vue.customElement(name, module);
});
