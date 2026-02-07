<template>
  <NuxtLink to="/visitors-stats" class="kpi-card visitors-count">
    <div class="card-top">
      <div class="icon-box">👥</div>
      <div class="arrow-box">↗</div>
    </div>
    <div class="card-bottom">
      <div class="amount-row">
        <span class="count">38</span>
        <span class="badge blue">+8</span>
      </div>
      <div class="label">In this month</div>
    </div>
  </NuxtLink>
</template>

<style scoped>
.kpi-card {
  background: white;
  border-radius: var(--radius-xl);
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;
  color: var(--color-text-dark);
  transition: transform 0.2s;
  height: 180px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.03);
}

.kpi-card:hover {
  transform: translateY(-4px);
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.icon-box {
  width: 40px;
  height: 40px;
  background: var(--color-gray-soft);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.arrow-box {
  width: 36px;
  height: 36px;
  border: 1px solid var(--color-gray-medium);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.amount-row {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
}

.count {
  font-size: 2.2rem;
  font-weight: 800;
  letter-spacing: -1px;
}

.badge {
  background: var(--color-blue);
  color: var(--color-blue-dark);
  padding: 2px 8px;
  border-radius: var(--radius-full);
  font-size: 0.8rem;
  font-weight: 700;
}

.label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-text-muted);
}
</style>
