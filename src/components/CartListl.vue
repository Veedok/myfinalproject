<template>
    <article>
    <cart-item-l v-for="good of Cart" :good="good" :key="good.id_product"></cart-item-l>
    </article>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CartItemL from './CartItemL.vue';

export default {
  components: { CartItemL },
  name: 'CartListl',
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
