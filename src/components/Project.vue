<template>
  <div class="project" data-aos="fade-up" data-aos-delay="300">
    <a v-bind:href="project.link" target="_blank">
      <div
        class="project-image"
        :style="'background-image:url(' + project.image + ');'"
      >
        <div
          class="project-stack-badge"
          v-bind:style="'border: 3px solid' + project.color"
        >
          <div :style="'background-image:url(' + project.stack + ');'"></div>
        </div>
        <div
          v-if="project.github_link"
          class="project-stack-badge github-badge"
          v-bind:style="'border: 3px solid' + project.color"
        >
          <a :href="project.github_link" target="_blank">
            <div
              style="
                background-image: url('https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU');
              "
            ></div>
          </a>
        </div>
      </div>
      <div class="project-infos">
        <a v-bind:href="project.link" target="blank">
          <h4 v-bind:style="'color:' + project.color">{{ project.name }}</h4>
          <span v-bind:style="'color:' + project.color">></span>
        </a>
        <p>
          {{ this.lang === "pt_br" ? project.desc_pt_br : project.desc_eng }}
        </p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    project: {},
    lang: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
a {
  text-decoration: none;
}
.project {
  width: 300px;
  border-radius: 5px;
  margin: 20px;
  border: 1px solid #c4c4c4;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background-color: white;
  flex-direction: column;
  display: flex;
  overflow: hidden;
}
.project-image {
  width: 300px;
  height: 180px;
  background-size: cover;
  background-position: center;
  flex-direction: column;
  align-items: flex-end;
  display: flex;
}
.project-stack-badge {
  width: 30px;
  height: 30px;
  background-color: rgb(227, 227, 227);
  background-color: #f4f4f4;
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  margin: 5%;
  margin-bottom: 1%;
  overflow: hidden;
  z-index: 9999;
  div {
    width: 100%;
    height: 100%;
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: center;
  }
}
.github-badge {
  div {
    background-size: cover;
  }
}
.project-infos {
  a {
    text-decoration: none;
    background-color: #f4f4f4;
    color: black;
    padding: 15px;
    justify-content: space-between;
    display: flex;
  }
  h4 {
    text-align: left;
    font-weight: 500;
    margin: 0%;
  }
  p {
    min-height: 84px;
    font-weight: 400;
    width: auto;
    padding: 16px;
    margin: 0%;
    font-size: 14px;
    text-align: left;
    color: black;
  }
}
</style>
