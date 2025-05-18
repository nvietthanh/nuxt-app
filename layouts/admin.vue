<!-- layouts/admin.vue -->
<template>
  <div class="admin-layout">
    <aside class="sidebar">
      <h2 class="logo">Admin</h2>
      <nav>
        <ul>
          <li>
            <NuxtLink to="/admin/dashboard">Dashboard</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/admin/users">Users</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/admin/settings">Settings</NuxtLink>
          </li>
        </ul>
      </nav>
    </aside>

    <div class="main">
      <header class="topbar">
        <h1>Admin Panel</h1>
      </header>

      <main class="content">
        <slot />
      </main>
    </div>
  </div>
</template>

<style scoped>
.admin-layout {
  display: flex;
  min-height: 100vh;
  background: #f5f6fa;
}

.sidebar {
  width: 220px;
  background: #2c3e50;
  color: #ecf0f1;
  padding: 1rem;
}

.sidebar .logo {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  margin: 0.5rem 0;
}

.sidebar a {
  color: #ecf0f1;
  text-decoration: none;
}

.sidebar a:hover {
  text-decoration: underline;
}

.main {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.topbar {
  background: #34495e;
  color: white;
  padding: 1rem;
}

.content {
  flex: 1;
  padding: 2rem;
  background: white;
}
</style>