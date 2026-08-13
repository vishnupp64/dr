<template>
  <div class="award_wrapper" :style="{ backgroundColor: bg_color }">
    <img src="~/static/award.svg" alt="award icon" />
    <div :style="{ color: color }" class="given">{{ given }}</div>
    <div class="what_award">{{ what_award }}</div>
  </div>
</template>

<script>
export default {
  props: ["bg_color", "given", "what_award", "color"]
};
</script>

<style scoped>
.award_wrapper {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 375px;
  margin-top: 3rem;
  margin-bottom: 9rem;
}
.award_wrapper {
  padding-left: 2rem;
  padding-top: 1rem;
}
img {
  height: 5rem;
}
.award_wrapper .given {
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 3.2rem;
  line-height: 113.12%;
  margin-top: 1rem;

  align-items: center;
  letter-spacing: 0.035em;

  color: #0c81f6;
}
.award_wrapper .what_award {
  font-family: IBM Plex Sans Condensed;
  font-style: normal;
  font-weight: 500;
  font-size: 3.2rem;
  line-height: 113.12%;
  margin-top: 4rem;

  letter-spacing: 0.035em;

  color: #ffffff;
}
</style>
