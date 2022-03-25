<template>
  <div class="home">
    <Introduction />
    <Trajectory />
    <ProjectsContainer />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Introduction from "@/components/Introduction.vue";
import ProjectsContainer from "@/components/ProjectsContainer.vue";
import Footer from "@/components/Footer.vue";
import Trajectory from "../components/Trajectory.vue";

export default {
  name: "Home",
  components: {
    Introduction,
    Trajectory,
    ProjectsContainer,
    Footer,
  },
};
</script>
