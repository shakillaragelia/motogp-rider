<template>
  <AppHeader />
  <main class="main">
    <!-- Hero Section -->
    <section id="hero" class="hero section">
      <div class="hero-container">
        <div class="hero-content">
          <h1>Shaping Minds for Tomorrow's World</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis magna vel dolor mattis hendrerit. Vestibulum sodales dignissim ipsum id commodo.</p>
          <div class="cta-buttons">
            <a href="#" class="btn-apply">Apply Now</a>
            <a href="#" class="btn-tour">Campus Tour</a>
          </div>
          <div class="announcement">
            <div class="announcement-badge">New</div>
            <p>Fall 2025 Applications Open - Early Decision Deadline December 15</p>
          </div>
        </div>
      </div>
    </section>
    <RidersCards />
  </main>
  <AppFooter />
</template>

<script setup>
import AppFooter from '@/components/AppFooter.vue'
import AppHeader from '@/components/AppHeader.vue'
import RidersCards from '@/components/RidersCards.vue'
</script>

<style scoped>
</style>