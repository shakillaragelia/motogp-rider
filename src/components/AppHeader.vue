<template>
  <header id="header" class="header d-flex align-items-center sticky-top">
    <div class="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
      <RouterLink to="/" class="logo d-flex align-items-center">
        <img src="/img/motoGPlogo.png" alt="Riders Card Logo" class="sitename" />
      </RouterLink>

      <!-- NAVBAR -->
      <nav id="navmenu" class="navmenu">
        <ul>
          <li><RouterLink to="/" class="active">Home</RouterLink></li>
          <li><RouterLink to="/about">About Us</RouterLink></li>
          <li><RouterLink to="/riders">Riders</RouterLink></li>
          <li><RouterLink to="/teams">Teams Details</RouterLink></li>
          <li><RouterLink to="/race-schedule">Race Schedule</RouterLink></li>
          <li><RouterLink to="/contact">Contact</RouterLink></li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>
    </div>
  </header>

  <!-- HERO SECTION -->
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
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
/* Ambil tinggi navbar supaya section hero tidak tertutup */
#hero {
  margin-top: 80px; /* ganti sesuai tinggi navbar */
}

/* Opsional: bisa juga pakai padding-top */
.header {
  height: 80px; /* contoh tinggi navbar */
}

/* Responsive */
@media (max-width: 768px) {
  #hero {
    margin-top: 60px;
  }
}
</style>
