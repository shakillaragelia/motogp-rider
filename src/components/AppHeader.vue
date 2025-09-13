<template>
  <header id="header" class="header d-flex align-items-center sticky-top">
    <div class="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
      <RouterLink to="/" class="logo d-flex align-items-center">
        <img src="/img/motoGPlogo.png" alt="Riders Card Logo" class="sitename" />
      </RouterLink>

      <!-- NAVBAR -->
      <nav id="navmenu" class="navmenu">
        <ul>
          <li><a href="#home" class="active">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#riders">Riders</a></li>
          <li><a href="#teams">Teams Details</a></li>
          <li><a href="#schedule">Race Schedule</a></li>
          <li><a href="#contact">Contact</a></li>
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
        <!-- <div class="cta-buttons">
          <a href="#" class="btn-apply">Apply Now</a>
          <a href="#" class="btn-tour">Campus Tour</a>
        </div> -->
        <!-- <div class="announcement">
          <div class="announcement-badge">New</div>
          <p>Fall 2025 Applications Open - Early Decision Deadline December 15</p>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>