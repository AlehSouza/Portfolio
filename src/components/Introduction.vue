<template>
  <div class="bg">
    <div class="container">
      <div class="profile">
        <div class="icon-profile"></div>
        <h1>Alexandre Souza</h1>
        <div>
          <div class="titles">
            <span>Front-end Dev</span>
            <span>Quality Assurance</span>
            <span>Free lancer</span>
          </div>
        </div>
        <div class="social">
          <span>
            <a href="">A</a>
          </span>
          <span>
            <a href="">B</a>
          </span>
          <span>
            <a href="">C</a>
          </span>
          <span>
            <a href="">D</a>
          </span>
        </div>
      </div>
      <div class="bio">
        <h1>Enjoy!</h1>
        <p>
          Olá seja bem-vindo ao meu portfólio <br />
          confira agora a minha trajetória acadêmica e profissional.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.bg {
  background-image: url("./../assets/bg.jpg");
  background-position: center;
  background-size: cover;
}
.container {
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  display: flex;
  color: white;
}
.profile {
  padding: 50px;
}
.bio {
  min-width: 250px;
  width: 44%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  p {
    max-width: 400px;
    font-size: 18px;
  }
}
.icon-profile {
  width: 250px;
  height: 250px;
  background-image: url("https://avatars.githubusercontent.com/u/43255955?v=4");
  border: 8px solid white;
  background-size: cover;
  border-radius: 50%;
  margin: 0 auto;
}
h1 {
  font-size: 38px;
  font-weight: 600;
  margin: 10px;
}
b a {
  color: black;
}
.titles {
  width: 400px;
  font-size: 14px;
  margin: 20px auto;
  justify-content: space-around;
  display: flex;
  span {
    padding: 5px 10px;
    margin: 0.5%;
    border-radius: 50px;
    color: #ffffff;
    background-color: #e721a5;
    border: 1px solid #a3036e;
    /* &:nth-child(1) {
      color: rgb(255, 255, 255);
      background-color: rgb(52, 170, 62);
      border: 1px solid rgb(11, 126, 21);
    }
    &:nth-child(2) {
      color: rgb(255, 255, 255);
      background-color: #dd7f14;
      border: 1px solid #c76c03;
    }
    &:nth-child(3) {
      color: rgb(255, 255, 255);
      background-color: rgb(0, 123, 255);
      border: 1px solid rgb(0, 105, 217);
    } */
  }
}

@media screen and (max-width: 1200px) {
  .container {
    min-height: 100vh;
    padding-bottom: 50px;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .icon-profile {
    margin: 25px auto;
  }
  .bio {
    width: 90%;
    padding: 8px;
    flex-direction: column;
  }
  .profile {
    width: 90%;
    padding: 8px;
    h1 {
      padding: 15px 0px;
    }
  }
  .titles {
    width: auto;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 8px auto;
    span {
      margin: 2px;
    }
  }
}
</style>
