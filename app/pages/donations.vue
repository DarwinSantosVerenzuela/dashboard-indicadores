<template>
  <div class="detail-page">
    <DashboardHeader />
    
    <div class="detail-content">
      <div class="back-nav">
        <NuxtLink to="/" class="back-btn">← Back to Dashboard</NuxtLink>
      </div>

      <div class="detail-card main-card">
        <div class="hero-section">
          <h1>Donations Overview</h1>
          <div class="total-badge">$740.89</div>
          <p>Total contributions for the current month</p>
        </div>

        <div class="stats-table">
          <div v-for="i in 5" :key="i" class="table-row">
            <span>Transaction #{{ 1000 + i }}</span>
            <span>Oct {{ 10 + i }}</span>
            <span class="amount">+$148.17</span>
            <span class="status">Completed</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.detail-page {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 var(--space-xl);
  height: 100vh;
  overflow: hidden;
}

.detail-content {
  flex: 1;
  overflow-y: auto;
  padding-bottom: var(--space-xl);
}

.back-nav {
  margin: var(--space-md) 0;
}

.back-btn {
  color: var(--color-blue-dark);
  font-weight: 600;
  text-decoration: underline;
}

.detail-card {
  background: white;
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  box-shadow: 0 10px 40px rgba(0,0,0,0.03);
}

.hero-section {
  text-align: center;
  padding-bottom: var(--space-xl);
  border-bottom: 1px solid var(--color-gray-soft);
  margin-bottom: var(--space-xl);
}

.total-badge {
  font-size: 4rem;
  font-weight: 800;
  color: var(--color-accent);
  margin: var(--space-sm) 0;
}

.table-row {
  display: flex;
  justify-content: space-between;
  padding: var(--space-md) 0;
  border-bottom: 1px solid var(--color-gray-soft);
}

.amount { font-weight: 700; color: #51cf66; }
.status { color: var(--color-text-muted); font-size: 0.8rem; }
</style>
