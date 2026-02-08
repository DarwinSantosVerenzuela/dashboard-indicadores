<template>
  <div class="dashboard-view">
    <div class="header-anchor">
      <DashboardHeader />
    </div>
    
    <div class="content-scroller">
      <div class="inner-stack">
        <!-- KPI Cards -->
        <div class="kpi-set">
          <KpiDonations />
          <KpiGoals />
          <KpiVisitorsCount />
          <KpiTotal />
        </div>

        <!-- Charts Row -->
        <div class="visual-set">
          <ChartStatistics class="main-vis" />
          <ChartVisitors class="side-vis" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard-view {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 40px;
  background: white;
  flex: 1;
  min-height: 0;
}

.header-anchor {
  flex-shrink: 0;
  z-index: 10;
}

.content-scroller {
  flex: 1;
  overflow-y: auto;
  min-height: 0;
  padding-bottom: 40px;
}

.inner-stack {
  display: flex;
  flex-direction: column;
  gap: 16px; /* Reduced gap */
  margin-top: 0;
  min-height: min-content;
}

.kpi-set {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px; /* Reduced gap */
}

.visual-set {
  display: flex;
  gap: 16px; /* Reduced gap */
  min-height: 520px;
}

.main-vis { flex: 1.8; }
.side-vis { flex: 1; }

@media (max-width: 1400px) {
  .visual-set { flex-direction: column; min-height: auto; }
}

@media (max-width: 1000px) {
  .kpi-set { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .kpi-set { grid-template-columns: 1fr; }
  .dashboard-view { padding: 0 16px; }
}
</style>
