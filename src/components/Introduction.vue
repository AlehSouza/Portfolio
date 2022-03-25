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
          <span class="midia" v-for="(midia, j) in midias" :key="j">
            <a :href="midia.link" target="_blank"
              ><span :class="midia.icon"></span>
            </a>
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
export default {
  data() {
    return {
      midias: [
        {
          link: "https://github.com/AlehSouza",
          icon: "fab fa-github",
        },
        {
          link: "https://codepen.io/blezale/",
          icon: "fab fa-codepen",
        },
        {
          link: "https://www.linkedin.com/in/alesouza2503/",
          icon: "fab fa-linkedin",
        },
        {
          link: "https://www.facebook.com/alexandre.henrique.16144/",
          icon: "fab fa-facebook",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.cl-white {
  color: white;
}
.social {
  padding: 8px;
  justify-content: center;
  align-items: center;
  display: flex;
}
.midia {
  margin: 5px;
}
.midia a {
  padding: 10px;
  border: 1.5px solid black;
  border-radius: 50px;
  background-color: rgb(255, 255, 255);
  justify-content: space-around;
  align-items: center;
  display: flex;
  span {
    color: black;
  }
}
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
