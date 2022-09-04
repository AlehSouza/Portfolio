<template>
  <div class="container-about" data-aos="fade-up" data-aos-delay="300">
    <div class="box left-about">
      <h1
        v-html="
          this.lang === 'pt_br'
            ? this.texts.title_about.pt_br
            : this.texts.title_about.eng
        "
      ></h1>
      <p
        v-html="
          this.lang === 'pt_br' ? this.texts.about.pt_br : this.texts.about.eng
        "
      ></p>
    </div>
    <div class="box right-about">
      <img src="./../assets/about_me.png" />
    </div>
  </div>
</template>

<script>
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
};
</script>

<style lang="scss" scoped>
@import url("../styles/styles.css");

.container-about {
  padding: 24px 0px;
  justify-content: center;
  align-items: center;
  display: flex;
}
.box {
  width: 28vw;
  margin-right: 5%;
}
.left-about {
  text-align: left;
  h1 {
    padding: 0px 12px;
  }
  p {
    padding: 12px;
    flex-direction: column;
    display: flex;
  }
}
.right-about {
  width: auto;
  margin: auto 0;
  background-position: center;
  justify-content: center;
  align-items: center;
  display: flex;
  img {
    width: 85%;
    border-radius: 50%;
    border: 8px solid var(--cor-principal);
    animation: imgSize 3s infinite;
  }
}
@media screen and (max-width: 1200px) {
  .container-about {
    flex-direction: column;
  }
  .box {
    width: 80vw;
    height: auto;
    margin-bottom: 5%;
    margin-right: 0%;
  }
  .right-about {
    img {
      max-width: 60%;
    }
  }
}
@media screen and (max-width: 800px) {
  .right-about {
    img {
      max-width: 85%;
    }
  }
}
</style>
