export const getters = {
  LOAD_POSTS: state => state.posts,
  GET_SINGLE_POST: state => state.post
};

export const mutations = {
  SET_POSTS: (state, posts) => {
    state.posts = posts;
  },
  SET_SINGLE_POST: (state, post) => {
   // state.post = _.find(state.posts, item => item.id === postId)
   state.post = post;
  },
  CLEAR_SINGLE_POST: (state) => {
    state.post = null;
  },
  ADD_POST: (state, newPost) => {
    state.posts.push(newPost);
  },
  UPDATE_POST: (state, updatedPost) => {
    _.remove(state.posts, item => item.id === updatedPost.id);
    state.posts.push(updatedPost);
  },
  REMOVE_POST: (state, deletedPost) => {
    _.remove(state.posts, item => item.id === deletedPost.id);
  }
};

export const actions = {
  async GET_POSTS({
    commit
  }) {
    try {
      const posts = await this.$axios.$get('/_/items/posts');
      commit('SET_POSTS', posts.data);
    } catch (error) {
      throw error;
    }
  },
async GET_POST({
    commit
  },{ 
    postId 
  }) {
    try {
      commit('CLEAR_SINGLE_POST'); // Otherwise old data is displayed until the request is fulfilled
      const post = await this.$axios.$get(`/_/items/posts/${postId}`);
      commit('SET_SINGLE_POST', post.data);
    } catch (error) {
      throw error;
    }
  },
  async EDIT_POST({
    commit
  }, post) {
    try {
      const updatedPost = await this.$axios.$put(`/_/items/posts/${ post.id }`, {
        ...post,
        updatedDate: new Date()
      });
      commit('UPDATE_POST', updatedPost);
    } catch (error) {
      throw error;
    }
  },
  async DELETE_POST({
    commit
  }, post) {
    try {
      const deletedPost = await this.$axios.$delete(`/_/items/posts/${post.id}`);
      commit('REMOVE_POST', deletedPost);
    } catch (error) {
      throw error;
    }
  }
};

export const state = () => ({
  posts: null,
  post: null
});
