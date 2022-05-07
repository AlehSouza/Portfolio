<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">Currículo</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import url("../styles/styles.css");

#nav {
  top: 0px;
  left: 0px;
  justify-content: center;
  flex-direction: row;
  display: flex;
  padding: 20px;
  a {
    font-weight: bold;
    color: #2c3e50;
    font-size: 16px;
    text-decoration: none;
    margin: 0px 20px;
    &.router-link-exact-active {
      color: var(--cor-principal);
    }
  }
}
</style>
