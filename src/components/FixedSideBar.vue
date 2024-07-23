<template>
  <div
    class="fixed w-[100px] h-screen left-0 border-r border-tiffinYellow px-6 py-6 flex flex-col justify-between"
  >
    <div>
      <img src="@/assets/logo.svg" alt="" srcset="" />
    </div>
    <div></div>
    <!-- Side bar icons list -->
    <ul class="flex flex-col items-center gap-6">
      <li><img src="@/assets/icons/side-bar/phone.svg" alt="" /></li>
      <li><img src="@/assets/icons/side-bar/map-pin.svg" alt="" /></li>
      <li><img src="@/assets/icons/side-bar/instgram.svg" alt="" /></li>
      <li><img src="@/assets/icons/side-bar/facebook.svg" alt="" /></li>
      <li><img src="@/assets/icons/side-bar/tiktok.svg" alt="" /></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "AppSideBar",
};
</script>
