<template>
  <footer
    class="text-tiffinTextPrimary border-t border-tiffinYellow flex flex-col divide-y divide-tiffinYellow"
  >
    <div class="lg:container lg:mx-auto flex lg:flex-row flex-col">
      <div
        class="lg:w-1/2 px-10 py-10 lg:py-20 flex flex-col space-y-4 border-b lg:border-b-0 lg:border-r border-tiffinYellow"
      >
        <h3 class="text-xl font-bold">Let's Connect!</h3>
        <p>
          <a href="mailto:info@thetiffinboxgroup.com" class="hover:underline"
            >info@thetiffinboxgroup.com</a
          >
        </p>
        <p>07436 514048</p>
        <p>7-9 Butts, Coventry CV1 3GJ</p>
        <div class="flex space-x-4"></div>
      </div>
      <div
        class="lg:w-1/2 flex flex-col gap-8 lg:flex-row px-10 lg:pl-20 py-20"
      >
        <div class="lg:w-1/2 flex flex-col space-y-4">
          <h3 class="text-xl font-bold">Opening Hours</h3>
          <ul class="flex flex-col gap-2">
            <li class="flex items-center">
              <span class="w-48">Tuesday - Friday </span>
              <span>17:00 - 00:00 </span>
            </li>
            <li class="flex">
              <span class="w-48">Saturday - Sunday</span>
              <span
                >13:00 - 16:00 (Lunch), <br />
                17:00 - 00:00</span
              >
            </li>
            <li class="flex">
              <span class="w-48">Monday</span>
              <span>Closed</span>
            </li>
          </ul>
        </div>
        <div class="lg:w-1/2 flex items-end gap-4 lg:gap-0">
          <img src="../assets/images/food-hygiene-rating.png" alt="" />
          <img
            src="../assets/halal-logo.png"
            alt="Halal Certified"
            class="w-20"
          />
        </div>
      </div>
    </div>
    <p class="px-10 lg:px-20 py-5">
      &copy; 2004 The Time to All Rig. All rights reserved.
    </p>
  </footer>
</template>
<script>
export default {
  name: "AppFooter",
};
</script>
