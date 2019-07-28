<template>

    <div>
          <Product 
            :id="loadedProduct ? loadedProduct.id : null"
            :thumbnail="loadedProduct ? loadedProduct.thumbnail.data.full_url : null"
            :name="loadedProduct ? loadedProduct.name : null"
            :description="loadedProduct ? loadedProduct.description : null"
            :shortDescription="loadedProduct ? loadedProduct.short_description : null"
            :tags="loadedProduct ? loadedProduct.tags : null"
            :features="loadedProduct ? loadedProduct.features : null"
            :price="loadedProduct ? loadedProduct.price : null"
            :images="loadedProduct ? loadedProduct.images : null"
            :categories="loadedProduct ? loadedProduct.categories : null"
          />
    </div>

</template>
 
<script>
import Product from '@/components/Products/Product'
import { mapGetters } from 'vuex';

export default {
  head () {
  return {
    title: 'product page',
    meta: [
     { hid: 'description', name: 'description', content: 'About our company Nuxt.js ' }
      ]
  }
  },
  beforeMount () {
     const loadedProduct = this.$store.dispatch('product/GET_PRODUCT', { productId: this.$route.params.id }).then(resp => {
        return { loadedProduct }
      })
  },
  computed: {
      ...mapGetters({
        loadedProduct: 'product/GET_SINGLE_PRODUCT'
      })
    },
  components: {
    Product
  }
};
</script>


<style scoped>

</style>
 