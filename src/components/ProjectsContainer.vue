<template>
  <div class="container">
    <h1
      v-html="
        this.lang === 'pt_br'
          ? this.texts.title_projects.pt_br
          : this.texts.title_projects.eng
      "
    ></h1>
    <span
      class="container-info"
      v-html="
        this.lang === 'pt_br'
          ? this.texts.subtitle_projects.pt_br
          : this.texts.subtitle_projects.eng
      "
    ></span>
    <div class="container-projects">
      <Project
        v-for="(projeto, i) in projetos"
        :key="i"
        :project="projeto"
        :lang="lang"
      />
    </div>
  </div>
</template>

<script>
import Project from "./Project.vue";

export default {
  props: {
    lang: {
      type: String,
      required: true,
    },
    texts: {
      type: Object,
      required: true,
    },
  },
  components: {
    Project,
  },
  data() {
    return {
      projetos: [
        {
          image: "https://imgur.com/G6W5wI6.png",
          link: "#",
          name: "Portfólio",
          color: "#d72448",
          desc_pt_br: "Este é o meu portfólio, você está aqui agora 🤘!",
          desc_eng: "This is my portfolio, you are here now 🤘!",
          stack: "https://cdn.worldvectorlogo.com/logos/vue-9.svg",
          github_link: "https://github.com/AlehSouza/Portfolio",
        },
        {
          image: "https://imgur.com/NcE5Vgv.png",
          link: "https://fisioadapt.com.br/",
          name: "Fisioadapt",
          color: "#00a89b",
          desc_pt_br:
            "Site de contato para a empresa Fisioadapt onde você pode saber mais sobre os serviços e falar com os profissionais da empresa.",
          desc_eng:
            "Contact site for the company Fisioadapt where you can learn more about the services and speak with the professionals of the company.",
          stack: "https://cdn.worldvectorlogo.com/logos/vue-9.svg",
          github_link: "https://github.com/AlehSouza/Fisioadapt",
        },
        {
          image: "https://imgur.com/O8Y0M7E.png",
          link: "http://kimochism.com/",
          name: "Kimochism",
          color: "#000000",
          desc_pt_br:
            "E-commerce desenvolvido em react para a empresa Kimochism.",
          desc_eng: "E-commerce developed in react for the company Kimochism.",
          stack:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
          github_link: "https://github.com/AlehSouza/Kimo-web",
        },
        {
          image: "https://imgur.com/hAMdW3O.png",
          link: "https://genshin-impact-app.vercel.app/",
          name: "Genshin Impact",
          color: "#e34b33",
          desc_pt_br:
            "Site sobre Genshin Impact, um jogo RPG. Feito em VueJS, treinando alguns conhecimentos na stack. (Desktop)",
          desc_eng:
            "Site about Genshin Impact, an RPG game. Made in VueJS, training some knowledge on the stack. (desktop)",
          stack: "https://cdn.worldvectorlogo.com/logos/vue-9.svg",
          github_link: "https://github.com/AlehSouza/Genshin-Impact",
        },
        {
          image: "https://imgur.com/WuUw80w.png",
          link: "https://chronno-game.vercel.app/",
          name: "Chronno Trigger - Game",
          color: "#c95c11",
          desc_pt_br:
            "Uma simulação simbólica de uma das lutas de um jogo que fez parte da minha infância.",
          desc_eng:
            "A symbolic simulation of one of the fights in a game that was part of my childhood.",
          stack: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
          github_link: "https://github.com/AlehSouza/Chronno-Game",
        },
        {
          image: "https://i.imgur.com/ZKd7NdC.png",
          link: "https://pokedex-six-delta.vercel.app/",
          name: "Pokedex",
          color: "#f74b16",
          desc_pt_br:
            "Uma pokedex feita em VueJs apenas para Desktop, quando estava iniciando meus estudos nessa stack.",
          desc_eng:
            "A pokedex made in VueJs just for Desktop, when I was starting my studies on this stack.",
          stack: "https://cdn.worldvectorlogo.com/logos/vue-9.svg",
          github_link: "https://github.com/AlehSouza/Pokedex",
        },
        {
          image: "https://imgur.com/IrWgMDb.png",
          link: "https://cade-alehsouza.vercel.app/",
          name: "Cadê?",
          color: "#000000",
          desc_pt_br:
            "Um jogo feito em HTML, CSS, JS para uma matéria da faculdade.",
          desc_eng: "A game made in HTML, CSS, JS for a college subject.",
          stack: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
          github_link: "https://github.com/AlehSouza/Cade",
        },
        {
          image: "https://i.imgur.com/3il5N8B.png",
          link: "https://youtu.be/1eeQ0NzDASE",
          name: "Culture",
          color: "#2d9c47",
          desc_pt_br:
            "Culture é um aplicativo desenvolvido para meu TCC do ensino técnico. Atualmente não possui um site, mas um vídeo pitch explicativo.",
          desc_eng:
            "Culture is an application developed for my technical education TCC. It currently does not have a website, but an explanatory video pitch.",
          stack: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
          github_link: "",
        },
        // {
        //   image: "https://imgur.com/euoNAnL.png",
        //   link: "",
        //   name: "Async Project",
        //   color: "#000000",
        //   desc_pt_br: "Site ainda em desenvolvimento.",
        //   desc_eng: "Website still under development.",
        //   stack: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
        //   github_link: ""
        // },
        // {
        //   image: "https://imgur.com/tG1RHqN.png",
        //   link: "",
        //   name: "Qual será o próximo?",
        //   color: "#000000",
        //   desc_pt_br: "Vamos esperar pra ver o que vem por ai... 👨‍🔧",
        //   desc_eng: "",
        // },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding-bottom: 50px;
  h1 {
    padding: 15px 0px;
  }
}
.container-info {
  font-style: italic;
  color: #6a6a6a;
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
@media screen and (max-width: 500px) {
  .container {
    flex-direction: column;
    display: flex;
    h1 {
      width: 80vw;
      margin: 0 auto;
    }
    span {
      width: 80vw;
      margin: 0 auto;
    }
  }
}
</style>
