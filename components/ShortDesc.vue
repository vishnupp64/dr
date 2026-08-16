<template>
  <section class="about_section">
    <div class="container">
      <div class="section_label">
        <span class="label_line"></span>
        <span class="label_text">ABOUT THE DOCTOR</span>
        <span class="label_line"></span>
      </div>

      <div class="about_grid">
        <div class="about_text_col">
          <h2 class="about_name">Dr. V. Panicker</h2>
          <p class="about_role">MBBS, MD · Gynaecologist & Anaesthetist</p>
          <p class="about_desc">
            With over three decades of relentless service, Dr. Panicker has made an
            unfathomable impact in Gynaecology and Anaesthesia. A physician who believes
            knowledge, power and heart come together to bring beautiful life into this world.
          </p>
          <blockquote class="about_quote">
            "The Medical profession may be considered as a special mission or devotion
            that calls for involvement, respect and wholehearted willingness to help people."
          </blockquote>
          <nuxt-link to="/about-me" class="read_more_btn">
            Read Full Biography
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </nuxt-link>
        </div>

        <div class="about_cards_col">
          <div class="feat_card">
            <div class="feat_icon" style="background:#eff6ff;color:#2563eb">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/></svg>
            </div>
            <div>
              <h3 class="feat_title">18 Inventions</h3>
              <p class="feat_desc">Patented surgical instruments for safer obstetric care</p>
            </div>
          </div>
          <div class="feat_card">
            <div class="feat_icon" style="background:#f0fdf4;color:#16a34a">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            </div>
            <div>
              <h3 class="feat_title">30+ Years</h3>
              <p class="feat_desc">Dedicated service in government & private sectors</p>
            </div>
          </div>
          <div class="feat_card">
            <div class="feat_icon" style="background:#fdf4ff;color:#9333ea">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
            </div>
            <div>
              <h3 class="feat_title">9+ Publications</h3>
              <p class="feat_desc">Peer-reviewed articles in international journals</p>
            </div>
          </div>
          <div class="feat_card">
            <div class="feat_icon" style="background:#fff7ed;color:#ea580c">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div>
              <h3 class="feat_title">Global Reach</h3>
              <p class="feat_desc">Instruments used across India, Oman & beyond</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about_section {
  width: 100%;
  background: #f8fafc;
  padding: 6rem 0;
  box-sizing: border-box;
}

.section_label {
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 4rem;
}
.label_line { flex: 1; max-width: 80px; height: 1px; background: #cbd5e1; }
.label_text {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  color: #94a3b8;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.about_grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;
}

/* Text column */
.about_name {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 2.8rem;
  font-weight: 800;
  color: #0f172a;
  letter-spacing: -0.02em;
  margin: 0 0 0.5rem;
}
.about_role {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #0284c7;
  margin-bottom: 1.5rem;
  letter-spacing: 0.02em;
}
.about_desc {
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-size: 1.1rem;
  font-weight: 300;
  color: #475569;
  line-height: 1.8;
  margin-bottom: 1.5rem;
}
.about_quote {
  font-family: 'IBM Plex Serif', serif;
  font-size: 1rem;
  font-style: italic;
  color: #64748b;
  border-left: 3px solid #0284c7;
  padding-left: 1.25rem;
  margin: 0 0 2rem;
  line-height: 1.7;
}
.read_more_btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #0f172a;
  color: #ffffff;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.25s ease;
}
.read_more_btn:hover {
  background: #1e293b;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(15,23,42,0.2);
}

/* Cards column */
.about_cards_col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}
.feat_card {
  background: #ffffff;
  border-radius: 16px;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 12px rgba(0,0,0,0.04);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: all 0.25s ease;
}
.feat_card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0,0,0,0.08);
  border-color: #bfdbfe;
}
.feat_icon {
  width: 48px; height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.feat_title {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 4px;
}
.feat_desc {
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-size: 0.88rem;
  color: #64748b;
  line-height: 1.5;
  margin: 0;
}

@media (max-width: 1024px) {
  .about_grid { grid-template-columns: 1fr; gap: 3rem; }
  .about_name { font-size: 2.2rem; }
}
@media (max-width: 640px) {
  .about_section { padding: 4rem 0; }
  .about_cards_col { grid-template-columns: 1fr; }
}
</style>
