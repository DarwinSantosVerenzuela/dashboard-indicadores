<template>
  <div class="page-container">
    <div class="back-link">
      <NuxtLink to="/">← Back to Dashboard</NuxtLink>
    </div>
    <header class="page-header">
      <h1>Total Accumulation</h1>
      <p>Historical overview of all donations and metrics collected.</p>
    </header>

    <div class="hero-card">
      <div class="total-big">$8,234.19</div>
      <div class="label">Lifetime Contributions</div>
    </div>

    <div class="history-grid">
      <div v-for="year in [2023, 2022, 2021]" :key="year" class="history-item">
        <h3>Year {{ year }}</h3>
        <span class="amount">$2,744.73</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  padding: var(--space-xl);
  max-width: 1000px;
  margin: 0 auto;
}

.back-link {
  margin-bottom: var(--space-md);
}

.back-link a {
  color: var(--color-blue-dark);
  font-weight: 600;
}

.hero-card {
  background: white;
  padding: var(--space-xl);
  border-radius: var(--radius-xl);
  text-align: center;
  margin-top: var(--space-xl);
  box-shadow: 0 10px 40px rgba(0,0,0,0.05);
}

.total-big {
  font-size: 5rem;
  font-weight: 800;
  color: #1a1a1a;
}

.history-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
  margin-top: var(--space-lg);
}

.history-item {
  background: white;
  padding: var(--space-lg);
  border-radius: var(--radius-lg);
  text-align: center;
}
</style>
