<template>
  <div class="">
    <!-- top yello bar -->
    <div
      class="flex items-center justify-between w-full h-16 px-20 bg-tiffinYellow py-4"
    >
      <span class="font-semibold text-tiffinTextPrimary"
        >TUE - FRI: 5:00PM - 12:00AM | WEEKENDS: 1:00PM - 12:00AM</span
      >
      <span class="flex items-center gap-6">
        <span class="mr-8">
          <button type="button" class="flex items-center gap-2">
            <span class="bg-white rounded-full p-1">
              <img src="../assets/icons/google.svg" alt="" />
            </span>
            <span class="text-lg text-tiffinTextPrimary font-bold"
              >Review Us</span
            >
          </button>
        </span>
        <span>
          <img src="../assets/halal-logo.png" alt="" />
        </span>
      </span>
    </div>
    <!-- Navigation -->
    <nav
      class="grid grid-cols-6 border-b border-tiffinYellow divide-x divide-tiffinYellow"
    >
      <RouterLink
        to="/"
        class="flex items-center py-6 pl-20 font-semibold text-tiffinTextYellow"
        >Home</RouterLink
      >
      <!-- <a href="" class="flex items-center py-6 pl-20 font-semibold text-tiffinTextYellow">Home</a> -->
      <a
        href=""
        class="flex items-center justify-center py-6 text-tiffinTextPrimary font-medium"
        >Menu</a
      >
      <a
        href=""
        class="flex items-center justify-center py-6 text-tiffinTextPrimary font-medium"
        >Contact Us</a
      >
      <a
        href=""
        class="flex items-center justify-center py-6 text-tiffinTextPrimary font-medium"
        >Reserve a Table</a
      >
      <RouterLink
        to="/about"
        class="flex items-center justify-center py-6 text-tiffinTextPrimary font-medium"
        >About Us</RouterLink
      >
      <!-- <a href="" class="flex items-center justify-center py-6 text-tiffinTextPrimary font-medium"></a> -->
      <a
        href=""
        class="flex items-center justify-end py-6 pr-20 text-tiffinTextPrimary font-medium"
        >Events</a
      >
    </nav>
  </div>
</template>
<script>
import { RouterLink } from "vue-router";

export default {
  name: "AppHeader",
};
</script>
