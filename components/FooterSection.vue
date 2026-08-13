<template>
  <footer>
    <div class="container">
      <!-- <div class="row">
        <div class="column column-50">
          <h2>DRVPANICKER.IN</h2>
          <div class="social_links">
            <a href="https://www.youtube.com/channel/UCu4mboA4HVGXNmp0YvIoLtQ">
              <img
                src="~assets/images/iPhone 11 Pro/ant-design_facebook-filled.svg"
                alt="youtube social link"
              />
            </a>
            <nuxt-link to="">
              <img
                src="~assets/images/iPhone 11 Pro/ant-design_instagram-filled.svg"
                alt="youtube social link"
              />
            </nuxt-link>
            <a href="https://www.youtube.com/channel/UCu4mboA4HVGXNmp0YvIoLtQ">
              <img
                src="~assets/images/iPhone 11 Pro/akar-icons_youtube-fill.svg"
                alt="youtube social link"
              />
            </a>
          </div>
          <h3 class="sub_heading">LINKS</h3>
          <ul>
            <li><nuxt-link to="/">HOME</nuxt-link></li>
            <li><nuxt-link to="/about-me">ABOUT ME</nuxt-link></li>
            <li><nuxt-link to="/inventions">INVENTIONS</nuxt-link></li>
            <li><nuxt-link to="">BLOGS</nuxt-link></li>
          </ul>
          <h3 class="sub_heading">ADDRESS</h3>
          <p class="address">KODUNGALLUR, THIRSSUR, KERALA</p>
          <h3 class="sub_heading">Phone</h3>
          <a href="tel:+919447351590">+91-9447351590</a>
          <h3 class="sub_heading">E-Mail</h3>
          <a href="mailto:drvpaniker@gmail.com?Subject=Hello%20User"
            >VPANIKER@GMAIL.COM</a
          >
        </div>
      </div> -->
      
      
      <div class="row">
        <div class="column">
          <h2>DRVPANICKER.IN</h2>
          <div class="social_links">
            <a href="https://www.youtube.com/channel/UCu4mboA4HVGXNmp0YvIoLtQ">
              <img
                src="~assets/images/iPhone 11 Pro/ant-design_facebook-filled.svg"
                alt="youtube social link"
              />
            </a>
            <nuxt-link to="">
              <img
                src="~assets/images/iPhone 11 Pro/ant-design_instagram-filled.svg"
                alt="youtube social link"
              />
            </nuxt-link>
            <a href="https://www.youtube.com/channel/UCu4mboA4HVGXNmp0YvIoLtQ">
              <img
                src="~assets/images/iPhone 11 Pro/akar-icons_youtube-fill.svg"
                alt="youtube social link"
              />
            </a>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="column column-25">
          <h3 class="sub_heading">LINKS</h3>
          <ul>
            <li><nuxt-link to="/">HOME</nuxt-link></li>
            <li><nuxt-link to="/about-me">ABOUT ME</nuxt-link></li>
            <li><nuxt-link to="/inventions">INVENTIONS</nuxt-link></li>
            <li><nuxt-link to="">BLOGS</nuxt-link></li>
          </ul>
        </div>
        <div class="column column-25">
          <h3 class="sub_heading">ADDRESS</h3>
          <p class="address">KODUNGALLUR, <br>THIRSSUR,<br> KERALA</p>        
        </div>
        <div class="column column-25">
          <h3 class="sub_heading">PHONE</h3>
          <a href="tel:+919447351590">+91-9447351590</a>
        </div>
        <div class="column column-25">
          <h3 class="sub_heading">E-MAIL</h3>
          <a href="mailto:drvpaniker@gmail.com?Subject=Hello%20User"
            >VPANIKER@GMAIL.COM</a>  
        </div>

      </div>
      <div class="row">
        <div class="column">
          <span class="copyright">© 2021 Copyright vpaniker.in</span>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped>
a {
  font-size: 1.4rem;
  color: #979797;
}
.copyright {
  display: block;
  float: left;
  width: 100%;
  margin-top: 5rem;
  margin-bottom: 2rem;
  text-align: center;
  font-family: IBM Plex Sans Condensed;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 143%;
}
.social_links > * {
  margin-right: 2rem;
}



footer {
  width: 100%;
  float: left;
  overflow: hidden;
  font-family: IBM Plex Sans Condensed;
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 76%;
  letter-spacing: 0.11em;

  background: #000000;
  margin-top: 9rem;
  padding: 65px 0 15px 0;
}

footer row{
  width: 100%;
}


.column {
  margin-top: 1rem;
}
ul > li {
  list-style: none;
  margin-top: 3rem;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 76%;
  letter-spacing: 0.11em;
  text-decoration-line: underline;

  color: #979797;
}
ul > li > a {
  color: #979797;
}
h2 {
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 2.5rem;
  line-height: 76%;
  /* or 18px */

  letter-spacing: 0.11em;

  color: #ffffff;
}
.sub_heading {
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 76%;
  margin-top: 5rem;
  letter-spacing: 0.11em;

  color: #ffffff;
}
.address {
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 143%;
  /* or 20px */

  letter-spacing: 0.11em;

  color: #979797;
}





@media (max-width:576px) {
  footer .column.column-25{
    width: 100%;
    flex: 1 1 100%;
    max-width: 100%;
  }

  footer .column.column-60{
    width: 100%;
    flex: 1 1 100%;
    max-width: 100%;
  }

  footer .column.column-50{
    width: 100%;
    flex: 1 1 100%;
    max-width: 100%;
  }

}



</style>



