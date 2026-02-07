<template>
  <div class="page-container">
    <h1>Donators List</h1>
    <p>A comprehensive list of all your generous contributors.</p>
    <div class="list-card">
       <div v-for="i in 10" :key="i" class="list-item">
         <span>Donor #{{ i }}</span>
         <span class="amount">$100.00</span>
       </div>
    </div>
  </div>
</template>

<style scoped>
.page-container { padding: var(--space-xl); }
.list-card { background: white; border-radius: var(--radius-xl); padding: var(--space-lg); }
.list-item { display: flex; justify-content: space-between; padding: var(--space-sm) 0; border-bottom: 1px solid var(--color-gray-soft); }
.amount { font-weight: 700; color: var(--color-accent); font-size: 1.1rem; }
</style>
