<template>
  <div class="home">
    <div class="translate-options" data-aos="fade-up" data-aos-delay="300">
      <button @click="changeLang('pt_br')">PT-BR</button>|
      <button @click="changeLang('eng')">ENG</button>
    </div>
    <Introduction :lang="lang" :texts="translations" :midias="midias" />
    <LineBreak data-aos="fade-up" data-aos-delay="300" />
    <About
      :lang="lang"
      :texts="translations"
      data-aos="fade-up"
      data-aos-delay="300"
    />
    <LineBreak data-aos="fade-up" data-aos-delay="300" />
    <Trajectory
      :lang="lang"
      :texts="translations"
      data-aos="fade-up"
      data-aos-delay="300"
    />
    <LineBreak data-aos="fade-up" data-aos-delay="300" />
    <TechnologiesContainer
      :lang="lang"
      :texts="translations"
      data-aos="fade-up"
      data-aos-delay="300"
    />
    <LineBreak class="LineBreak" data-aos="fade-up" data-aos-delay="300" />
    <ProjectsContainer
      :lang="lang"
      :texts="translations"
      data-aos="fade-up"
      data-aos-delay="300"
    />
    <SendMail
      :lang="lang"
      :texts="translations"
      :midias="midias"
      data-aos="fade-up"
      data-aos-delay="300"
    />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Introduction from "@/components/Introduction.vue";
import ProjectsContainer from "@/components/ProjectsContainer.vue";
import Footer from "../shared/Footer.vue";
import Trajectory from "@/components/Trajectory.vue";
import About from "@/components/About.vue";
import LineBreak from "../shared/LineBreak.vue";
import TechnologiesContainer from "../components/TechnologiesContainer.vue";
import translations from "../utils/translate";
import SendMail from "../components/SendMail.vue";

export default {
  name: "Home",
  components: {
    Introduction,
    Trajectory,
    LineBreak,
    About,
    ProjectsContainer,
    TechnologiesContainer,
    SendMail,
    Footer,
  },
  data() {
    return {
      lang: "pt_br",
      translations,
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
    };
  },
  methods: {
    changeLang(lang) {
      this.lang = lang;
    },
  },
};
</script>

<style lang="scss" scoped>
.translate-options {
  position: absolute;
  right: 55px;
  color: white;
  button {
    font-size: 12px;
    border: 0px;
    background-color: transparent;
    color: white;
    cursor: pointer;
  }
}
@media screen and (max-width: 600px) {
  .translate-options {
    z-index: 1;
    padding: 8px;
    right: 5px;
  }
}
</style>
