import Vue from 'vue';
import Vuex from 'vuex';
import catalog from './catalog';
import cart from './cart';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    catalog,
    cart,
  },
});
