<template>
  <div class="container-footer">
    <footer>
      <div>
        <span>Alexandre Souza</span>
      </div>
      <div>
        <a href="mailto:alexandrehg2001@gmail.com">
          <span>alexandrehg2001@gmail.com</span>
        </a>
      </div>
      <div>
        <span>© 2022 copyright Alexandre Souza</span>
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
@import url("../styles/styles.css");

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
  div {
    width: 300px;
    line-height: 15px;
    span {
      display: block;
      color: white;
      padding: 8px;
      cursor: pointer;
    }
    a {
      text-decoration: none;
    }
  }
}
.footer-detail {
  font-size: 20px;
  padding: 20px;
  display: block;
}
.detail-footer {
  width: auto;
  height: 15px;
  background-color: var(--cor-principal);
}

@media screen and (max-width: 1160px) {
  footer {
    justify-content: center;
    align-content: center;
    flex-direction: column;
  }
}
</style>
