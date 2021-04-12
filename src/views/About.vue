<template>
  <div class="about">
    <div class="container">
    </div>
    <main>
        <div class="pink_background_all_pages">
            <div class="container product_h1">
                <h1>New Arrivals</h1>
                <div class="breadcrumbs">
                    <ol>
                        <li class="breadcrumbs_li"><a href="#">Home</a></li>
                        <li class="breadcrumbs_li"><a href="#">Men</a></li>
                        <li class="breadcrumbs_li"><a href="#">New Arrivals</a></li>
                    </ol>
                </div>
            </div>
        </div>
        <article class="container basket">
            <div class="header_bascet">
                <span>Product Details</span>
                <span>unite Price</span>
                <span>Quantity</span>
                <span>shipping</span>
                <span>Subtotal</span>
                <span>ACTION</span>
            </div>
            <cart-list></cart-list>
            <div class="s_c_button">
              <button>cLEAR SHOPPING CART</button><button>cONTINUE sHOPPING</button></div>
        </article>
        <aside class="container s_c_form">
            <div>
                <form class="adress_form" action="#">
                    <h4>Shipping Adress</h4>
                    <div class="select"><select class="f-points f_p_s">
                            <option>Bangladesh</option>
                            <option>Bangladesh</option>
                            <option>Bangladesh</option>
                            <option>Bangladesh</option>
                            <option>Bangladesh</option>
                            <option>Bangladesh</option>
                            <option>Bangladesh</option>
                            <option>Bangladesh</option>
                        </select></div>
                    <input class="f-points" type="text" placeholder="State">
                    <input class="f-points" type="number" placeholder="Postcode / Zip">
                    <input class="sub_form" type="submit" value="get a quote">
                </form>
            </div>
            <div>
                <form class="cupon_form" action="#">
                    <h4>Shipping Adress</h4>
                    <h5>Enter your coupon code if you have one</h5>
                    <input class="f-points" type="text" placeholder="State">
                    <input class="sub_form" type="submit" value="Apply coupon">
                </form>
            </div>
            <div class="total">
                <h6>Sub total<span>$900</span></h6>
                <h4>GRAND TOTAL<span class="total_pink">$900</span></h4>
                <hr>
                <button>proceed to checkout</button>
            </div>
        </aside>

    </main>
  </div>
</template>
<script>

import CartList from '../components/CartList.vue';

export default {
  components: { CartList },
};
</script>
