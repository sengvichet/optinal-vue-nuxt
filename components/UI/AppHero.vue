<template>
  <section
    :class="[{ 'title-hero' : titleHero }, { 'product-hero' : productHero }]"
    :id="defId">
    <div  :class="{'tint': hasTint == true}">
    <div  :class="['wrap', ]">
        <slot />
    </div>
    </div>
    </section>
</template>

<script>
export default {
  name: 'AppHero',
  props: { 
    pageClass: {
      type: String,
      default: ''
    },
    defId: {
        type: String,
        default: 'hero'
    },
    hasTint: {
      type: Boolean,
    },
    titleHero: {
      type: Boolean,
    },
    productHero: {
      type: Boolean,
    }
  }
}
</script>


<style scoped>
#hero {
  font: inherit;
  color: white;
  position: relative;
  z-index: 10;
  text-shadow: 0 1px 2px rgba(0,0,0,0.2),0 5px 10px rgba(0,0,0,0.2);
}

.wrap {
  padding: 2rem 0
}

#hero .tint {
    background: radial-gradient(ellipse at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.55) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#40000000', endColorstr='#a6000000',GradientType=1 );
    background-size: cover;
    background-position: center;
}

#hero h1 {
    font-size: 2rem;
    color: #f0f1f2;
}

#hero .intro {
    font-size: 1.2rem;
    color:#fff;
    line-height: 1.6;
}

#hero.title-hero   {
  box-sizing: border-box;
  background-image: url("~assets/images/svg/grad.svg");
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  text-shadow: none;
}

#hero.title-hero h1 {
  margin-bottom: 0;
}


@media (min-width: 768px) {
  .wrap {
    padding: 5rem 0;
  }
  #hero h1 {
    font-size: 3rem;
    margin-bottom:1rem;
    margin-top: 0;
  }
  #hero .intro {
    font-size: 1.6rem;
    margin-top: 0;
    line-height: 40px;
     width: 60%;
}

#hero.title-hero .wrap  {
  padding: 2rem 0;
}
#hero.title-hero h1 {
  font-size: 2rem;
}

#hero.title-hero p {
  opacity: 0.8;
  font-size: 1.2rem;
  margin: 0;
}
#hero.title-hero h1 {
  font-size: 2rem;
  margin-bottom: 0;
}

}



</style>
