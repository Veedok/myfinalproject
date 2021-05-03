<template>
  <div>
    <article class="product_catalog">
      <catalog-item
        v-for="good of filtered"
        :good="good"
        :key="good.id_product"
      ></catalog-item>
    </article>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CatalogItem from './CatalogItem.vue';

export default {
  components: { CatalogItem },
  name: 'CatalogList',
  computed: {
    ...mapGetters(['filtered']),
  },
};
</script>
