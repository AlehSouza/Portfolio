<template>
  <div>
    <div class="icon-profile"></div>
    <h1>Alexandre Souza</h1>
    <div>
      <div class="titles">
        <span>Front-end Dev</span>
        <span>Quality Assurance</span>
        <span>Free lancer</span>
      </div>
    </div>
    <p>
      Olá seja bem-vindo ao meu portfólio, confira abaixo alguns projetos que eu
      participei e também veja mais sobre mim na aba
      <b><router-link to="/about">sobre</router-link></b>
      .
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.icon-profile {
  width: 250px;
  height: 250px;
  background-image: url("https://i.pinimg.com/564x/7d/59/b8/7d59b8f154a0baac1d248bf940baee58.jpg");
  background-size: cover;
  border-radius: 50%;
  margin: 0 auto;
  margin-top: 30px;
}
h1 {
  font-weight: 600;
  margin: 10px;
}
p {
  width: 400px;
  margin: 0 auto;
}
b a{
  color: black;
}
.titles {
  max-width: 400px;
  font-size: 14px;
  margin: 20px auto;
  justify-content: space-around;
  display: flex;
  span {
    padding: 5px 8px;
    border-radius: 50px;
    &:nth-child(1) {
      color: rgb(11, 126, 21);
      background-color: rgba(11, 126, 21, 0.25);
      border: 1px solid rgb(11, 126, 21);
    }
    &:nth-child(2) {
      color: rgb(200, 35, 51);
      background-color: rgba(200, 35, 51, 0.25);
      border: 1px solid rgb(200, 35, 51);
    }
    &:nth-child(3) {
      color: rgb(0, 105, 217);
      background-color: rgba(0, 105, 217, 0.25);
      border: 1px solid rgb(0, 105, 217);
    }
  }
}
</style>