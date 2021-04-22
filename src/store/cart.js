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
    fetchprod(state, product) {
      const find = state.Cart.find((el) => el.id_product === product.id_product);
      if (find) {
        find.quantity += 1;
      } else {
        const prod = { quantity: 1, ...product };
        state.Cart.push(prod);
      }
    },
    remove(state, item) {
      state.Cart.splice(state.Cart.indexOf(item), 1);
    },
  },
};
