<template>
  <div>
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
        <div class="container all_products">
            <aside class="choice_menu">
                <details class="choise_menu">
                    <summary class="your_choice">Category</summary>
                    <ul>
                        <li><a class="choice_menu_a" href="#">Accessories</a></li>
                        <li><a class="choice_menu_a" href="#">Bags</a></li>
                        <li><a class="choice_menu_a" href="#">Denim</a></li>
                        <li><a class="choice_menu_a" href="#">Hoodies &amp; Sweatshirts</a></li>
                        <li><a class="choice_menu_a" href="#">Jackets &amp; Coats</a></li>
                        <li><a class="choice_menu_a" href="#">Pants</a></li>
                        <li><a class="choice_menu_a" href="#">Polos</a></li>
                        <li><a class="choice_menu_a" href="#">Shirts</a></li>
                        <li><a class="choice_menu_a" href="#">Shoes</a></li>
                        <li><a class="choice_menu_a" href="#">Shorts</a></li>
                        <li><a class="choice_menu_a" href="#">Sweaters &amp; Knits</a></li>
                        <li><a class="choice_menu_a" href="#">T-Shirts</a></li>
                        <li><a class="choice_menu_a" href="#">Tanks</a></li>
                    </ul>

                </details>
                <details class="choise_menu">
                    <summary class="your_choice">BRAND</summary>
                    <ul>
                        <li><a class="choice_menu_a" href="#">Accessories</a></li>
                        <li><a class="choice_menu_a" href="#">Bags</a></li>
                        <li><a class="choice_menu_a" href="#">Denim</a></li>
                        <li><a class="choice_menu_a" href="#">Hoodies &amp; Sweatshirts</a></li>
                        <li><a class="choice_menu_a" href="#">Jackets &amp; Coats</a></li>
                        <li><a class="choice_menu_a" href="#">Pants</a></li>
                        <li><a class="choice_menu_a" href="#">Polos</a></li>
                        <li><a class="choice_menu_a" href="#">Shirts</a></li>
                        <li><a class="choice_menu_a" href="#">Shoes</a></li>
                        <li><a class="choice_menu_a" href="#">Shorts</a></li>
                        <li><a class="choice_menu_a" href="#">Sweaters &amp; Knits</a></li>
                        <li><a class="choice_menu_a" href="#">T-Shirts</a></li>
                        <li><a class="choice_menu_a" href="#">Tanks</a></li>
                    </ul>

                </details>
                <details class="choise_menu">
                    <summary class="your_choice">DESIGNER</summary>
                    <ul>
                        <li><a class="choice_menu_a" href="#">Accessories</a></li>
                        <li><a class="choice_menu_a" href="#">Bags</a></li>
                        <li><a class="choice_menu_a" href="#">Denim</a></li>
                        <li><a class="choice_menu_a" href="#">Hoodies &amp; Sweatshirts</a></li>
                        <li><a class="choice_menu_a" href="#">Jackets &amp; Coats</a></li>
                        <li><a class="choice_menu_a" href="#">Pants</a></li>
                        <li><a class="choice_menu_a" href="#">Polos</a></li>
                        <li><a class="choice_menu_a" href="#">Shirts</a></li>
                        <li><a class="choice_menu_a" href="#">Shoes</a></li>
                        <li><a class="choice_menu_a" href="#">Shorts</a></li>
                        <li><a class="choice_menu_a" href="#">Sweaters &amp; Knits</a></li>
                        <li><a class="choice_menu_a" href="#">T-Shirts</a></li>
                        <li><a class="choice_menu_a" href="#">Tanks</a></li>
                    </ul>

                </details>
            </aside>
            <section class="showroom">
                <h2 class="hidden">All product and filters</h2>
                <div class="options">
                    <div class="trending_now"><span>Trending now</span>
                        <ul>
                            <li><a href="#">Bohemian</a></li>
                            <li><a href="#">Floral</a></li>
                            <li><a href="#">Lace</a></li>
                            <li><a href="#">Floral</a></li>
                            <li><a href="#">Lace</a></li>
                            <li><a href="#">Bohemian</a></li>
                        </ul>
                    </div>
                    <div class="size"><span>Size</span>
                        <ul>
                            <li><input type="checkbox">XXS</li>
                            <li><input type="checkbox">XS</li>
                            <li><input type="checkbox">S</li>
                            <li><input type="checkbox">M</li>
                            <li><input type="checkbox">L</li>
                            <li><input type="checkbox">XL</li>
                            <li><input type="checkbox">XXL</li>
                        </ul>
                    </div>
                    <div class="price">
                        <span>Price</span>
                        <div class="range-controls">
                            <div class="scale">
                                <div class="bar"></div>
                            </div>
                            <div class="toggle toggle-min" tabindex="0"></div>
                            <div class="toggle toggle-max" tabindex="0"></div>
                        </div>
                        <ul class="price_number">
                            <li>$52</li>
                            <li>$400</li>
                        </ul>
                    </div>
                </div>
                <div class="grey_line">
                    <div class="drop_down_list">
                        <button class="drop_down_bth">Sort by</button>
                        <select class="drop_down_select">
                            <option class="drop_down_option">Name</option>
                            <option class="drop_down_option">Price</option>
                            <option class="drop_down_option">Presence</option>

                        </select>
                    </div>
                    <div class="drop_down_list"> <button class="drop_down_bth">Show</button>
                        <select class="drop_down_select">
                            <option class="drop_down_option">6</option>
                            <option class="drop_down_option">9</option>
                            <option class="drop_down_option">12</option>

                        </select>
                    </div>
                </div>
               <catalog-list></catalog-list>
                <div class="view_pages">
                    <div class="pager">
                        <ul>
                            <li class="pager_number"><a href="#">&lt;</a></li>
                            <li class="pager_number activ_page"><a href="#">1</a></li>
                            <li class="pager_number"><a href="#">2</a></li>
                            <li class="pager_number"><a href="#">3</a></li>
                            <li class="pager_number"><a href="#">4</a></li>
                            <li class="pager_number"><a href="#">5</a></li>
                            <li class="pager_number"><a href="#">6</a></li>
                            <li class="pager_number">.....</li>
                            <li class="pager_number"><a href="#">20</a></li>
                            <li class="pager_number activ_page"><a href="#">&gt;</a></li>
                        </ul>
                    </div>
                    <button class="view_all">View All</button>
                </div>
            </section>
        </div>
        <div class="black_line">
            <div class="container black_line_container">
                <div class="advantages">
                    <div class="icon_advantages_1"></div>
                    <h2>Free Delivery</h2>
                    <span>Worldwide delivery on all. Authorit tively morph
                         next-generation innov tion with extensive models.</span>
                </div>
                <div class="advantages">
                    <div class="icon_advantages_2"></div>
                    <h2>Sales &amp; discounts</h2>
                    <span>Worldwide delivery on all. Authorit tively morph
                         next-generation innov tion with extensive models.</span>
                </div>
                <div class="advantages">
                    <div class="icon_advantages_3"></div>
                    <h2>Quality assurance</h2>
                    <span>Worldwide delivery on all. Authorit tively morph
                         next-generation innov tion with extensive models.</span>
                </div>
            </div>
        </div>
    </main>
  </div>
</template>

<script>

import CatalogList from '@/components/CatalogList.vue';

export default {
  components: { CatalogList },
  methods: {
    addToCart(good) {
      console.log(good);
      console.log(this.Cart);
    }
  }
};
</script>
