<template>
  <div class="hero">
    <!-- Animated background blobs -->
    <div class="blob blob_1"></div>
    <div class="blob blob_2"></div>
    <div class="blob blob_3"></div>

    <div class="hero_inner container">
      <div class="hero_text">
        <div class="hero_badge">
          <span class="badge_dot"></span>
          Surgical Innovation · Obstetrics · Gynaecology
        </div>
        <h1 class="hero_heading">
          Say <span class="highlight">Goodbye</span><br />to PPH
        </h1>
        <p class="hero_sub">
          Dr. Vasudeva Panicker — gynaecologist, inventor, and pioneer.
          18 breakthrough medical instruments engineered for safer, affordable,
          and more effective surgical care across India and beyond.
        </p>
        <div class="hero_ctas">
          <nuxt-link to="/inventions" class="btn_primary">
            Explore Inventions
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </nuxt-link>
          <nuxt-link to="/about-me" class="btn_secondary">About Dr. Panicker</nuxt-link>
        </div>
        <div class="hero_stats">
          <div class="stat">
            <span class="stat_num">18</span>
            <span class="stat_lbl">Inventions</span>
          </div>
          <div class="stat_sep"></div>
          <div class="stat">
            <span class="stat_num">30+</span>
            <span class="stat_lbl">Years Service</span>
          </div>
          <div class="stat_sep"></div>
          <div class="stat">
            <span class="stat_num">9+</span>
            <span class="stat_lbl">Publications</span>
          </div>
          <div class="stat_sep"></div>
          <div class="stat">
            <span class="stat_num">∞</span>
            <span class="stat_lbl">Lives Saved</span>
          </div>
        </div>
      </div>

      <div class="hero_image_wrap">
        <div class="image_ring"></div>
        <div class="image_card">
          <img src="~/static/dr_v_paniker.png" alt="Dr. Vasudeva Panicker" class="doctor_img" />
        </div>
        <div class="floating_badge fb_bottom">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>
          Global Recognition
        </div>
      </div>
    </div>

    <!-- Wave bottom -->
    <div class="wave_wrap">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#f8fafc"/>
      </svg>
    </div>
  </div>
</template>

<style scoped>
.hero {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0c4a6e 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 6rem 0 5rem;
  box-sizing: border-box;
}

/* Animated blobs */
.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.15;
  animation: float 8s ease-in-out infinite;
}
.blob_1 { width: 500px; height: 500px; background: #3b82f6; top: -100px; left: -100px; animation-delay: 0s; }
.blob_2 { width: 400px; height: 400px; background: #06b6d4; top: 50%; right: -100px; animation-delay: 3s; }
.blob_3 { width: 350px; height: 350px; background: #8b5cf6; bottom: -100px; left: 40%; animation-delay: 5s; }

@keyframes float {
  0%, 100% { transform: translateY(0px) scale(1); }
  50% { transform: translateY(-30px) scale(1.05); }
}

.hero_inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
  position: relative;
  z-index: 2;
  width: 100%;
}

/* Text side */
.hero_badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.15);
  color: #94a3b8;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  padding: 6px 16px;
  border-radius: 9999px;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
}
.badge_dot {
  width: 7px; height: 7px;
  background: #10b981;
  border-radius: 50%;
  box-shadow: 0 0 8px #10b981;
  animation: pulse 2s infinite;
  flex-shrink: 0;
}
@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(16,185,129,0.7); }
  70% { box-shadow: 0 0 0 8px rgba(16,185,129,0); }
  100% { box-shadow: 0 0 0 0 rgba(16,185,129,0); }
}

.hero_heading {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: clamp(3rem, 6vw, 5.5rem);
  font-weight: 900;
  line-height: 1.05;
  color: #ffffff;
  margin: 0 0 1.5rem;
  letter-spacing: -0.03em;
}
.highlight {
  background: linear-gradient(90deg, #38bdf8, #818cf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero_sub {
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-size: 1.15rem;
  font-weight: 300;
  color: #94a3b8;
  line-height: 1.7;
  margin-bottom: 2.5rem;
  max-width: 520px;
}

.hero_ctas {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}
.btn_primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #0284c7, #0ea5e9);
  color: #ffffff;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  padding: 14px 28px;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.25s ease;
  box-shadow: 0 8px 24px rgba(2,132,199,0.4);
}
.btn_primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(2,132,199,0.55);
}
.btn_secondary {
  display: inline-flex;
  align-items: center;
  background: rgba(255,255,255,0.08);
  color: #e2e8f0;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  padding: 14px 28px;
  border-radius: 12px;
  text-decoration: none;
  border: 1px solid rgba(255,255,255,0.15);
  backdrop-filter: blur(8px);
  transition: all 0.25s ease;
}
.btn_secondary:hover {
  background: rgba(255,255,255,0.14);
  transform: translateY(-2px);
}

/* Stats */
.hero_stats {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}
.stat { text-align: center; }
.stat_num {
  display: block;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1.8rem;
  font-weight: 800;
  color: #38bdf8;
  line-height: 1;
}
.stat_lbl {
  display: block;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.72rem;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-top: 4px;
}
.stat_sep { width: 1px; height: 40px; background: rgba(255,255,255,0.1); }

/* Image side */
.hero_image_wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.image_ring {
  position: absolute;
  width: 380px; height: 380px;
  border-radius: 50%;
  border: 2px solid rgba(56,189,248,0.2);
  animation: spin 20s linear infinite;
}
.image_ring::before {
  content: '';
  position: absolute;
  width: 12px; height: 12px;
  background: #38bdf8;
  border-radius: 50%;
  top: 10px; left: 50%;
  box-shadow: 0 0 12px #38bdf8;
}
@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

.image_card {
  width: 320px; height: 380px;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05);
  position: relative;
  z-index: 2;
}
.doctor_img {
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: top center;
}

.floating_badge {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 7px;
  background: rgba(15,23,42,0.85);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.12);
  color: #e2e8f0;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  padding: 8px 14px;
  border-radius: 9999px;
  white-space: nowrap;
  z-index: 3;
  box-shadow: 0 8px 24px rgba(0,0,0,0.3);
}
.fb_top { top: 10px; right: -10px; }
.fb_bottom { bottom: 30px; left: -10px; }

/* Wave */
.wave_wrap {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  line-height: 0;
}
.wave_wrap svg { width: 100%; height: 80px; display: block; }

/* Responsive */
@media (max-width: 1024px) {
  .hero_inner { grid-template-columns: 1fr; text-align: center; gap: 3rem; }
  .hero_sub { margin: 0 auto 2.5rem; }
  .hero_ctas { justify-content: center; }
  .hero_stats { justify-content: center; }
  .hero_image_wrap { order: -1; }
  .image_card { width: 260px; height: 310px; }
  .image_ring { width: 310px; height: 310px; }
  .fb_top { right: 20px; }
  .fb_bottom { left: 20px; }
}
@media (max-width: 640px) {
  .hero { padding: 5rem 0 4rem; min-height: auto; }
  .hero_heading { font-size: 2.8rem; }
  .image_card { width: 220px; height: 270px; }
  .image_ring { width: 270px; height: 270px; }
  .floating_badge { font-size: 0.7rem; padding: 6px 10px; }
}
</style>
