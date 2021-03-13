<template>
  <div class="work-tabs-component">
    <q-tabs
      v-model="tab"
      dense
      class="bg-black text-white"
      active-color="black"
      indicator-color="white"
      align="left"
    >
      <q-tab
        v-for="tabItem in tabs"
        :key="'tab-name_' + tabItem.name"
        :ripple="{ color: 'transparent' }"
        :name="tabItem.name"
        :label="tabItem.label"
      />
    </q-tabs>

    <q-tab-panels v-model="tab" animated class="bg-transparent text-white">
      <q-tab-panel name="screens">
        <q-scroll-area
          horizontal
          visible
          :bar-style="barStyle"
          :thumb-style="thumbStyle"
          :style="scrollStyle"
        >
          <q-img
            v-for="item in work.screens"
            :key="'screen-name_' + item.name"
            :src="item.src"
            class="screen"
          />
        </q-scroll-area>
      </q-tab-panel>

      <q-tab-panel name="description">
        <div class="text-h6">{{ work.longDescription }}</div>
      </q-tab-panel>

      <q-tab-panel name="links">
        <div
          class="row q-pl-md q-mt-md"
          v-for="link in work.links"
          :key="link.url"
        >
          <q-img
            class="q-mx-md"
            :src="'icons/' + link.icon + '.png'"
            width="25px"
            height="25px"
          ></q-img>
          <a class="text heavy" :href="link.url" target="_blank"
            >{{ link.preview }}
          </a>
        </div>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<style lang="scss">
.work-tabs-component {
  height: calc(100% - 250px);
  margin-left: 50px;

  .q-tabs {
    max-width: 390px;
  }

  .screen {
    // width: 175px;
    // height: 325px;
    min-width: 120px;
    max-height: 240px;
    max-width: 120px;
    min-height: 240px;
    margin-right: 50px;
  }
}
</style>

<script>
export default {
  name: "WorkTabs",

  props: ["work"],

  data() {
    return {
      tab: "screens",

      tabs: [
        { name: "screens", label: "Screens" },
        { name: "description", label: "Description" },
        { name: "links", label: "Links" }
      ],

      scrollStyle: {
        width: "100%",
        height: "100%"
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
  }
};
</script>
