<template>
  <NuxtLink to="/total-stats" class="kpi-card total-amount">
    <div class="card-top">
      <div class="icon-box">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#60a5fa" stroke-width="1.5">
          <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      </div>
      <div class="arrow-box">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#60a5fa" stroke-width="2.5">
          <path d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      </div>
    </div>
    <div class="card-bottom">
      <div class="amount">$8,234.19</div>
      <div class="label">Histórico total</div>
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
.amount { font-size: 1.8rem; font-weight: 800; letter-spacing: -1px; }
.label { font-size: 0.8rem; font-weight: 600; color: #6b7280; }
</style>
