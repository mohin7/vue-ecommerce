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
                <a href="index1.html">Product<i class="ti-arrow-right"></i></a>
              </li>
              <li class="active"><a href="blog-single.html">Product Details</a></li>
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
            <h2>PRODUCTS DETAILS</h2>
            
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <img style="max-width: 300px" :src="product.image" alt="">
          <h3>Title : {{product.title}}</h3>
          <h4>Price: ${{product.price}}</h4>
          <p><strong>Category:</strong> {{product.category}}</p>
          <br>
          <p>Category: {{product.description}}</p>
        </div>
      </div>
    </div>
  </div>
  <!-- End Product Area -->
  <footer-area />
</template>
<script>
import axios from 'axios';
// import { mapGetters } from 'vuex';
import { mixin } from "../mixins/mixins";
import FooterArea from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar, FooterArea },
  data() {
    return {
        product: []
    };
  },
 mounted() {
        this.fetchAllProduct();
        // this.getCategories()
 },
  computed: {
    //  ...mapGetters([
    //      'getAllProducts'
    //  ])
  },
  methods: {
    fetchAllProduct() {
      axios.get(`https://fakestoreapi.com/products/${this.loadedID}`)
        .then((res) => {
          this.product = res.data
        })
    },
   
  },
  mixins: [mixin],
};
</script>
<style lang="scss">

</style>
