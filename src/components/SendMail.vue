<template>
  <div class="container-email">
    <h1
      v-html="
        this.lang === 'pt_br'
          ? this.texts.send_mail_title.pt_br
          : this.texts.send_mail_title.eng
      "
    ></h1>
    <span
      v-html="
        this.lang === 'pt_br'
          ? this.texts.send_mail_span.pt_br
          : this.texts.send_mail_span.eng
      "
    ></span>
    <br />
    <div class="input-send">
      <input placeholder="it_hunter@example.com" />
      <button>
        <span class="fas fa-location-arrow"></span>
      </button>
    </div>
    <div class="social">
      <span class="midia" v-for="(midia, j) in midias" :key="j">
        <a :href="midia.link" target="_blank" :alt="midias.alt"
          ><span :class="midia.icon"></span>
        </a>
      </span>
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
    midias: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.container-email {
  min-height: 400px;
  padding: 30px;
  color: white;
  background-color: black;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  h1 {
    margin: 12px;
  }
}
.input-send {
  width: 100%;
  border-radius: 50px;
  overflow: hidden;
  max-width: 500px;
  display: flex;
  input,
  button {
    padding: 12px;
    border: 0px;
    outline: none;
  }
  input {
    padding-left: 25px;
    width: 100%;
  }
  button {
    width: 60px;
    background-color: var(--cor-principal);
    cursor: pointer;
    span {
      padding: 0px 6px;
      padding-top: 4px;
      padding-right: 10px;
      margin: 0px;
      font-size: 24px;
      color: white;
    }
  }
}
.social {
  margin-top: 25px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  display: flex;
}
.midia {
  margin: 5px 8px;
}
.midia a {
  padding: 10px;
  border: 1.5px solid black;
  border-radius: 50px;
  background-color: rgb(255, 255, 255);
  justify-content: space-around;
  align-items: center;
  display: flex;
  span {
    width: 17px;
    height: 17px;
    color: black;
  }
}
</style>
