<template>
  <q-page class="detail-page">
    <back-name top="WORK" bottom="S" />

    <div class="section" :class="{ hasSideBar: sideBar }">
      <work-item :work="work" :showDetail="true" />
      <work-tabs :work="work" />
    </div>
  </q-page>
</template>

<style lang="scss">
.detail-page {
  .section.hasSideBar {
    height: calc(100% - 10vw);
    transform: translate3d(300px, 10vw, 0);
  }

  .work-item-component {
    height: 250px;
  }
}
</style>

<script>
import BackName from "components/BackName";
import WorkItem from "components/WorkItem";
import WorkTabs from "components/WorkTabs";

export default {
  name: "Detail",

  props: ["URLName"],

  components: { BackName, WorkItem, WorkTabs },

  preFetch({ store, currentRoute, redirect }) {
    let isBadURL = true;
    const URLName = currentRoute.params.URLName;

    if (URLName) {
      const item = store.getters["example/getWorkByURLName"](URLName).id;
      if (item) {
        isBadURL = false;
      }
    }

    if (isBadURL) {
      redirect({ name: "works" });
    }
  },

  computed: {
    sideBar() {
      return this.$q.screen.width > this.$q.screen.sizes.sm;
    },

    work() {
      const URLName = this.$route.params.URLName;
      return this.$store.getters["example/getWorkByURLName"](URLName);
    }
  }
};
</script>
