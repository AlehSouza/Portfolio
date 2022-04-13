<template>
  <div id="bg">
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
            <a :href="midia.link" target="_blank" :alt="midias.alt"
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
          alt: "Github",
        },
        {
          link: "https://codepen.io/blezale/",
          icon: "fab fa-codepen",
          alt: "Codepen",
        },
        {
          link: "https://www.linkedin.com/in/alesouza2503/",
          icon: "fab fa-linkedin",
          alt: "Linkedin",
        },
        {
          link: "https://www.facebook.com/alexandre.henrique.16144/",
          icon: "fab fa-facebook",
          alt: "Facebook",
        },
        {
          link: "https://drive.google.com/file/d/1mYszTNF3Mcf-D47lN_GTQDFEYgbjElan/view",
          icon: "fas fa-file-code",
          alt: "Currículo",
        },
      ],
    };
  },
  methods: {
    backgroundScreen() {
      let lar = window.screen.width;
      var bg = document.getElementById("bg");

      if (lar >= 1920) {
        bg.style.backgroundImage = "url(https://i.imgur.com/SHQra8s.jpg)";
      } else {
        bg.style.backgroundImage = "url(https://i.imgur.com/wsGQsix.jpg)";
      }
    },
  },
  mounted() {
    this.backgroundScreen();
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
    width: 17px;
    height: 17px;
    color: black;
  }
}
#bg {
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
  padding: 70px;
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
  /* Profile pics */
  /* background-image: url("https://imgur.com/mF03d2W.png");
  background-image: url("https://imgur.com/VMUkrAO.png");
  background-image: url("https://imgur.com/exD19qU.png"); */
  background-image: url("https://imgur.com/dnXxKUk.png");
  background-color: #2e2b5e;
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
