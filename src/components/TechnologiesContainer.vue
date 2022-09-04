<template>
  <div class="container">
    <h1
      v-html="
        this.lang === 'pt_br'
          ? this.texts.title_technologies.pt_br
          : this.texts.title_technologies.eng
      "
    ></h1>
    <span
      class="container-info"
      v-html="
        this.lang === 'pt_br'
          ? this.texts.subtitle_technologies.pt_br
          : this.texts.subtitle_technologies.eng
      "
    ></span>
    <div class="container-technologies">
      <Technology
        v-for="(technology, i) in technologies"
        :key="i"
        :technologies="technology"
      />
    </div>
  </div>
</template>

<script>
import Technology from "./Technology.vue";
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
  components: { Technology },
  data() {
    return {
      technologies: [
        {
          name: "HTML",
          stars: 5,
          image: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
        },
        {
          name: "CSS",
          stars: 5,
          image: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
        },
        {
          name: "JavaScript",
          stars: 3,
          image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
        },
        {
          name: "Vue",
          stars: 3,
          image: "https://cdn.worldvectorlogo.com/logos/vue-9.svg",
        },
        {
          name: "React",
          stars: 2,
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
        },
        {
          name: "NodeJs",
          stars: 2,
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding-bottom: 30px;
  h1 {
    padding: 10px 0px;
  }
}
.container-technologies {
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  display: flex;
}
.container-info {
  font-style: italic;
  color: #6a6a6a;
}
</style>
