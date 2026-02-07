<template>
  <div class="app-layout">
    <DashboardSidebar />
    <main class="main-viewport">
      <NuxtPage />
    </main>
  </div>
</template>

<style>
/* Global resets and layout */
:root {
  --font-main: 'Inter', system-ui, sans-serif;
}

body {
  margin: 0;
  font-family: var(--font-main);
  background-color: #eff1f3;
}

.app-layout {
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.main-viewport {
  flex: 1;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* Animations */
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
