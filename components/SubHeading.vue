<template>
  <div class="common_title_wrpr">
    <div class="container">
      <div class="row">
        <div class="column">
          <div class="bar"></div>
          <div class="heading">{{ text }}</div>
          <div class="bar"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["text"]
};
</script>

<style scoped>

.common_title_wrpr{
  width: 100%;
  float: left;
  overflow: hidden;
}


.column.column-50 {
  display: block;
  margin: 0 auto;
}
.row {
  margin-top: 9rem;
  margin-bottom: 6rem;
}
.bar {
  height: 1.5px;
  border-top: 0.5px solid #868686;
}
.heading {
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 3rem;
  line-height: 140.62%;

  text-align: center;
  letter-spacing: 0.035em;

  color: #425e92;
}

@media (min-width: 40rem) {
  .bar {
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
}
</style>
