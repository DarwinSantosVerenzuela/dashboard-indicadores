<template>
  <div class="page-container">
    <div class="back-link">
      <NuxtLink to="/">← Back to Dashboard</NuxtLink>
    </div>
    <header class="page-header">
      <h1>Advanced Statistics</h1>
      <p>Full-page analytics and data visualization.</p>
    </header>

    <div class="content-box">
       <ChartStatistics />
       <div class="insights">
         <h3>Key Insights</h3>
         <ul>
           <li>Monthly income increased by 4.1% compared to last year.</li>
           <li>Spending is optimized, showing a 2% reduction.</li>
           <li>Average donation value is $150.09.</li>
         </ul>
       </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  padding: var(--space-xl);
  max-width: 1200px;
  margin: 0 auto;
}

.back-link {
  margin-bottom: var(--space-md);
}

.back-link a {
  color: var(--color-blue-dark);
  font-weight: 600;
}

.content-box {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--space-xl);
  margin-top: var(--space-xl);
}

.insights {
  background: white;
  padding: var(--space-xl);
  border-radius: var(--radius-xl);
  box-shadow: 0 10px 40px rgba(0,0,0,0.05);
}

.insights h3 { margin-top: 0; }

.insights ul {
  padding-left: 20px;
  color: var(--color-text-muted);
  line-height: 1.8;
}
</style>
