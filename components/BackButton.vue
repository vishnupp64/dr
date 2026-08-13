<template>
  <a class="button button-clear" :href="href">
    <img class="allow-left" src="~/static/bi_arrow-left.svg" alt="" />
    {{label}}
  </a>
</template>
<script>
export default {
  props: ["label","href"]
}
</script>
<style scoped>
.button.button-clear {
  color: blue;
  padding-left: 0;
}
.allow-left {
  width: 2rem;
  height: 2rem;
  vertical-align: middle;
  margin-right: 1rem;
}
</style>
