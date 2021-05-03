import axios from 'axios';

export default {
  state: {
    Cart: [],
  },

  getters: {
    Cart(state) {
      return state.Cart;
    },
  },

  mutations: {
    /*    fetchprod(state, product) {
         const find = state.Cart.find((el) => el.id_product === product.id_product);
         if (find) {
           find.quantity += 1;
         } else {
           const prod = { quantity: 1, ...product };
           state.Cart.push(prod);
         }
       }, */

    incToCart(state, product) {
      // eslint-disable-next-line no-param-reassign
      product.quantity += 1;
    },
    addToCart(state, product) {
      state.Cart.push(product);
    },
    SET_CART_LIST(state, goods) {
      state.Cart = goods;
    },
  },

  actions: {
    async remove({ commit, state }, product) {
      try {
        const isGood = state.Cart.find(({ id_product }) => +id_product === +product.id_product);
        if (!isGood) {
          const { data } = await axios.get('api/cart', { ...product, quantity: 1 });
          if (data.result) {
            commit('addToCart', { ...product, quantity: 1 });
          }
        } else {
          const { data } = await axios.delete(`api/cart/del/${product.id_product}`);
          if (data.result) {
            let { data: goods } = await axios.get('api/cart');
            goods = goods.data;
            commit('SET_CART_LIST', goods);
          }
          console.log(data.result);
        }
      } catch (e) { console.log(e); }
      console.log(state.Cart);
    },
    async getCartList({ commit }) {
      try {
        let { data: goods } = await axios.get('api/cart');
        goods = goods.data;
        if (goods) {
          const newGoods = goods;
          commit('SET_CART_LIST', newGoods);
        }
      } catch (e) {
        console.log(e);
      }
    },
    async addToCart({ commit, state }, product) {
      try {
        const isGood = state.Cart.find(({ id_product }) => +id_product === +product.id_product);
        if (!isGood) {
          const { data } = await axios.post('api/cart', { ...product, quantity: 1 });
          if (data.result) {
            commit('addToCart', { ...product, quantity: 1 });
          }
        } else {
          const { data } = await axios.put(`api/cart/inc/${product.id_product}`);
          if (data.result) {
            commit('incToCart', isGood);
          }
        }
      } catch (e) { console.log(e); }
    }
  },
};
