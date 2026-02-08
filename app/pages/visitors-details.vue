<template>
  <div class="detail-page">
    <DashboardHeader />
    
    <div class="detail-content">
      <div class="back-nav">
        <NuxtLink to="/" class="back-btn">← Back to Dashboard</NuxtLink>
      </div>

      <div class="grid-layout">
        <ChartVisitors />
        
        <div class="detail-card info-card">
          <h2>Audience Insights</h2>
          <p>Detailed breakdown of visitor behavior and demographics.</p>
          
          <div class="behavior-stats">
             <div class="stat-item">
               <span>New Visitors</span>
               <span class="percent">74%</span>
             </div>
             <div class="stat-item">
               <span>Returning</span>
               <span class="percent">26%</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.detail-page {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 var(--space-xl);
  height: 100vh;
  overflow: hidden;
}

.detail-content {
  flex: 1;
  overflow-y: auto;
  padding-bottom: var(--space-xl);
}

.back-nav {
  margin: var(--space-md) 0;
}

.grid-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl);
}

.detail-card {
  background: white;
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  box-shadow: 0 10px 40px rgba(0,0,0,0.03);
}

.stat-item {
  display: flex;
  justify-content: space-between;
  padding: var(--space-md) 0;
  border-bottom: 1px solid var(--color-gray-soft);
  font-weight: 600;
}

.percent { color: var(--color-accent); }
</style>
