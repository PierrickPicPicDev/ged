import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import {
  domain,
  count,
  prettyDate,
  pluralize,
} from './filters';

Vue.config.productionTip = false;

Vue.filter('count', count);
Vue.filter('domain', domain);
Vue.filter('prettyDate', prettyDate);
Vue.filter('pluralize', pluralize);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
