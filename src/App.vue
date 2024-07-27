<script>
import Header from "./components/Header.vue";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Footer from "./components/Footer.vue";
import AppSideBar from "./components/FixedSideBar.vue";
import { RouterView } from "vue-router";
// import { data } from "autoprefixer";
export default {
  components: {
    Header,
    Home,
    About,
    Footer,
    AppSideBar,
    RouterView,
  },
};
</script>

<template>
  <!-- Main layout -->
  <div class="relative">
    <!-- Sidebar fixed -->
    <AppSideBar />
    <!-- Contents -->
    <main class="pt-20 lg:pt-[100px]">
      <Header />
      <RouterView></RouterView>
      <Footer />
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
