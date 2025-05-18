<!-- layouts/user.vue -->
<template>
  <div class="user-layout">
    <header class="header">
      <h1>User Header</h1>
    </header>

    <main class="content">
      <slot />
    </main>

    <footer class="footer">
      <p>User Footer</p>
    </footer>
  </div>
</template>

<style scoped>
.user-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background: #007bff;
  color: white;
  padding: 1rem;
}

.content {
  flex: 1;
  padding: 2rem;
}

.footer {
  background: #f8f9fa;
  padding: 1rem;
  text-align: center;
}
</style>
