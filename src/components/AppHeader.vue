<template>
  <header id="header" class="header d-flex align-items-center sticky-top">
    <div class="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
      <component
        :is="isHome ? 'a' : RouterLink"
        :href="isHome ? '#home' : null"
        :to="!isHome ? '/' : null"
        class="logo d-flex align-items-center"
      >
        <img src="/img/motoGPlogo.png" alt="Riders Card Logo" class="sitename" />
      </component>

      <!-- NAVBAR -->
      <nav id="navmenu" class="navmenu">
  <ul>
    <li><RouterLink to="/" class="nav-link">Home</RouterLink></li>
    <li><RouterLink to="/about" class="nav-link">About</RouterLink></li>
    <li><RouterLink to="/riders" class="nav-link">Riders</RouterLink></li>
    <li><RouterLink to="/teams" class="nav-link">Teams</RouterLink></li>
    <li><RouterLink to="/race-schedule" class="nav-link">Schedule</RouterLink></li>
    <li><RouterLink to="/contact" class="nav-link">Contact</RouterLink></li>
  </ul>
</nav>

      <!-- .navbar -->
    </div>
  </header>

  <!-- HERO SECTION -->
  <section id="hero" class="hero section">
    <div class="hero-container">
      <div class="hero-content">
        <img src="/img/motoGPlogo.png" alt="MotoGP Logo" class="hero-logo" />
        <h1>Faster. Forward. Fearless.</h1>
        <p>Welcome to the most exciting sport on earth.
The world’s most fearless riders. The fastest bikes.
The most forward-thinking manufacturers.
One winner. Be part of it.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { computed } from 'vue'
const route = useRoute()
const isHome = computed(() => route.path === '/')
</script>