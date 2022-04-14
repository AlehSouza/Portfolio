<template>
  <div class="home">
    <Introduction />
    <LineBreak />
    <About />
    <LineBreak />
    <Trajectory />
    <LineBreak />
    <ProjectsContainer />
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

export default {
  name: "Home",
  components: {
    Introduction,
    Trajectory,
    LineBreak,
    About,
    ProjectsContainer,
    Footer,
  },
};
</script>
