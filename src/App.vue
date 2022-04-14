<template>
  <div id="app">
    <!-- <NavBar /> -->
    <router-view />
  </div>
</template>

<script>
import "material-icons/iconfont/material-icons.css";
// import NavBar from "@/shared/NavBar.vue";

export default {
  components: {
    // NavBar,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}
@media screen and (max-width: 400px) {
  h1 {
    font-size: 26px;
  }
}
</style>
