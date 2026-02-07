<template>
  <NuxtLink to="/statistics-details" class="chart-card statistics">
    <div class="card-header">
      <div class="title-group">
        <div class="icon-box">📊</div>
        <h2>Statistics</h2>
      </div>
      <div class="controls">
        <button class="toggle-btn">Monthly ⌄</button>
        <button class="filter-btn">⚙️</button>
      </div>
    </div>

    <div class="data-summary">
      <div class="summary-item">
        <span class="label">Income</span>
        <div class="value-row">
          <span class="value">$150.09</span>
          <span class="trend up">↗ 4.1%</span>
          <span class="period">vs 143,938 Last Year</span>
        </div>
      </div>
      <div class="divider"></div>
      <div class="summary-item">
        <span class="label">Spend</span>
        <div class="value-row">
          <span class="value">$90.23</span>
          <span class="trend down">↘ 2%</span>
          <span class="period">vs 82,203 Last Year</span>
        </div>
      </div>
    </div>

    <div class="chart-visualization">
      <div class="y-axis">
        <span>$100</span>
        <span>$75</span>
        <span>$50</span>
        <span>$25</span>
        <span>$10</span>
      </div>
      <div class="bars-container">
        <div v-for="i in 5" :key="i" class="bar-group">
          <!-- Multi-colored bars representing Income/Spend -->
          <div class="bar-pair">
            <div class="bar blue" :style="{ height: (Math.random() * 60 + 20) + '%' }"></div>
            <div class="bar lime" :style="{ height: (Math.random() * 60 + 20) + '%' }"></div>
          </div>
          <span class="month-label">{{ ['May', 'Jun', 'Jul', 'Aug', 'Sep'][i-1] }}</span>
          
          <!-- Tooltip on June -->
          <div v-if="i === 2" class="tooltip">
             <div class="tooltip-content">
               <strong>$75,200</strong>
               <span>Jun 2023</span>
             </div>
             <div class="tooltip-point"></div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>
.chart-card {
  background: white;
  border-radius: var(--radius-xl);
  padding: 24px;
  text-decoration: none;
  color: var(--color-text-dark);
  box-shadow: 0 4px 12px rgba(0,0,0,0.03);
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  grid-column: span 2;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title-group {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
}

.title-group h2 {
  font-size: 1.2rem;
  margin: 0;
}

.controls {
  display: flex;
  gap: var(--space-xs);
}

.toggle-btn, .filter-btn {
  background: var(--color-gray-soft);
  padding: 6px 12px;
  border-radius: var(--radius-md);
  font-size: 0.85rem;
  font-weight: 600;
}

.data-summary {
  display: flex;
  gap: var(--space-xl);
}

.summary-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.summary-item .label {
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

.value-row {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  flex-wrap: wrap;
}

.summary-item .value {
  font-size: 1.8rem;
  font-weight: 800;
}

.trend {
  font-size: 0.8rem;
  font-weight: 700;
}

.trend.up { color: #51cf66; }
.trend.down { color: #fa5252; }

.period {
  font-size: 0.75rem;
  color: var(--color-text-muted);
}

.divider {
  width: 1px;
  background: var(--color-gray-medium);
}

.chart-visualization {
  height: 200px;
  display: flex;
  gap: var(--space-md);
  margin-top: var(--space-md);
}

.y-axis {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 0.75rem;
  color: var(--color-text-muted);
  padding-bottom: 24px;
}

.bars-container {
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  position: relative;
}

.bar-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
}

.bar-pair {
  display: flex;
  gap: 8px;
  align-items: flex-end;
  height: 150px;
}

.bar {
  width: 20px;
  border-radius: var(--radius-full);
}

.bar.blue { background: var(--color-blue); }
.bar.lime { background: var(--color-accent); }

.month-label {
  font-size: 0.75rem;
  color: var(--color-text-muted);
}

.tooltip {
  position: absolute;
  top: 10%;
  left: 30%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tooltip-content {
  background: black;
  color: white;
  padding: 8px 16px;
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
}

.tooltip-point {
  width: 8px;
  height: 8px;
  background: black;
  transform: rotate(45deg);
  margin-top: -4px;
}
</style>
