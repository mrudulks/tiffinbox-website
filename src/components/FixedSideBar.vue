<template>
  <div
    class="hidden lg:fixed w-[100px] h-screen left-0 border-r border-tiffinYellow px-6 py-6 lg:flex flex-col justify-between"
  >
    <div>
      <img src="@/assets/logo.svg" alt="" srcset="" />
    </div>
    <div>
      <div
        class="flex justify-center gap-4 transform -rotate-90 text-tiffinTextPrimary"
      >
        <span>Sharjah</span>
        <span>Dubai</span>
        <span>Coventry</span>
      </div>
    </div>
    <!-- Side bar icons list -->
    <ul class="flex flex-col items-center gap-6">
      <li><img src="@/assets/icons/side-bar/phone.svg" alt="" /></li>
      <li>
        <a
          href="https://www.google.com/maps/dir//7-9+Butts,+Coventry+CV1+3GJ/@52.4046005,-1.6038368,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x48774bff1a6980f5:0xa719bfb056f23ce3!2m2!1d-1.5214366!2d52.4046291?entry=ttu"
          target="_blank"
        >
          <img src="@/assets/icons/side-bar/map-pin.svg" alt="" />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/thetiffinboxuk/" target="_blank">
          <img src="@/assets/icons/side-bar/instgram.svg" alt="" />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/profile.php?id=61560830745348"
          target="_blank"
        >
          <img src="@/assets/icons/side-bar/facebook.svg" alt="" />
        </a>
      </li>
      <li>
        <a
          href="https://www.tiktok.com/@thetiffinboxuk?_t=8oK3YFn6Tyb&_r=1"
          target="_blank"
        >
          <img src="@/assets/icons/side-bar/tiktok.svg" alt="" />
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "AppSideBar",
};
</script>
