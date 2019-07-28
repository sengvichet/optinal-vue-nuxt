<template>
  <div class="preview">
    <ProductPreview
      v-for="product in products"
      :key="product.id"
      :id="product.id"
      :thumbnail="product.thumbnail.data.full_url"
      :name="product.name"
      :description="product.description"
      :shortDescription="product.short_description"
      :price="product.price"
      :tags="product.tags"
      :slug="product.slug" />
    </div>
</template>

<script>
import ProductPreview from '@/components/Products/ProductPreview'

export default {
  components: {
    ProductPreview 
  },
  props: {
    products: {
      required: true,
      validator: prop => Array.isArray(prop) || prop === null
    }
  }
}
</script>


<style scoped>


</style>

