<template>
    <div class="carousel-wrapper">
        <no-ssr>
          <flickity v-if="images" ref="flickity" :options="flickityOptions">
              <div class="carousel-cell" v-for="(image, index) in images" :key="index"><img :src="image.image_id.data.full_url" /></div>
          </flickity>
        </no-ssr>
      </div>
</template>



<script>

export default {
    name: 'ImageCarousel',
    props: {
        images: {
            type: Array,
        }
    },
    components: {
        

  },
  data() {
    return {
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: true,
        pageDots: true,
        wrapAround: true,
        imagesLoaded: true,
        
        // any options from Flickity can be used
      },  
    }
  },

  methods: {
    next() {
      this.$refs.flickity.next();
    },
    
    previous() {
      this.$refs.flickity.previous();
    },

    init() {
      this.$flickity = new Flickity(this.$el, this.options);
      this.$emit('init', this.$flickity);
    },
  }
}




</script>



<style scoped> 

img {
    width: 260px;
    margin-left: 20px;
    margin-right: 20px;
    }

.carousel-wrapper {
  margin-bottom: 2.5rem;
}

</style>