<template>
  <div class="back-name-component absolute-center">
    <p class="text">{{ top }}</p>
    <p class="text">{{ bottom }}</p>
  </div>
</template>

<style lang="scss">
.back-name-component {
  width: 100%;
  // height: 100%;
  overflow: hidden;

  .text {
    font-family: Avenir-Black;
    font-weight: 900;
    font-size: 28vw;
    line-height: 26vw;
    opacity: 0.1;
    text-align: left;
  }
}
</style>

<script>
export default {
  name: "BackName",

  props: ["top", "bottom"],

  data() {
    return {};
  }
};
</script>
