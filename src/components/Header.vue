<template>
  <div class="">
    <!-- top yello bar -->
    <div
      class="hidden lg:flex items-center justify-between w-full h-16 px-20 bg-tiffinYellow py-4"
    >
      <span class="font-semibold text-tiffinTextPrimary"
        >TUE - FRI: 5:00PM - 12:00AM | WEEKENDS: 1:00PM - 12:00AM</span
      >
      <span class="flex items-center gap-6">
        <span class="mr-8">
          <a
            href="https://www.google.com/search?q=tiffin+box+coventry&oq=tiff&gs_lcrp=EgZjaHJvbWUqBggBEEUYOzIGCAAQRRg8MgYIARBFGDsyBggCEEUYOTIGCAMQRRg7MgcIBBAAGI8CMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEINDQ0MmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x48774bff1a6980f5:0xa719bfb056f23ce3,3,,,,"
            class="flex items-center gap-2"
            target="_blank"
          >
            <span class="bg-white rounded-full p-1">
              <img src="../assets/icons/google.svg" alt="" />
            </span>
            <span class="text-lg text-tiffinTextPrimary font-bold"
              >Review Us</span
            >
          </a>
        </span>
        <span>
          <img src="../assets/halal-logo.png" alt="" />
        </span>
      </span>
    </div>
    <!-- Navigation -->
    <nav
      class="hidden lg:grid grid-cols-6 border-b border-tiffinYellow divide-x divide-tiffinYellow"
    >
      <RouterLink
        to="/"
        class="flex items-center justify-center py-6 font-medium"
        >Home</RouterLink
      >
      <!-- <a href="" class="flex items-center py-6 pl-20 font-semibold text-tiffinTextYellow">Home</a> -->
      <RouterLink
        to="/menu"
        class="flex items-center justify-center py-6 text-tiffinTextPrimary font-medium hover:text-tiffinYellow"
        >Menu</RouterLink
      >
      <RouterLink
        to="/contact"
        class="flex items-center justify-center py-6 text-tiffinTextPrimary font-medium hover:text-tiffinYellow"
        >Contact Us</RouterLink
      >
      <a
        href="https://web.dojo.app/create_booking/vendor/Id6-dZzUHGU9vkjHgTOO9v6nLlgP1enw3Y-YuobrXt0_restaurant?utm_source=reserve_with_google_action_link"
        class="flex items-center justify-center py-6 text-tiffinTextPrimary font-medium hover:text-tiffinYellow"
        >Reserve a Table</a
      >
      <RouterLink
        to="/about"
        class="flex items-center justify-center py-6 text-tiffinTextPrimary font-medium hover:text-tiffinYellow"
        >About Us</RouterLink
      >
      <!-- <a href="" class="flex items-center justify-center py-6 text-tiffinTextPrimary font-medium"></a> -->
      <RouterLink
        to="/events"
        class="flex items-center justify-center py-6 text-tiffinTextPrimary font-medium hover:text-tiffinYellow"
        >Events</RouterLink
      >
    </nav>

    <!-- Mobile menu -->
    <div class="fixed top-0 left-0 w-full">
      <div
        class="static w-full top-0 z-50 bg-tiffinBg flex lg:hidden items-center justify-between px-4 py-2 border-b border-tiffinYellow"
      >
        <span @click="showMenu = !showMenu">
          <svg-icon
            type="mdi"
            :path="Menu"
            class="text-tiffinYellow"
          ></svg-icon>
        </span>
        <span>
          <img src="@/assets/logo.svg" class="size-9" alt="" srcset="" />
        </span>
      </div>
      <Transition name="custom-classes">
        <div
          v-if="showMenu"
          class="z-40 h-screen bg-tiffinBg w-full flex items-center lg:hidden"
        >
          <nav
            class="px-10 py-20 flex flex-col gap-6 flex-1 h-full font-sans text-2xl lg:hidden"
          >
            <RouterLink
              to="/"
              class="font-medium text-tiffinTextPrimary hover:text-tiffinYellow"
              >Home</RouterLink
            >
            <!-- <a href="" class="flex items-center py-6 pl-20 font-semibold text-tiffinTextYellow">Home</a> -->
            <RouterLink
              to="/menu"
              class="font-medium text-tiffinTextPrimary hover:text-tiffinYellow"
              >Menu</RouterLink
            >
            <RouterLink
              to="/contact"
              class="font-medium text-tiffinTextPrimary hover:text-tiffinYellow"
              >Contact Us</RouterLink
            >
            <a
              href=""
              class="text-tiffinTextPrimary font-medium hover:text-tiffinYellow"
              >Reserve a Table</a
            >
            <RouterLink
              to="/about"
              class="text-tiffinTextPrimary font-medium hover:text-tiffinYellow"
              >About Us</RouterLink
            >
            <!-- <a href="" class="flex items-center justify-center py-6 text-tiffinTextPrimary font-medium"></a> -->
            <RouterLink
              to="/events"
              class="font-medium text-tiffinTextPrimary hover:text-tiffinYellow"
              >Events</RouterLink
            >
          </nav>
        </div>
      </Transition>
    </div>
  </div>
</template>
<script>
// import { RouterLink } from "vue-router";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiMenu, mdiClose } from "@mdi/js";
export default {
  name: "AppHeader",
  components: {
    // RouterLink,
    SvgIcon,
  },
  watch: {
    "$route.path": {
      handler(from, to) {
        if (from != to) this.showMenu = false;
      },
    },
  },
  data() {
    return {
      Menu: mdiMenu,
      Closeicon: mdiClose,
      showMenu: false,
    };
  },
  mounted() {},
};
</script>
<style>
/* we will explain what these classes do next! */
.custom-classes-enter-active {
  transition: transform 0.3s ease;
}

.custom-classes-leave-active {
  transition: transform 0.3s ease;
}

.custom-classes-enter, .custom-classes-leave-to /* .custom-classes-leave-active in <2.1.8 */ {
  transform: translateY(-90%);
}
</style>
