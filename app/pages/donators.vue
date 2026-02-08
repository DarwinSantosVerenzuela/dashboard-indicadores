<template>
  <div class="page-container">
    <DashboardHeader />
    <div class="content-card">
      <h1>Lista de Donantes</h1>
      <p class="subtitle">Consulta aquí toda la información de tus donantes</p>
      
      <div class="list-container">
         <div v-for="i in 10" :key="i" class="list-item">
           <div class="donor-name">Donor #{{ i }}</div>
           <div class="donor-amount">$100.00</div>
         </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  padding: 0 var(--space-xl);
  flex: 1;
  display: flex;
  flex-direction: column;
}

.content-card {
  background: white;
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  margin-top: var(--space-md);
  box-shadow: 0 10px 40px rgba(0,0,0,0.03);
}

.subtitle {
  color: var(--color-text-muted);
  margin-bottom: var(--space-xl);
}

.list-item {
  display: flex;
  justify-content: space-between;
  padding: var(--space-md) 0;
  border-bottom: 1px solid var(--color-gray-soft);
}

.donor-name { font-weight: 600; }
.donor-amount { font-weight: 700; color: var(--color-accent); }
</style>
