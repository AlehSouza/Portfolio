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
      <form
        action="https://formsubmit.co/06191976e626254db5e8061f28f63981"
        method="POST"
      >
        <input type="hidden" name="_next" value="https://alehsouza.dev/" />
        <!-- <input type="hidden" name="_captcha" value="false" /> -->
        <input type="hidden" name="_template" value="box" />
        <input
          type="hidden"
          name="_subject"
          value="Portfólio - Mensagem nova"
        />
        <input
          placeholder="John Doe"
          v-model="name_message"
          name="name"
          required
        />
        <input
          type="hidden"
          name="_autoresponse"
          :value="
            this.lang === 'pt_br'
              ? this.texts.send_mail_answer.pt_br
              : this.texts.send_mail_answer.eng
          "
        />
        <input
          placeholder="john.doe@example.com"
          v-model="email_message"
          name="email"
          required
        />
        <input
          :placeholder="
            this.lang === 'pt_br'
              ? this.texts.send_mail_placeholder_msg.pt_br
              : this.texts.send_mail_placeholder_msg.eng
          "
          v-model="text_message"
          name="text"
          required
        />
        <button
          type="submit"
          :disabled="!name_message || !email_message || !text_message"
        >
          <span class="fas fa-location-arrow"></span>
        </button>
      </form>
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
    return {
      name_message: "",
      email_message: "",
      text_message: "",
    };
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
  max-width: 500px;
  form {
    width: 100%;
    max-width: 500px;
    overflow: hidden;
    flex-direction: column;
    justify-content: center;
    display: flex;
    input {
      border: 0px;
      padding: 12px;
      margin: 1%;
      outline: none;
    }
    button {
      background-color: var(--cor-principal);
      cursor: pointer;
      border: 0px;
      padding: 12px;
      margin: 1%;
      align-items: center;
      justify-content: center;
      display: flex;
      span {
        margin: 0px;
        font-size: 24px;
        color: white;
      }
      &:disabled {
        cursor: not-allowed;
      }
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
