<template>
  <div class="testmonial_wrpper">
    <img
      class="left_qoute"
      src="~/assets/images/iPhone 11 Pro/ci_double-quotes-l.svg"
      alt="quates"
    />
    <h4>ONE OF THE BEST DOCTOR IN INDIA</h4>

    <img
      class="right_qoute"
      src="~/assets/images/iPhone 11 Pro/ci_double-quotes-r.svg"
      alt="quates"
    />
    <div class="detail_wrapper">
      <div class="profile">
        <img
          src="~/assets/images/iPhone 11 Pro/Ellipse 1.png"
          alt="profile image"
        />
      </div>
      <div>
        <strong class="dr_name">dr.Reavathy Varma</strong>
        <span class="quali">MBBS, MDS </span>
        <span class="quali">Aster Medicty, Ernakulam </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile img {
  height: 80px;
  width: 80px;
}
.detail_wrapper {
  display: flex;
  position: absolute;
  justify-content: space-evenly;
  width: 100%;
  bottom: 1rem;
  z-index: 80;
  align-items: center;
  justify-content: space-evenly;
  vertical-align: center;
}

.testmonial_wrpper {
  position: relative;
  background-color: #eeeeee;
  min-height: 24em;
  margin-bottom: 6rem;
}
.left_qoute {
  position: relative;
  top: 0rem;
  left: 0rem;
}

.right_qoute {
  float: right;
  /* position: relative;
  right: 0;
  bottom: 0; */
}

h4 {
  padding-left: 2rem;
  padding-right: 2rem;
  font-family: Poller One;
  font-style: normal;
  font-weight: normal;
  font-size: 3rem;
  line-height: 103.6%;
  text-align: center;

  letter-spacing: 0.035em;

  color: #fd353f;
}
.dr_name {
  font-family: IBM Plex Sans Condensed;
  font-style: normal;
  font-weight: 500;
  font-size: 1.9rem;
  letter-spacing: 0.035em;
  text-transform: uppercase;

  color: #000000;
}
.quali {
  font-family: IBM Plex Sans Condensed;
  font-style: normal;
  font-weight: 300;
  font-size: 1.5rem;
  line-height: 103.6%;
  /* or 12px */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.035em;
  text-transform: uppercase;

  color: #43484d;
}
@media (min-width: 40rem) {
  .detail_wrapper {
    width: 90%;
  }
}
</style>
