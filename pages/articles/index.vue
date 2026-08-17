<template>
  <div class="articles_page">
    <!-- Hero Banner -->
    <div class="hero_section">
      <div class="container">
        <div class="hero_badge">
          <span class="pulse_dot"></span>
          PEER-REVIEWED PUBLICATIONS
        </div>
        <h1 class="hero_title">Published Articles</h1>
        <p class="hero_subtitle">
          A collection of peer-reviewed publications, clinical studies, and research articles featuring Dr. Panicker's surgical innovations across India and beyond.
        </p>

        <!-- Search Bar -->
        <div class="search_wrapper">
          <svg class="search_icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Search by title, journal, region, or tag..."
            class="search_input"
          />
          <button v-if="searchQuery" @click="searchQuery = ''" class="clear_btn" aria-label="Clear search">✕</button>
        </div>
      </div>
    </div>

    <div class="container main_content">
      <!-- Stats Row -->
      <div class="stats_row">
        <div class="stat_item">
          <span class="stat_number">{{ articles.length }}</span>
          <span class="stat_label">Publications</span>
        </div>
        <div class="stat_divider"></div>
        <div class="stat_item">
          <span class="stat_number">{{ uniqueJournals }}</span>
          <span class="stat_label">Journals</span>
        </div>
        <div class="stat_divider"></div>
        <div class="stat_item">
          <span class="stat_number">{{ uniqueRegions }}</span>
          <span class="stat_label">Regions</span>
        </div>
      </div>

      <!-- Articles Grid -->
      <div class="articles_grid" v-if="filteredArticles.length > 0">
        <div
          v-for="article in filteredArticles"
          :key="article.id"
          class="article_card"
        >
          <!-- PDF Icon -->
          <div class="card_icon_wrap">
            <svg class="pdf_icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14 2V8H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9 15H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M9 18H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M9 12H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            <span class="pdf_label">PDF</span>
            <span v-if="article.files && article.files.length > 1" class="multi_badge">{{ article.files.length }} Files</span>
          </div>

          <div class="card_body">
            <div class="card_meta">
              <span class="journal_badge">{{ article.journal }}</span>
              <span class="year_badge">{{ article.year }}</span>
            </div>
            <h2 class="card_title">{{ article.title }}</h2>
            <p class="card_desc">{{ article.description }}</p>

            <div class="card_footer">
              <div class="region_wrap">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span class="region_text">{{ article.region }}</span>
              </div>
              <div class="tags_wrap">
                <span class="tag" v-for="tag in article.tags.slice(0, 2)" :key="tag">{{ tag }}</span>
              </div>
            </div>
          </div>

          <!-- Multiple PDF download buttons -->
          <div class="card_cta_group">
            <a
              v-for="(fileObj, idx) in (article.files || [{ label: 'Open Article', file: article.file }])"
              :key="idx"
              :href="`/articles/${encodeURIComponent(fileObj.file)}`"
              target="_blank"
              rel="noopener noreferrer"
              class="card_cta"
            >
              <span>{{ fileObj.label }}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- No Results -->
      <div class="no_results" v-else>
        <div class="no_results_icon">🔍</div>
        <h3>No articles found</h3>
        <p>No articles match "{{ searchQuery }}". Try a different keyword.</p>
        <button @click="searchQuery = ''" class="reset_btn">Show All Articles</button>
      </div>

      <!-- End Divider -->
      <div class="end_section">
        <div class="bar"></div>
        <div class="End">End of Publications</div>
        <div class="bar"></div>
      </div>
    </div>
  </div>
</template>

<script>
import articlesData from '~/static/articlesdata.json'

export default {
  data() {
    return {
      articles: articlesData,
      searchQuery: ''
    }
  },
  computed: {
    filteredArticles() {
      if (!this.searchQuery.trim()) return this.articles
      const q = this.searchQuery.toLowerCase().trim()
      return this.articles.filter(a =>
        (a.title && a.title.toLowerCase().includes(q)) ||
        (a.journal && a.journal.toLowerCase().includes(q)) ||
        (a.region && a.region.toLowerCase().includes(q)) ||
        (a.description && a.description.toLowerCase().includes(q)) ||
        (a.tags && a.tags.some(t => t.toLowerCase().includes(q)))
      )
    },
    uniqueJournals() {
      return new Set(this.articles.map(a => a.journal)).size
    },
    uniqueRegions() {
      return new Set(this.articles.map(a => a.region)).size
    }
  }
}
</script>

<style scoped>
.articles_page {
  width: 100%;
  background: #f8fafc;
  min-height: 100vh;
  padding-bottom: 5rem;
  overflow-x: hidden;
}

/* Hero */
.hero_section {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #065f46 100%);
  padding: 5rem 1rem 4rem;
  color: #ffffff;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}

.hero_section::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(52, 211, 153, 0.08) 0%, rgba(255,255,255,0) 60%);
  pointer-events: none;
}

.hero_badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #34d399;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  padding: 6px 16px;
  border-radius: 9999px;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  box-sizing: border-box;
}

.pulse_dot {
  width: 8px;
  height: 8px;
  background: #34d399;
  border-radius: 50%;
  box-shadow: 0 0 10px #34d399;
  animation: pulse 2s infinite;
  flex-shrink: 0;
}

