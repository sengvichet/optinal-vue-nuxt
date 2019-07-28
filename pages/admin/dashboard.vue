<template>
    <div class="admin-page">
        <section class="new-post">
            <AppButton @click="$router.push({
                name: 'admin-post-new'
            })">Create Post</AppButton>
        </section>
        <section class="existing-posts">
            <h1>Existing Posts</h1>
            <PostList
                isAdmin
                :posts="loadedPosts" />
        </section>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        layout: 'admin',
        computed: {
            ...mapGetters({
                loadedPosts: 'post/LOAD_POSTS'
            })
        }
    };
</script>