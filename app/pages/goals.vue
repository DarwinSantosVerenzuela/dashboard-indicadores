<template>
  <div class="page-container">
    <div class="back-link">
      <NuxtLink to="/">← Back to Dashboard</NuxtLink>
    </div>
    <header class="page-header">
      <h1>Goals Detail</h1>
      <p>Monitoring your active donation targets and progress.</p>
    </header>

    <div class="goals-grid">
      <div class="goal-item" v-for="i in 3" :key="i">
        <div class="goal-header">
          <h3>Campaign Goal #{{ i }}</h3>
          <span class="percentage">80%</span>
        </div>
        <div class="progress-container">
          <div class="progress-bar" style="width: 80%"></div>
        </div>
        <div class="goal-meta">
          <span>Raised: $800</span>
          <span>Target: $1000</span>
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

.page-header h1 {
  font-size: 2.5rem;
  margin: 0;
}

.goals-grid {
  display: grid;
  gap: var(--space-lg);
  margin-top: var(--space-xl);
}

.goal-item {
  background: white;
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  box-shadow: 0 10px 40px rgba(0,0,0,0.05);
}

.goal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-md);
}

.percentage {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--color-blue-dark);
}

.progress-container {
  height: 12px;
  background: var(--color-gray-soft);
  border-radius: var(--radius-full);
  overflow: hidden;
  margin-bottom: var(--space-sm);
}

.progress-bar {
  height: 100%;
  background: var(--color-accent);
  border-radius: var(--radius-full);
}

.goal-meta {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  color: var(--color-text-muted);
}
</style>
