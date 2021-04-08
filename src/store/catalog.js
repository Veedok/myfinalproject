import axios from 'axios';

export default {
  state: {
    goods: [],
  },
  getters: {
    goods(state) {
      return state.goods;
    },
  },
  mutations: {
    SET_GOODS_LIST(state, goods) {
      state.goods = goods;
    },
  },
  actions: {
    async getGoodsList({ commit }) {
      // setTimeout(() => {
      //   const goods = [
      //     {
      //       id_product: 1,
      //       product_name: 'Keyboard',
      //       price: 1600,
      //       img: require('@/assets/img/Product/image_placeholder_1657.jpg'),
      //     },
      //     {
      //       id_product: 2,
      //       product_name: 'Gamepad',
      //       price: 3000,
      //       img: require('@/assets/img/Product/image_placeholder_1877.png'),
      //     },
      //     {
      //       id_product: 3,
      //       product_name: 'Gamepad',
      //       price: 3000,
      //       img: require('@/assets/img/Product/image_placeholder_1907.png'),
      //     },
      //     {
      //       id_product: 4,
      //       product_name: 'Gamepad',
      //       price: 3000,
      //       img: require('@/assets/img/Product/image_placeholder_1937.jpg'),
      //     },
      //     {
      //       id_product: 5,
      //       product_name: 'Gamepad',
      //       price: 3000,
      //       img: require('@/assets/img/Product/image_placeholder_1967.jpg'),
      //     },
      //     {
      //       id_product: 6,
      //       product_name: 'Gamepad',
      //       price: 3000,
      //       img: require('@/assets/img/Product/image_placeholder_1997.jpg'),
      //     },
      //     {
      //       id_product: 7,
      //       product_name: 'Gamepad',
      //       price: 3000,
      //       img: require('@/assets/img/Product/image_placeholder_2027.jpg'),
      //     },
      //     {
      //       id_product: 8,
      //       product_name: 'Gamepad',
      //       price: 3000,
      //       img: require('@/assets/img/Product/image_placeholder_2057.jpg'),
      //     },
      //     {
      //       id_product: 9,
      //       product_name: 'Gamepad',
      //       price: 3000,
      //       img: require('@/assets/img/Product/image_placeholder_2087.png'),
      //     },
      //   ];
      //   console.log(goods);
      //   commit('SET_GOODS_LIST', goods);
      // }, 1000);
      const { data: goods } = await axios.get('https://raw.githubusercontent.com/Veedok/myfinalproject/my/myJson.json');
      commit('SET_GOODS_LIST', goods);
      console.log(goods);
    },
  },
};
