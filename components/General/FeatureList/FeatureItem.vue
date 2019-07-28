<template>
     <ul>
          <li class="" v-for="(feature, index) in features" :key="index">
                {{ feature }}</li>          
          </ul>
</template>

<script>
export default {
    name: 'FeatureList',
    props: {
        features: {
            type: Array
        }
    }
}


</script>


<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding-left: 15px;
}

ul li {
  padding-bottom: 1rem;
  width: 100%;
  text-transform: capitalize
}

@media (min-width: 850px) {
 ul li {
  flex-basis: 30%;
  padding-right: 3%;
  width: 30%;
  padding-bottom: 2rem;
}
}


</style>