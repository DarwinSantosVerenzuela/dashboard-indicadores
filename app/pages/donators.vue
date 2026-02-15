<script setup lang="ts">
import { ref, computed } from 'vue'

interface Donor {
  id: number;
  name: string;
  avatar: string;
  tier: 'Básico' | 'Plata' | 'Oro' | 'Platino';
  totalDonated: number;
  lastDonationDate: string;
  status: 'active' | 'inactive';
}

const searchQuery = ref('')
const selectedTier = ref('Todos')

const donors = ref<Donor[]>([
  { id: 1, name: 'Sofia Rodriguez', avatar: 'https://i.pravatar.cc/150?u=sofia', tier: 'Platino', totalDonated: 2500, lastDonationDate: 'Hace 2 horas', status: 'active' },
  { id: 2, name: 'Carlos Mendoza', avatar: 'https://i.pravatar.cc/150?u=carlos', tier: 'Oro', totalDonated: 1200, lastDonationDate: 'Ayer', status: 'active' },
  { id: 3, name: 'Ana García', avatar: 'https://i.pravatar.cc/150?u=ana', tier: 'Plata', totalDonated: 450, lastDonationDate: 'Ayer', status: 'active' },
  { id: 4, name: 'Julian Vivas', avatar: 'https://i.pravatar.cc/150?u=julian', tier: 'Oro', totalDonated: 890, lastDonationDate: 'Hace 3 días', status: 'active' },
  { id: 5, name: 'Maria Fernanda', avatar: 'https://i.pravatar.cc/150?u=maria', tier: 'Básico', totalDonated: 150, lastDonationDate: '12 Feb', status: 'inactive' },
  { id: 6, name: 'Roberto Gomez', avatar: 'https://i.pravatar.cc/150?u=roberto', tier: 'Plata', totalDonated: 600, lastDonationDate: 'Hace 1 hora', status: 'active' },
  { id: 7, name: 'Lucía Méndez', avatar: 'https://i.pravatar.cc/150?u=lucia', tier: 'Oro', totalDonated: 1100, lastDonationDate: '10 Feb', status: 'active' },
  { id: 8, name: 'David Silva', avatar: 'https://i.pravatar.cc/150?u=david', tier: 'Platino', totalDonated: 3200, lastDonationDate: 'Hace 5 horas', status: 'active' },
  { id: 9, name: 'Elena Torres', avatar: 'https://i.pravatar.cc/150?u=elena', tier: 'Básico', totalDonated: 50, lastDonationDate: '01 Feb', status: 'inactive' },
  { id: 10, name: 'Ricardo Luna', avatar: 'https://i.pravatar.cc/150?u=ricardo', tier: 'Oro', totalDonated: 950, lastDonationDate: 'Hace 4 días', status: 'active' },
])

const filteredDonors = computed(() => {
  return donors.value.filter(d => {
    const matchesSearch = d.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesTier = selectedTier.value === 'Todos' || d.tier === selectedTier.value
    return matchesSearch && matchesTier
  })
})

const stats = computed(() => {
  const total = donors.value.reduce((acc, d) => acc + d.totalDonated, 0)
  const avg = total / donors.value.length
  return {
    totalRevenue: total.toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
    totalCount: donors.value.length,
    average: avg.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
  }
})

const getTierColor = (tier: string) => {
  const colors: Record<string, string> = {
    'Básico': '#94a3b8',
    'Plata': '#64748b',
    'Oro': '#ca8a04',
    'Platino': '#2563eb'
  }
  return colors[tier] || '#64748b'
}
</script>

<template>
  <div class="donors-view">
    <div class="header-anchor">
      <DashboardHeader />
    </div>

    <main class="content-area">
      <!-- Stats Banner -->
      <section class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon revenue"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg></div>
          <div class="stat-info">
            <span class="label">Recaudación Total</span>
            <h2 class="value">{{ stats.totalRevenue }}</h2>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon users"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></div>
          <div class="stat-info">
            <span class="label">Donantes Activos</span>
            <h2 class="value">{{ stats.totalCount }}</h2>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon average"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg></div>
          <div class="stat-info">
            <span class="label">Donación Promedio</span>
            <h2 class="value">{{ stats.average }}</h2>
          </div>
        </div>
      </section>

      <!-- Search and Filter -->
      <section class="filter-row">
        <div class="search-input">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <input v-model="searchQuery" type="text" placeholder="Buscar donante por nombre...">
        </div>
        <div class="tier-pills">
          <button 
            v-for="tier in ['Todos', 'Básico', 'Plata', 'Oro', 'Platino']" 
            :key="tier"
            class="tier-pill"
            :class="{ active: selectedTier === tier }"
            @click="selectedTier = tier"
          >
            {{ tier }}
          </button>
        </div>
      </section>

      <!-- Donors List -->
      <section class="donors-list">
        <div class="list-header">
          <span class="col donor">Donante</span>
          <span class="col tier">Rango</span>
          <span class="col date">Última Donación</span>
          <span class="col amount">Total Donado</span>
          <span class="col actions">Acciones</span>
        </div>
        
        <div v-for="donor in filteredDonors" :key="donor.id" class="donor-row">
          <div class="col donor">
            <div class="user-cell">
              <div class="avatar-wrapper">
                <img :src="donor.avatar" :alt="donor.name">
                <div class="status-dot" :class="donor.status"></div>
              </div>
              <span class="donor-name">{{ donor.name }}</span>
            </div>
          </div>
          <div class="col tier">
            <span class="tier-tag" :style="{ color: getTierColor(donor.tier), backgroundColor: getTierColor(donor.tier) + '15' }">
              {{ donor.tier }}
            </span>
          </div>
          <div class="col date">
            <span class="date-text">{{ donor.lastDonationDate }}</span>
          </div>
          <div class="col amount">
            <span class="amount-text">${{ donor.totalDonated.toLocaleString() }}</span>
          </div>
          <div class="col actions">
            <button class="action-btn">Ver Perfil</button>
          </div>
        </div>

        <div v-if="filteredDonors.length === 0" class="empty-results">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
          <p>No se encontraron donantes con los filtros aplicados.</p>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.donors-view {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: white;
  padding: 0 40px;
}

