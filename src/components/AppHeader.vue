<template>
  <header id="header" class="header d-flex align-items-center sticky-top">
    <div class="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
      <RouterLink to="/" class="logo d-flex align-items-center">
        <i class="bi bi-buildings"></i>
         <img src="/img/motoGPlogo.png" alt="Riders Card Logo" class="sitename" />
      </RouterLink>

      <!-- NAVBAR -->
      <nav id="navmenu" class="navmenu">
        <ul>
          <li>
            <RouterLink to="/" class="active">Home</RouterLink></li>
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
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>