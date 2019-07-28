<template>

  <section class="section"
      :class="pageClass">
      <div class="wrap">
      <HorizontalTitle v-bind:featureTitle="featureTitle" />
    <HorizontalFeatures
      v-for="feature in features"
      v-bind:key="feature.id"
      v-bind:title="feature.title"
      v-bind:description="feature.description"
      v-bind:image="feature.image"
      v-bind:buttonUrl="feature.buttonUrl">
    </HorizontalFeatures>
    </div>
    </section>


</template>

<script>
import HorizontalFeatures from "@/components/General/HorizontalFeatures/HorizontalFeatures";
import HorizontalTitle from "@/components/General/HorizontalFeatures/HorizontalTitle";


export default {
  name: 'HorizontalWrap',
  props: { 
    featureTitle: {
      tpye: String
    },
    features: {
      type: Array
    },
    pageClass: {
      type: String,
      default: ''
    },
  },
  components: {
        HorizontalFeatures,
        HorizontalTitle
  }
}
</script>


<style scoped>

.section {
   padding: 2rem 0;
}


@media (min-width: 768px) {
.section {
   padding: 4rem 0;
}
.wrap {
    display:flex;
    flex-direction: row;
}
.wrap > * {
 padding: 0 0 0 2em;
}
.wrap > *:first-child {
padding: 0;
}
p:last-child {
    margin-bottom: 0;
}
.feature-wrap {
  width: 27.5%;
}
}


</style>
