<template>
  <navbar />
  <!-- Breadcrumbs -->
  <div class="breadcrumbs">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="bread-inner">
            <ul class="bread-list">
              <li>
                <a href="index1.html">Home<i class="ti-arrow-right"></i></a>
              </li>
              <li class="active"><a href="blog-single.html">Products</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Breadcrumbs -->
  <!-- Start Product Area -->
  <div class="product-area section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title">
            <h2>ALL PRODUCTS</h2>
            
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="product-info">
            <div class="nav-main">
              <!-- Tab Nav -->
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    data-toggle="tab"
                    href="#man"
                    role="tab"
                    >Man</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" href="#women" role="tab"
                    >Woman</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" href="#kids" role="tab"
                    >Kids</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    data-toggle="tab"
                    href="#accessories"
                    role="tab"
                    >Accessories</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    data-toggle="tab"
                    href="#essential"
                    role="tab"
                    >Essential</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    data-toggle="tab"
                    href="#prices"
                    role="tab"
                    >Prices</a
                  >
                </li>
              </ul>
              <!--/ End Tab Nav -->
            </div>
            <div class="tab-content">
              <!-- Start Single Tab -->
              <div class="tab-pane fade show active" role="tabpanel">
                <div class="tab-single">
                  <div class="row">
                    <div class="col-xl-3 col-lg-4 col-md-4 col-12" v-for="(product,idx) in getAllProducts" :key="idx">
                      <div class="single-product">
                        <div class="product-img">
                          <a href="product-details.html">
                            <img style="max-width: 150px"
                              class="default-img"
                              :src="product.image"
                              alt="#"
                            />
                            
                          </a>
                          <div class="button-head">
                            <div class="product-action">
                              <a
                                data-toggle="modal"
                                data-target="#exampleModal"
                                title="Quick View"
                                href="#"
                                ><i class="ti-eye"></i
                                ><span>Quick Shop</span></a
                              >
                              <a title="Wishlist" href="#"
                                ><i class="ti-heart"></i
                                ><span>Add to Wishlist</span></a
                              >
                              <a title="Compare" href="#"
                                ><i class="ti-bar-chart-alt"></i
                                ><span>Add to Compare</span></a
                              >
                            </div>
                            <div class="product-action-2">
                              <a title="Add to cart" href="#">Add to cart</a>
                            </div>
                          </div>
                        </div>
                        <div class="product-content">
                          <h3>
                            <a href="product-details.html"
                              >{{product.title}}-({{product.category}})</a>
                          </h3>
                          <div class="product-price">
                            <span>{{product.price}}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                   
                   
                  </div>
                </div>
              </div>
              <!--/ End Single Tab -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Product Area -->
  <footer-area />
</template>
<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
import FooterArea from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar, FooterArea },
  data() {
    return {
     
    };
  },
 mounted() {
        this.fetchAllProducts()
 },
  computed: {
     ...mapGetters([
         'getAllProducts'
     ])
  },
  methods: {
    fetchAllProducts() {
      axios.get("https://fakestoreapi.com/products")
        .then((product) => {
          this.$store.dispatch('setProducts', product.data)
        });
    },
  },
};
</script>
<style lang="scss">
.product-img {
    text-align: center;
    border: 1px solid #e7e7e7;
    height: 300px;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    .product-action-2{
        left: 15px !important;
    }
   .product-action{
       right: 15px !important;
   }
}
</style>
