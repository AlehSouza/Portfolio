<template>
  <div class="technology-box">
    <div
      class="technology-image"
      v-bind:style="{ backgroundImage: 'url(' + technologies.image + ')' }"
      :alt="technologies.name"
      width="100px"
    />
    <span>
      <b>{{ technologies.name }}</b>
    </span>
    <!-- Tooltip -->
    <!-- <div class="technology-container-tooltip">
      <div class="technology-pointer"></div>
      <div class="technology-context">
        <div class="stars">
          <div v-for="index in 5" :key="index">
            <div
              :class="technologies.stars >= index ? 'star yellow' : 'star'"
            ></div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
export default {
  props: {
    technologies: {},
  },
};
</script>
<style lang="scss" scoped>
.technology-box {
  z-index: 1;
  width: 120px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  display: flex;
  padding: 50px 15px;
  .technology-image {
    width: 100px;
    height: 100px;
    background-size: 90%;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
  }
}
.technology-box:hover .technology-container-tooltip {
  display: flex;
}

.technology-container-tooltip {
  z-index: 99999;
  position: absolute;
  margin-top: 175px;
  top: 0px;
  flex-direction: column;
  color: #ffffff;
  display: none;
}
.technology-pointer {
  background-color: #464242c7;
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
  margin: 0 auto;
  width: 18px;
  height: 10px;
  justify-content: center;
  align-content: center;
  display: flex;
}
.technology-context {
  background-color: #464242c7;
  border-radius: 5px;
  padding: 8px;
  flex-direction: column;
  display: flex;
  p {
    margin: 0px;
  }
}
.stars {
  justify-content: center;
  align-items: center;
  display: flex;
  .star {
    width: 18px;
    height: 18px;
    margin: 0 3px;
    background-color: rgb(214, 212, 212);
    clip-path: polygon(
      50% 0%,
      61% 35%,
      98% 35%,
      68% 57%,
      79% 91%,
      50% 70%,
      21% 91%,
      32% 57%,
      2% 35%,
      39% 35%
    );
  }
  .yellow {
    background-color: #ffdf00;
  }
}
</style>
