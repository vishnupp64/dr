<template>
  <div class="invention_page">
    <!-- Hero Banner -->
    <div class="hero_section">
      <div class="container">
        <div class="hero_badge">
          <span class="pulse_dot"></span>
          SURGICAL INNOVATIONS & MEDICAL DEVICES
        </div>
        <h1 class="hero_title">Dr. Panicker's Inventions</h1>
        <p class="hero_subtitle">
          Explore 18 ground-breaking medical instruments engineered for safer, affordable, and highly efficient surgical and obstetric care.
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
            placeholder="Search inventions by title, application, or usage..."
            class="search_input"
          />
          <button v-if="searchQuery" @click="searchQuery = ''" class="clear_btn" aria-label="Clear search">
            ✕
          </button>
        </div>
      </div>
    </div>

    <div class="container main_content">
      <!-- Invention Grid -->
      <div class="invention_cover">
        <div class="invention_grid" v-if="filteredProducts.length > 0">
          <div class="grid_item" v-for="(p, index) in filteredProducts" :key="p.id">
            <InventionsCard :invention="p" :href="url(p)" :cardIndex="index" />
          </div>
        </div>

        <!-- No Results State -->
        <div class="no_results" v-else>
          <div class="no_results_icon">🔍</div>
          <h3>No inventions found</h3>
          <p>No matching instruments found for "{{ searchQuery }}". Try searching for another keyword.</p>
          <button @click="searchQuery = ''" class="reset_search_btn">Show All Inventions</button>
        </div>
      </div>

      <!-- End Divider -->
      <div class="end_section">
        <div class="bar"></div>
        <div class="End">End of Inventions Catalog</div>
        <div class="bar"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import InventionsCard from "~/components/inventions/Card.vue";

export default {
  components: {
    InventionsCard
  },
  data() {
    return {
      searchQuery: ""
    };
  },
  computed: {
    ...mapState(["storedata"]),
    products() {
      return this.storedata || [];
    },
    filteredProducts() {
      if (!this.searchQuery.trim()) {
        return this.products;
      }
      const q = this.searchQuery.toLowerCase().trim();
      return this.products.filter(p => {
        return (
          (p.name && p.name.toLowerCase().includes(q)) ||
          (p.application && p.application.toLowerCase().includes(q)) ||
          (p.description && p.description.toLowerCase().includes(q)) ||
          (p.about && p.about.toLowerCase().includes(q))
        );
      });
    }
  },
  methods: {
    url(p) {
      return `/inventions/${p.id}`;
    }
  }
};
</script>

<style scoped>
.invention_page {
  width: 100%;
  background: #f8fafc;
  min-height: 100vh;
  padding-bottom: 5rem;
  overflow-x: hidden;
}

/* Hero Section */
.hero_section {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0369a1 100%);
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
  background: radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, rgba(255,255,255,0) 60%);
  pointer-events: none;
}

.hero_badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #38bdf8;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  padding: 6px 18px;
  border-radius: 9999px;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  max-width: 100%;
  box-sizing: border-box;
}

.pulse_dot {
  width: 8px;
  height: 8px;
  background: #38bdf8;
  border-radius: 50%;
  box-shadow: 0 0 10px #38bdf8;
  animation: pulse 2s infinite;
  flex-shrink: 0;
}

@keyframes pulse {
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(56, 189, 248, 0.7); }
  70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(56, 189, 248, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(56, 189, 248, 0); }
}

.hero_title {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 3.6rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
  color: #ffffff;
  word-break: break-word;
}

.hero_subtitle {
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-size: 1.35rem;
  font-weight: 300;
  color: #cbd5e1;
  max-width: 740px;
  margin: 0 auto 2.5rem;
  line-height: 1.75;
}

/* Search Bar */
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
  flex-shrink: 0;
}

.search_input {
  width: 100%;
  padding: 14px 45px 14px 50px;
  background: #ffffff;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 9999px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1.05rem;
  color: #0f172a;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  outline: none;
  transition: all 0.25s ease;
  box-sizing: border-box;
}

.search_input:focus {
  border-color: #38bdf8;
  box-shadow: 0 12px 30px rgba(56, 189, 248, 0.3);
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

/* Main Content & Grid */
.main_content {
  padding-top: 3.5rem;
  box-sizing: border-box;
}

.invention_grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;
  width: 100%;
}

.grid_item {
  max-width: 350px;
  box-sizing: border-box;
}

/* Responsive Breakpoints */
@media (max-width: 1440px) {
  .hero_title {
    font-size: 3rem;
  }
}

@media (max-width: 1024px) {
  .hero_section {
    padding: 4rem 1.25rem 3rem;
  }
  .hero_title {
    font-size: 2.6rem;
  }
  .hero_subtitle {
    font-size: 1.25rem;
  }
  .invention_grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.75rem;
  }
}

@media (max-width: 768px) {
  .hero_section {
    padding: 3.5rem 1rem 2.5rem;
  }
  .hero_title {
    font-size: 2.2rem;
  }
  .hero_subtitle {
    font-size: 1.15rem;
    margin-bottom: 2rem;
  }
  .main_content {
    padding-top: 2rem;
  }
}

@media (max-width: 640px) {
  .invention_grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
}

@media (max-width: 480px) {
  .hero_section {
    padding: 2.5rem 0.8rem 2rem;
  }
  .hero_badge {
    font-size: 0.8rem;
    padding: 5px 14px;
    margin-bottom: 1rem;
    letter-spacing: 0.06em;
  }
  .hero_title {
    font-size: 1.9rem;
    margin-bottom: 0.8rem;
  }
  .hero_subtitle {
    font-size: 1.05rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
  .search_input {
    padding: 12px 36px 12px 42px;
    font-size: 0.95rem;
  }
  .search_icon {
    left: 14px;
    width: 16px;
    height: 16px;
  }
  .clear_btn {
    right: 12px;
    width: 20px;
    height: 20px;
    font-size: 10px;
  }
  .main_content {
    padding-top: 1.5rem;
  }
  .no_results {
    padding: 2.5rem 1rem;
  }
}

@media (max-width: 360px) {
  .hero_title {
    font-size: 1.6rem;
  }
  .hero_subtitle {
    font-size: 0.95rem;
  }
  .search_input {
    font-size: 0.9rem;
    padding: 10px 30px 10px 36px;
  }
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

.no_results_icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.no_results h3 {
  font-size: 1.6rem;
  color: #0f172a;
  margin-bottom: 0.5rem;
}

.no_results p {
  font-size: 1.1rem;
  color: #64748b;
  margin-bottom: 1.5rem;
  line-height: 1.7;
}

.reset_search_btn {
  background: #0284c7;
  color: #ffffff;
  border: none;
  padding: 10px 24px;
  border-radius: 9999px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
}

.reset_search_btn:hover {
  background: #0369a1;
}

/* End Section */
.end_section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
}

.bar {
  flex-grow: 1;
  max-width: 150px;
  height: 1px;
  background: #cbd5e1;
}

.End {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  color: #94a3b8;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
</style>
