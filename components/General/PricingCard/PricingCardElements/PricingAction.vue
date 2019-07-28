<template>
   <div class="action">
      <p class="starting">Starting From:</p>
        <p class="price">{{price}}</p>
          <p class="monthly">/Monthly</p>
            <AppButtonLink :buttonUrl="buttonUrl" :btnStyle="btnStyle"> Get Started </AppButtonLink>
    </div>
</template>


<script>
import AppButtonLink from "@/components/UI/AppButtonLink";

export default {
  name: 'PricingAction',
  props: {  
      price: {
        type: String,
      },
      btnStyle: {
        type: String,
        },
      buttonUrl: {
        type: String 
      }
},
  components: {
      AppButtonLink
  }
}
</script>






<style scoped>
.action {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  padding: 2rem;

}

.action .starting {
  font-size: 20px;
  margin-bottom: .5rem;
  margin-top: 0;
}

.action .price {
  font-size: 2.5rem;
  color: #1DB58E;
  margin: 0;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 0rem;
}

.action .monthly {
  text-transform: uppercase;
  letter-spacing: 0.6px;
  font-weight: 700;
  margin-bottom: 1rem;
  font-size: 17px;
  margin-top: 0;
  opacity: .7;
}

.action .button-wrap {
  display: flex;
  justify-content: center;
}

.action .button {
  background-color: rgb(234, 156, 81);
  border-color: rgb(234, 156, 81);
}


@media (min-width: 768px) {
.action {
  padding: 3rem 2rem 3rem 2rem;
}
}

</style>