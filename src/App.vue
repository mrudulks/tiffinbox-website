<script setup>
import Header from './components/Header.vue';
</script>

<template>
  <!-- Main layout -->
  <div class="relative h-screen">
    <!-- Sidebar fixed -->
    <div class="fixed w-[100px] h-screen left-0 border-r border-tiffinYellow px-6 py-6 flex flex-col justify-between">
        <div>
          <img src="./assets/logo.svg" alt="" srcset="">
        </div>
        <div>Hello</div>
        <div>Hello</div>
    </div>
    <!-- Contents -->
    <main class="ml-[100px]">
      <Header />
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
