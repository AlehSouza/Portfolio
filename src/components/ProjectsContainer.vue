<template>
  <div class="container">
    <h1>Meus Projetos</h1>
    <div class="container-projects">
      <Project v-for="(projeto, i) in projetos" :key="i" :project="projeto" />
    </div>
  </div>
</template>

<script>
import Project from "./Project.vue";

export default {
  data() {
    return {
      projetos: [
        {
          image: "https://imgur.com/pnwRgEE.png",
          link: "",
          name: "Portfólio",
          color: "#e721a5",
          desc: "Este é o meu portfólio, você está aqui agora 🤘",
        },
        {
          image: "https://imgur.com/NcE5Vgv.png",
          link: "https://fisioadapt.com.br/",
          name: "Fisioadapt",
          color: "#00a89b",
          desc: "Site de contato para a empresa Fisioadapt onde você pode saber mais sobre os serviços e falar com os profissionais da empresa.",
        },
        {
          image: "https://imgur.com/O8Y0M7E.png",
          link: "http://kimochism.com/",
          name: "Kimochism",
          color: "#000000",
          desc: "E-commerce desenvolvido em react para a empresa Kimochism.",
        },
        {
          image: "https://imgur.com/euoNAnL.png",
          link: "",
          name: "Async",
          color: "#000000",
          desc: "Site ainda em desenvolvimento",
        },
        {
          image:
            "https://upload.wikimedia.org/wikipedia/pt/a/a7/Chrono_Trigger.jpg",
          link: "https://alehsouza.github.io/ChronnoGame/",
          name: "Chronno Trigger - Game",
          color: "#c95c11",
          desc: "Uma simulação simbólica de uma das lutas de um jogo que fez parte da minha infância",
        },
        {
          image:
            "https://wallpaperboat.com/wp-content/uploads/2020/12/07/63377/construction-09.jpg",
          link: "",
          name: "Qual será o próximo?",
          color: "#000000",
          desc: "Ainda estou pensando numa ideia para esse card",
        },
        // {
        //   image: "",
        //   link: "",
        //   name: "Culture",
        //   color: "#000000",
        //   desc: "Site ainda em desenvolvimento",
        // },
        // {
        //   image: "",
        //   link: "",
        //   name: "Including",
        //   color: "#000000",
        //   desc: "Site ainda em desenvolvimento",
        // },
      ],
    };
  },
  components: {
    Project,
  },
};
</script>

<style lang="scss" scoped>
.container-projects {
  margin: 30px auto;
  width: 1368px;
  flex-wrap: wrap;
  display: flex;
}
@media screen and (max-width: 1400px) {
  .container-projects {
    justify-content: center;
    width: auto;
  }
}
</style>
