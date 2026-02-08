<template>
  <NuxtLink to="/visitors-details" class="kpi-card visitors-count">
    <div class="card-top">
      <div class="icon-box">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#60a5fa" stroke-width="1.5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
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
        <span class="count">38</span>
        <span class="badge blue-badge">+8</span>
      </div>
      <div class="label">En este mes</div>
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
.amount-row { display: flex; align-items: center; gap: 8px; }
.count { font-size: 1.8rem; font-weight: 800; }
.blue-badge { background: #dbeafe; color: #2563eb; font-size: 0.75rem; font-weight: 700; padding: 2px 8px; border-radius: 8px; }
.label { font-size: 0.8rem; font-weight: 600; color: #6b7280; }
</style>
