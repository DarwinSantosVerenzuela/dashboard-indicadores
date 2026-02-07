<template>
  <div class="page-container">
    <div class="back-link">
      <NuxtLink to="/">← Back to Dashboard</NuxtLink>
    </div>
    <header class="page-header">
      <h1>Visitors Analytics</h1>
      <p>In-depth look at your audience segments and engagement.</p>
    </header>

    <div class="stats-wrapper">
       <ChartVisitors />
       <div class="data-table">
         <h3>Retention Rate</h3>
         <div class="retention-stat">
            <span class="value">64%</span>
            <span class="label">Average retention this month</span>
         </div>
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

.stats-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl);
  margin-top: var(--space-xl);
}

.data-table {
  background: white;
  padding: var(--space-xl);
  border-radius: var(--radius-xl);
  box-shadow: 0 10px 40px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.retention-stat {
  text-align: center;
}

.retention-stat .value {
  font-size: 4rem;
  font-weight: 800;
  color: var(--color-blue-dark);
  display: block;
}
</style>
