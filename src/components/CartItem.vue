<template>
<div class="goods">
                <div class="product_details">
                    <img :src=require(good.img) alt="#">
                    <h4>{{ good.product_name }}</h4>
                    <span class="const">Color:<span class="vari">Red</span></span><br>
                    <span class="const">Size:<span class="vari">Xll</span></span>
                </div>
                <div class="unite_price"><span>{{ good.price }}</span></div>
                <div class="quantity"><input v-model="number" type="number" placeholder="2"></div>
                <div class="shipping"><span>FREE</span></div>
                <div class="subtotal"><span>{{ good.price * number }}</span></div>
                <div class="actoon"><button><i class="fas fa-times-circle"></i></button></div>
            </div>
</template>

<script>
export default {
  data() {
    return {
      number: 1,
    };
  },
  name: 'CartItem',
  props: ['good'],
};
</script>
