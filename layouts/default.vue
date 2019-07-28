<template>
  <div class="skeleton">
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav"/>
    <TheSidenav
        :show="displaySidenav"
        @close="displaySidenav = false" />
        <main><nuxt/></main>
        <TheFooter/>
  </div>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader'
import TheSidenav from '@/components/Navigation/TheSidenav'
import TheFooter from '@/components/Navigation/Footer/TheFooter'
export default {
  middleware: 'log',
  components: {
    TheHeader,
    TheSidenav,
    TheFooter
  },
  data: () => ({
    displaySidenav: false
  }),
  mounted() {
    if (this.$store.state.user.isAuthenticated && !this.$store.state.user.user) {
      this.$store.commit('user/SET_USER', JSON.parse(localStorage.getItem("user")));
    }
  }
}

</script>

<style>


</style>
