<template>
<main>
    <div class="posts-page">
          <PostList :posts="loadedPosts" />

        

            </div>
 </main>
</template>
 
<script>
import PostList from '@/components/Posts/PostList'
import { mapGetters } from 'vuex';

export default {

  beforeMount () {
     const loadedPosts = this.$store.dispatch('post/GET_POSTS').then(resp => {
        return { loadedPosts }
      })
  },
  computed: {
      ...mapGetters({
        loadedPosts: 'post/LOAD_POSTS'
      })
    },
  components: {
    PostList
  }

};
</script>


<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
 