<template>
  <div id="home-sections" class="flex flex-col divide-y divide-tiffinYellow">
    <section id="hero-section" class="flex items-center">
      <div
        class="w-1/2 pl-20 pr-14 flex flex-col gap-10 text-tiffinTextPrimary"
      >
        <h1 class="text-5xl leading-[60px] font-bold font-sans">
          Welcome to <br />
          The Tiffin Box.
        </h1>
        <p class="text-justify">
          Nested in the UK’s cultural city, The Tiffin Box, where we bring you
          the rich flavors of pan-Indian cuisine grounded in tradition and
          culture. Every dish we serve reflects our passion, character, and
          lives, crafted after extensive research. Enjoy a variety of mocktails,
          cocktails, spirits, and beers as you soak in the ambiance adorned with
          beautiful Indian cultural wall art. Whether you're here for a casual
          meal or a special occasion, we turns into a memorable dining
          experience.
        </p>
        <button
          type="button"
          class="px-6 py-2 w-56 bg-tiffinYellow text-tiffinTextPrimary roun"
        >
          Reserve a Table
        </button>
      </div>
      <div class="w-1/2 p-[2px] border-l border-tiffinYellow">
        <img
          src="@/assets/images/hero.png"
          alt=""
          class="w-full object-cover"
        />
      </div>
    </section>
    <!-- Reviews section -->
    <section
      id="reviews-section"
      class="flex flex-col divide-y divide-tiffinYellow"
    >
      <!-- Heading -->
      <div class="px-20 py-3 flex items-center justify-between">
        <h5 class="text-lg text-tiffinTextPrimary">Reviews</h5>
        <div class="flex items-center gap-4">
          <button
            type="button"
            class="flex items-center justify-center px-1 py-1 rounded-full bg-tiffinYellow text-white"
          >
            <svg-icon type="mdi" :path="ChevronLeft"></svg-icon>
          </button>
          <button
            type="button"
            class="flex items-center justify-center px-1 py-1 rounded-full bg-tiffinYellow text-white"
          >
            <svg-icon type="mdi" :path="ChevronRight"></svg-icon>
          </button>
        </div>
      </div>
      <!-- Reviews -->
      <div class="px-20 py-6 grid grid-cols-4">
        <div class="flex items-center gap-4">
          <div class="">
            <img src="../assets/icons/ellipse.png" alt="" />
          </div>
          <div>
            <h5 class="text-lg font-bold text-tiffinTextPrimary">
              The Tiffin Box
            </h5>
            <span class="flex items-center gap-2">
              <span class="text-[25px] font-bold text-tiffinTextPrimary"
                >4.4</span
              >
              <span class="flex items-center gap-1">
                <svg-icon
                  v-for="item in 5"
                  type="mdi"
                  :path="Star"
                  class="text-tiffinYellow"
                  :key="item"
                ></svg-icon>
              </span>
            </span>
            <p class="text-base text-tiffinTextPrimary">Based on 247 reviews</p>
            <button
              type="button"
              class="px-6 py-2 mt-4 w-56 bg-tiffinYellow text-tiffinTextPrimary flex items-center gap-2"
            >
              <span class="bg-white rounded-full p-1">
                <img src="../assets/icons/google.svg" alt="" />
              </span>
              <span class="text-lg text-tiffinTextPrimary font-bold"
                >Review Us</span
              >
            </button>
          </div>
        </div>
        <!-- Reviews -->
        <div v-for="review in 3" class="px-4">
          <div class="flex items-center">
            <div
              class="flex-shrink-0 text-[48px] h-20 w-20 bg-[#A93F3F] text-white flex items-center justify-center rounded-full"
            >
              J
            </div>
            <div class="ml-2 text-tiffinTextPrimary">
              <h6 class="text-lg font-bold">John Christie</h6>
              <p>a month ago</p>
              <span class="flex items-center gap-1">
                <svg-icon
                  v-for="item in 4"
                  type="mdi"
                  :path="Star"
                  class="text-tiffinYellow"
                  :key="item"
                ></svg-icon>
              </span>
            </div>
          </div>
          <p class="text-justify mt-4">
            What a wonderful surprise.I’ve stayed at the Ramada Coventry on
            numerous occasions and have always thought about having a meal in
            The Tiffin Box but due to work commitments I’ve been unable to. On
            my last visit I brought along my girlfriend so made a great effort
            to get over this time. I’m so pleased that I ...
          </p>
        </div>
      </div>
    </section>
    <!-- The team section -->
    <section id="teams-section" class="flex items-center">
      <div class="w-1/2 p-[2px] border-r border-tiffinYellow">
        <img
          src="@/assets/images/team.png"
          alt=""
          class="w-full object-cover"
        />
      </div>
      <div
        class="w-1/2 pl-20 pr-14 flex flex-col gap-10 text-tiffinTextPrimary"
      >
        <h1 class="text-5xl leading-[60px] font-bold font-sans">The Team</h1>
        <p class="text-justify">
          We features a sophisticated decor that marries traditional Indian
          elements with modern aesthetics. Spread across a two-storey building
          in the Butts Road, Coventry, The Tiffin Box boasts an impressive
          capacity of up to 400 covers. Upon entering, guests are immediately
          welcomed by a visually stunning, elevated bar. This central feature
          sets the tone for the rest of the experience, offering a wide
          selection of classic and signature cocktails, alongside an extensive
          range of mocktails, beers, and spirits. The main dining area, visible
          from the bar, is a vibrant showcase of Indian heritage. Traditional
          Indian wall arts richly adorn the walls, complemented by the soothing
          strains of Indian music that echo through the space, crafting an
          exotic yet inviting atmosphere. Whether you are looking for a casual
          lunch or a dinner with your big family or an influential meeting in
          your company, our team is dedicated to shaping it just as you want.
        </p>
      </div>
    </section>
    <!-- Party hall section -->
    <section id="hero-section" class="flex items-center">
      <div
        class="w-1/2 pl-20 pr-14 flex flex-col gap-10 text-tiffinTextPrimary"
      >
        <h1 class="text-5xl leading-[60px] font-bold font-sans">Party Hall</h1>
        <p class="text-justify">
          The elegant Party Hall at The Tiffin Box is designed to host your
          special events with style and sophistication. Our intimate 50-seater
          space is perfect for birthday celebrations, corporate meetings,
          parties, and family get-togethers. The hall boasts an attached bar
          that serves an extensive range of spirits, draught beers, bottled
          beers, mocktails, and cocktails, ensuring your guests have a
          delightful beverage selection. The versatile table layout can be
          tailored to suit the specific needs of your occasion, offering
          flexibility and personalization. For your events, we offer both set
          menus and buffets, thoughtfully curated to match the size and style of
          your party. To enhance the atmosphere, we can arrange live music
          performances from talented local violinists and guitarists, adding a
          touch of elegance and charm to your gathering. At The Tiffin Box Party
          Hall, we are dedicated to making your event a memorable experience,
          filled with exceptional food, drinks, and entertainment.
        </p>
        <div>
          <button
            type="button"
            class="py-2 w-56 bg-tiffinYellow text-tiffinTextPrimary flex items-center justify-center gap-2"
          >
            Download Brochure
            <span>
              <img src="../assets/icons/download.svg" alt="" />
            </span>
          </button>
        </div>
      </div>
      <div class="w-1/2 p-[2px] border-l border-tiffinYellow -ml-[1px]">
        <img
          src="@/assets/images/party-hall.png"
          alt=""
          class="w-full object-cover"
        />
      </div>
    </section>
  </div>
</template>
<script>
// import { ChevronLeft } from "vue-material-design-icons";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiChevronLeft, mdiChevronRight, mdiStar } from "@mdi/js";
export default {
  name: "Home",
  components: {
    SvgIcon,
  },
  data() {
    return {
      ChevronLeft: mdiChevronLeft,
      ChevronRight: mdiChevronRight,
      Star: mdiStar,
    };
  },
};
</script>
