<script setup>
import AppHeader from './components/AppHeader.vue'
import AboutView from './views/AboutView.vue';
import ContactView from './views/ContactView.vue';
import HomeView from './views/HomeView.vue';
import RidersView from './views/RidersView.vue';
import ScheduleView from './views/ScheduleView.vue';
import TeamsView from './views/TeamsView.vue';
</script> 

<template>
  <AppHeader />
  <section id="home">
    <HomeView />
  </section>
  <section id="about">
    <AboutView />
  </section>
  <section id="riders">
    <RidersView />
  </section>
  <section id="teams">
    <TeamsView />
  </section>
  <section id="schedule">
    <ScheduleView />
  </section>
  <section id="contact">
    <ContactView />
  </section>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>