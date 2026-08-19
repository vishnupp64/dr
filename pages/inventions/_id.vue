<template>
  <div class="detail_page" v-if="product">
    <div class="top_bar">
      <div class="container">
        <nuxt-link to="/inventions" class="back_link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>Back to Inventions Catalog</span>
        </nuxt-link>
      </div>
    </div>

    <div class="container detail_container">
      <!-- Main Showcase Info Card (Contains Image, Overview, Utility & Specifications) -->
      <div class="info_card">
        <div class="hero_showcase_grid">
          <!-- Left Column: Enlarged Image Showcase -->
          <div class="image_showcase">
            <div class="image_wrapper">
              <div class="detail_skeleton" :class="{ loaded: imgLoaded }"></div>
              <picture class="detail_picture" :class="{ visible: imgLoaded }">
                <source v-if="webpImage" :srcset="`/inventions/${webpImage}`" type="image/webp" />
                <img
                  :src="`/inventions/${product.img}`"
                  :alt="product.name"
                  loading="eager"
                  decoding="async"
                  width="800"
                  height="600"
                  @load="imgLoaded = true"
                  @error="imgLoaded = true"
                />
              </picture>
            </div>
          </div>

          <!-- Right Column: Badge, Title, Overview, Surgical Utility & Specifications -->
          <div class="info_details">
            <span class="app_badge" v-if="product.application">
              ⚡ {{ product.application }}
            </span>
            <h1 class="product_name">{{ product.name }}</h1>

            <div class="quick_blocks">
              <!-- Overview -->
              <div class="info_block" v-if="product.about">
                <h3><span class="icon">📋</span> Overview</h3>
                <p>{{ product.about }}</p>
              </div>

              <!-- Surgical Utility -->
              <div class="info_block highlight" v-if="product.use">
                <h3><span class="icon">💡</span> Surgical Utility</h3>
                <p>{{ product.use }}</p>
              </div>

              <!-- Technical Description & Specifications -->
              <div class="info_block spec_block" v-if="product.description">
                <h3><span class="icon">🔬</span> Technical Description & Specifications</h3>
                <p>{{ product.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Lower Split Section: Procedure Video Guide & Enquiry Form -->
      <div class="lower_grid" :class="{ single_col: !product.video_id }">
        <!-- Video Reference Card (if available) -->
        <div class="video_card" v-if="product.video_id">
          <div class="card_header">
            <span class="header_icon">🎥</span>
            <h2>Procedure Video Guide</h2>
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
        <div class="enquiry_card">
          <div class="enquiry_header">
            <div class="enquiry_icon">📩</div>
            <div>
              <h3>Medical Enquiries & Orders</h3>
              <p>For inquiries, ordering instruments, or training workshops with Dr. Panicker, please send your message below.</p>
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
      id: this.$route.params.id,
      imgLoaded: false
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
  padding-bottom: 4rem;
}

/* Top Bar */
.top_bar {
  background: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  padding: 0.85rem 0;
  margin-bottom: 1.75rem;
}

.back_link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #0284c7;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1.05rem;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.2s ease, color 0.2s ease;
  padding: 6px 14px;
  border-radius: 8px;
  background: #f0f9ff;
}

.back_link:hover {
  color: #0369a1;
  background: #e0f2fe;
  transform: translateX(-3px);
}

.detail_container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Unified Main Info Card */
.info_card {
  background: #ffffff;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 4px 24px rgba(15, 23, 42, 0.06);
  border: 1px solid #e2e8f0;
  margin-bottom: 1.75rem;
}

.hero_showcase_grid {
  display: grid;
  grid-template-columns: 440px 1fr;
  gap: 2.25rem;
  align-items: start;
}

.image_showcase {
  position: sticky;
  top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image_wrapper {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  height: 420px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px;
  box-sizing: border-box;
}

.detail_skeleton {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%);
  background-size: 200% 100%;
  animation: detailShimmer 1.4s infinite linear;
  z-index: 1;
  transition: opacity 0.3s ease;
}

.detail_skeleton.loaded {
  opacity: 0;
  pointer-events: none;
}

@keyframes detailShimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.detail_picture {
  position: relative;
  z-index: 2;
  opacity: 0;
  transition: opacity 0.35s ease;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.detail_picture.visible {
  opacity: 1;
}

.image_wrapper img {
  max-width: 100%;
  max-height: 380px;
  object-fit: contain;
  display: block;
}

.info_details {
  display: flex;
  flex-direction: column;
}

.app_badge {
  display: inline-block;
  align-self: flex-start;
  background: #e0f2fe;
  color: #0369a1;
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  padding: 5px 16px;
  border-radius: 9999px;
  margin-bottom: 0.85rem;
}

.product_name {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 2.35rem;
  font-weight: 800;
  color: #0f172a;
  line-height: 1.3;
  margin: 0 0 1.35rem 0;
  word-break: break-word;
}

.quick_blocks {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}

.info_block {
  background: #f8fafc;
  border-radius: 14px;
  padding: 1.15rem 1.35rem;
  border: 1px solid #e2e8f0;
}

.info_block.highlight {
  background: #f0f9ff;
  border-color: #bae6fd;
}

.info_block.spec_block {
  background: #f8fafc;
  border-color: #cbd5e1;
}

.info_block h3 {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 8px;
}

.info_block h3 .icon {
  font-size: 1.15rem;
}

.info_block p {
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-size: 1.1rem;
  color: #334155;
  line-height: 1.75;
  margin: 0;
}

/* Lower Section Grid (Video + Enquiry) */
.lower_grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.75rem;
  align-items: stretch;
}

.lower_grid.single_col {
  grid-template-columns: 1fr;
}

.video_card, .enquiry_card {
  background: #ffffff;
  border-radius: 20px;
  padding: 1.75rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 24px rgba(15, 23, 42, 0.04);
  display: flex;
  flex-direction: column;
}

.card_header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 1.15rem;
  padding-bottom: 0.85rem;
  border-bottom: 1px solid #f1f5f9;
}

.header_icon {
  font-size: 1.35rem;
}

.card_header h2 {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1.35rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0;
}

.video_wrapper {
  flex-grow: 1;
  display: flex;
  align-items: center;
  border-radius: 14px;
  overflow: hidden;
}

.video_container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
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
.enquiry_header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.35rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #f1f5f9;
}

.enquiry_icon {
  font-size: 1.6rem;
  background: #f0f9ff;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  flex-shrink: 0;
}

.enquiry_header h3 {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1.35rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 0.25rem 0;
}

.enquiry_header p {
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  color: #64748b;
  font-size: 1.05rem;
  line-height: 1.6;
  margin: 0;
}

.form_holder {
  width: 100%;
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .hero_showcase_grid {
    grid-template-columns: 360px 1fr;
    gap: 1.75rem;
  }
  .image_wrapper {
    height: 350px;
  }
  .image_wrapper img {
    max-height: 310px;
  }
  .product_name {
    font-size: 2rem;
  }
  .info_block p {
    font-size: 1.05rem;
    line-height: 1.7;
  }
}

@media (max-width: 850px) {
  .hero_showcase_grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .image_showcase {
    position: relative;
    top: 0;
  }
  .image_wrapper {
    height: 300px;
  }
  .image_wrapper img {
    max-height: 270px;
  }
  .product_name {
    font-size: 1.85rem;
  }
  .lower_grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

@media (max-width: 640px) {
  .info_card, .video_card, .enquiry_card {
    padding: 1.35rem;
  }
  .info_block p {
    font-size: 1rem;
    line-height: 1.65;
  }
  .enquiry_header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.6rem;
  }
}
</style>
