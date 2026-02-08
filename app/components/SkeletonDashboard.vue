<template>
  <div class="skeleton-dashboard">
    <div class="skeleton-header"></div>
    
    <div class="skeleton-kpis">
      <div v-for="i in 4" :key="i" class="skeleton-card kpi"></div>
    </div>

    <div class="skeleton-charts">
      <div class="skeleton-card main-chart"></div>
      <div class="skeleton-card side-chart"></div>
    </div>
  </div>
</template>

<style scoped>
.skeleton-dashboard {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;
  overflow: hidden;
}

.skeleton-header {
  height: 60px;
  width: 100%;
  background: #eee;
  border-radius: 12px;
  margin-bottom: 8px;
  animation: pulse 1.5s infinite ease-in-out;
}

.skeleton-kpis {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.skeleton-card {
  background: #eee;
  border-radius: 20px;
  animation: pulse 1.5s infinite ease-in-out;
}

.skeleton-card.kpi {
  height: 150px;
}

.skeleton-charts {
  display: flex;
  gap: 24px;
  flex: 1;
}

.skeleton-card.main-chart {
  flex: 1.8;
  height: 520px;
}

.skeleton-card.side-chart {
  flex: 1;
  height: 520px;
}

@keyframes pulse {
  0% { background-color: #f3f4f6; }
  50% { background-color: #e5e7eb; }
  100% { background-color: #f3f4f6; }
}

@media (max-width: 1400px) {
  .skeleton-charts { flex-direction: column; }
  .skeleton-card.main-chart, .skeleton-card.side-chart { height: 300px; }
}

@media (max-width: 1000px) {
  .skeleton-kpis { grid-template-columns: repeat(2, 1fr); }
}
</style>
