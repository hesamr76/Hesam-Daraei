<template>
  <q-page class="contact-page">
    <back-name top="CONTA" bottom="CT ME" />

    <div class="section" :class="{ hasSideBar: sideBar }">
      <div class="column">
        <div class="row">
          <a class="text heavy" href="mailto:hessamdaraei@gmail.com">
            <q-img src="icons/email.png" width="35px" height="35px" />
            hessamdaraei@gmail.com</a
          >
        </div>
        <div class="row">
          <a class="text heavy" href="tel:+98 919 33 72 192">
            <q-img src="icons/call.png" width="35px" height="35px" />
            +98 919 33 72 192</a
          >
        </div>
      </div>
    </div>
  </q-page>
</template>

<style lang="scss">
.contact-page {
  .section {
    a {
      margin: 15px 0;
    }
    .q-img {
      margin: -4px 74px 0 178px;
    }
  }
}
</style>

<script>
import BackName from "components/BackName";

export default {
  name: "contact",

  components: { BackName },

  computed: {
    sideBar() {
      return this.$q.screen.width > this.$q.screen.sizes.sm;
    }
  }
};
</script>
