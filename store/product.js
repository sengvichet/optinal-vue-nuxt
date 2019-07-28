export const getters = {
    LOAD_PRODUCTS: state => state.products,
    GET_SINGLE_PRODUCT: state => state.product
};

export const mutations = {
    SET_PRODUCTS: (state, products) => {
        state.products = products;
    },
    SET_SINGLE_PRODUCT: (state, product) => {
      // state.product = _.find(state.products, item => item.id === productId)
         state.product = product;
    },
    CLEAR_SINGLE_PRODUCT: (state) => {
        state.product = null;
    },
    ADD_PRODUCT: (state, newPost) => {
        state.posts.push(newPost);
    },
    UPDATE_PRODUCT: (state, updatedPost) => {
        _.remove(state.posts, item => item.id === updatedPost.id);
        state.posts.push(updatedPost);
    },
    REMOVE_PRODUCT: (state, deletedPost) => {
        _.remove(state.posts, item => item.id === deletedPost.id);
    }
};

export const actions = {
    async GET_PRODUCTS({ commit }) {
        try {
            const products = await this.$axios.$get('/_/items/products?fields=*,images.image_id.data,categories.category_id.*,thumbnail.data');
            commit('SET_PRODUCTS', products.data);
        } catch (error) {
            throw error;
        }
    },
    async GET_PRODUCT({
        commit
      },{ 
        productId 
      }) {
        try {
          commit('CLEAR_SINGLE_PRODUCT'); // Otherwise old data is displayed until the request is fulfilled
          const product = await this.$axios.$get(`/_/items/products/${productId}?fields=*,images.image_id.data,categories.category_id.*,thumbnail.data`);
          commit('SET_SINGLE_PRODUCT', product.data);
        } catch (error) {
          throw error;   
        }
      },
    async CREATE_PRODUCT({ commit }, product) {
        try {
            const newProductt = await this.$axios.$post('/_/items/products', {
              ...product,
              updatedDate: new Date()
            });
            commit('ADD_PRODUCT', newProduct);
        } catch (error) {
            throw error;
        }
    },
    async EDIT_PRODUCT({ commit }, post) {
        try {
            const updatedPost = await this.$axios.$put(`/products/${ post.id }`, {
                ...post,
                updatedDate: new Date()
            });
            commit('UPDATE_POST', updatedPost);
        } catch (error) {
            throw error;
        }
    },
    async DELETE_PRODUCT({ commit }, post) {
        try {
            const deletedPost = await this.$axios.$delete(`/products/${post.id}`);
            commit('REMOVE_POST', deletedPost);
        } catch (error) {
            throw error;
        }
    }
};

export const state = () => ({
    product: null,
    products: null
});