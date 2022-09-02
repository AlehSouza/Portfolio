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
          image: "https://imgur.com/kTl1vbq.png",
          link: "#",
          name: "Portfólio",
          color: "var(--cor-principal)",
          desc: "Este é o meu portfólio, você está aqui agora 🤘!",
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
          image: "https://imgur.com/hAMdW3O.png",
          link: "https://genshin-impact-app.vercel.app/",
          name: "Genshin Impact",
          color: "#e34b33",
          desc: "Site sobre Genshin Impact, um jogo RPG. Feito em VueJS, treinando alguns conhecimentos na stack. (Desktop)",
        },
        {
          image: "https://imgur.com/WuUw80w.png",
          link: "https://alehsouza.github.io/ChronnoGame/",
          name: "Chronno Trigger - Game",
          color: "#c95c11",
          desc: "Uma simulação simbólica de uma das lutas de um jogo que fez parte da minha infância.",
        },
        {
          image: "https://i.imgur.com/ZKd7NdC.png",
          link: "https://pokedex-six-delta.vercel.app/",
          name: "Pokedex",
          color: "#f74b16",
          desc: "Uma pokedex feita em VueJs apenas para Desktop, quando estava iniciando meus estudos nessa stack.",
        },
        {
          image: "https://i.imgur.com/3il5N8B.png",
          link: "https://youtu.be/1eeQ0NzDASE",
          name: "Culture",
          color: "#2d9c47",
          desc: "Culture é um aplicativo desenvolvido para meu TCC do ensino técnico. Atualmente não possui um site, mas um vídeo pitch explicativo.",
        },
        {
          image: "https://imgur.com/euoNAnL.png",
          link: "",
          name: "Async Project",
          color: "#000000",
          desc: "Site ainda em desenvolvimento.",
        },
        // {
        //   image: "https://imgur.com/tG1RHqN.png",
        //   link: "",
        //   name: "Qual será o próximo?",
        //   color: "#000000",
        //   desc: "Vamos esperar pra ver o que vem por ai... 👨‍🔧",
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
.container {
  padding-bottom: 50px;
  h1 {
    padding: 20px 0px;
  }
}
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
