export const mutations = {};

export const actions = {
  async nuxtServerInit({ commit, dispatch }, { req }) {
    try {
    await dispatch('product/GET_PRODUCTS');

      if (req.headers.cookie) {
        const jwtCookieToken = req.headers.cookie
          .split(";")
          .find(c => c.trim().startsWith("token="));
          
        if (jwtCookieToken) {
          const token = jwtCookieToken.split("=")[1];
          commit("user/SET_TOKEN", token);
          return true;
        }
      }
      return false;
    } catch (e) {
      throw e;
    }
  }
};

export const state = () => ({});
