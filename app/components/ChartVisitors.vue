<script setup>
const hoveredSegment = ref(null)
</script>

<template>
  <NuxtLink to="/visitors-details" class="chart-card visitors">
    <div class="card-header">
      <div class="title-group">
        <div class="icon-box">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#60a5fa" stroke-width="1.5">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <polyline points="16 11 18 13 22 9" />
          </svg>
        </div>
        <h2>Visitantes</h2>
      </div>
      <button class="toggle-btn">Este Mes ⌄</button>
    </div>

    <div class="visitors-main">
      <div class="visual-container">
        <!-- Circular Visualization -->
        <div class="circles-grid">
          <div 
            class="circle lime-circle" 
            @mouseenter="hoveredSegment = 'Individual'" 
            @mouseleave="hoveredSegment = null"
          >
            <span class="circle-val">2,3k</span>
            <span class="circle-label">Individual</span>
            
            <Transition name="fade">
              <div v-if="hoveredSegment === 'Individual'" class="mini-tooltip">92.4% Orgánico</div>
            </Transition>
          </div>
          
          <div 
            class="circle blue-circle" 
            @mouseenter="hoveredSegment = 'Corporate'" 
            @mouseleave="hoveredSegment = null"
          >
            <span class="circle-val">1,2k</span>
            <span class="circle-label">Corporativo</span>

            <Transition name="fade">
              <div v-if="hoveredSegment === 'Corporate'" class="mini-tooltip">67.1% Retención</div>
            </Transition>
          </div>

          <div 
            class="circle gray-circle" 
            @mouseenter="hoveredSegment = 'Foundation'" 
            @mouseleave="hoveredSegment = null"
          >
            <span class="circle-val">982</span>
            <span class="circle-label">Fundación</span>
          </div>
        </div>
      </div>

      <div class="targets">
        <div class="target-item">
          <div class="target-head">
            <span>Meta Individual</span>
            <span class="target-val">92%</span>
          </div>
          <div class="progress-bar">
            <div class="progress lime" style="width: 92%"></div>
          </div>
        </div>
        <div class="target-item">
          <div class="target-head">
            <span>Meta Corporativo</span>
            <span class="target-val">67%</span>
          </div>
          <div class="progress-bar">
            <div class="progress blue" style="width: 67%"></div>
          </div>
        </div>
        <div class="target-item">
          <div class="target-head">
            <span>Meta Fundación</span>
            <span class="target-val">54%</span>
          </div>
          <div class="progress-bar">
            <div class="progress gray" style="width: 54%"></div>
          </div>
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
  gap: 20px;
}

.card-header { display: flex; justify-content: space-between; align-items: center; }
.title-group { display: flex; align-items: center; gap: 8px; }
.title-group h2 { font-size: 1.1rem; margin: 0; font-weight: 700; }
.icon-box { background: #dbeafe; padding: 6px; border-radius: 50%; display: flex; align-items: center; justify-content: center; }

.toggle-btn { background: #dbeafe; border: 1px solid #bfdbfe; padding: 6px 12px; border-radius: 12px; font-size: 0.75rem; font-weight: 600; color: #3b82f6; }

.visitors-main { display: flex; flex-direction: column; gap: 24px; }

.visual-container { height: 220px; display: flex; justify-content: center; position: relative; }

.circles-grid {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
}

.circle {
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.circle:hover { transform: scale(1.05); z-index: 10 !important; }

.lime-circle {
  width: 120px;
  height: 120px;
  background: #3b82f6;
  color: white; /* Contrast */
  left: 15%;
  z-index: 3;
}

.blue-circle {
  width: 100px;
  height: 100px;
  background: #bfdbfe;
  right: 20%;
  z-index: 2;
}

.gray-circle {
  width: 70px;
  height: 70px;
  background: #f3f4f6;
  bottom: 0px;
  left: 48%;
  z-index: 1;
}

.circle-val { font-size: 1.4rem; font-weight: 800; margin-bottom: -2px; }
.circle-label { font-size: 0.65rem; font-weight: 600; opacity: 0.6; }

.targets { display: flex; flex-direction: column; gap: 12px; }
.target-item { display: flex; flex-direction: column; gap: 6px; }
.target-head { display: flex; justify-content: space-between; font-size: 0.75rem; font-weight: 600; color: #4b5563; }
.target-val { color: #111827; }

.progress-bar { height: 6px; background: #f3f4f6; border-radius: 3px; overflow: hidden; }
.progress { height: 100%; border-radius: 3px; }
.progress.lime { background: #3b82f6; }
.progress.blue { background: #60a5fa; }
.progress.gray { background: #d1d5db; }

.mini-tooltip {
  position: absolute;
  top: -30px;
  background: black;
  color: white;
  padding: 4px 10px;
  border-radius: 8px;
  font-size: 0.65rem;
  font-weight: 700;
  white-space: nowrap;
  pointer-events: none;
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
