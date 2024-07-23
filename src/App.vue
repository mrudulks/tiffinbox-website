<script setup>
import Header from "./components/Header.vue";
import Home from "./views/Home.vue";
import AppSideBar from "./components/FixedSideBar.vue";
</script>

<template>
  <!-- Main layout -->
  <div class="relative">
    <!-- Sidebar fixed -->
    <AppSideBar />
    <!-- Contents -->
    <main class="ml-[100px]">
      <Header />
      <Home />

      <!-- <RouterView></RouterView> -->
      <!-- Hero section -->
    </main>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
