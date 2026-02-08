<script setup>
const isSidebarCollapsed = useState('isSidebarCollapsed', () => true) // Default to closed
const toggleSidebar = () => {
  isSidebarCollapsed.value = !isSidebarCollapsed.value
}
</script>

<template>
  <aside class="sidebar" :class="{ collapsed: isSidebarCollapsed }">
    <div class="logo-area">
      <div class="logo-container">
        <!-- Original Knowtech Logos -->
        <img 
          v-if="isSidebarCollapsed" 
          src="/imagenes/logo/kowntech_1.png" 
          alt="Logo Icon" 
          class="logo-img-icon"
        >
        <img 
          v-else 
          src="/imagenes/logo/kowntech_0.png" 
          alt="Full Logo" 
          class="logo-img-full"
        >
      </div>
      
      <button class="toggle-btn" @click="toggleSidebar">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5">
          <path :d="isSidebarCollapsed ? 'M9 18l6-6-6-6' : 'M15 18l-6-6 6-6'" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>

    <nav class="menu">
      <NuxtLink to="/" class="menu-item" active-class="active">
        <div class="icon-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
            <path d="M9 21V12h6v9" />
          </svg>
        </div>
        <span v-if="!isSidebarCollapsed">Inicio</span>
      </NuxtLink>
      
      <NuxtLink to="/post" class="menu-item" active-class="active">
        <div class="icon-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
        </div>
        <span v-if="!isSidebarCollapsed">Publicaciones</span>
      </NuxtLink>

      <NuxtLink to="/donators" class="menu-item" active-class="active">
        <div class="icon-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </div>
        <span v-if="!isSidebarCollapsed">Donantes</span>
        <span v-if="!isSidebarCollapsed" class="badge">2</span>
      </NuxtLink>

      <NuxtLink to="/page" class="menu-item" active-class="active">
        <div class="icon-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
        </div>
        <span v-if="!isSidebarCollapsed">Páginas</span>
      </NuxtLink>

      <NuxtLink to="/messages" class="menu-item" active-class="active">
        <div class="icon-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </div>
        <span v-if="!isSidebarCollapsed">Mensajes</span>
        <span v-if="!isSidebarCollapsed" class="badge">6</span>
      </NuxtLink>

      <NuxtLink to="/statistics" class="menu-item" active-class="active">
        <div class="icon-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <line x1="18" y1="20" x2="18" y2="10" />
            <line x1="12" y1="20" x2="12" y2="4" />
            <line x1="6" y1="20" x2="6" y2="14" />
          </svg>
        </div>
        <span v-if="!isSidebarCollapsed">Estadísticas</span>
      </NuxtLink>
    </nav>

    <div v-if="!isSidebarCollapsed" class="upgrade-card">
      <div class="crown-box">👑</div>
      <h3>Actualizar a Pro</h3>
      <p>Descubre los beneficios de una cuenta mejorada</p>
      <button class="upgrade-btn">Actualizar $10</button>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  width: var(--sidebar-width);
  background: white;
  border-right: 1px solid #f0f0f0;
  height: 100vh;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: visible;
}

.sidebar.collapsed {
  width: var(--sidebar-width-collapsed);
  padding: 32px 16px;
  align-items: center;
}

.logo-area {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 48px;
  width: 100%;
  position: relative;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  justify-content: center;
}

.logo-img-icon {
  width: 48px; /* Slightly larger as requested */
  height: auto;
}

.logo-img-full {
  width: 100%;
  max-width: 180px;
  height: auto;
}

.toggle-btn {
  background: white;
  border: 1px solid #eee;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  position: absolute;
  right: -36px; /* 24px padding + 12px (mitad del botón) para estar justo en el borde */
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  color: #999;
}

.sidebar.collapsed .toggle-btn {
  right: -28px; /* 16px padding + 12px (mitad del botón) */
  top: 50%;
  transform: translateY(-50%);
}

.menu {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px;
  border-radius: 16px; /* Slightly more rounded */
  color: #9ca3af;
  font-weight: 600;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  justify-content: flex-start;
  width: 100%;
}

.sidebar.collapsed .menu-item {
  justify-content: center;
  padding: 12px 0;
  width: 56px; /* Fixed width for centered circle/square */
  height: 56px;
}

.menu-item:hover {
  background: #f1f5f9;
  color: #4b5563;
}

.menu-item.active {
  background: #f1f5f9; /* Mismo color que las tarjetas */
  color: #111827;
  transform: scale(0.96); /* Slightly smaller pill effect */
  box-shadow: none; /* Sin sombra exagerada */
}

.icon-box {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.badge {
  margin-left: auto;
  background: #dbeafe;
  color: #2563eb;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 0.7rem;
}

.upgrade-card {
  background: #f9fafb;
  border-radius: 20px;
  padding: 20px;
  margin-top: auto;
  text-align: center;
}

.crown-box {
  width: 36px;
  height: 36px;
  background: #3b82f6;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 12px;
  font-size: 1.2rem;
}

.upgrade-card h3 {
  font-size: 0.95rem;
  margin: 0 0 4px;
}

.upgrade-card p {
  font-size: 0.75rem;
  color: #6b7280;
  margin-bottom: 16px;
}

.upgrade-btn {
  width: 100%;
  background: black;
  color: white;
  padding: 10px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 0.8rem;
  cursor: pointer;
  border: none;
}
</style>
