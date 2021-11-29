<template>
  <div>
    <a href="#">
      <div class="catalog_card">
        <div class="item_mask item_mask_product">
          <div class="buy_item" @click.prevent="addToCart(good)">
            <img src="img/cart.png" alt="" />
            <span>Add to Cart</span>
          </div>
        </div>
        <img :src="good.img" alt="#" />
        <p class="catalog_text">{{ good.product_name }}</p>
        <p class="catalog_price">{{ good.price }}</p>
      </div>
    </a>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'CatalogItem',
  props: ['good'],
  prod: {
    type: Object,
    required: true,
  },
  good: {
    type: Object,
    required: true,
  },
  methods: {
    ...mapActions(['addToCart']),
  },
  computed: {
    ...mapGetters({
      Cart: ['cart/Cart'],
    }),
  },
};
</script>
