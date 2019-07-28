<template>
 <div class="information">
    <h2>{{title}}</h2>
        <p class="description">{{description}}</p>
<ul>
  <pricing-item 
    v-for="feature in features"
    v-bind:key="feature.id"
    v-bind:item="feature.item"/>
</ul>      
    </div>
</template>


<script>
import PricingItem from "@/components/General/PricingCard/PricingCardElements/PricingItem";

export default {
  name: 'PricingInformation', 
  props: {  
      title: {
        type: String,
        required: true
        },
      price: {
        type: String,
      },
      description: {
        type: String,
        required: true
        },
      label: {
        type: String,
        },
      features: {
        type: Array
      }
},
  components: {
      PricingItem
  }
}
</script>






<style scoped>
h2 {
  font-size: 2rem;
  margin-top:0;
  margin-bottom: 1.5rem;
}


.information {
  background-color: #ffffff;
  padding: 2rem;
}

.description {
  padding: 0rem 0rem 1rem 0rem;
  margin: 0;
  font-weight: 700;
}

@media (min-width: 768px) {
.information {
  padding: 3rem 2rem 3rem 3rem;
}
.description {
  width: 80%
}
}
</style>