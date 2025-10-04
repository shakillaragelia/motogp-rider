<template>
  <div style="padding: 2rem;">
    <el-card class="box-card">
      <h2>🏁 MotoGP Admin Panel</h2>
      <el-button type="primary" @click="onClick">Tambah Team</el-button>
    </el-card>
  </div>
</template>

<script setup lang="ts">
const onClick = () => {
  alert('Fitur tambah team coming soon 😎')
}
</script>

<style>
.box-card {
  max-width: 500px;
  margin: 0 auto;
}
</style>
