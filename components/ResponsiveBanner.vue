<template>
  <div class="banner_wrpr">
    <div class="container">
      <div class="row">
        <div class="column column-50 innerwrapper">
          <img src="~/static/dr_v_paniker.png" alt="" />
        </div>
        <div class="column column-50">
          <div class="overlay_text_wrpr">
            <span
              >SAY<br />
              <span class="good_bye"> “ GOOD BYE ” </span> <br />
              TO PPH</span
            >
            <br />
            <br />
            <span class="dr_sign">Dr. Vasudeva panicker</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.banner_wrpr{
  width: 100%;
  float: left;
  overflow: hidden;
}

/* .banner_wrpr .container{
  width: 100%;
  max-width: 100%;
  padding: 0;
  margin: 0;
} */

.column.column-50.innerwrapper {
  width: 100%;
  height: 50vh;
  /* position: relative; */
}
.dr_sign {
  font-family: Shadows Into Light;
  font-style: normal;
  font-weight: normal;
  font-size: 2.1rem;
  line-height: 140.62%;
  background: white;
  text-align: center;
  color: #2d2a49;
}
.good_bye {
  color: #ff9900;
}
.column.column-50.innerwrapper img {
  height: 100%;
  object-fit: cover;
}
.overlay_text_wrpr {
  position: absolute;
  font-family: Alfa Slab One;
  font-style: normal;
  font-weight: 300;
  font-size: 2.6rem;
  line-height: 140.62%;
  margin-top: 9rem;
  top: 0rem;
  right: 0px;
  text-align: center;
  letter-spacing: 0.01em;
  color: #3b202f;
  text-shadow: 0px 2px 1px rgba(0, 0, 0, 0.25);
}
.container {
  padding: 0px;
}

@media (min-width: 40rem) {
  .column.column-50.innerwrapper {
    /* width: 100%; */
    height: 90%;
    position: relative;
    min-height: 645px;
  }

  .column.column-50.innerwrapper img {
    height: 100%;
    min-width: 100%;
    object-fit: cover;
  }
  .overlay_text_wrpr {
    left: 33rem;
    top: 19rem;
    font-size: 4.6rem;
    margin-top: 2rem;
  }
  .dr_sign {
    font-size: 3rem;
  }


  .banner_wrpr{
    padding: 35px 0;
  }

}

/* Larger than tablet screen */
@media (min-width: 80rem) {
  .overlay_text_wrpr {
    position: relative;
    left: 0;
    font-family: Alfa Slab One;
    font-style: normal;
    font-weight: normal;
    font-size: 7.6rem;
    line-height: 150.6%;
    text-align: center;
    letter-spacing: 0.01em;
    margin-top: 5rem;

    color: #3b202f;

    text-shadow: 0px 2px 1px rgba(0, 0, 0, 0.25);
  }
}
</style>
