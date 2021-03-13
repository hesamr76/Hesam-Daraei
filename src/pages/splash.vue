<template>
  <q-page class="splash-page column items-center justify-around">
    <div class="column flex-center">
      <img src="~assets/logo.png" width="58px" height="50px" />
      <p class="text welcome">Welcome to my website</p>
    </div>
    <div class="column flex-center">
      <p class="text name">Hessam Daraei</p>
      <p class="text skills">Designer . Filmmaker . Storyteller</p>
    </div>
    <q-btn unelevated label="enter" to="/about" />
  </q-page>
</template>

<style lang="scss">
.splash-page {
  background-image: url("~assets/background.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  .name {
    font-weight: 800;
    font-size: 55px;
    line-height: 75px;
  }

  .skills {
    letter-spacing: 0.325em;
  }
}
</style>

<script>
export default {
  name: "Splash"
};
</script>
