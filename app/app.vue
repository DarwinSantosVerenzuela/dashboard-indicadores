<template>
  <div class="dashboard-container">
    <header class="dashboard-header">
      <div class="header-content">
        <h1>Dashboard Indicadores</h1>
        <div class="user-profile">
          <span class="user-badge">DS</span>
        </div>
      </div>
    </header>

    <main class="dashboard-main">
      <section class="kpi-grid">
        <KpiCard 
          title="Total Visitors" 
          value="45,231" 
          :trend="12.5" 
          :icon="IconChart"
        />
        <KpiCard 
          title="Conversion Rate" 
          value="3.24%" 
          :trend="2.4" 
          :icon="IconChart"
        />
        <KpiCard 
          title="Revenue" 
          value="$12,845" 
          :trend="-1.2" 
          :icon="IconChart"
        />
        <KpiCard 
          title="Active Users" 
          value="1,204" 
          :trend="8.1" 
          :icon="IconChart"
        />
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import IconChart from '~/assets/icons/chart.svg'
</script>

<style scoped>
.dashboard-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.dashboard-header {
  background: var(--bg-card);
  border-bottom: 1px solid var(--border-color);
  padding: var(--space-4) var(--space-8);
  backdrop-filter: var(--backdrop-blur);
  position: sticky;
  top: 0;
  z-index: 10;
}

.header-content {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-content h1 {
  font-size: var(--text-xl);
  font-weight: 700;
  margin: 0;
}

.user-badge {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: var(--text-sm);
}

.dashboard-main {
  flex: 1;
  padding: var(--space-8);
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}

.kpi-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-6);
}
</style>
