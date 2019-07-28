<template>
  <div id="wordpress-hosting">
         <AppHero
      class=""
      :hasTint="hasTint">
      <h1>WordPress Hosting</h1>
      <p class="intro">Our WordPress platform sits behind a fully custom pre-configured NGINX cache system, speeding up page loading for users.</p>
      <AppButton
      @click.native="$router.push('/products')"
      >Learn More</AppButton>
      </AppHero>
  </div>
</template>

<script>
import AppHero from "@/components/UI/AppHero";
export default {
  head () {
    return {
      title: 'Scimitar - WordPress Hosting, Cpanel, Nginx Stack, Unlimited Resources',
      meta: [
        { hid: 'description', name: 'description', content: 'About our company Nuxt.js ' }
      ]
    }
  },
data() {
    return { 
    hasTint: true
    }
  },
  components: {
    AppHero,
  }
};

</script>

<style scoped>
#wordpress-hosting #hero {
  box-sizing: border-box;
  background-image: url("~assets/images/wordpress-header.png");
  background-position: center;
  background-size: cover;
}
</style>
