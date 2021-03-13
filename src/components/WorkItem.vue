<template>
  <div class="work-item-component" :class="{ withDetail: showDetail }">
    <div class="row">
      <q-img :src="work.banner" width="360px" height="200px" />

      <div class="column text-white" v-if="showDetail">
        <h2 class="text">{{ work.name }}</h2>
        <h3 class="text description q-mt-sm">{{ work.description }}</h3>
        <h4 class="text description">
          <span>{{ work.year }}</span>
          <b> . </b>
          <span>{{ work.role }}</span>
          <b> . </b>
          <span>{{ work.client }}</span>
        </h4>
      </div>
    </div>

    <p class="text q-mt-md" v-if="!showDetail">{{ work.summary }}</p>
  </div>
</template>

<style lang="scss">
.work-item-component {
  width: 410px;
  height: 310px;
  padding: 0 25px;

  .text {
    font-size: 20px;
    text-align: left;
  }
}

.work-item-component.withDetail {
  width: 1000px;
  padding: 0 0 0 50px;

  .column {
    padding-left: 50px;
    max-width: calc(100% - 360px - 50px);

    h2 {
      margin: 0;
      font-weight: 800;
      font-size: 40px;
      line-height: 55px;
    }

    .description {
      font-size: 16px;
      line-height: 22px;
    }
  }
}
</style>

<script>
export default {
  name: "WorkItem",

  props: ["work", "showDetail"]
};
</script>
