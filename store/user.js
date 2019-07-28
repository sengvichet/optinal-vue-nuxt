import Cookie from "js-cookie";

export const getters = {
  isAuthenticated: state => {
    if (state.user) {
      return true;
    }
    return false;
  }
};

export const mutations = {
  SET_USER: (state, data, token) => {
    state.user = data.token;
    state.token = data.token;
  },
  UNSET_USER: state => {
    state.user = null;
    state.isAuthenticated = false;
    state.token = null;
    localStorage.removeItem('user');
  },
  SET_TOKEN: (state, data, token) => {
    state.token = data;
    state.isAuthenticated = true;
  },
  SET_DIRECTION: (state, direction) => {
    state.direction = direction;
  }
};

export const actions = {
  async USER_AUTHENTICATE({ commit }, cred) {
    try {
      let authUrl = '/_/auth/authenticate';

      if (!cred.isLogin) {
        authUrl = `${authUrl}/authenticate`;
      }
      const { user, data } = await this.$axios.$post(authUrl, {
        ...cred
      });
      localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("token", JSON.stringify(data));
      Cookie.set("token", data);
      commit("SET_TOKEN", data);
      commit("SET_USER", data.token);
          // Set Authorization token for all axios requests
      this.$axios.setToken('token', data)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error("Wrong credentials");
      }
      if (error.response && error.response.status === 409) {
        throw new Error("Username or Email already exists");
      }
      throw error;
    }
  },
  logout({ commit }) {
    Cookie.remove("token");
    commit("UNSET_USER");
    this.$router.push({
      name: "admin"
    });
  }
};

export const state = () => ({
  user: null,
  isAuthenticated: false,
  token: null
});
