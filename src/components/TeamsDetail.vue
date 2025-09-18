<template>
  <div class="rider-detail">
    <h1>Rider Detail</h1>
    <p>Slug: {{ slug }}</p>
    <!-- Tambahkan detail rider sesuai slug di sini -->
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const slug = route.params.slug
</script>

<style scoped>
.rider-detail {
  padding: 2rem;
}
</style>