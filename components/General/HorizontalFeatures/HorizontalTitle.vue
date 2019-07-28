<template>
  <div class="feature-title"><h1> {{featureTitle}} </h1></div>
</template>

<script>

export default {
  name: 'HorizontalTitle',
  props: { 
      featureTitle: {
        type: String
        }
  }
}
</script>


<style scoped>




@media (min-width: 768px) {
   h1 {
  margin: 0;
  position: relative;
  }
  

.feature-title {
  width: 30%;
  }
}

</style>
