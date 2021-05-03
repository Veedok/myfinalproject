<template>
<div class="goods">
                <div class="product_details">
                    <img :src='good.img' alt="#">
                    <h4>{{ good.product_name }}</h4>
                    <span class="const">Color:<span class="vari">Red</span></span><br>
                    <span class="const">Size:<span class="vari">Xll</span></span>
                </div>
                <div class="unite_price"><span>{{ good.price }}</span></div>
                <div class="quantity">
                  <input v-model="number" type="number"></div>
                <div class="shipping"><span>FREE</span></div>
                <div class="subtotal"><span>{{ good.price * number }}</span></div>
                <div class="actoon" @click.prevent="remove(good)">
                  <button><i class="fas fa-times-circle"></i></button></div>
            </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      number: this.good.quantity,
    };
  },
  name: 'CartItem',
  props: ['good'],
  methods: {
    ...mapActions(['remove']),
  },
  computed: {
    ...mapGetters({
      Cart: ['cart/Cart']
    }),
  },
};
</script>
