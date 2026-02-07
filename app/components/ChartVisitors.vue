<template>
  <NuxtLink to="/visitors-details" class="chart-card visitors">
    <div class="card-header">
      <div class="title-group">
        <div class="icon-box">👤</div>
        <h2>Visitors</h2>
      </div>
      <button class="toggle-btn">This Month ⌄</button>
    </div>

    <div class="circles-visualization">
      <!-- Main Circle -->
      <div class="circle main-circle lime">
        <div class="content">
          <span class="value">2,3k</span>
          <span class="label">Individual</span>
        </div>
      </div>
      <!-- Secondary Circle -->
      <div class="circle sub-circle blue">
        <div class="content">
          <span class="value">1,2k</span>
          <span class="label">Corporate</span>
        </div>
      </div>
      <!-- Third Circle -->
      <div class="circle min-circle gray">
        <div class="content">
          <span class="value">982</span>
          <span class="label">Foundation</span>
        </div>
      </div>
    </div>

    <div class="targets-list">
      <div class="target-item">
        <div class="target-header">
          <span>Individual Target</span>
          <span>92%</span>
        </div>
        <div class="progress-bg"><div class="progress-fill lime" style="width: 92%"></div></div>
      </div>
      <div class="target-item">
        <div class="target-header">
          <span>Corporate Target</span>
          <span>67%</span>
        </div>
        <div class="progress-bg"><div class="progress-fill blue" style="width: 67%"></div></div>
      </div>
      <div class="target-item">
        <div class="target-header">
          <span>Foundation Target</span>
          <span>54%</span>
        </div>
        <div class="progress-bg"><div class="progress-fill gray" style="width: 54%"></div></div>
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

.toggle-btn {
  background: var(--color-gray-soft);
  padding: 6px 12px;
  border-radius: var(--radius-md);
  font-size: 0.85rem;
  font-weight: 600;
}

.circles-visualization {
  position: relative;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle {
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.circle.lime {
  width: 160px;
  height: 160px;
  background: var(--color-accent);
  z-index: 3;
  left: 10%;
}

.circle.blue {
  width: 120px;
  height: 120px;
  background: var(--color-blue);
  z-index: 2;
  right: 15%;
}

.circle.gray {
  width: 90px;
  height: 90px;
  background: var(--color-gray-medium);
  z-index: 4;
  bottom: 0px;
  left: 45%;
}

.circle .value {
  font-size: 1.6rem;
  font-weight: 800;
}

.circle .label {
  font-size: 0.75rem;
  font-weight: 600;
  opacity: 0.6;
}

.targets-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.target-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.target-header {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  font-weight: 600;
}

.progress-bg {
  height: 6px;
  background: var(--color-gray-soft);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  border-radius: var(--radius-full);
}

.progress-fill.lime { background: var(--color-accent); }
.progress-fill.blue { background: var(--color-blue-dark); }
.progress-fill.gray { background: var(--color-gray-medium); }
</style>
