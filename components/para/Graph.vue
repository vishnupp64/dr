<template>
  <div class="row">
    <div class="column">
      <h4 class="head_name">{{ heading }}</h4>
      <p class="short_desc">
        {{ para }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["heading", "para"],
};
</script>

<style scoped>
.head_name {
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 2rem;
  line-height: 26px;
  letter-spacing: 0.11em;
  text-transform: uppercase;

  color: rgba(0, 0, 0, 0.5);
}
.short_desc {
  font-family: IBM Plex Sans Condensed;
  font-style: normal;
  font-weight: 300;
  font-size: 1.6rem;
  margin-top: 2.4rem;
  /* line-height: 140.62%; */

  color: rgba(0, 0, 0, 0.72);
}
</style>
