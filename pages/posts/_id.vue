<template>
<main>
    <div class="posts-page">
          <Post 
            :id="loadedPost ? loadedPost.id : null"
            :thumbnail="loadedPost ? loadedPost.thumbnail : null"
            :name="loadedPost ? loadedPost.name : null"
            :content="loadedPost ? loadedPost.content : null"
            :shortDescription="loadedPost ? loadedPost.short_description : null"
          />
    </div>
 </main>
</template>
 
<script>
import Post from '@/components/Posts/Post'
import { mapGetters } from 'vuex';

export default {

  beforeMount () {
     const loadedPost = this.$store.dispatch('post/GET_POST', { postId: this.$route.params.id }).then(resp => {
        return { loadedPost }
      })
  },
  computed: {
      ...mapGetters({
        loadedPost: 'post/GET_SINGLE_POST'
      })
    },
  components: {
    Post
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
 