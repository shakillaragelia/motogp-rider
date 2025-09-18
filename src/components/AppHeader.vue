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
          <li>
            <component :is="isHome ? 'a' : RouterLink" :href="isHome ? '#home' : null" :to="!isHome ? '/' : null">Home</component>
          </li>
          <li>
            <component :is="isHome ? 'a' : RouterLink" :href="isHome ? '#about' : null" :to="!isHome ? '/about' : null">About Us</component>
          </li>
          <li>
            <component :is="isHome ? 'a' : RouterLink" :href="isHome ? '#riders' : null" :to="!isHome ? '/riders' : null">Riders</component>
          </li>
          <li>
            <component :is="isHome ? 'a' : RouterLink" :href="isHome ? '#teams' : null" :to="!isHome ? '/teams' : null">Teams Details</component>
          </li>
          <li>
            <component :is="isHome ? 'a' : RouterLink" :href="isHome ? '#schedule' : null" :to="!isHome ? '/race-schedule' : null">Race Schedule</component>
          </li>
          <li>
            <component :is="isHome ? 'a' : RouterLink" :href="isHome ? '#contact' : null" :to="!isHome ? '/contact' : null">Contact</component>
          </li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>
    </div>
  </header>

  <!-- HERO SECTION -->
  <section id="hero" class="hero section">
    <div class="hero-container">
      <div class="hero-content">
        <img src="/img/motoGPlogo.png" alt="MotoGP Logo" class="hero-logo" />
        <h1>Faster. Forward. Fearless.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis magna vel dolor mattis hendrerit. Vestibulum sodales dignissim ipsum id commodo.</p>
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