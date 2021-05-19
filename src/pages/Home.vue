<template>
  <div class="home">
    <ProfileIcon/>
    <ProjectsContainer/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import ProfileIcon from "@/components/ProfileIcon.vue";
import ProjectsContainer from "@/components/ProjectsContainer.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    ProfileIcon,
    ProjectsContainer,
    Footer
  },
};
</script>
