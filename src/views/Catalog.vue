<template>
  <div class="about">
     <header class="header">
        <div class="container header-container">
            <div class="header-logo">
                <a class="logo-link" href="index.html">
                    <img class="logo-img" src="@/img/logo.png" alt="logo">
                    BRAN<span class="pink">D</span>
                </a>
            </div>

            <div class="browse">
                <div class="browse-btn">
                    <button>Brows <i class="fas fa-caret-down"></i></button>
                    <div class="drop_nav">
                        <h3 class="d_n_heading">Women</h3>
                        <ul class="d_n_menu">
                            <li><a href="#">Dresses</a></li>
                            <li><a href="#">Tops</a></li>
                            <li><a href="#">Sweaters/Knits</a></li>
                            <li><a href="#">Jackets/Coats</a></li>
                            <li><a href="#">Blazers</a></li>
                            <li><a href="#">Denim</a></li>
                            <li><a href="#">Leggings/Pants</a></li>
                            <li><a href="#">Skirts/Shorts</a></li>
                            <li><a href="#">Accessories</a></li>
                        </ul>
                        <h3 class="d_n_heading">Men</h3>
                        <ul class="d_n_menu">
                            <li><a href="#">Tees/Tank tops</a></li>
                            <li><a href="#">Shirts/Polos</a></li>
                            <li><a href="#">Sweaters</a></li>
                            <li><a href="#">Sweatshirts/Hoodies</a></li>
                            <li><a href="#">Blazers</a></li>
                            <li><a href="#">Jackets/vests</a></li>
                        </ul>
                    </div>
                </div>

                <form action="#" class="search">
                    <input class="search-field" type="text" placeholder="Search for Item...">
                    <button class="search-btn"><img src="@/img/search.png" alt="search"></button>
                </form>
            </div>

            <div class="login">
                <a href="#"><img src="@/img/cart.png" alt=""></a>
                <div class="account"><button>My Account <i class="fas fa-caret-down"></i></button>
                    <div class="drop_cart">
                        <div class="drop_cart_one_product">
                          <img src="@/img/hhd/rectangle_24_1821.jpg" alt="#">
                            <div>
                                <h4>Rebox Zane</h4>
                                <ul class="stars">
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="far fa-star"></i></li>
                                </ul>
                                <span>1 x $250</span>
                            </div>
                            <div class="actoon">
                              <button class="d_c_a">
                                <i class="fas fa-times-circle"></i></button></div>
                        </div>
                        <div class="drop_cart_one_product">
                          <img src="@/img/hhd/rectangle_24_1830.png" alt="#">
                            <div>
                                <h4>Rebox Zane</h4>
                                <ul class="stars">
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="far fa-star"></i></li>
                                    <li><i class="far fa-star"></i></li>
                                </ul>
                                <span>1 x $250</span>
                            </div>
                            <div class="actoon">
                              <button class="d_c_a">
                                <i class="fas fa-times-circle"></i></button></div>
                        </div>
                        <div class="drop_cart_total_price">
                            <h5>TOTAL</h5>
                            <h5>$500.00</h5>
                        </div>
                        <div class="drop_cart_action">
                            <a class="drop-cart-ac" href="checkout.html">Checkout</a>
                            <a class="drop-cart-ac" href="shopping-cart.html">Go to cart</a>

                        </div>
                    </div>
                </div>
            </div>

        </div>

    </header>
    <catalog-list></catalog-list>
  </div>
</template>

<script>

import CatalogList from '@/components/CatalogList.vue';

export default {
  components: { CatalogList },
};
</script>
