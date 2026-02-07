<template>
  <NuxtLink to="/donations" class="kpi-card donations">
    <div class="card-top">
      <div class="icon-box">💳</div>
      <div class="arrow-box">↗</div>
    </div>
    <div class="card-bottom">
      <div class="amount">$740.89</div>
      <div class="label">In this month</div>
    </div>
  </NuxtLink>
</template>

<style scoped>
.kpi-card {
  background: var(--color-accent);
  border-radius: var(--radius-xl);
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;
  color: var(--color-text-dark);
  transition: transform 0.2s;
  height: 180px;
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
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.arrow-box {
  width: 36px;
  height: 36px;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.amount {
  font-size: 2.2rem;
  font-weight: 800;
  letter-spacing: -1px;
}

.label {
  font-size: 0.85rem;
  font-weight: 600;
  opacity: 0.7;
}
</style>
