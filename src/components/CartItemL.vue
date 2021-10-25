<template>
<div class="drop_cart_one_product">
                          <img :src="good.img" alt="#">
                            <div>
                                <h4>{{ good.product_name }}</h4>
                                <ul class="stars">
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="far fa-star"></i></li>
                                    <li><i class="far fa-star"></i></li>
                                </ul>
                                <span>Цена {{ good.price }}</span>
                                <span>Кол-во {{ good.quantity }}</span>
                                <span>Сумма {{ good.price * good.quantity }}</span>
                            </div>
                            <div class="actoon" @click.prevent="remove(good)">
                              <button class="d_c_a">
                                <i class="fas fa-times-circle"></i></button></div>
                        </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      number: 1,
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
