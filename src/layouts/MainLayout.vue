<template>
  <q-layout view="lhh lpR lff" class="main-layout">
    <q-drawer v-model="sideBar" side="left" overlay behavior="desktop" elevated>
      <img
        src="~assets/logo.png"
        width="58px"
        height="50px"
        class="q-ma-xl"
        @click="goToSplash"
      />
      <q-tree
        color="white"
        text-color="white"
        node-key="name"
        :nodes="props"
        :selected.sync="selected"
        @update:selected="selectMenuItem"
      />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- <q-footer > -->
    <Footer v-if="hasFooter" />
    <!-- </q-footer> -->
  </q-layout>
</template>

<style lang="scss">
.main-layout {
  .q-drawer-container {
    .q-drawer {
      background-color: rgba(255, 255, 255, 0.05);

      .q-tree {
        padding-left: 25px;
      }
    }
  }

  .q-footer {
    background-color: transparent;
  }
}
</style>

<script>
import Footer from "components/Footer";

export default {
  name: "MainLayout",

  components: { Footer },

  data() {
    return {
      selected: "",
      props: [
        {
          name: "about",
          label: "About me"
        },
        {
          name: "works",
          label: "Works",
          children: [
            {
              name: "works",
              label: "UI UX Design"
            },
            {
              name: "works",
              label: "Video"
            },
            {
              name: "works",
              label: "Interactive"
            },
            {
              name: "works",
              label: "Graphic Design"
            }
          ]
        },
        {
          name: "resume",
          label: "Resume"
        },
        {
          name: "contact",
          label: "Contact me"
        }
      ]
    };
  },

  methods: {
    goToSplash() {
      this.$router.replace({ name: "splash" });
    },

    selectMenuItem(node) {
      if (this.$route.name != node) {
        this.$router.replace({ name: node });
      }
    }
  },

  computed: {
    sideBar() {
      return (
        this.$route.name !== "splash" &&
        this.$q.screen.width > this.$q.screen.sizes.sm
      );
    },
    hasFooter() {
      return this.$route.name !== "splash";
    }
  }
};
</script>
