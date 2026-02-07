<template>
  <div class="dashboard-content">
    <DashboardHeader />
    
    <div class="kpi-grid">
      <KpiDonations />
      <KpiGoals />
      <KpiVisitorsCount />
      <KpiTotal />
    </div>

    <div class="charts-grid">
      <ChartStatistics />
      <ChartVisitors />
    </div>
  </div>
</template>

<style scoped>
.dashboard-content {
  flex: 1;
  padding: var(--space-lg) var(--space-xl);
  overflow-y: auto;
}

.kpi-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-lg);
  margin-bottom: var(--space-lg);
}

.charts-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--space-lg);
}

@media (max-width: 1200px) {
  .kpi-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .charts-grid {
    grid-template-columns: 1fr;
  }
}
</style>
