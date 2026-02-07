<template>
  <div class="page-container">
    <div class="back-link">
      <NuxtLink to="/">← Back to Dashboard</NuxtLink>
    </div>
    <header class="page-header">
      <h1>Donations Detail</h1>
      <p>Detailed breakdown of your financial contributions this month.</p>
    </header>

    <div class="detail-card">
      <div class="stats-hero">
        <div class="hero-amount">$740.89</div>
        <div class="hero-label">Total contributed this month</div>
      </div>
      
      <table class="transaction-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Donor</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 5" :key="i">
            <td>Oct {{ 15 + i }}, 2023</td>
            <td>Individual</td>
            <td>Donor #{{ i }}</td>
            <td>$148.18</td>
            <td><span class="status-badge success">Completed</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  padding: var(--space-xl);
  max-width: 1000px;
  margin: 0 auto;
}

.back-link {
  margin-bottom: var(--space-md);
}

.back-link a {
  color: var(--color-blue-dark);
  font-weight: 600;
}

.page-header h1 {
  font-size: 2.5rem;
  margin: 0;
}

.detail-card {
  background: white;
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  margin-top: var(--space-xl);
  box-shadow: 0 10px 40px rgba(0,0,0,0.05);
}

.stats-hero {
  text-align: center;
  padding-bottom: var(--space-xl);
  border-bottom: 1px solid var(--color-gray-medium);
  margin-bottom: var(--space-xl);
}

.hero-amount {
  font-size: 4rem;
  font-weight: 800;
  color: var(--color-accent);
  text-shadow: 0 0 20px rgba(212, 255, 0, 0.3);
}

.hero-label {
  color: var(--color-text-muted);
  font-weight: 600;
}

.transaction-table {
  width: 100%;
  border-collapse: collapse;
}

th {
  text-align: left;
  padding: var(--space-sm);
  color: var(--color-text-muted);
  border-bottom: 2px solid var(--color-gray-soft);
}

td {
  padding: var(--space-md) var(--space-sm);
  border-bottom: 1px solid var(--color-gray-soft);
}

.status-badge {
  padding: 4px 12px;
  border-radius: var(--radius-full);
  font-size: 0.8rem;
  font-weight: 700;
}

.status-badge.success {
  background: #d1fae5;
  color: #059669;
}
</style>
