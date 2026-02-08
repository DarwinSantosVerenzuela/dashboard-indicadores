<template>
  <div class="detail-page">
    <DashboardHeader />
    
    <div class="detail-content">
      <div class="back-nav">
        <NuxtLink to="/" class="back-btn">← Back to Dashboard</NuxtLink>
      </div>

      <div class="detail-card main-card">
        <div class="hero-section">
          <h1>Total Accumulation</h1>
          <div class="total-badge">$8,234.19</div>
          <p>Total funds raised across all campaigns</p>
        </div>

        <div class="growth-stats">
          <div class="stat-box">
            <span class="label">Growth vs Last Year</span>
            <span class="value">+12.4%</span>
          </div>
          <div class="stat-box">
            <span class="label">Active Donors</span>
            <span class="value">1,452</span>
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
  color: #339af0;
  margin: var(--space-sm) 0;
}

.growth-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-lg);
}

.stat-box {
  background: var(--color-gray-soft);
  padding: var(--space-lg);
  border-radius: var(--radius-lg);
  text-align: center;
}

.stat-box .label {
  display: block;
  font-size: 0.85rem;
  color: var(--color-text-muted);
  margin-bottom: 4px;
}

.stat-box .value {
  font-size: 2rem;
  font-weight: 800;
}
</style>
