<template>
    <article>
        <section class="section alt-bg">
           <div class="wrap">
              <div class="content">
                <div class="left">
                      <h1> {{ name }} </h1>
                    <carousel-wrapper :images="images" />
                    <p v-html="description">  </p>
              </div>

<div class="sidebar">
  <div class="box">
    <div class="head">
      <p class="license">Single Website</p>
        <p class="price">£{{price}}</p>
      </div>
    <AppButtonLink :buttonUrl="buttonUrl"> Purchase Product</AppButtonLink>
  <h3>Tags</h3>
     <div class="tags">
          <span class="tag" v-for="(tag, index) in tags" :key="index">
                {{ tag }}</span>
          </div>
</div>
</div>

        </div>
 </div>
      
    </section>

<feature-wrapper :features="features"> Product Features </feature-wrapper>

<image-grid :images="images"> Product Images </image-grid>

    </article>
  
</template>

<script>
import AppHero from "@/components/UI/AppHero";
import FeatureWrapper from '@/components/General/FeatureList/FeatureWrapper';
import ImageGrid from '@/components/General/ImageGrid/ImageGrid';
import CarouselWrapper from '@/components/General/ImageCarousel/CarouselWrapper';

import AppButtonLink from "@/components/UI/AppButtonLink";

export default {
  data () {
      return {
        hasTint: true,
      }
  },
  name: 'Product',
  props: {
        id: {
            required: true,
            validator: prop => typeof prop === 'number' || prop === null
        },
        name: {
            required: true,
            validator: prop => typeof prop === 'string' || prop === null
        },
        description: {
            required: true,
            validator: prop => typeof prop === 'string' || prop === null
        },
        shortDescription: {
            required: true,
            validator: prop => typeof prop === 'string' || prop === null
        },
        thumbnail: {
            required: true,
            validator: prop => typeof prop === 'string' || prop === null
        },
        tags: {
          type: Array
        },
        features: {
          type: Array
        },
        categories: {
          type: Array
        },
        price: {
          type: Number
        },
        images: {
          type: Array
        },
        buttonUrl: {
          type: Array,
        }
  },
  components: {
    AppHero,
    AppButtonLink,
    FeatureWrapper,
    ImageGrid,
    CarouselWrapper
  }
}
</script> 

<style scoped>
.single-product {
  box-sizing: border-box;
  background-image: url("~assets/images/svg/grad.svg");
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  text-shadow: none;
}




.content {
    display: flex;
    flex-direction: row;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 3%;
    width: 100%;
}

.left {
  width: 100%;
  flex-basis: 100%;
  margin-bottom: 1rem;
  order: 2;
}

.left h1 {
  font-size: 2rem;
  margin-top: 0;
}

.thumbnail {
  max-width: 50%;
}

.sidebar {
  width: 100%;
  flex-basis: 100%;
  padding-left: 0;
  order: 1;
}

.sidebar .head {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.sidebar .head p {
  margin: 0;
  line-height: 1;
}

.sidebar .license {
  font-size: 1.2rem;
  display: flex;
  align-items: center;
}

.sidebar .price {
  font-size:2rem;
  font-weight: 700;
  color: #2E2E2E;
  display: flex;
  align-items: center;
}

.sidebar .button{
  display: flex;
  justify-content: center;
}

a {
  text-decoration: none;
  color: black;
}

.box {
padding: 2rem;
background: white;
display: flex;
flex-direction: column;
text-decoration: none;
box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
-webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
transform: translate3d(0,0,0);
-webkit-transform: translate3d(0,0,0);
transition: 0.3s;
-webkit-user-select: none;
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
color: rgba(94, 98, 109, 1);
}

.tags {
  margin-top: 0;
}

.tag {
    font-size: 14px;
    background-color: rgba(166,232,195,0.2);
    color: rgba(0, 115, 86, 0.75);
    border: 1px solid transparent;
    border-radius: 50px;
    margin-bottom: 10px;
    margin-right: 10px;
    padding: 7px 20px 7px;;
    display: inline-block;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-transition: 0.15s;
    transition: 0.15s;
    text-transform: capitalize;
}


@media (min-width: 850px) {
 .content {
  display: flex;
  flex-direction: row;
  display: Grid;
  grid-template-columns: 70% 25%;
  grid-gap: 5%;
 }
.left {
  margin-bottom: 0;
  order: 1;
}

.sidebar {
  order: 2;
}

#features ul li {
  flex-basis: 30%;
  padding-right: 3%;
  width: 30%;
  padding-bottom: 2rem;
}


}


</style>
