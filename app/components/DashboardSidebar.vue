<template>
  <aside class="sidebar">
    <div class="logo">
      <div class="logo-icon">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
      </div>
      <span class="logo-text">INFLUENCY</span>
    </div>

    <nav class="menu">
      <NuxtLink to="/" class="menu-item" active-class="active">
        <div class="icon-box">🏠</div>
        <span>Home</span>
      </NuxtLink>
      <NuxtLink to="/post" class="menu-item">
        <div class="icon-box">🖼️</div>
        <span>Post</span>
      </NuxtLink>
      <NuxtLink to="/donators" class="menu-item active">
        <div class="icon-box">👥</div>
        <span>Donators</span>
        <span class="badge blue">2</span>
      </NuxtLink>
      <NuxtLink to="/page" class="menu-item">
        <div class="icon-box">📄</div>
        <span>Page</span>
      </NuxtLink>
      <NuxtLink to="/messages" class="menu-item">
        <div class="icon-box">✉️</div>
        <span>Messages</span>
        <span class="badge blue">6</span>
      </NuxtLink>
      <NuxtLink to="/statistics" class="menu-item">
        <div class="icon-box">📊</div>
        <span>Statistic</span>
      </NuxtLink>
    </nav>

    <div class="upgrade-card">
      <div class="crown-icon">👑</div>
      <h3>Upgrade to Pro</h3>
      <p>Discover the benefits of an upgraded account</p>
      <button class="upgrade-btn">Upgrade $10</button>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 260px;
  background: var(--bg-sidebar);
  border-right: 1px solid var(--color-gray-medium);
  height: 100vh;
  padding: var(--space-lg);
  display: flex;
  flex-direction: column;
}

.logo {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  margin-bottom: var(--space-xl);
}

.logo-icon {
  width: 32px;
  height: 32px;
  color: var(--color-text-dark);
}

.logo-text {
  font-weight: 800;
  font-size: 1.2rem;
  letter-spacing: -0.5px;
}

.menu {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.menu-item {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-sm);
  border-radius: var(--radius-md);
  color: var(--color-text-muted);
  font-weight: 500;
  transition: all 0.2s ease;
}

.menu-item.active {
  background: white;
  color: var(--color-text-dark);
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.icon-box {
  font-size: 1.2rem;
}

.badge {
  margin-left: auto;
  min-width: 20px;
  height: 20px;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
}

.badge.blue {
  background: var(--color-blue);
  color: var(--color-blue-dark);
}

.upgrade-card {
  background: white;
  border-radius: var(--radius-lg);
  padding: var(--space-md);
  box-shadow: 0 10px 30px rgba(0,0,0,0.03);
  margin-top: auto;
}

.crown-icon {
  width: 36px;
  height: 36px;
  background: var(--color-accent);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-sm);
}

.upgrade-card h3 {
  font-size: 1.1rem;
  margin: 0 0 var(--space-xs) 0;
}

.upgrade-card p {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  margin: 0 0 var(--space-md) 0;
  line-height: 1.4;
}

.upgrade-btn {
  width: 100%;
  background: black;
  color: white;
  padding: var(--space-sm);
  border-radius: var(--radius-full);
  font-weight: 600;
  transition: transform 0.2s;
}

.upgrade-btn:hover {
  transform: scale(1.02);
}
</style>
