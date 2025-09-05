<template>
  <div>
    <Header />
    <main class="container my-4">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from './AppHeader.vue'
import Footer from './AppFooter.vue'
</script>
