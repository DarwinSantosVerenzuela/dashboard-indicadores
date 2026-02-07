<template>
  <div class="placeholder-page">
    <div class="back-link">
      <NuxtLink to="/">← Back to Dashboard</NuxtLink>
    </div>
    <h1>{{ route.path.replace('/', '').toUpperCase() }}</h1>
    <p>This is a placeholder page for the {{ route.path }} section.</p>
    <div class="empty-state">
      🚧 Under Construction
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
</script>

<style scoped>
.placeholder-page {
  padding: var(--space-xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.empty-state {
  font-size: 3rem;
  margin-top: var(--space-lg);
}
</style>
