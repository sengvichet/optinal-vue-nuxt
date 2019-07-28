<template>
  <div class="home-page">
      <AppHero
      class="homepage"
      :hasTint="hasTint"
      >
      <h1>Scimitar.io</h1>
      <p class="intro">Premium WHMCS themes, custom  web design services and business class web hosting with auto scaling</p>
      <AppButton
      @click.native="$router.push('/products')"
      >Learn More</AppButton>
      </AppHero>


        <section class="section products">
            <div class="wrap fd-column"> 
              <ProductList :products="loadedProducts" /> 
            </div>
        </section>

      <HorizontalWrap :features="features" :featureTitle="featureTitle"/>

      <HorizontalWrap :features="featuresTwo" :featureTitle="featureTitleTwo" class="alt-bg"/>



 
  

  </div>
</template>

<script>
import ProductList from '@/components/Products/ProductList';
import AppHero from "@/components/UI/AppHero";
import HorizontalWrap from "@/components/General/HorizontalFeatures/HorizontalWrap";
import { mapGetters } from 'vuex';


export default {
  head () {
    return {
      title: 'Scimitar.io - Web Design, Web Hosting and Themes',
      meta: [
        { hid: 'description', name: 'description', content: 'About our company Nuxt.js ' }
      ]
    }
  },
data() {
    return { 
    featureTitle: 'Web Design Services',
    features: [
      { id: 1, 
        title: 'We Build Your Website', 
        image: 'https://s3.amazonaws.com/leadlance/uploads/trremovals.png', 
        description: 'For £59.99 a month we will design, build, host and manage the technical aspects of your website. Take all the stress out of running a website for your business or personal with our 24 hour UK customer support and technical assistance.',
        buttonUrl: 'we-build' },
      { id: 2, 
        title: 'You Build Your Website', 
        image: 'https://s3.amazonaws.com/leadlance/uploads/escape-accounting.png', 
        description: 'For £13.99 a month, you can have access to our award winning website builder packed full of features such as contact forms, galleries and more. Benefit you will have unlimited @yourdomain.com email addresss and malware scanning.' ,
        buttonUrl: 'you-build' }
    ],
    featureTitleTwo: 'PCI-Compliant Web Hosting',
    featuresTwo: [
      { id: 1, 
        title: 'Cloud Web Hosting', 
        image: 'https://s3.amazonaws.com/leadlance/uploads/controlpanel.png', 
        description: 'Fully PCI-compliant business class cloud web hosting based on industry leading hardware and 24/7 UK based customer support, for a fraction of the price. All plans include unlimited SSD diskspace, bandwidth and email accounts. ' },
      { id: 2, 
        title: 'WordPress Hosting', 
        image: 'https://s3.amazonaws.com/leadlance/uploads/wphosting.png', 
        description: 'Our WordPress platform sits behind a fully custom pre-configured NGINX cache system, speeding up page loading for users. Additionally, benefit from unlimited bandwidth, unlimited SSD disk space and rocksolid database hosting.' },
    ],
    pageClass: 'alt-bg',
    hasTint: true
    }
  },
  computed: {
    ...mapGetters({
      loadedProducts: 'product/LOAD_PRODUCTS'
    }),
    hasTint: true
  },
  components: {
    AppHero,
    HorizontalWrap,
    ProductList
  },
};
</script>
 
<style scoped>
.homepage {
  box-sizing: border-box;
  background-image: url("~assets/images/home.jpg");
  background-position: top;
  background-size: cover;
}

.products {
  background: #F7F7F7;
}

@media (min-width: 768px) {
.wrap {
 display:flex;
}
}


.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
