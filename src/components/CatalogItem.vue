<template>
<div>
    <a href="#">
                        <div class="catalog_card">
                            <div class="item_mask item_mask_product">
                                    <div class="buy_item"><img src="img/cart.png" alt="">
                                    <span>Add to Cart</span></div>
                                </div><img :src="good.img" alt="#">
                            <p class="catalog_text">{{ good.product_name }}</p>
                            <p class="catalog_price">{{ good.price }}</p>
                        </div>
                    </a></div>
</template>

<script>

export default {
  data() {
    return {
      number: Response.this.good.img,
    };
  },
  name: 'CatalogItem',
  props: ['good'],
};
</script>
