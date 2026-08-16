<template>
  <div class="template_cover_wrpr">
    <div class="header_wrpr">
      <div class="container">
        <div class="row">
          <div class="column">
            <a
              class="web_name button button-clear"
              type="submit"
              value="DRVPANIKER.IN"
              href="/"
              >dr.VPANIKER</a
            >

            <ul class="nav">
              <li v-on:click="menu_click">
                <nuxt-link class="nav-link" to="/">HOME</nuxt-link>
              </li>
              <li v-on:click="menu_click">
                <nuxt-link class="nav-link" to="/about-me">ABOUT ME</nuxt-link>
              </li>
              <li v-on:click="menu_click">
                <nuxt-link class="nav-link" to="/inventions"
                  >INVENTIONS</nuxt-link
                >
              </li>
              <li v-on:click="menu_click">
                <nuxt-link class="nav-link" to="/articles">ARTICLES</nuxt-link>
              </li>
              <li v-on:click="menu_click">
                <nuxt-link class="nav-link" to="/gallery">GALLERY</nuxt-link>
              </li>
            </ul>
            <div class="hambergur" v-on:click="hambergur_click">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <!-- <h4 class="web_name"></h4> -->
          </div>
        </div>
      </div>
    </div>
    <Nuxt />
    <FooterSection />
  </div>
</template>




<script>
export default {
  methods: {
    hambergur_click: function () {
      document.querySelector(".nav").classList.toggle("active");
      document.querySelector(".hambergur").classList.toggle("active");
    },
    menu_click: function () {
      // console.log("menu_click_wroking");
      document.querySelector(".nav").classList.toggle("active");
      document.querySelector(".hambergur").classList.toggle("active");
    },
  },
};
</script>




<style scoped>
.web_name {
  margin-top: 0;
  font-family: 'IBM Plex Sans', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 1.6rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #0f172a !important;
  padding: 0;
  text-decoration: none;
  transition: color 0.2s ease;
}
.web_name:hover { color: #0284c7 !important; }

/* HEADER */

.template_cover_wrpr {
  width: 100%;
  float: left;
  padding-top: 60px;
}

.header_wrpr {
  width: 100%;
  float: left;
  box-shadow: 0 1px 0 rgba(0,0,0,0.08);
  position: fixed;
  left: 0;
  top: 0;
  height: 60px;
  z-index: 100;
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(0,0,0,0.06);
  transition: background 0.3s ease;
}

.header_wrpr .column {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.nav {
  width: auto;
  float: left;
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
  flex: 1 0;
  margin-bottom: 0;
  margin-right: 0;
  margin-left: auto;
  padding-left: 15px;
  display: none;
}

.nav li {
  width: auto;
  float: left;
  margin-right: 55px;
  list-style-type: none;
  margin-bottom: 0;
}

.nav li:last-child {
  margin-right: 0;
}

.nav-link {
  width: 100%;
  float: left;
  font-size: 0.88rem;
  font-weight: 600;
  font-family: 'IBM Plex Sans', sans-serif;
  color: #475569;
  transition: color 0.2s ease;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  text-decoration: none;
  padding: 4px 0;
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease;
}
.nav-link:hover, .nav-link.nuxt-link-active {
  color: #0284c7;
  border-bottom-color: #0284c7;
}

.hambergur {
  width: 35px;
  height: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 5px;
  margin-left: auto;
  z-index: 55;
  display: none;
}

.hambergur.active span {
  display: none;
  margin-bottom: 0;
}

.hambergur.active span:first-child {
  transform: rotate(50deg);
  display: block;
  position: relative;
  top: 0px;
}
.hambergur.active span:last-child {
  transform: rotate(-50deg);
  display: block;
  position: relative;
  top: -2px;
}

.hambergur span {
  width: 100%;
  float: left;
  height: 2px;
  background-color: #000;
  margin-bottom: 3px;
  transition: all 0.3s ease-in-out;
}

@media (min-width: 1025px) {
  .nav {
    display: flex;
  }
}

@media (max-width: 1024px) {
  .hambergur {
    display: flex;
  }

  .nav {
    position: fixed;
    width: 100%;
    height: 100vh;
    display: block;
    opacity: 0;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 55;
    background-color: #fff;
    transform: scale(0);
    transition: all 0.5s ease-in-out;
    padding: 5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  .nav.active {
    transform: scale(1);
    top: 0;
    left: 0;
    opacity: 1;
  }

  .nav li {
    width: auto;
    float: left;
    margin-right: 0;
    margin-bottom: 25px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    transition: all 1s ease-in-out;
    transition-delay: 0.5s;
    opacity: 0;
  }

  .nav.active li {
    opacity: 1;
  }

  .nav-link {
    width: auto;
    text-align: center;
    font-size: 2.5rem;
    position: relative;
  }

  .nav-link:focus {
    color: #242424;
  }

  .nav-link::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    top: auto;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #242424;
  }
}
</style>