.header-anchor {
  flex-shrink: 0;
  z-index: 10;
}

.content-area {
  flex: 1;
  overflow-y: auto;
  padding-bottom: 40px;
}

/* Stats Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 10px;
  margin-bottom: 32px;
}

.stat-card {
  background: #f8fafc;
  padding: 24px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  border: 1px solid #f1f5f9;
  transition: transform 0.2s, box-shadow 0.2s;
}

.stat-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.04);
}

.stat-icon {
  width: 54px;
  height: 54px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-icon.revenue { background: #dbeafe; color: #2563eb; }
.stat-icon.users { background: #fef9c3; color: #ca8a04; }
.stat-icon.average { background: #dcfce7; color: #16a34a; }

.stat-info .label {
  display: block;
  font-size: 0.8rem;
  font-weight: 600;
  color: #64748b;
  margin-bottom: 4px;
}

.stat-info .value {
  font-size: 1.5rem;
  font-weight: 800;
  color: #111827;
  letter-spacing: -0.5px;
}

/* Filter Row */
.filter-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  gap: 20px;
}

.search-input {
  flex: 1;
  position: relative;
  max-width: 400px;
}

.search-input svg {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #94a3b8;
}

.search-input input {
  width: 100%;
  background: #f1f5f9;
  border: none;
  padding: 12px 14px 12px 44px;
  border-radius: 14px;
  font-size: 0.9rem;
  outline: none;
  transition: all 0.2s;
}

.search-input input:focus {
  background: #e2e8f0;
  box-shadow: 0 0 0 2px #dbeafe;
}

.tier-pills {
  display: flex;
  gap: 8px;
}

.tier-pill {
  padding: 8px 16px;
  border-radius: 12px;
  background: #f1f5f9;
  color: #64748b;
  font-size: 0.85rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}

.tier-pill.active {
  background: #2b5278;
  color: white;
}

/* Donors List */
.donors-list {
  background: white;
  border: 1px solid #f1f5f9;
  border-radius: 20px;
  overflow: hidden;
}

.list-header {
  display: grid;
  grid-template-columns: 2.5fr 1.5fr 1.5fr 1.5fr 1fr;
  padding: 16px 24px;
  background: #f8fafc;
  border-bottom: 1px solid #f1f5f9;
  font-size: 0.75rem;
  font-weight: 700;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.donor-row {
  display: grid;
  grid-template-columns: 2.5fr 1.5fr 1.5fr 1.5fr 1fr;
  padding: 16px 24px;
  align-items: center;
  border-bottom: 1px solid #f8fafc;
  transition: background 0.2s;
}

.donor-row:hover {
  background: #f0f7ff70;
}

.user-cell {
  display: flex;
  align-items: center;
  gap: 12px;
}

.avatar-wrapper {
  position: relative;
  width: 40px;
  height: 40px;
}

.avatar-wrapper img {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  object-fit: cover;
}

.status-dot {
  position: absolute;
  bottom: -2px;
  right: -2px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid white;
}

.status-dot.active { background: #22c55e; }
.status-dot.inactive { background: #94a3b8; }

.donor-name {
  font-weight: 700;
  color: #111827;
  font-size: 0.95rem;
}

.tier-tag {
  padding: 4px 12px;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 700;
}

.date-text {
  font-size: 0.85rem;
  color: #64748b;
  font-weight: 500;
}

.amount-text {
  font-size: 1rem;
  font-weight: 800;
  color: #2b5278;
}

.action-btn {
  padding: 6px 12px;
  background: transparent;
  border: 1.5px solid #e2e8f0;
  border-radius: 10px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #64748b;
  cursor: pointer;
  transition: all 0.2s;
}

.action-btn:hover {
  background: #f1f5f9;
  color: #111827;
  border-color: #cbd5e1;
}

.empty-results {
  padding: 60px 24px;
  text-align: center;
  color: #94a3b8;
}

.empty-results svg {
  margin-bottom: 16px;
  opacity: 0.5;
}

.empty-results p {
  font-size: 0.9rem;
  font-weight: 500;
}
</style>
