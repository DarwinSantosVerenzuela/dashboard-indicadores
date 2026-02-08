<script setup>
const route = useRoute()
const pageTitle = computed(() => {
  const path = route.path.replace('/', '')
  if (!path) return 'Inicio'
  
  const titles = {
    'donators': 'Donantes',
    'post': 'Publicaciones',
    'messages': 'Mensajes',
    'statistics': 'Estadísticas',
    'page': 'Páginas'
  }
  
  return titles[path] || path.charAt(0).toUpperCase() + path.slice(1)
})

const isProfileOpen = ref(false)
const isNotificationsOpen = ref(false)

const toggleProfile = () => {
  isProfileOpen.value = !isProfileOpen.value
  isNotificationsOpen.value = false
}

const toggleNotifications = () => {
  isNotificationsOpen.value = !isNotificationsOpen.value
  isProfileOpen.value = false
}
</script>

<template>
  <header class="header">
    <div class="header-pill brand-pill">
      <div class="main-title">
        <h1>Knowtech c.a</h1>
      </div>
    </div>

    <div class="actions">
      <!-- Search Placeholder -->
      <button class="action-btn">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </button>
      
      <!-- Notifications Dropdown -->
      <div class="dropdown-wrapper">
        <button class="action-btn" :class="{ active: isNotificationsOpen }" @click="toggleNotifications">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
        </button>
        <Transition name="slide-up">
          <div v-if="isNotificationsOpen" class="dropdown-menu">
            <div class="menu-label">Notificaciones</div>
            <div class="menu-item">¡Nueva donación recibida!</div>
            <div class="menu-item">Meta alcanzada al 80%</div>
          </div>
        </Transition>
      </div>

      <!-- Profile Dropdown -->
      <div class="dropdown-wrapper">
        <div class="header-pill profile-pill" @click="toggleProfile" :class="{ active: isProfileOpen }">
          <img src="/imagenes/logo/kowntech_1.png" alt="Profile" class="avatar" />
          <div class="user-text">
            <span class="welcome">Panel</span>
            <span class="name">Knowtech</span>
          </div>
          <span class="chevron" :class="{ rotated: isProfileOpen }">⌄</span>
        </div>
        
        <Transition name="slide-up">
          <div v-if="isProfileOpen" class="dropdown-menu">
            <div class="menu-item">
              <svg viewBox="0 0 24 24" class="menu-icon" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              Mi Perfil
            </div>
            <div class="menu-item">
              <svg viewBox="0 0 24 24" class="menu-icon" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
              Configuración
            </div>
            <div class="divider"></div>
            <div class="menu-item logout">
              <svg viewBox="0 0 24 24" class="menu-icon" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
              Cerrar Sesión
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0; /* Increased from 24px for more air and balance */
}

/* Global Pill Style */
.header-pill {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #f1f5f9;
  border-radius: 40px;
  padding: 6px 16px;
  box-shadow: none;
  cursor: pointer;
  transition: all 0.2s;
}
.header-pill:hover, .header-pill.active {
  background: #e2e8f0;
}

/* Brand Pill Styling */
.brand-pill {
  padding: 12px 48px; /* Increased vertical padding to match profile pill height */
  cursor: default;
  min-width: 200px; /* Ensuring it has a nice length */
  justify-content: flex-start;
}
.brand-pill:hover { background: #f1f5f9; }

.main-title {
  display: flex;
  align-items: center;
  gap: 8px;
}

.header h1 {
  font-size: 1.1rem;
  margin: 0;
  font-weight: 800;
  color: #111827;
  letter-spacing: -0.2px;
  line-height: 1; /* Force tight line height for alignment */
}

.new-badge {
  background: #dbeafe;
  color: #2563eb;
  padding: 1px 8px;
  border-radius: 10px;
  font-size: 0.65rem;
  font-weight: 700;
}

/* Actions Area */
.actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.action-btn {
  width: 44px;
  height: 44px;
  background: #f1f5f9;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  cursor: pointer;
  border: none;
  transition: all 0.2s;
}
.action-btn:hover, .action-btn.active {
  background: #e2e8f0;
  color: #111827;
}

/* Profile Pill specifics */
.avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  object-fit: contain;
}

.user-text {
  display: flex;
  flex-direction: column;
}

.welcome {
  font-size: 0.6rem;
  color: #64748b;
  margin-bottom: -2px;
}

.name {
  font-size: 0.8rem;
  font-weight: 700;
  color: #111827;
}

.chevron {
  font-size: 0.8rem;
  color: #94a3b8;
  transition: transform 0.3s;
}
.chevron.rotated { transform: rotate(180deg); }

/* Dropdown Wrapper */
.dropdown-wrapper {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 12px);
  right: 0;
  background: white;
  min-width: 220px;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  padding: 8px;
  z-index: 1000;
  border: 1px solid #f1f5f9;
}

.menu-label {
  padding: 8px 12px;
  font-size: 0.7rem;
  font-weight: 700;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.menu-item {
  padding: 10px 14px;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #475569;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.2s;
}
.menu-item:hover {
  background: #f1f5f9;
  color: #111827;
}

.menu-icon {
  width: 18px;
  height: 18px;
  stroke: #94a3b8;
}
.menu-item:hover .menu-icon { stroke: #111827; }

.divider {
  height: 1px;
  background: #f1f5f9;
  margin: 6px 0;
}

.menu-item.logout { color: #ef4444; }
.menu-item.logout .menu-icon { stroke: #ef4444; }

/* Animation */
.slide-up-enter-active, .slide-up-leave-active { transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1); }
.slide-up-enter-from, .slide-up-leave-to { opacity: 0; transform: translateY(10px); }
</style>
