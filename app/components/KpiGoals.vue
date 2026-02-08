<template>
  <NuxtLink to="/goals" class="kpi-card goals">
    <div class="card-top">
      <div class="icon-box">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#60a5fa" stroke-width="1.5">
          <path d="M6 9l6 6 6-6" />
          <path d="M12 3v12" />
          <path d="M5 20h14" />
        </svg>
      </div>
      <div class="arrow-box">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#60a5fa" stroke-width="2.5">
          <path d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      </div>
    </div>
    <div class="card-bottom">
      <div class="amount-row">
        <span class="percentage">80%</span>
        <span class="detail">$800 de $1k</span>
      </div>
      <div class="label">Metas de donación activas</div>
    </div>
  </NuxtLink>
</template>

<style scoped>
.kpi-card {
  background: #f1f5f9; /* Gris un poco más oscuro */
  border-radius: 24px;
  padding: 24px; /* More padding */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;
  color: #111827;
  height: 160px; /* Slightly larger */
  box-shadow: none; /* Sin sombra */
}

.card-top { display: flex; justify-content: space-between; align-items: center; }
.icon-box { width: 36px; height: 36px; background: #dbeafe; border-radius: 12px; display: flex; align-items: center; justify-content: center; }
.arrow-box { width: 32px; height: 32px; background: #dbeafe; border: 1px solid #bfdbfe; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
.amount-row { display: flex; align-items: baseline; gap: 6px; }
.percentage { font-size: 1.8rem; font-weight: 800; }
.detail { font-size: 0.75rem; color: #9ca3af; font-weight: 500; }
.label { font-size: 0.8rem; font-weight: 600; color: #6b7280; }
</style>
