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
    addToCart(s) {
      return this.state.Cart.push(s);
    }
  }
};
