<template>
  <q-page class="resume-page">
    <back-name top="RESU" bottom="ME" />
    <div class="section" :class="{ hasSideBar: sideBar }">
      <div class="column justify-center">
        <p class="text">
          You can download my latest CV here. Tap the button to download:
        </p>
        <a href="pdf/cv.pdf" download="HessamDaraeiCV.pdf">
          <q-btn unelevated no-caps>Download Hessam Daraei CV</q-btn>
        </a>
        <p class="text version">Version: Spring 2021</p>
      </div>
    </div>
  </q-page>
</template>

<style lang="scss">
.resume-page {
  .section {
    .text {
      margin-left: 50px;
      text-align: left;
    }
    .text.version {
      margin-left: 130px;
    }
    .q-btn {
      margin: 50px 0 20px 50px;
      width: 300px;
      height: 50px;
      font-size: 14px;
      font-family: Avenir-Heavy !important;
    }
  }
}
</style>

<script>
import BackName from "components/BackName";

export default {
  name: "resume",

  components: { BackName },

  computed: {
    sideBar() {
      return this.$q.screen.width > this.$q.screen.sizes.sm;
    }
  }
};
</script>
