<template>
  <header id="header" class="header d-flex align-items-center sticky-top">
    <div class="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
      <RouterLink to="/" class="logo d-flex align-items-center">
        <i class="bi bi-buildings"></i>
        <h1 class="sitename">Riders Card</h1>
      </RouterLink>

      <!-- NAVBAR -->
      <nav id="navmenu" class="navmenu">
        <ul>
          <li>
            <RouterLink to="/" class="active">Home</RouterLink>
          </li>
          <li class="dropdown">
            <RouterLink to="/about">
              <span>About</span> <i class="bi bi-chevron-down toggle-dropdown"></i>
            </RouterLink>
            <ul>
              <li><RouterLink to="/about">About Us</RouterLink></li>
              <li><RouterLink to="/admissions">Admissions</RouterLink></li>
              <li><RouterLink to="/academics">Academics</RouterLink></li>
              <li><RouterLink to="/faculty-staff">Faculty &amp; Staff</RouterLink></li>
              <li><RouterLink to="/campus-facilities">Campus &amp; Facilities</RouterLink></li>
            </ul>
          </li>
          <li><RouterLink to="/students-life">Students Life</RouterLink></li>
          <li><RouterLink to="/news">News</RouterLink></li>
          <li><RouterLink to="/events">Events</RouterLink></li>
          <li><RouterLink to="/alumni">Alumni</RouterLink></li>
          <li class="dropdown">
            <a href="#"><span>More Pages</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
              <li><RouterLink to="/news-details">News Details</RouterLink></li>
              <li><RouterLink to="/event-details">Event Details</RouterLink></li>
              <li><RouterLink to="/privacy">Privacy</RouterLink></li>
              <li><RouterLink to="/terms-of-service">Terms of Service</RouterLink></li>
              <li><RouterLink to="/404">Error 404</RouterLink></li>
              <li><RouterLink to="/starter-page">Starter Page</RouterLink></li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="#"><span>Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
              <li><a href="#">Dropdown 1</a></li>
              <li class="dropdown">
                <a href="#"><span>Deep Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="#">Deep Dropdown 1</a></li>
                  <li><a href="#">Deep Dropdown 2</a></li>
                  <li><a href="#">Deep Dropdown 3</a></li>
                  <li><a href="#">Deep Dropdown 4</a></li>
                  <li><a href="#">Deep Dropdown 5</a></li>
                </ul>
              </li>
              <li><a href="#">Dropdown 2</a></li>
              <li><a href="#">Dropdown 3</a></li>
              <li><a href="#">Dropdown 4</a></li>
            </ul>
          </li>
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