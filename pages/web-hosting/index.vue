<template>
  <div id="web-hosting">
    <AppHero
      class=""
      :hasTint="hasTint">
      <h1>Web Hosting</h1>
      <p class="intro">100% SSD powered Web hosting backed up by a 60 day money back guarantee and 24/7/365 UK customer support.</p>
    </AppHero>

<section id="pricing" class="section alt-bg">
   <div class="wrap">
      <pricing-card :features="planOne" :title="titleOne" :price="priceOne" :description="descriptionOne" :buttonUrl="buttonUrlOne" :btnStyle="btnStyle"/>
      <pricing-card :features="planTwo" :title="titleTwo" :price="priceTwo" :description="descriptionTwo" :buttonUrl="buttonUrlOne" :btnStyle="btnStyle"/>
   </div>
</section>

  </div> 
</template>

<script>
import AppHero from "@/components/UI/AppHero";

import PricingCard from "@/components/General/PricingCard/PricingCard";
 
export default {
  head () {
    return {
      title: 'Scimitar - Unlimited Web Hosting',
      meta: [
        { hid: 'description', name: 'description', content: 'About our company Nuxt.js ' }
      ]
    }
  },
  data() {
    return { 
    titleOne: 'Personal Hosting',
    priceOne: '£6.99',
    descriptionOne: 'Basic web hosting plan, ideal for small personal projects that need a moderate amount of resources. Benefit from our NGINX platform to boost page loading speed by up to 50%',
    planOne: [
      { id: 1, item: '10GB SSD Storage' },
      { id: 2, item: '100GB Bandwidth'},
      { id: 3, item: '100GB Bandwidth'},
      { id: 4, item: 'Nginx Performance Boost'},
      { id: 5, item: 'Free SSL Certificates'},
      { id: 6, item: 'Free Daily Backups'},
      { id: 7, item: 'Free SSL Certificates'},
      { id: 8, item: 'Premium Website Builder'},
      { id: 9, item: 'Mailchannels & Spam Assasin'},
    ],
    buttonUrlTwo: '/billing/admin',
    titleTwo: 'Business Hosting',
    priceTwo: '£13.99',
    descriptionTwo: 'Completely unlimited web hosting, maximum amount of resources and daily backups included. Benefit from the full power of our industry leading servers as well as 100% UK technical support.',
     planTwo: [
      { id: 1, item: 'Unliimted SSD Storage' },
      { id: 2, item: 'Unlimited Bandwidth'},
      { id: 3, item: 'Nginx Performance Boost'},
      { id: 4, item: 'Unlimited Email Accounts'},
      { id: 5, item: 'Free SSL Certificates'},
      { id: 6, item: '99.9% Uptime Guarantee'},
      { id: 7, item: 'Free Daily Backups'},
      { id: 8, item: 'Premium Website Builder'},
      { id: 9, item: 'Mailchannels & Spam Assasin'}
    ],
    hasTint: true,
    buttonUrlOne: '/billing/admin',
    btnStyle: 'secondary'
    }
  },
  components: {
    AppHero,
    PricingCard
  }
};

</script>

<style scoped>
/* Product Hero */


#web-hosting #hero {
  box-sizing: border-box;
  background-image: url("~assets/images/home.jpg");
  background-position: center;
  background-size: cover;
}

@media (min-width: 768px) {

}
</style>
