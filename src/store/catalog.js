import axios from 'axios';

export default {
  state: {
    goods: [],
    filtered: [],
  },
  getters: {
    goods(state) {
      return state.goods;
    },
    filtered(state) {
      return state.filtered;
    }
  },
  mutations: {
    SET_GOODS_LIST(state, goods) {
      state.goods = goods;
      state.filtered = goods;
    },
    filter(state, u) {
      const regexp = new RegExp(u, 'i');
      state.filtered = state.goods.filter((el) => regexp.test(el.product_name));
    }
  },
  actions: {
    async getGoodsList({ commit }) {
      try {
        let { data: goods } = await axios.get('api/catalog');
        goods = goods.data;
        if (goods) {
          const newGoods = goods.map((good) => {
            // eslint-disable-next-line no-param-reassign
            good.img = require(`@/assets${good.img.replace('@assets', '')}`);
            return good;
          });
          commit('SET_GOODS_LIST', newGoods);
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
};
