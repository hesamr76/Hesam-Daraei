<template>
  <div class="footer-component flex items-center justify-between q-px-xl">
    <p class="text small">&copy; HDstudio 2021. All rights reserved.</p>
    <div class="flex flex-center">
      <a
        :href="social.link"
        target="_blank"
        v-for="social in socials"
        :key="social.src"
      >
        <q-img :src="social.src" :width="social.width" height="25px"></q-img>
      </a>
    </div>
  </div>
</template>

<style lang="scss">
.footer-component {
  position: absolute;
  width: 300px;
  bottom: 0;
  left: 0;
  padding-bottom: 50px;
  z-index: 3001;

  > div {
    margin: 15px 0 0 -10px;

    .q-img {
      margin: 0 11px;
    }
  }
}
</style>

<script>
export default {
  name: "Footer",
  data() {
    return {
      socials: [
        {
          link: "https://www.linkedin.com/in/hessam-daraei/",
          src: "icons/linkedin.png",
          width: "25px"
        },
        {
          link: "https://dribbble.com/hessam-hd/collections",
          src: "icons/dribble.png",
          width: "25px"
        },
        {
          link: "https://www.youtube.com/results?search_query=hessam+daraei",
          src: "icons/youtube.png",
          width: "36.6px"
        }
      ]
    };
  }
};
</script>
