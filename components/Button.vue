<template>
  <!-- <button
    
    class="button"
    href="/about-me"
  >
    {{ text }}
  </button> -->
  <a class="button" :style="{ backgroundColor: bg_color }" :href="url">
    {{ text }}</a
  >
</template>
<script>
export default {
  props: ["text", "bg_color", "url"],
};
</script>
<style scoped>
.button {
  font-family: IBM Plex Sans;
  color: #fff;
  background-color: #0b5ed7;
  border: none;
}
</style>