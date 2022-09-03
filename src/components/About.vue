<template>
  <div class="container-about" data-aos="fade-up" data-aos-delay="300">
    <div class="box left-about">
      <h1>Um pouco sobre mim</h1>
      <p>
        Me chamo Alexandre, atualmente tenho 21 anos🎉, estudo e trabalho na
        área de tecnologia voltado para o Front-End, pois foi o segmento que
        escolhi para minha carreira profissional desde que compreendi a
        separação dessas áreas.👨‍💻
        <br /><br />
        Tenho uma grande facilidade com o desenvolvimento de telas e comunicação
        visual com o usuário. Sou um estusiasta na area de Design, possuo um
        curso de Design Ui/Ux que fiz ao longo do meu curso técnico em
        Desenvolvimento de Sistemas na Etec de Guaianazes. 🎨
        <br /><br />
        Abaixo você pode conferir mais sobre minha trajetória profissional e
        alguns dos meus projetos que realizei ao longo dessa jornada.
        <br /><br />
        Obrigado pela atenção, aproveite 😊
      </p>
    </div>
    <div class="box right-about">
      <img src="./../assets/about_me.png" />
    </div>
  </div>
</template>

<script>
export default {};
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
