<template>
    <article class="catalog">
    <cart-item v-for="good of Cart" :good="good" :key="good.id_product"></cart-item>
    </article>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CartItem from './CartItem.vue';

export default {
  components: { CartItem },
  name: 'CartList',
  computed: {
    ...mapGetters(['Cart']),
  },
  methods: {
    ...mapActions(['getGoodsList']),
  },
  created() {
    this.getGoodsList();
  },
};
</script>