@keyframes pulse {
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.7); }
  70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(52, 211, 153, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(52, 211, 153, 0); }
}

.hero_title {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 3.2rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
  color: #ffffff;
  word-break: break-word;
}

.hero_subtitle {
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-size: 1.2rem;
  font-weight: 300;
  color: #cbd5e1;
  max-width: 680px;
  margin: 0 auto 2.5rem;
  line-height: 1.6;
}

/* Search */
.search_wrapper {
  position: relative;
  max-width: 580px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}

.search_icon {
  position: absolute;
  left: 18px;
  color: #64748b;
  pointer-events: none;
}

.search_input {
  width: 100%;
  padding: 14px 45px 14px 50px;
  background: #ffffff;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 9999px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1rem;
  color: #0f172a;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  outline: none;
  transition: all 0.25s ease;
  box-sizing: border-box;
}

.search_input:focus {
  border-color: #34d399;
  box-shadow: 0 12px 30px rgba(52, 211, 153, 0.3);
}

.clear_btn {
  position: absolute;
  right: 18px;
  background: #e2e8f0;
  border: none;
  color: #475569;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  font-size: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Main Content */
.main_content {
  padding-top: 3rem;
  box-sizing: border-box;
}

/* Stats Row */
.stats_row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  margin-bottom: 3rem;
  background: #ffffff;
  border-radius: 16px;
  padding: 1.5rem 2rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
}

.stat_item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.stat_number {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  color: #065f46;
  line-height: 1;
}

.stat_label {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.stat_divider {
  width: 1px;
  height: 40px;
  background: #e2e8f0;
}

/* Articles Grid */
.articles_grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.75rem;
  margin-bottom: 4rem;
}

/* Article Card */
.article_card {
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.06);
  border: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  cursor: pointer;
}

.article_card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(6, 95, 70, 0.12);
  border-color: #34d399;
}

.card_icon_wrap {
  background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
  padding: 1.5rem 1.75rem;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid #e2e8f0;
}

.pdf_icon {
  width: 36px;
  height: 36px;
  color: #059669;
}

.pdf_label {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  color: #059669;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  background: #ffffff;
  border: 1.5px solid #34d399;
  padding: 2px 8px;
  border-radius: 6px;
}

.card_body {
  padding: 1.5rem 1.75rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.card_meta {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.journal_badge {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.72rem;
  font-weight: 600;
  color: #0369a1;
  background: #e0f2fe;
  padding: 3px 10px;
  border-radius: 6px;
  letter-spacing: 0.02em;
}

.year_badge {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.72rem;
  font-weight: 600;
  color: #64748b;
  background: #f1f5f9;
  padding: 3px 10px;
  border-radius: 6px;
}

.card_title {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #0f172a;
  line-height: 1.4;
  margin: 0;
}

.card_desc {
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-size: 0.92rem;
  color: #64748b;
  line-height: 1.6;
  margin: 0;
  flex: 1;
}

.card_footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 0.5rem;
}

.region_wrap {
  display: flex;
  align-items: center;
  gap: 5px;
  color: #475569;
}

.region_wrap svg {
  flex-shrink: 0;
  color: #059669;
}

.region_text {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.82rem;
  font-weight: 600;
  color: #475569;
}

.tags_wrap {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.tag {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  color: #6d28d9;
  background: #ede9fe;
  padding: 2px 8px;
  border-radius: 6px;
}

.card_cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 1rem 1.75rem;
  background: #f8fafc;
  border-top: 1px solid #e2e8f0;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
  color: #059669;
  transition: background 0.2s ease;
}

.article_card:hover .card_cta {
  background: #ecfdf5;
}

/* No Results */
.no_results {
  text-align: center;
  padding: 4rem 2rem;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.03);
  margin-bottom: 4rem;
}

.no_results_icon { font-size: 3rem; margin-bottom: 1rem; }
.no_results h3 { font-size: 1.5rem; color: #0f172a; margin-bottom: 0.5rem; }
.no_results p { color: #64748b; margin-bottom: 1.5rem; }

.reset_btn {
  background: #059669;
  color: #ffffff;
  border: none;
  padding: 10px 24px;
  border-radius: 9999px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
}
.reset_btn:hover { background: #047857; }

/* End Section */
.end_section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
}
.bar { flex-grow: 1; max-width: 150px; height: 1px; background: #cbd5e1; }
.End {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  color: #94a3b8;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

/* Responsive */
@media (max-width: 1024px) {
  .hero_title { font-size: 2.4rem; }
}

@media (max-width: 768px) {
  .hero_title { font-size: 2rem; }
  .hero_subtitle { font-size: 1rem; }
  .articles_grid { grid-template-columns: 1fr; }
  .stats_row { gap: 1.5rem; padding: 1.25rem 1rem; }
}

@media (max-width: 480px) {
  .hero_section { padding: 2.5rem 0.8rem 2rem; }
  .hero_title { font-size: 1.75rem; }
  .search_input { padding: 12px 36px 12px 42px; font-size: 0.88rem; }
  .stat_number { font-size: 1.5rem; }
}
</style>
