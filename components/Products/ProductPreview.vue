<template>
  <nuxt-link :to="productLink" class="product">
    <article>
        <div class="thumbnail">
        <img 
          :src="thumbnail" />
          </div>                   
      <div class="content">
        <h1>{{ name }}</h1>
          <p>{{ shortDescription }}</p>
          <div class="tags">
          <span class="tag" v-for="(tag, index) in tags" :key="index">
                {{ tag }}</span>
          </div>
            <div class="meta">
          <div class="button-wrap">    
        <AppButton
          class="button"
        >Learn More</AppButton>
        <AppButton
          class="button hollow"
        >Live Demo</AppButton>
        </div>

      <p class="price">£{{price}}</p>

        </div>

      </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  name: 'ProductPreview',
  props: {
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        shortDescription: {
            type: String,
            required: true
        },
        tags: {
            type: Array,
            required: true
        },
        thumbnail: {
            type: String
        },
        price: {
          Type: String
        },
        slug: {
          Type: String
        }
  },
  computed: {
    productLink() {
      return this.isAdmin ? '/products/' + this.id : '/products/' + this.id
    }
  }
}
</script> 

<style scoped>

article {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
}

.product {
width: 100%;
background: white;
display: flex;
cursor: pointer;
text-decoration: none;
box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
-webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
transform: translate3d(0,0,0);
-webkit-transform: translate3d(0,0,0);
-webkit-transition: 0.3s;
transition: 0.3s;
-webkit-user-select: none;
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
color: rgba(94, 98, 109, 1);
}

a {
  text-decoration: none;
  border-bottom: 0;
}

h1 {
  font-size: 1.5rem;
  margin: 0;
  margin-top: 2rem;
}

.thumbnail img {
  width: 100%;
}

.content {
  padding-left: 0;
  position: relative;
}

a:hover .content,
a:active .content {
}

.tags {
  margin-top: 2rem;
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

.price {
margin: 0rem;
font-weight: 700;
padding: 12px 20px;
font-size: 1.1rem;
}

.meta {
  border-top: 1px solid #F0F0F0;
  padding-top: 2rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
}

@media (min-width: 850px) {
.product  {
  width: 100%;
}
h1 {
  font-size: 2rem;
  margin: 0;
}

article {
  display: flex;
  flex-direction: row;
  padding: 3rem;
}

.thumbnail {
  min-height: 450px;
  max-height: 450px;
}


.thumbnail img {
  min-width: 600px;
  max-height: 100%;
  object-fit: cover;
  object-position: top;
}

.content {
  padding-left: 2rem;
  text-align: left;
  width: 100%;
}

.meta {
  position: absolute;
  width: 95%;
  bottom: 0;
}

.tag {
    font-size: 18px;
}
}




</style>
