<template>
  <div class="container-projects">
    <Project v-for="projeto in projetos" v-bind:key="projeto.name" :project="projeto"/>
  </div>
</template>

<script>
import Project from "./Project.vue";

export default {
  data() {
    return {
      projetos: [
        {
          image: "",
          link: "",
          name: "Async",
          color: "#000000",
          desc: "Site ainda em desenvolvimento",
        },
        {
          image: "https://imgur.com/NcE5Vgv.png",
          link: "https://fisioadapt.com.br/",
          name: "Fisioadapt",
          color: "#00a89b",
          desc:
            "Site de contato para a empresa Fisioadapt onde você pode saber mais sobre os serviços e falar com os profissionais da empresa.",
        },
        {
          image: "https://imgur.com/O8Y0M7E.png",
          link: "http://kimochism.com/",
          name: "Kimochism",
          color: "#000000",
          desc: "Site ainda em desenvolvimento",
        },
        {
          image: "",
          link: "",
          name: "Culture",
          color: "#000000",
          desc: "Site ainda em desenvolvimento",
        },
        {
          image: "",
          link: "",
          name: "Including",
          color: "#000000",
          desc: "Site ainda em desenvolvimento",
        },
        {
          image: "",
          link: "",
          name: "Qual será o próximo?",
          color: "#000000",
          desc: "Ainda estou pensando numa ideia para esse card",
        },
      ],
    };
  },
  components: {
    Project,
  },
};
</script>

<style lang="scss">
.container-projects {
  margin: 20px auto;
  width: 1100px;
  flex-wrap: wrap;
  justify-content: center;
  display: flex;
}
@media screen and (max-width: 1150px){
  .container-projects{
    width: auto;
  }
}
</style>