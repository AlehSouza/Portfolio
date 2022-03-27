<template>
  <div class="container-footer">
    <footer>
      <div>
        <b class="headerMenuFooter"></b>
        <span>Alexandre Souza</span>
      </div>
      <div>
        <b class="headerMenuFooter"></b>
        <a href="mailto:alexandrehg2001@gmail.com">
          <span>alexandrehg2001@gmail.com</span>
        </a>
      </div>
      <div>
        <b class="headerMenuFooter"></b>
        <p class="Mission">© 2022 copyright Alexandre Souza</p>
      </div>
    </footer>
    <div class="detail-footer"></div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.container-footer {
  flex-direction: column;
  display: flex;
}
footer {
  height: auto;
  background-color: black;
  padding: 20px 20px;
  color: white;
  justify-content: space-around;
  flex-wrap: wrap-reverse;
  display: flex;
}
footer div {
  width: 300px;
  line-height: 15px;
}
footer div span {
  display: block;
  color: white;
  padding: 8px;
  cursor: pointer;
}
.headerMenuFooter {
  font-size: 20px;
  padding: 20px 8px;
  display: block;
}
.Mission {
  padding: 8px;
  line-height: 25px;
}
.marca {
  margin-left: 0px;
  padding: 15px 0px;
  font-size: 34px;
  color: white;
  font-weight: bold;
  text-shadow: -1px -1px 0px #000, 0px -1px 0px #000, 1px -1px 0px #000,
    -1px 0px 0px #000, 1px 0px 0px #000, -1px 1px 0px #000, 0px 1px 0px #000,
    1px 1px 0px #000;
}
.socialMedia {
  width: 50px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: 8px;
}
.socialMedia a {
  color: white !important;
}
.detail-footer {
  width: auto;
  height: 15px;
  background-color: #28225a;
}

@media screen and (max-width: 1160px) {
  footer {
    justify-content: center;
    align-content: center;
    flex-direction: column;
  }
  footer div {
  }
}
</style>
