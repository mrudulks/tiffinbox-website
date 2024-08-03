<template>
  <div>
    <div
      class="px-8 lg:pl-20 lg:pr-14 py-20 flex flex-col gap-10 text-tiffinTextPrimary"
    >
      <h1 class="text-5xl leading-[60px] font-bold font-sans">Menu</h1>
      <div>
        <p class="text-justify">
          Welcome to a world of exquisite flavors and culinary artistry. Our
          menu is a carefully curated selection of dishes designed to delight
          your palate and celebrate the finest ingredients. From timeless
          classics to innovative creations, every dish is crafted with passion
          and precision by our talented chefs.
        </p>
      </div>
    </div>
    <!-- Menus -->
    <div
      class="grid grid-cols-3 border-y border-tiffinYellow divide-x divide-tiffinYellow"
    >
      <div class="w-full menu-container relative">
        <div
          class="menu-content absolute top-0 left-0 h-full w-full px-11 py-11 flex flex-col"
        >
          <button
            type="button"
            class="py-2 w-56 mx-auto bg-tiffinYellow text-tiffinTextPrimary text-lg flex items-center justify-center gap-2"
          >
            Dinner Food Menu
          </button>
          <h1 class="text-5xl text-white font-sans font-bold mt-auto z-[2]">
            Dinner<br />
            Food Menu.
          </h1>
        </div>
        <img
          class="w-full h-full object-cover"
          src="../assets/images/dish1.jpg"
          alt=""
        />
      </div>
      <div class="w-full menu-container relative">
        <div
          class="menu-content absolute top-0 left-0 h-full w-full px-11 py-11 flex flex-col"
        >
          <button
            type="button"
            class="py-2 w-56 mx-auto bg-tiffinYellow text-tiffinTextPrimary text-lg flex items-center justify-center gap-2"
          >
            Drinks Menu
          </button>
          <h1 class="text-5xl text-white font-sans font-bold mt-auto z-[2]">
            Drinks<br />
            Menu.
          </h1>
        </div>
        <img
          class="w-full h-full object-cover"
          src="../assets/images/dish2.jpg"
          alt=""
        />
      </div>

      <div class="w-full menu-container relative">
        <div
          class="menu-content absolute top-0 left-0 h-full w-full px-11 py-11 flex flex-col"
        >
          <button
            type="button"
            class="py-2 w-56 mx-auto bg-tiffinYellow text-tiffinTextPrimary text-lg flex items-center justify-center gap-2"
          >
            Lunch Food Menu
          </button>
          <h1 class="text-5xl text-white font-sans font-bold mt-auto z-[2]">
            Lunch<br />
            Food Menu.
          </h1>
        </div>
        <img
          class="w-full h-full object-cover"
          src="../assets/images/biriyani 2.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Menu",
};
</script>
<style>
.menu-container .menu-content::after {
  position: absolute;
  content: "";
  height: 200px;
  width: 100%;
  bottom: 0%;
  left: 0%;
  background: rgb(207, 160, 48);
  background: linear-gradient(
    0deg,
    rgba(207, 160, 48, 0.8015581232492998) 0%,
    rgba(207, 160, 48, 0) 100%
  );
}
</style>
