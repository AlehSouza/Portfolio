<template>
  <div class="container-about">
    <div class="box left-about">
      <h1>About me</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum."
      </p>
    </div>
    <div class="box right-about"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container-about {
  padding-top: 50px;
  justify-content: center;
  align-items: center;
  display: flex;
}
.box {
  width: 30vw;
  height: 500px;
}
.left-about {
  text-align: left;
}
.right-about {
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  background-image: url("../assets/aboutimg.png");
}
@media screen and (max-width: 1350px) {
  .container-about {
    flex-direction: column;
  }
  .box {
    width: 60vw;
    height: auto;
    margin-bottom: 5%;
  }
  .box:nth-child(2) {
    height: 200px;
  }
}
</style>
