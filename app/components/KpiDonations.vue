<template>
  <NuxtLink to="/donations" class="kpi-card donations">
    <div class="card-top">
      <div class="icon-box">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#9ca3af" stroke-width="1.5">
          <rect x="2" y="5" width="20" height="14" rx="2" ry="2" />
          <line x1="2" y1="10" x2="22" y2="10" />
        </svg>
      </div>
      <div class="arrow-box">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      </div>
    </div>
    <div class="card-bottom">
      <div class="amount">$740.89</div>
      <div class="label">Este mes</div>
    </div>
  </NuxtLink>
</template>

<style scoped>
.kpi-card {
  background: #3b82f6;
  border-radius: 24px;
  padding: 24px; /* More padding to feel larger */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;
  color: white; /* Contrast for darker blue */
  height: 160px; /* Slightly larger */
}

.card-top { display: flex; justify-content: space-between; align-items: center; }
.icon-box { width: 36px; height: 36px; background: white; border-radius: 12px; display: flex; align-items: center; justify-content: center; }
.arrow-box { width: 32px; height: 32px; border: 1px solid rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; }
.amount { font-size: 1.8rem; font-weight: 800; letter-spacing: -1px; }
.label { font-size: 0.8rem; font-weight: 600; opacity: 0.6; }
</style>
