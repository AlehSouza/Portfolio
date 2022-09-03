<template>
  <div id="bg">
    <!-- #TODO adicionar aba com themes -->
    <div class="container">
      <div class="profile" data-aos="fade-up" data-aos-delay="300">
        <div
          class="icon-profile"
          v-bind:style="{ backgroundImage: 'url(' + user.avatar_url + ')' }"
        ></div>
        <h1>{{ user.name }}</h1>
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
      <div class="bio" data-aos="fade-up" data-aos-delay="300">
        <h1>Enjoy!</h1>
        <p>
          {{ user.bio }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
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
          link: "https://drive.google.com/file/d/1ldxgJ3cPg0ulykUx79uN_vuB8T3VR-6r/view",
          icon: "fas fa-file-code",
          alt: "Currículo",
        },
      ],
      user: {},
    };
  },
  methods: {
    getUser(url) {
      axios({
        method: "get",
        url: url,
        responseType: "json",
      }).then((response) => {
        this.user = response.data;
      });
    },
    backgroundScreen() {
      let lar = window.screen.width;
      var bg = document.getElementById("bg");

      if (lar >= 1920) {
        bg.style.backgroundImage = "url(https://i.imgur.com/oqDcmWF.jpg)";
      } else {
        bg.style.backgroundImage = "url(https://i.imgur.com/DgvvpEB.jpg)";
      }
    },
  },
  beforeMount() {
    this.getUser("https://api.github.com/users/alehsouza");
  },
  mounted() {
    this.backgroundScreen();
  },
};
</script>

<style lang="scss" scoped>
@import url("../styles/styles.css");

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
  background-color: rgba(0, 0, 0, 0.76);
  justify-content: center;
  display: flex;
  color: white;
}
.profile {
  padding: 70px;
}
.bio {
  min-width: 250px;
  width: 38%;
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
  background-color: white;
  border: 8px solid white;
  background-size: cover;
  background-size: 100%;
  background-position: center;
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
    background-color: var(--cor-principal);
    border: 1px solid var(--cor-secundaria);
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
