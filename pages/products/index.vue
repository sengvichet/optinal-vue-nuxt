<template>
<div id="product-page">
     <AppHero
      :hasTint="hasTint"
      :titleHero="titleHero">
      <h1>Products</h1>
      <p>In-house custom built WHMCS themes, Wordpress themes and design resources</p>
      </AppHero>

  <section class="section alt-bg">
    <div class="wrap">
    <ProductList :products="loadedProducts" />
    </div>
   </section>

   </div>
</template>
 
<script>
import AppHero from "@/components/UI/AppHero";
import ProductList from '@/components/Products/ProductList'

import { mapGetters } from 'vuex';

export default {
  data() {
    return { 
    hasTint: false,
    titleHero: true
      }
  },
  beforeMount () {
     const loadedProducts = this.$store.dispatch('product/GET_PRODUCTS').then(resp => {
        return { loadedProducts }
      })
  },
  computed: {
      ...mapGetters({
        loadedProducts: 'product/LOAD_PRODUCTS'
      })
    },
  components: {
    ProductList,
    AppHero
  },
};
</script>


<style scoped>
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
 