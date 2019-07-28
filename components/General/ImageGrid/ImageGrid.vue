<template>
<section class="section alt-bg" id="screenshots">
  <div class="wrap"> <h2><slot /></h2>
  <div class="image-wrap">
          <div class="image" v-for="(image, index) in images" :key="index">
                <img :src="image.image_id.data.full_url" />  </div>       
               
  </div>
  </div>
</section>
    
</template>


<script>
export default {
    name: 'ImageGrid',
    props: {
        images: {
            type: Array
        }
    }
}


</script>


<style scoped>
h2 {
  margin-bottom: 2rem;
  margin-top: 0;
  font-size: 2rem;
}

.image-wrap  {
  display: grid;
  grid-gap: 2%;
    grid-template-columns: repeat(1, 1fr);
}

img {
  width: 100%;
  -webkit-box-shadow: 0 16px 80px 0 rgba(0,0,0,.07);
  box-shadow: 0 16px 80px 0 rgba(0,0,0,.07);
}

ul li {
  padding-bottom: 1rem;
  width: 100%;
  text-transform: capitalize
}

@media (min-width: 850px) {
.image-wrap  {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}


 ul li {
  flex-basis: 30%;
  padding-right: 3%;
  width: 30%;
  padding-bottom: 2rem;
}
}


</style>