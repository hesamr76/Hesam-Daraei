<template>
  <q-page class="about-page">
    <back-name top="ABOUT" bottom="ME" />
    <div class="section" :class="{ hasSideBar: sideBar }">
      <div class="row">
        <q-img src="aboutMe.png" class="image" />
        <p class="text desc">{{ aboutMe }}</p>
      </div>
    </div>
  </q-page>
</template>

<style lang="scss">
.about-page {
  .section {
    .image {
      width: 457px;
      max-width: 100%;
      height: 263px;
    }

    .desc {
      width: 465px;
      max-width: 100%;
      margin: 32px 30px;
      padding: 0 8px;
      font-weight: 300;
      font-size: 16px;
      line-height: 27px;
      text-align: left;
    }
  }

  .hasSideBar {
    .image {
      margin-left: 32px;
    }

    .desc {
      margin: 0 0 0 32px;
      max-width: calc(100% - 525px);
    }
  }
}
</style>

<script>
import BackName from "components/BackName";

export default {
  name: "About",

  components: { BackName },

  data() {
    return {
      aboutMe:
        "Hessam Daraei was founded in 2017. ANYA works cover various areas such as design and development of full client systems, online games, web based softwares, mobile applications and bot messengers. Our team consists experts, designers and developers graduated from Sharif University, University of Tehran, Amirkabir University, and Massachusetts College of Art and Design. We seek new domains in the world of technology that could lead us to a modern future."
    };
  },

  computed: {
    sideBar() {
      return this.$q.screen.width > this.$q.screen.sizes.sm;
    }
  }
};
</script>
