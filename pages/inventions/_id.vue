<template>
  <div class="detail_page" v-if="product">
    <div class="top_bar">
      <div class="container">
        <nuxt-link to="/inventions" class="back_link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Back to Inventions Catalog
        </nuxt-link>
      </div>
    </div>

    <div class="container detail_container">
      <!-- Main Showcase Header -->
      <div class="showcase_grid">
        <!-- Image Card -->
        <div class="image_card">
          <div class="image_wrapper">
            <picture class="detail_picture">
              <source :srcset="`/inventions/${webpImage}`" type="image/webp" />
              <img :src="`/inventions/${product.img}`" :alt="product.name" loading="lazy" />
            </picture>
          </div>
        </div>

        <!-- Product Overview -->
        <div class="info_card">
          <span class="app_badge" v-if="product.application">
            ⚡ {{ product.application }}
          </span>
          <h1 class="product_name">{{ product.name }}</h1>

          <div class="quick_about" v-if="product.about">
            <h3>Overview</h3>
            <p>{{ product.about }}</p>
          </div>

          <div class="quick_use" v-if="product.use">
            <h3>Surgical Utility</h3>
            <p>{{ product.use }}</p>
          </div>
        </div>
      </div>

      <!-- Comprehensive Description Section -->
      <div class="spec_section">
        <div class="section_header">
          <h2>Technical Description & Specifications</h2>
          <div class="header_line"></div>
        </div>
        <div class="description_box">
          <p>{{ product.description }}</p>
        </div>
      </div>

      <!-- Video Reference & Procedure Guide -->
      <div class="video_section" v-if="product.video_id">
        <div class="section_header">
          <h2>How It Works & Procedure Guide</h2>
          <div class="header_line"></div>
        </div>
        <div class="video_wrapper">
          <div class="video_container">
            <iframe
              :src="`https://www.youtube-nocookie.com/embed/${product.video_id}?rel=0`"
              :title="`${product.name} Procedure Guide`"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              class="responsive_iframe"
            ></iframe>
          </div>
        </div>
      </div>

      <!-- Contact / Enquiry Section -->
      <div class="enquiry_section">
        <div class="enquiry_card">
          <div class="enquiry_header">
            <div class="enquiry_icon">📩</div>
            <div>
              <h3>Interested in this Invention?</h3>
              <p>For medical enquiries, ordering, or training workshops with Dr. Panicker, feel free to send a message.</p>
            </div>
          </div>
          <div class="form_holder">
            <FormsContact />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      id: this.$route.params.id
    };
  },
  computed: {
    ...mapState(["storedata"]),
    product() {
      if (!this.storedata) return null;
      return this.storedata.find(el => String(el.id) === String(this.id));
    },
    webpImage() {
      if (!this.product || !this.product.img) return "";
      return this.product.img.replace(/\.(jpg|jpeg|png)$/i, ".webp");
    }
  }
};
</script>

<style scoped>
.detail_page {
  background: #f8fafc;
  min-height: 100vh;
  padding-bottom: 5rem;
}

.top_bar {
  background: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  padding: 1rem 0;
  margin-bottom: 2.5rem;
}

.back_link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #0284c7;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.2s ease, color 0.2s ease;
}

.back_link:hover {
  color: #0369a1;
  transform: translateX(-4px);
}

.showcase_grid {
  display: grid;
  grid-template-columns: 480px 1fr;
  gap: 2.5rem;
  margin-bottom: 3.5rem;
  align-items: start;
}

@media (max-width: 1024px) {
  .showcase_grid {
    grid-template-columns: 400px 1fr;
    gap: 2rem;
  }
}

@media (max-width: 850px) {
  .showcase_grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.image_card {
  background: #ffffff;
  border-radius: 24px;
  padding: 1.5rem;
  box-shadow: 0 10px 35px -10px rgba(15, 23, 42, 0.08);
  border: 1px solid #e2e8f0;
}

.image_wrapper {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  background: #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image_wrapper img {
  width: 100%;
  max-height: 480px;
  object-fit: contain;

}

.badge {
  position: absolute;
  top: 16px;
  left: 16px;
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(8px);
  color: #38bdf8;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  padding: 6px 14px;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.info_card {
  display: flex;
  flex-direction: column;
}

.app_badge {
  display: inline-block;
  align-self: flex-start;
  background: #e0f2fe;
  color: #0369a1;
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-size: 0.88rem;
  font-weight: 700;
  padding: 6px 14px;
  border-radius: 9999px;
  margin-bottom: 1rem;
}

.product_name {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 2.4rem;
  font-weight: 800;
  color: #0f172a;
  line-height: 1.25;
  margin-bottom: 1.8rem;
}

.quick_about, .quick_use {
  background: #ffffff;
  border-radius: 16px;
  padding: 1.4rem 1.6rem;
  margin-bottom: 1.2rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 12px rgba(0,0,0,0.02);
}

.quick_about h3, .quick_use h3 {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 0.5rem;
}

.quick_about p, .quick_use p {
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-size: 1rem;
  color: #475569;
  line-height: 1.6;
}

/* Specs & Description */
.spec_section, .video_section {
  margin-bottom: 3.5rem;
}

.section_header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.section_header h2 {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1.6rem;
  font-weight: 700;
  color: #0f172a;
  white-space: nowrap;
}

.header_line {
  flex-grow: 1;
  height: 2px;
  background: linear-gradient(90deg, #0284c7 0%, #e2e8f0 100%);
  border-radius: 2px;
}

.description_box {
  background: #ffffff;
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 15px rgba(0,0,0,0.03);
}

.description_box p {
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-size: 1.05rem;
  line-height: 1.75;
  color: #334155;
}

.video_wrapper {
  background: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  padding: 0.8rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  border: 1px solid #e2e8f0;
}

.video_container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  border-radius: 14px;
  background: #0f172a;
}

.responsive_iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

/* Enquiry Section */
.enquiry_card {
  background: #ffffff;
  border-radius: 24px;
  padding: 2.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 10px 30px rgba(0, 102, 255, 0.05);
}

.enquiry_header {
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
  margin-bottom: 2rem;
}

.enquiry_icon {
  font-size: 2rem;
  background: #f0f9ff;
  width: 54px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
}

.enquiry_header h3 {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 0.3rem;
}

.enquiry_header p {
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  color: #64748b;
  font-size: 1rem;
}

.form_holder {
  width: 100%;
}
</style>
