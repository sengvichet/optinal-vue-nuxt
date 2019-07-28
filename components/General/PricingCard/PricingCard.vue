<template>
<div id="card">
  <pricing-information :title="title" :description="description"  :features="features"/>
  <pricing-action :price="price" :buttonUrl="buttonUrl" :btnStyle="btnStyle">Get Started</pricing-action>
</div>
</template>

<script>
import PricingInformation from "@/components/General/PricingCard/PricingCardElements/PricingInformation";
import PricingAction from "@/components/General/PricingCard/PricingCardElements/PricingAction";

export default {

  name: 'PricingCard',
  props: {  
      title: { 
        type: String,
        required: true
        },
      price: {
        type: String,
        required: true
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
      },
      buttonUrl: { 
        type: String,
      },
      btnStyle: {
        type: String,
      }
  },
  components: {
      PricingInformation,
      PricingAction
  }
}
</script> 


<style scoped>

#card {
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    color: rgba(46,46,46,0.70);
    margin-bottom: 2rem;
    align-self: center;
    display: flex;
    flex-direction: column;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    background: #ECEFF3;
}

#card:first-child, #card:last-child {
  margin-left: 0rem;
}

@media (min-width: 768px) {
#card {
  flex-direction: row;
  grid-template-columns: 75% 25%;
}
}



</style>
