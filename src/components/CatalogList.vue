<template>
  <div>
    <article class="product_catalog">
    <catalog-item v-for="good of filtered" :good="good" :key="good.id_product"></catalog-item>
    </article>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CatalogItem from './CatalogItem.vue';

export default {
  components: { CatalogItem },
  name: 'CatalogList',
  computed: {
    ...mapGetters(['filtered']),
  },
  methods: {
    ...mapActions(['getGoodsList']),
  },
  created() {
    this.getGoodsList();
  },
};
</script>
