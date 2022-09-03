<template>
  <div class="home">
    <Introduction />
    <LineBreak data-aos="fade-up" data-aos-delay="300" />
    <About data-aos="fade-up" data-aos-delay="300" />
    <LineBreak data-aos="fade-up" data-aos-delay="300" />
    <Trajectory data-aos="fade-up" data-aos-delay="300" />
    <LineBreak data-aos="fade-up" data-aos-delay="300" />
    <TechnologiesContainer data-aos="fade-up" data-aos-delay="300" />
    <LineBreak class="LineBreak" data-aos="fade-up" data-aos-delay="300" />
    <ProjectsContainer data-aos="fade-up" data-aos-delay="300" />
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
};
</script>

<style lang="scss" scoped></style>
