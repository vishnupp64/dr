<template>
  <div class="inner_wrpr">
    <div class="img_wrpr">
      <img src="~/static/dr_v_paniker.png" alt="" />
    </div>
    <div class="overlay_text_wrpr">
      <span
        >SAY<br />
        <span class="good_bye"> “ GOOD BYE ” </span> <br />
        TO PPH</span
      >
      <br />
      <span class="dr_sign">Dr. Vasudeva panicker</span>
    </div>
  </div>
</template>



<style scoped>
.dr_sign {
  font-family: Shadows Into Light;
  font-style: normal;
  font-weight: normal;
  font-size: 2.1rem;
  line-height: 140.62%;
  background: white;
  /* or 22px */

  text-align: center;

  color: #2d2a49;
}
.good_bye {
  color: #36a900;
}
.inner_wrpr {
  width: 100%;
  height: 50vh;
  float: left;
  position: relative;
  /* display: flex; */
}

.img_wrpr {
  width: 50%;
  height: 100%;
}
.img_wrpr img {
  height: 100%;
  object-fit: cover;
}

.overlay_text_wrpr {
  position: absolute;
  font-family: Luckiest Guy;
  font-style: normal;
  font-weight: 300;
  font-size: 3.6rem;
  line-height: 140.62%;
  margin-top: 9rem;
  top: 0rem;
  right: 0px;
  /* width: 50%; */
  /* height: 50vh; */
  /* or 52px */

  text-align: center;
  letter-spacing: 0.01em;

  color: #3b202f;

  text-shadow: 0px 2px 1px rgba(0, 0, 0, 0.25);
}
.container {
  padding: 0;
}

@media (min-width: 40rem) {
}

/* Larger than tablet screen */
@media (min-width: 80rem) {
  p {
    color: red;
    font-size: inherit;
  }
}

/* Larger than desktop screen */
@media (min-width: 120rem) {
  p {
    color: yellow;
  }
}
</style>