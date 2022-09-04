<template>
  <div class="home">
    <div class="translate-options">
      <button @click="changeLang('pt_br')">PT-BR</button>|
      <button @click="changeLang('eng')">ENG</button>
    </div>
    <Introduction :lang="lang" :texts="translations" />
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

export default {
  name: "Home",
  components: {
    Introduction,
    Trajectory,
    LineBreak,
    About,
    ProjectsContainer,
    TechnologiesContainer,
    Footer,
  },
  data() {
    return {
      lang: "pt_br",
      translations,
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
</style>
