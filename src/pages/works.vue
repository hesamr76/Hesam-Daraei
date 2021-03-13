<template>
  <q-page class="works-page">
    <back-name top="WORK" bottom="S" />

    <div class="section" :class="{ hasSideBar: sideBar }">
      <q-scroll-area
        horizontal
        visible
        :bar-style="barStyle"
        :thumb-style="thumbStyle"
        :style="scrollStyle"
      >
        <router-link
          v-for="item in works"
          :key="'workId_' + item.id"
          replace
          :to="'/detail/' + item.URLName"
        >
          <work-item :work="item" />
        </router-link>
      </q-scroll-area>
    </div>
  </q-page>
</template>

<script>
import BackName from "components/BackName";
import WorkItem from "components/WorkItem";

export default {
  name: "works",

  props: ["URLName"],

  components: { BackName, WorkItem },

  data() {
    return {
      scrollStyle: {
        width: "100%",
        height: "320px"
      },

      thumbStyle: {
        borderRadius: "20px",
        backgroundColor: "#fff",
        height: "9px",
        opacity: 0.75,
        margin: "0 50px"
      },

      barStyle: {
        left: "50px",
        right: "50px",
        borderRadius: "20px",
        backgroundColor: "#fff",
        heigth: "9px",
        opacity: 0.25
      }
    };
  },

  computed: {
    sideBar() {
      return this.$q.screen.width > this.$q.screen.sizes.sm;
    },

    works() {
      return this.$store.getters["example/works"];
    }
  }
};
</script>
