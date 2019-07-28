<template>
<div class="feature-wrap">
  <div class="feature">
       <h2>{{title}}</h2>
       <div class="image-wrapper">
          <img :src="image" />
        </div>
       <p>{{description}}</p>
       <nuxt-link :to="{ path: buttonUrl }">Learn More</nuxt-link>
    </div>
    </div>
</template>

<script>

export default {
  name: 'HorizontalFeatures',
  props: { 
      title: {
        type: String,
        required: true
        },
      description: {
        type: String,
        required: true
        },
        image: {
          type: String,
        },
        buttonUrl: {
          tpye: String,
        }
  }
}
</script>


<style scoped>

h2 {
  margin-bottom: 1.5rem;
}

.feature {
  width: 100%;
}

.image-wrapper {
  width: 100%;
  max-width: 100%;
  max-height: 260px;
  object-fit: cover;
  object-position: top;
}
.image-wrapper img {
  max-width: 100%;
  object-fit: cover;
  object-position: top;   
  height: 200px;
  width: 100%;
}

@media (min-width: 768px) {
h2 {
  margin-top: 0;
  position: relative;
}

}

</style>
