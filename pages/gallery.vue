<template>
  <!-- <div class="test"> -->
  <!-- <lightbox :items="images" class="gallery" test="test"></lightbox> -->
  <!-- </div> -->
  <div>
    <v-gallery
      :images="images"
      :index="index"
      @close="index = null"
    ></v-gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{
        backgroundImage: 'url(' + image + ')',
        width: '300px',
        height: '200px',
      }"
    ></div>
  </div>
</template>
<script>
// import VueGallery from "vue-gallery";
export default {
  data: function () {
    return {
      // images: [
      //   "https://dummyimage.com/1500/575757/ffffff&text=gallery-1+1",
      //   "https://dummyimage.com/400/000000/ffffff",
      // ],
      index: null,
    };
  },
  // components: {
  //   vgallery: VueGallery,
  // },
  computed: {
    images() {
      let images = [];
      for (let i = 1; i <= 29; i++) {
        images.push(`/gallery/${i}.jpeg`);
      }
      return images;
    },
  },
};
</script>
<style scoped>
.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;
}
</style>