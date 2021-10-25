<template>
  <div id="app">
     <header class="header">
        <div class="container header-container">
            <div class="header-logo">
                <a class="logo-link" href="index.html">
                    <img class="logo-img" src="./assets/img/logo.png" alt="logo">
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
                <form action="#" class="search" @submit.prevent="filter(user)">
                    <input class="search-field" v-model="user"
                     type="text" placeholder="Search for Item..." :change="filter(user)">
                    <button class="search-btn">
                        <img src="./assets/img/search.png" alt="search"></button>
                </form>
            </div>

            <div class="login">
                <a href="#"><img src="img/cart.png" alt=""></a>
                <div class="account"><button>My Account <i class="fas fa-caret-down"></i></button>
                    <div class="drop_cart">
                        <cart-listl></cart-listl>
                        <div class="drop_cart_total_price">
                            <h5>TOTAL</h5>
                            <h5>{{ summ }}</h5>
                        </div>
                        <div class="drop_cart_action">
                            <a class="drop-cart-ac" href="checkout.html">Checkout</a>
                            <router-link class="drop-cart-ac" to="/about">Go to Cart</router-link>

                        </div>
                    </div>
                </div>
            </div>

        </div>

    </header>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/Catalog">Catalog</router-link> |
      <router-link to="/about">Cart</router-link>
    </div>
    <router-view/>
    <footer>
        <div class="feedback feedback_product">
            <div class="feedback_bkg">
                <div class="container feedback_container">
                    <div class="coment">
                        <div class="coment_img"></div>
                        <div class="coment_text">
                          <span>“Vestibulum quis porttitor dui! Quisque viverra nunc mi, <br>
                                a pulvinar purus condimentum a. Aliquam condimentum
                                <br> mattis neque sed pretium”</span>
                            <span class="coment_name">Bin Burhan</span> <span class="coment_name_2">
                                Dhaka, Bd</span>
                            <div class="coment_slyder">
                                <div class="coment_grey"></div>
                                <div class="coment_pink"></div>
                                <div class="coment_grey"></div>
                            </div>
                        </div>
                    </div>
                    <div class="coment_line"></div>
                    <div class="email">
                        <span class="email_text">Subscribe</span>
                        <span>FOR OUR NEWLETTER AND PROMOTION</span>
                        <div>
                            <form action="#" class="feedback_form">
                                <input class="feedback_email"
                                 placeholder="Enter Your Email" type="email">
                                <input class="feedback_btn" type="submit" value="Subscribe">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="more_nav">
            <div class="container more_nav_container">
                <div class="more_nav_text">
                    <a class="logo-link" href="index.html">
                        <img class="logo-img" src="img/logo.png" alt="logo">
                        BRAN<span class="pink">D</span>
                    </a>
                     <span class="more_big_text">Objectively transition extensive data
                       rather than cross functional solutions. Monotonectally
                       syndicate multidisciplinary materials before go forward benefits.
                       Intrinsicly syndicate an expanded array
                       of processes and cross-unit partnerships.
                        <br><br>
                        Efficiently plagiarize 24/365 action items and focused infomediaries.
                        Distinctively seize superior initiatives
                        for wireless technologies. Dynamically optimize.

                    </span>
                </div>
                <div class="more">
                    <h2>COMPANY</h2>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">How It Works</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div class="more">
                    <h2>INFORMATION</h2>
                    <ul>
                        <li><a href="#">Tearms &amp; Condition</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">How to buy</a></li>
                        <li><a href="#">How to Sell</a></li>
                        <li><a href="#">Promotion</a></li>
                    </ul>
                </div>
                <div class="more">
                    <h2>SHOP CATEGORY</h2>
                    <ul>
                        <li><a href="#">Men</a></li>
                        <li><a href="#">Women</a></li>
                        <li><a href="#">Child</a></li>
                        <li><a href="#">Apparel</a></li>
                        <li><a href="#">Brows All</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="last_line">
            <div class="container last_line_container">
                <div><span>© 2017 Brand All Rights Reserved.</span></div>
                <div>
                    <ul class="links">
                        <li><a href="#">
                                <div class="social"></div>
                            </a></li>
                        <li><a href="#">
                                <div class="social"></div>
                            </a></li>
                        <li><a href="#">
                                <div class="social"></div>
                            </a></li>
                        <li><a href="#">
                                <div class="social"></div>
                            </a></li>
                        <li><a href="#">
                                <div class="social"></div>
                            </a></li>
                    </ul>
                </div>
            </div>
        </div>

    </footer>
  </div>
</template>

<style lang="less">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
import CartListl from '@/components/CartListl.vue';
import { mapMutations, mapActions } from 'vuex';

export default {
  data() {
    return {
      user: '',
    };
  },
  // eslint-disable-next-line vue/no-unused-components
  components: { CartListl },
  methods: {
    ...mapMutations(['filter']),
    ...mapActions(['getGoodsList', 'getCartList']),
  },
  created() {
    this.getGoodsList();
    this.getCartList();
  },
};
</script>
