<script setup>
const isSidebarCollapsed = useState('isSidebarCollapsed', () => true)
</script>

<template>
  <ClientOnly>
    <div class="main-shell">
      <div class="layout-box" :class="{ 'collapsed': isSidebarCollapsed }">
        <DashboardSidebar />
        <main class="page-container">
          <NuxtPage />
        </main>
      </div>
    </div>
  </ClientOnly>
</template>

<style>
/* Global Resets */
:root {
  --font-main: 'Inter', system-ui, sans-serif;
  --bg-app: #f8f9fa;
  --sidebar-width: 280px;
  --sidebar-width-collapsed: 88px;
}

* { box-sizing: border-box; }

body, html {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  font-family: var(--font-main);
  background-color: var(--bg-app);
}

.main-shell {
  width: 100%;
  height: 100vh;
  display: flex;
}

.layout-box {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.page-container {
  flex: 1;
  min-width: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  /* Ensure a base background so we can see if it renders */
  background: white;
}
</style>
