<template>
  <div class="about_page">
    <!-- Hero -->
    <div class="about_hero">
      <div class="container about_hero_inner">
        <div class="hero_text_col">
          <nuxt-link to="/" class="back_link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            Back to Home
          </nuxt-link>
          <div class="hero_badge_sm">
            <span class="dot"></span>
            Gynaecologist · Inventor · Mentor
          </div>
          <h1 class="hero_name">Dr. V. Panicker</h1>
          <p class="hero_creds">MBBS, MD · Gynaecology & Anaesthesia</p>
          <p class="hero_intro">
            Rich in experiences and knowledge, Dr. Panicker has worked with the Government in
            facilitating safe, easy labour in remote areas with limited resources. Through his
            inventions, he has successfully reduced complications during childbirth at affordable costs.
          </p>
          <div class="hero_contact_row">
            <a href="tel:+919447351590" class="contact_chip">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              +91-9447351590
            </a>
            <a href="mailto:drvpaniker@gmail.com" class="contact_chip">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              drvpaniker@gmail.com
            </a>
          </div>
        </div>
        <div class="hero_img_col">
          <div class="img_frame">
            <img src="~/static/about_img.jpg" alt="Dr. V. Panicker" class="about_photo" />
          </div>
        </div>
      </div>
    </div>

    <!-- Stats row -->
    <div class="stats_bar">
      <div class="container stats_inner">
        <div class="stat_item">
          <span class="stat_n">18</span>
          <span class="stat_l">Medical Inventions</span>
        </div>
        <div class="stat_div"></div>
        <div class="stat_item">
          <span class="stat_n">30+</span>
          <span class="stat_l">Years in Service</span>
        </div>
        <div class="stat_div"></div>
        <div class="stat_item">
          <span class="stat_n">9+</span>
          <span class="stat_l">Publications</span>
        </div>
        <div class="stat_div"></div>
        <div class="stat_item">
          <span class="stat_n">Global</span>
          <span class="stat_l">Recognition</span>
        </div>
      </div>
    </div>

    <!-- Bio sections -->
    <div class="container bio_section">
      <div class="bio_grid">
        <div class="bio_card">
          <div class="bio_icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
          </div>
          <h2 class="bio_heading">Early Life & Education</h2>
          <p class="bio_para">Dr. Panicker was born into a humble lower middle class agricultural family in Nedumudi, Alappuzha (formerly Alleppey) in Kerala. A bright and hardworking student, he completed his schooling at the prestigious St. Mary's School in Chambakulam.</p>
          <p class="bio_para">He completed his graduation from SD College in Alappuzha and enrolled at the Government Medical College in Trivandrum for MBBS. He pursued Post Graduation in Anaesthesia at Government Medical College, Trivandrum, and later in Gynaecology at the renowned Calicut Medical College.</p>
          <p class="bio_para">Dr. Panicker is married to a Paediatrician and has two sons — one of whom has joined him in continuing the service, and an eldest son who is an Engineer in Bangalore.</p>
        </div>

        <div class="bio_card">
          <div class="bio_icon" style="background:#f0fdf4;color:#16a34a">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
          </div>
          <h2 class="bio_heading">Career</h2>
          <p class="bio_para">While pursuing Post Graduation, Dr. Panicker joined Government Services. His decade-long tenure was mostly in rural regions where facilities were minimal and resources were scarce — a period that paved the way for his inventions.</p>
          <p class="bio_para">Altogether, Dr. Panicker served in Government Services for 30 long years. Post retirement, he opened a Maternity Hospital in Kodungallur, Thrissur District, where he continues to serve patients and conduct workshops for fellow doctors.</p>
        </div>

        <div class="bio_card enquiry_card">
          <div class="bio_icon" style="background:#fff7ed;color:#ea580c">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          </div>
          <h2 class="bio_heading">Get in Touch</h2>
          <p class="bio_para">Interested in learning more about Dr. Panicker's inventions, workshops, or collaboration opportunities? Feel free to reach out.</p>
          <FormsContact />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about_page {
  width: 100%;
  background: #f8fafc;
  min-height: 100vh;
}

/* Hero */
.about_hero {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0c4a6e 100%);
  padding: 5rem 0;
  color: #ffffff;
}
.about_hero_inner {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 4rem;
  align-items: center;
}

.back_link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #64748b;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
  text-decoration: none;
  margin-bottom: 1.5rem;
  transition: color 0.2s;
}
.back_link:hover { color: #94a3b8; }

.hero_badge_sm {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.12);
  color: #94a3b8;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  padding: 5px 14px;
  border-radius: 9999px;
  margin-bottom: 1.25rem;
  text-transform: uppercase;
}
.dot {
  width: 6px; height: 6px;
  background: #34d399;
  border-radius: 50%;
  box-shadow: 0 0 6px #34d399;
}

.hero_name {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin: 0 0 0.5rem;
}
.hero_creds {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #38bdf8;
  margin-bottom: 1.5rem;
}
.hero_intro {
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-size: 1.05rem;
  font-weight: 300;
  color: #94a3b8;
  line-height: 1.7;
  max-width: 540px;
  margin-bottom: 2rem;
}

.hero_contact_row {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.contact_chip {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.12);
  color: #cbd5e1;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 9999px;
  text-decoration: none;
  transition: all 0.2s ease;
}
.contact_chip:hover { background: rgba(255,255,255,0.12); color: #ffffff; }

/* Photo */
.hero_img_col { display: flex; justify-content: center; }
.img_frame {
  width: 280px; height: 340px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 24px 60px rgba(0,0,0,0.5);
  border: 1px solid rgba(255,255,255,0.08);
  flex-shrink: 0;
}
.about_photo {
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: top center;
}

/* Stats bar */
.stats_bar {
  background: #ffffff;
  border-bottom: 1px solid #e2e8f0;
}
.stats_inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding: 2rem 0;
  flex-wrap: wrap;
}
.stat_item { text-align: center; }
.stat_n {
  display: block;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  color: #0284c7;
  line-height: 1;
}
.stat_l {
  display: block;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.72rem;
  font-weight: 600;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-top: 4px;
}
.stat_div { width: 1px; height: 40px; background: #e2e8f0; }

/* Bio */
.bio_section { padding: 5rem 0; }
.bio_grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}
.enquiry_card { grid-column: 1 / -1; }

.bio_card {
  background: #ffffff;
  border-radius: 20px;
  padding: 2.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 16px rgba(0,0,0,0.04);
}
.bio_icon {
  width: 52px; height: 52px;
  background: #eff6ff;
  color: #2563eb;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}
.bio_heading {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 1rem;
}
.bio_para {
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-size: 1rem;
  font-weight: 300;
  color: #475569;
  line-height: 1.75;
  margin-bottom: 1rem;
}
.bio_para:last-child { margin-bottom: 0; }

@media (max-width: 1024px) {
  .about_hero_inner { grid-template-columns: 1fr; }
  .hero_img_col { order: -1; }
  .bio_grid { grid-template-columns: 1fr; }
  .enquiry_card { grid-column: auto; }
}
@media (max-width: 640px) {
  .about_hero { padding: 3rem 0; }
  .img_frame { width: 220px; height: 270px; }
  .stats_inner { gap: 1.5rem; }
  .bio_section { padding: 3rem 0; }
  .bio_card { padding: 1.75rem; }
}
</style>
