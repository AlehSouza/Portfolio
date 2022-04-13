<template>
  <div class="container-about">
    <div class="box left-about">
      <h1>Sobre mim</h1>
      <p>
        Bem, como pode ver você está no meu portfólio 🎉 e aqui vou te contar
        mais um pouco sobre mim!
        <br /><br />
        Como já sabe sou Alexandre, atualmente tenho 21 anos (2001), estudo e
        trabalho na área de tecnologia voltado para o Front-End, pois foi o
        segmento que escolhi para minha carreira profissional desde que
        compreendi a separação dessas áreas.👨‍💻
        <br /><br />
        Tenho uma grande facilidade com o desenvolvimento de telas e comunicação
        com cliente. Também sou um estusiasta na area de Design, possuo um curso
        de Design Ui/Ux que fiz ao longo do meu curso técnico em Desenvolvimento
        de Sistemas na Etec de Guaianazes. 🎨
        <br /><br />
        Aqui abaixo eu deixei alguns projetos meus que fiz ao longo dos anos e
        também uns freelances que já trabalhei, e os meus contatos estão no topo
        da página abaixo da minha foto. Obrigado pela atenção, aproveite 😊
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
.container-about {
  padding: 40px 0px;
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
    border: 8px solid #e721a5;
    animation: imgSize 3s infinite;
  }
}
@media screen and (max-width: 1350px) {
  .container-about {
    flex-direction: column;
  }
  .box {
    width: 60vw;
    height: auto;
    margin-bottom: 5%;
    margin-right: 0%;
  }
}
</style>
