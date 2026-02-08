<script setup>
const hoveredBar = ref(null)

const data = [
  { month: 'Ene', income: 45, spend: 35, incomeVal: '$45,000', spendVal: '$35,000' },
  { month: 'Feb', income: 55, spend: 45, incomeVal: '$55,000', spendVal: '$45,000' },
  { month: 'Mar', income: 65, spend: 55, incomeVal: '$65,000', spendVal: '$55,000' },
  { month: 'Abr', income: 50, spend: 40, incomeVal: '$50,000', spendVal: '$40,000' },
  { month: 'May', income: 45, spend: 35, incomeVal: '$45,000', spendVal: '$35,000' },
  { month: 'Jun', income: 75, spend: 65, incomeVal: '$75,200', spendVal: '$65,100' },
  { month: 'Jul', income: 30, spend: 25, incomeVal: '$30,500', spendVal: '$25,400' },
  { month: 'Ago', income: 55, spend: 45, incomeVal: '$55,800', spendVal: '$45,200' },
  { month: 'Sep', income: 85, spend: 75, incomeVal: '$85,400', spendVal: '$75,900' },
  { month: 'Oct', income: 70, spend: 60, incomeVal: '$70,000', spendVal: '$60,000' },
  { month: 'Nov', income: 60, spend: 50, incomeVal: '$60,000', spendVal: '$50,000' },
  { month: 'Dic', income: 90, spend: 80, incomeVal: '$90,000', spendVal: '$80,000' },
]
</script>

<template>
  <NuxtLink to="/statistics-details" class="chart-card statistics">
    <div class="card-header">
      <div class="title-group">
        <div class="icon-box">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#60a5fa" stroke-width="2">
            <line x1="18" y1="20" x2="18" y2="10" />
            <line x1="12" y1="20" x2="12" y2="4" />
            <line x1="6" y1="20" x2="6" y2="14" />
          </svg>
        </div>
        <h2>Estadísticas</h2>
      </div>
      <div class="controls">
        <button class="toggle-btn">Mensual ⌄</button>
        <button class="filter-btn">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#3b82f6" stroke-width="2">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        </button>
      </div>
    </div>

    <div class="data-summary">
      <div class="summary-item">
        <span class="label">Ingresos</span>
        <div class="value-row">
          <span class="value">$150.09</span>
          <span class="trend up">↗ 4.1%</span>
        </div>
      </div>
      <div class="divider"></div>
      <div class="summary-item">
        <span class="label">Gastos</span>
        <div class="value-row">
          <span class="value">$90.23</span>
          <span class="trend down">↘ 2%</span>
        </div>
      </div>
    </div>

    <div class="chart-visualization">
      <div class="y-axis">
        <span>$100</span>
        <span>$50</span>
        <span>$0</span>
      </div>
      <div class="bars-container">
        <div 
          v-for="(item, idx) in data" 
          :key="idx" 
          class="bar-group"
          @mouseenter="hoveredBar = idx"
          @mouseleave="hoveredBar = null"
        >
          <!-- Interactivity Tooltip (Burbujita) -->
          <Transition name="fade">
            <div v-if="hoveredBar === idx" class="tooltip">
              <div class="tooltip-content">
                <span class="tooltip-val">{{ item.incomeVal }}</span>
                <span class="tooltip-date">{{ item.month }} 2023</span>
              </div>
              <div class="tooltip-arrow"></div>
            </div>
          </Transition>

          <div class="bar-pair">
            <div class="bar blue" :style="{ height: item.income + '%' }"></div>
            <div class="bar lime" :style="{ height: item.spend + '%' }"></div>
          </div>
          <span class="month-label">{{ item.month }}</span>
          
          <!-- Hover Dot Indicator -->
          <div v-if="hoveredBar === idx" class="indicator-dot" :style="{ bottom: item.income + '%' }"></div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>
.chart-card {
  background: #f1f5f9; /* Gris un poco más oscuro */
  border-radius: 24px;
  padding: 32px; /* More padding to feel larger */
  text-decoration: none;
  color: #111827;
  box-shadow: none; /* Sin sombra */
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.card-header { display: flex; justify-content: space-between; align-items: center; }
.title-group { display: flex; align-items: center; gap: 8px; }
.title-group h2 { font-size: 1.1rem; margin: 0; font-weight: 700; }

.controls { display: flex; gap: 8px; }
.toggle-btn, .filter-btn { background: #dbeafe; border: 1px solid #bfdbfe; padding: 6px 12px; border-radius: 8px; font-size: 0.75rem; font-weight: 600; color: #3b82f6; }

.data-summary { display: flex; gap: 32px; padding: 8px 0; }
.summary-item { display: flex; flex-direction: column; gap: 4px; }
.summary-item .label { font-size: 0.8rem; color: #9ca3af; font-weight: 500; }
.value-row { display: flex; align-items: center; gap: 12px; }
.summary-item .value { font-size: 1.5rem; font-weight: 800; }
.trend { font-size: 0.75rem; font-weight: 700; padding: 2px 6px; border-radius: 6px; }
.trend.up { color: #10b981; background: #ecfdf5; }
.trend.down { color: #ef4444; background: #fef2f2; }

.divider { width: 1px; background: #f3f4f6; height: 40px; }

.chart-visualization { height: 260px; display: flex; gap: 16px; margin-top: 24px; position: relative; flex: 1; }
.y-axis { display: flex; flex-direction: column; justify-content: space-between; font-size: 0.7rem; color: #9ca3af; padding-bottom: 28px; font-weight: 500; }
.bars-container { flex: 1; display: flex; justify-content: space-around; align-items: flex-end; position: relative; }
.bar-group { display: flex; flex-direction: column; align-items: center; gap: 12px; width: 100%; position: relative; cursor: pointer; }
.bar-pair { display: flex; gap: 4px; align-items: flex-end; height: 200px; }
.bar { width: 14px; border-radius: 10px; transition: all 0.3s ease; }
.bar.blue { background: #bfdbfe; }
.bar.lime { background: #3b82f6; }
.bar-group:hover .bar.blue { background: #60a5fa; }

.month-label { font-size: 0.75rem; color: #9ca3af; font-weight: 600; }

/* Tooltip (Burbujita) Styles */
.tooltip {
  position: absolute;
  top: -65px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  pointer-events: none;
}

.tooltip-content {
  background: #000;
  color: white;
  padding: 8px 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
  min-width: 100px;
}

.tooltip-val { font-weight: 800; font-size: 0.95rem; }
.tooltip-date { font-size: 0.65rem; color: #9ca3af; }

.tooltip-arrow {
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #000;
  margin: 0 auto;
}

.indicator-dot {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #000;
  border: 2px solid white;
  border-radius: 50%;
  left: 31%; /* Centered over blue bar roughly */
  margin-bottom: -4px;
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.2s, transform 0.2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateX(-50%) translateY(10px); }
</style>
