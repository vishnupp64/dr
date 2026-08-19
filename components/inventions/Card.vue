<template>
  <div class="card_wrapper">
    <div class="img_container">
      <!-- Skeleton shimmer shown until image loads -->
      <div class="img_skeleton" :class="{ loaded: imgLoaded }"></div>
      <picture class="img_picture" :class="{ visible: imgLoaded }">
        <source v-if="webpImage" :srcset="`/inventions/${webpImage}`" type="image/webp" />
        <img
          :src="`/inventions/${invention.img}`"
          :alt="invention.name"
          :loading="eagerLoad ? 'eager' : 'lazy'"
          decoding="async"
          width="600"
          height="400"
          @load="imgLoaded = true"
          @error="imgLoaded = true"
        />
      </picture>
      <div class="img_overlay"></div>
    </div>
    <div class="content">
      <h3 class="title">{{ invention.name }}</h3>
      <p class="app_text" v-if="invention.application">
        <span class="app_icon">💡</span> {{ invention.application }}
      </p>
      <p class="description">
        {{ invention.description }}
      </p>
      <div class="card_footer">
        <nuxt-link :to="href" class="view_btn">
          <span>View Details</span>
          <svg class="arrow_icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    href: { type: String, required: true },
    invention: { type: Object, required: true },
    // Pass index from parent; first 3 cards load eagerly (above the fold)
    cardIndex: { type: Number, default: 99 }
  },
  data() {
    return { imgLoaded: false };
  },
  computed: {
    // Generate webp path for ALL image types (jpg, jpeg, png)
    webpImage() {
      if (!this.invention || !this.invention.img) return "";
      return this.invention.img.replace(/\.(jpg|jpeg|png)$/i, ".webp");
    },
    // First 3 cards are likely above the fold — load them eagerly for better LCP
    eagerLoad() {
      return this.cardIndex < 3;
    }
  }
};
</script>

<style scoped>
.card_wrapper {
  background: #ffffff;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 10px 30px -8px rgba(15, 23, 42, 0.08), 0 4px 12px rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(226, 232, 240, 0.8);
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  max-width: 100%;
  box-sizing: border-box;
}

.card_wrapper:hover {
  transform: translateY(-8px);
  box-shadow: 0 22px 40px -12px rgba(14, 165, 233, 0.22), 0 8px 24px rgba(15, 23, 42, 0.06);
  border-color: rgba(14, 165, 233, 0.4);
}

.img_container {
  position: relative;
  width: 100%;
  height: 230px;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  box-sizing: border-box;
}

/* Skeleton shimmer: visible by default, fades out once image loads */
.img_skeleton {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    #f1f5f9 25%,
    #e2e8f0 50%,
    #f1f5f9 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.4s infinite linear;
  z-index: 1;
  transition: opacity 0.3s ease;
}
.img_skeleton.loaded {
  opacity: 0;
  pointer-events: none;
}
@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* Picture starts invisible, fades in once loaded */
.img_picture {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  opacity: 0;
  transition: opacity 0.35s ease;
}
.img_picture.visible {
  opacity: 1;
}

.img_container img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  object-position: center;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  display: block;
}

.card_wrapper:hover .img_container img {
  transform: scale(1.05);
}

.img_overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(15, 23, 42, 0.08) 100%);
  pointer-events: none;
}

.content {
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background: #ffffff;
  box-sizing: border-box;
}

.title {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.35;
  color: #0f172a;
  margin-top: 0;
  margin-bottom: 0.75rem;
  letter-spacing: -0.01em;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: color 0.2s ease;
  word-break: break-word;
}

.card_wrapper:hover .title {
  color: #0284c7;
}

.app_text {
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-size: 0.98rem;
  font-weight: 700;
  color: #0369a1;
  background: #f0f9ff;
  padding: 6px 14px;
  border-radius: 8px;
  margin-bottom: 1rem;
  border: 1px solid #e0f2fe;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  display: block;
}

.app_icon {
  margin-right: 4px;
}

.description {
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.75;
  color: #334155;
  margin-bottom: 1.4rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex-grow: 1;
  word-break: break-word;
}

.card_footer {
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid #f1f5f9;
}

.view_btn {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 10px !important;
  width: 100% !important;
  height: auto !important;
  line-height: 1.4 !important;
  padding: 12px 20px !important;
  background: linear-gradient(135deg, #0284c7 0%, #0284c7 100%) !important;
  color: #ffffff !important;
  font-family: 'IBM Plex Sans', sans-serif !important;
  font-size: 1.05rem !important;
  font-weight: 600 !important;
  border: none !important;
  border-radius: 12px !important;
  text-decoration: none !important;
  text-transform: none !important;
  letter-spacing: normal !important;
  transition: all 0.25s ease !important;
  box-shadow: 0 4px 12px rgba(2, 132, 199, 0.25) !important;
  box-sizing: border-box !important;
  cursor: pointer !important;
}

.view_btn:hover {
  background: linear-gradient(135deg, #0369a1 0%, #0284c7 100%);
  box-shadow: 0 6px 16px rgba(2, 132, 199, 0.4);
  transform: translateY(-1px);
}

.arrow_icon {
  transition: transform 0.25s ease;
  flex-shrink: 0;
}

.view_btn:hover .arrow_icon {
  transform: translateX(4px);
}

@media (max-width: 480px) {
  .img_container {
    height: 190px;
  }
  .content {
    padding: 1.1rem;
  }
  .title {
    font-size: 1.2rem;
  }
  .badge {
    font-size: 11px;
    padding: 4px 10px;
  }
}
</style>
