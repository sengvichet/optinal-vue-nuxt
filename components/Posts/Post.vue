<template>
    <article>
      <nuxt-link :to="{ path: '/posts' }" class="post-preview">
        Posts
      </nuxt-link>
      <div
        class="post-thumbnail"
        :style="{backgroundImage: 'url(' + thumbnail + ')'}"></div>
      <div class="post-content">
        <h1>{{ name }}</h1>
        <p>{{ content }}  </p>
      </div>
    </article>
  
</template>

<script>
export default {
  name: 'Post',
  props: {
        id: {
            required: true,
            validator: prop => typeof prop === 'number' || prop === null
        },
        name: {
            required: true,
            validator: prop => typeof prop === 'string' || prop === null
        },
        content: {
            required: true,
            validator: prop => typeof prop === 'string' || prop === null
        },
        shortDescription: {
            required: true,
            validator: prop => typeof prop === 'string' || prop === null
        },
        thumbnail: {
            required: true,
            validator: prop => typeof prop === 'number' || prop === null
        }
  }
}
</script> 

<style scoped>
.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 10px; 
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}
</style>
