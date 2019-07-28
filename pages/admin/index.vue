<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form @submit.prevent="authorize">
        <AppControlInput type="email" v-model="email"  v-show="!isLogin">E-Mail Address</AppControlInput>
         <AppControlInput type="email" v-model="email" v-show="isLogin">E-Mail Address</AppControlInput>
        <AppControlInput type="password" v-model="password">Password</AppControlInput>
        <AppButton type="submit">{{ isLogin ? 'Login' : 'Sign Up' }}</AppButton>
        <AppButton
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="isLogin = !isLogin">Switch to {{ isLogin ? 'Signup' : 'Login' }}</AppButton>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['auth'],
  data: () => ({
      isLogin: true,
      email: "",
      password: "",
      loading: false
  }),
  methods: {
    async authorize() {
        try {
            await this.$store.dispatch('user/USER_AUTHENTICATE', {
                isLogin: this.isLogin,
                email: this.email,
                password: this.password
            });
            this.$router.push({
                name: 'admin-dashboard'
            });
        } catch (error) {
            console.log(error);
        }
    }
  }
};
</script>

<style scoped>
.admin-auth-page {
  padding: 20px;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 350px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}
</style>