<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit="createPost" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm";

export default {
  layout: "admin",
  components: {
    AdminPostForm
  },
  methods: {
    async createPost(postData) {
        try {
            await this.$store.dispatch('post/CREATE_POST', postData);
            this.$router.push({
                name: 'admin-dashboard'
            });
            this.loading = false;
        } catch (error) {
            throw error;
        }
    },
  }
  
};
</script>

<style scoped> 
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>