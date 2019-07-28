<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AppButton
            type="button"
            style="margin-left: 10px"
            btn-style="cancel"
            @click.prevent="deletePost(loadedPost)">Delete Post</AppButton>
            <AdminPostForm :post="loadedPost" @submit="editPost" />
        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AdminPostForm from "@/components/Admin/AdminPostForm";
export default {
    layout: "admin",
    components: {
        AdminPostForm
    },
    fetch({ store, params }) {
        store.commit('post/SET_SINGLE_POST', params.id);
    },
    computed: {
        ...mapGetters({
            loadedPost: 'post/GET_SINGLE_POST'
        })
    },
    methods: {
        async editPost(postData) {
            try {
                await this.$store.dispatch('post/EDIT_POST', postData);
                this.$router.push({
                    name: 'admin-dashboard'
                });
            } catch (error) {
                throw error;
            }
        },
        async deletePost(postData) {
            try {
                await this.$store.dispatch('post/DELETE_POST', postData);
                this.$router.push({
                    name: 'admin-dashboard'
                });
            } catch (error) {
                throw error;
            }
        }
    }
};
</script>
