<template>
  <header class="header">
    <div class="title-group">
      <div class="title-row">
        <h1>Donators</h1>
        <span class="new-badge">2 New</span>
      </div>
      <p class="subtitle">See all your donators information here</p>
    </div>

    <div class="actions">
      <button class="action-btn">🔍</button>
      <button class="action-btn notification">🔔</button>
      <div class="user-info">
        <img src="https://ui-avatars.com/api/?name=Andrew+Johnson&background=random" alt="User" class="avatar" />
        <div class="user-text">
          <span class="welcome">Welcome back</span>
          <span class="name">Andrew Johnson</span>
        </div>
        <span class="chevron">⌄</span>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--space-lg);
}

.title-row {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.header h1 {
  font-size: 2rem;
  margin: 0;
  font-weight: 800;
}

.new-badge {
  background: var(--color-blue);
  color: var(--color-blue-dark);
  padding: 4px 12px;
  border-radius: var(--radius-full);
  font-size: 0.85rem;
  font-weight: 700;
}

.subtitle {
  color: var(--color-text-muted);
  margin: var(--space-xs) 0 0 0;
}

.actions {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.action-btn {
  width: 44px;
  height: 44px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.user-info {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  background: white;
  padding: 6px 12px;
  border-radius: var(--radius-full);
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}

.user-text {
  display: flex;
  flex-direction: column;
}

.welcome {
  font-size: 0.7rem;
  color: var(--color-text-muted);
}

.name {
  font-size: 0.85rem;
  font-weight: 700;
}

.chevron {
  font-size: 0.8rem;
  margin-left: var(--space-xs);
}
</style>
