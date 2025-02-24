<template>
  <div id="home-sections" class="flex flex-col divide-y divide-tiffinYellow">
    <section id="hero-section" class="flex flex-col lg:flex-row">
      <div
        class="lg:w-1/2 lg:pl-20 lg:pr-14 py-20 px-8 flex flex-col justify-center gap-10 text-tiffinTextPrimary"
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
        <a
          href="https://web.dojo.app/create_booking/vendor/Id6-dZzUHGU9vkjHgTOO9v6nLlgP1enw3Y-YuobrXt0_restaurant?utm_source=reserve_with_google_action_link"
          class="px-6 py-2 w-56 bg-tiffinYellow text-tiffinTextPrimary text-center"
        >
          Reserve a Table
        </a>
      </div>
      <div
        class="lg:w-1/2 p-[2px] border-t lg:border-l lg:border-t-0 border-tiffinYellow"
      >
        <img
          src="@/assets/images/hero.png"
          alt=""
          class="w-full h-full object-cover"
        />
      </div>
    </section>
    <!-- Reviews section -->
    <Reviews />
    <!-- The team section -->
    <section id="teams-section" class="flex flex-col lg:flex-row">
      <div class="lg:w-1/2 p-[2px] lg:border-r border-tiffinYellow">
        <img
          src="@/assets/images/team.png"
          alt=""
          class="w-full h-full object-cover"
        />
      </div>
      <div
        class="lg:w-1/2 lg:pl-20 lg:pr-14 px-8 py-20 flex flex-col justify-center gap-10 text-tiffinTextPrimary"
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
    <section id="hero-section" class="flex lg:flex-row flex-col">
      <div
        class="lg:w-1/2 lg:pl-20 lg:pr-14 px-8 py-20 flex flex-col justify-center gap-10 text-tiffinTextPrimary"
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
      <div
        class="lg:w-1/2 lg:p-[2px] border-t lg:border-t-0 lg:border-l border-tiffinYellow lg:-ml-[1px]"
      >
        <img
          src="@/assets/images/party-hall.png"
          alt=""
          class="w-full h-full object-cover"
        />
      </div>
    </section>
  </div>
</template>
<script>
// import { ChevronLeft } from "vue-material-design-icons";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiChevronLeft, mdiChevronRight, mdiStar } from "@mdi/js";
import Reviews from "../components/Home/Reviews.vue";
export default {
  name: "Home",
  components: {
    SvgIcon,
    Reviews,
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
