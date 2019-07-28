<template>
<div class="header-container">
  <header class="the-header">
    <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
    <div class="logo">
      <nuxt-link to="/">Scimitar.io</nuxt-link>
    </div>
    <div class="spacer"></div>
    <div class="navigation-items">
      <ul class="nav-list">
         <li class="nav-item">
          <router-link :to="{
            name: 'you-build'
          }">You Build</router-link>
        </li>
          <li class="nav-item">
          <router-link :to="{
            name: 'we-build'
          }">We Build</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{
            name: 'products'
          }">Products</router-link>
        </li>
         <li class="nav-item">
          <router-link :to="{
            name: 'web-hosting'
          }">Web Hosting</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{
            name: 'reseller-hosting'
          }">Reseller Hosting</router-link>
        </li>
        <!-- <li class="nav-item">
          <router-link :to="{
            name: 'admin'
          }" >Admin</router-link>
        </li> -->
        <!-- <li class="nav-item" v-show="$store.getters.isAuthenticated"><AppButton @click="onLogout">Logout</AppButton></li>  -->
      </ul>
    </div>
  </header>
</div>
</template>

<script>
import TheSideNavToggle from "@/components/Navigation/TheSideNavToggle";

export default {
  name: "TheHeader",
  components: {
    TheSideNavToggle
  },
  methods: {
     onLogout() {
      this.$store.dispatch('logout')
      this.$router.push('/admin/auth')
    }
  }
};
</script>


<style scoped>
.header-container {
  height: 60px;
}

.the-header {
  width: 100%;
  position: fixed;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  z-index: 100;
  box-sizing: border-box;
  padding: 0 20px;
  letter-spacing: 0.4px;
}

.the-header .menu-item {
  color: rgba(46, 46, 46, 1);
}

.logo {
  margin: 0 10px;
  font-size: 1.3rem;
}

.logo a {
  text-decoration: none;
  color: rgba(46, 46, 46, 1);
}

.spacer {
  flex: 1;
}

.navigation-items {
  display: none;
}

@media (min-width: 768px) {
  .navigation-items {
    display: block;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav-item {
  margin: 0 20px;
}

.nav-item a {
  text-decoration: none;
  color: rgba(46, 46, 46, 1);
  font-size: 1.1rem;
  font-weight: 700;
  font-style: normal;
  border-bottom: 0;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: #1DB58E;
  background: none;
}
</style>
