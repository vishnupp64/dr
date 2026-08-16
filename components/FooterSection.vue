<template>
  <footer class="footer">
    <div class="footer_top">
      <div class="container footer_grid">
        <!-- Brand -->
        <div class="brand_col">
          <a href="/" class="footer_logo">dr.VPANIKER</a>
          <p class="footer_tagline">
            Pioneering safer surgical care through innovation, compassion, and decades of dedicated service.
          </p>
          <a href="https://www.youtube.com/channel/UCu4mboA4HVGXNmp0YvIoLtQ" target="_blank" rel="noopener" class="yt_link" aria-label="YouTube Channel">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
            YouTube Channel
          </a>
        </div>

        <!-- Nav links -->
        <div class="links_col">
          <h4 class="col_heading">Navigation</h4>
          <ul class="footer_links">
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li><nuxt-link to="/about-me">About Me</nuxt-link></li>
            <li><nuxt-link to="/inventions">Inventions</nuxt-link></li>
            <li><nuxt-link to="/articles">Articles</nuxt-link></li>
            <li><nuxt-link to="/gallery">Gallery</nuxt-link></li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="links_col">
          <h4 class="col_heading">Contact</h4>
          <ul class="footer_links contact_list">
            <li>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Kodungallur, Thrissur, Kerala
            </li>
            <li>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <a href="tel:+919447351590">+91-9447351590</a>
            </li>
            <li>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <a href="mailto:drvpaniker@gmail.com">drvpaniker@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer_bottom">
      <div class="container footer_bottom_inner">
        <span class="copyright">© {{ new Date().getFullYear() }} Dr. V. Panicker. All rights reserved.</span>
        <span class="made_with">Designed with ♥ for better healthcare</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  width: 100%;
  background: #0f172a;
  font-family: 'IBM Plex Sans', sans-serif;
}

.footer_top {
  padding: 5rem 0 3rem;
  border-bottom: 1px solid rgba(255,255,255,0.07);
}

.footer_grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

/* Brand */
.footer_logo {
  display: inline-block;
  font-size: 1.8rem;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: 0.05em;
  text-decoration: none;
  margin-bottom: 1rem;
}
.footer_tagline {
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  max-width: 320px;
}
.yt_link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  color: #94a3b8;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s ease;
}
.yt_link:hover { background: rgba(255,0,0,0.12); border-color: rgba(255,0,0,0.3); color: #ff4444; }

/* Links */
.col_heading {
  font-size: 0.75rem;
  font-weight: 700;
  color: #475569;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}
.footer_links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}
.footer_links li a,
.footer_links li {
  font-size: 0.95rem;
  color: #64748b;
  text-decoration: none;
  transition: color 0.2s ease;
}
.footer_links li a:hover,
.footer_links a:hover { color: #e2e8f0; }

.contact_list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: #64748b;
}
.contact_list li svg { flex-shrink: 0; margin-top: 2px; color: #475569; }

/* Bottom bar */
.footer_bottom {
  padding: 1.5rem 0;
}
.footer_bottom_inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.copyright, .made_with {
  font-size: 0.8rem;
  color: #334155;
}
.made_with { color: #334155; }

@media (max-width: 1024px) {
  .footer_grid { grid-template-columns: 1fr 1fr; }
  .brand_col { grid-column: 1 / -1; }
}
@media (max-width: 640px) {
  .footer_grid { grid-template-columns: 1fr; gap: 2.5rem; }
  .footer_top { padding: 3.5rem 0 2.5rem; }
  .footer_bottom_inner { flex-direction: column; text-align: center; }
}
</style>
