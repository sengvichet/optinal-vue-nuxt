<template>
  <div class="skeleton">
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav"/>
    <TheSidenav
        :show="displaySidenav"
        @close="displaySidenav = false" />
    <nuxt/>
  </div>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader'
import TheSidenav from '@/components/Navigation/TheSidenav'

export default {
  middleware: [ 'notAuth' ],
  components: {
    TheHeader,
    TheSidenav
  },
  data: () => ({
      displaySidenav: false
  }),
  mounted() {
    if (this.$store.state.user.isAuthenticated) {
      if (!this.$store.state.user.user) {
        this.$store.commit('user/SET_USER', JSON.parse(localStorage.getItem("user")));
      }      
      this.$axios.setHeader("Authorization", `Bearer ${this.$store.state.user.token}`);
    }
  }
}

</script>

<style>


</style>
