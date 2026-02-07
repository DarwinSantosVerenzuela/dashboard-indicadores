<template>
  <div class="kpi-card">
    <div class="icon-wrapper">
      <!-- SVG Icon will be here -->
      <component :is="icon" v-if="icon" class="icon" />
    </div>
    <div class="content">
      <h3 class="title">{{ title }}</h3>
      <div class="value">{{ value }}</div>
      <div class="trend" :class="{ 'trend-up': trend > 0, 'trend-down': trend < 0 }">
        {{ trend > 0 ? '+' : '' }}{{ trend }}%
        <span class="trend-label">vs last month</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  value: string
  trend: number
  icon?: any
}>()
</script>

<style scoped>
.kpi-card {
  background: var(--bg-card); /* Glassmorphism base */
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  display: flex;
  align-items: flex-start;
  gap: var(--space-4);
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.kpi-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  border-color: var(--color-primary);
}

.icon-wrapper {
  background: rgba(99, 102, 241, 0.1); /* Primary with opacity */
  border-radius: var(--radius-md);
  padding: var(--space-3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
}

.icon {
  width: 24px;
  height: 24px;
}

.content {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.title {
  margin: 0;
  font-size: var(--text-sm);
  color: var(--text-secondary);
  font-weight: 500;
}

.value {
  font-size: var(--text-2xl);
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.2;
}

.trend {
  font-size: var(--text-sm);
  display: flex;
  align-items: center;
  gap: var(--space-1);
}

.trend-up {
  color: #10b981; /* Emerald 500 */
}

.trend-down {
  color: #ef4444; /* Red 500 */
}

.trend-label {
  color: var(--text-muted);
}
</style>
