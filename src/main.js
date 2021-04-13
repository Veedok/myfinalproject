import Vue from 'vue';
import '@/assets/css/style.css';
import App from './App.vue';
import router from './router';
import store from './store';
import '../node_modules/font-awesome/css/font-awesome.min.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  methods: {
    addToCart(j) {
      console.log(j);
    }
  },
  render: (h) => h(App),
}).$mount('#app');
