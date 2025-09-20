<template>
  <div>
    <!-- Highlights Section -->
    <div class="highlights-section">
      <div class="row g-4">
        <div class="col-lg-4" v-for="(card, idx) in cards" :key="idx">
          <div class="highlight-card">
            <div class="highlight-image">
              <img :src="card.img" :alt="card.alt" class="img-fluid" />
            </div>
            <div class="highlight-content">
              <h5>{{ card.title }}</h5>
              <p>{{ card.desc }}</p>
              <RouterLink :to="card.link" class="btn btn-primary mt-2">View More</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- History Section -->
    <section id="history" class="history section">
      <div class="container">
        
        <!-- Values Section -->
        <div class="values-section mb-5">
          <div class="row">
            <div class="col-lg-12">
              <div class="values-header text-center mb-4">
                <span class="section-badge">Our Foundation</span>
                <h2 class="section-heading">Core Values &amp; Principles</h2>
              </div>
            </div>
          </div>
          <div class="row g-0">
            <div class="col-lg-4">
              <div class="value-block">
                <div class="value-number">01</div>
                <h3>Innovation</h3>
                <p>Proin eget tortor risus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar.</p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="value-block">
                <div class="value-number">02</div>
                <h3>Integrity</h3>
                <p>Vestibulum ac diam sit amet quam vehicula elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="value-block">
                <div class="value-number">03</div>
                <h3>Excellence</h3>
                <p>Donec sollicitudin molestie malesuada. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Accomplishments Section -->
        <div class="accomplishments-section">
          <div class="row align-items-center">
            <div class="col-lg-5">
              <div class="campus-visual">
                <img src='/img/rider/marcmarquez.jpeg' alt="Campus Facilities" class="main-image img-fluid">
                <div class="floating-stats">
                  <div class="stat-card">
                    <span class="stat-number">25+</span>
                    <span class="stat-label">Years Excellence</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-7">
              <div class="accomplishments-content">
                <span class="section-badge">Our Impact</span>
                <h2 class="section-heading">Measurable Excellence in Education</h2>
                <p class="section-text">Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
                <div class="achievements-grid">
                  <div class="achievement-item">
                    <span class="achievement-number">15,000+</span>
                    <span class="achievement-desc">Successful Graduates</span>
                  </div>
                  <div class="achievement-item">
                    <span class="achievement-number">98%</span>
                    <span class="achievement-desc">Employment Rate</span>
                  </div>
                  <div class="achievement-item">
                    <span class="achievement-number">45</span>
                    <span class="achievement-desc">International Partners</span>
                  </div>
                  <div class="achievement-item">
                    <span class="achievement-number">300+</span>
                    <span class="achievement-desc">Expert Faculty</span>
                  </div>
                </div>
                <div class="credentials">
                  <div class="credential-item">
                    <i class="bi bi-patch-check"></i>
                    <span>Nationally Accredited Institution</span>
                  </div>
                  <div class="credential-item">
                    <i class="bi bi-award"></i>
                    <span>Excellence in Teaching Award 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
const cards = [
  {
    img: '/img/rider/marcmarquez.jpeg',
    alt: 'Marc Marquez',
    title: 'Marc Marquez',
    desc: 'Marc Marquez || DUCATI LENOVO TEAM',
    link: '/rider/marcmarquez'
  },
  {
    img: '/img/rider/marcmarquez.jpeg',
    alt: 'Marc Marquez',
    title: 'Marc Marquez',
    desc: 'Marc Marquez || DUCATI LENOVO TEAM',
    link: '/rider/marcmarquez'
  },
  {
    img: '/img/rider/marcmarquez.jpeg',
    alt: 'Marc Marquez',
    title: 'Marc Marquez',
    desc: 'Marc Marquez || DUCATI LENOVO TEAM',
    link: '/rider/marcmarquez'
  }
]
</script>