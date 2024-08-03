<template>
  <section
    id="reviews-section"
    class="flex flex-col divide-y divide-tiffinYellow relative z-0"
  >
    <!-- Heading -->
    <div class="px-8 lg:px-20 py-3 flex items-center justify-between">
      <h5 class="text-lg text-tiffinTextPrimary">Reviews</h5>
      <div class="flex items-center gap-4">
        <button
          type="button"
          class="flex items-center justify-center px-1 py-1 rounded-full bg-tiffinYellow text-white"
          @click="prevSlide"
        >
          <svg-icon type="mdi" :path="ChevronLeft"></svg-icon>
        </button>
        <button
          type="button"
          class="flex items-center justify-center px-1 py-1 rounded-full bg-tiffinYellow text-white"
          @click="nextSlide"
        >
          <svg-icon type="mdi" :path="ChevronRight"></svg-icon>
        </button>
      </div>
    </div>
    <!-- Reviews -->
    <div class="px-8 lg:px-20 py-20 flex flex-col gap-8 lg:gap-0 lg:flex-row">
      <div class="flex flex-col gap-4 lg:w-3/12 flex-shrink-0">
        <div class="flex items-center gap-4">
          <div class="flex-shrink-0">
            <img src="@/assets/icons/ellipse.png" alt="" />
          </div>
          <div>
            <h5 class="text-lg font-bold text-tiffinTextPrimary">
              The Tiffin Box
            </h5>
            <span class="flex items-center gap-2">
              <span class="text-[25px] font-bold text-tiffinTextPrimary"
                >4.4</span
              >
              <span class="flex items-center gap-1 z-20">
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
            <a
              class="px-6 py-2 mt-4 w-56 bg-tiffinYellow text-tiffinTextPrimary hidden md:flex items-center gap-2 justify-center"
              href="https://www.google.com/search?q=tiffin+box+coventry&oq=tiff&gs_lcrp=EgZjaHJvbWUqBggBEEUYOzIGCAAQRRg8MgYIARBFGDsyBggCEEUYOTIGCAMQRRg7MgcIBBAAGI8CMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEINDQ0MmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x48774bff1a6980f5:0xa719bfb056f23ce3,3,,,,"
            >
              <span class="bg-white rounded-full p-1">
                <img src="@/assets/icons/google.svg" alt="" />
              </span>
              <span class="text-lg text-tiffinTextPrimary font-bold"
                >Review Us</span
              >
            </a>
          </div>
        </div>

        <a
          class="px-6 py-2 mt-4 w-56 mx-auto bg-tiffinYellow text-tiffinTextPrimary flex md:hidden items-center gap-2 justify-center"
          href="https://www.google.com/search?q=tiffin+box+coventry&oq=tiff&gs_lcrp=EgZjaHJvbWUqBggBEEUYOzIGCAAQRRg8MgYIARBFGDsyBggCEEUYOTIGCAMQRRg7MgcIBBAAGI8CMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEINDQ0MmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x48774bff1a6980f5:0xa719bfb056f23ce3,3,,,,"
        >
          <span class="bg-white rounded-full p-1">
            <img src="@/assets/icons/google.svg" alt="" />
          </span>
          <span class="text-lg text-tiffinTextPrimary font-bold"
            >Review Us</span
          >
        </a>
      </div>
      <!-- Reviews -->
      <div class="lg:w-9/12">
        <swiper
          :modules="modules"
          :navigation="false"
          :breakpoints="{
            '640': {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            '768': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '1024': {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            '1440': {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }"
          navigation
          ref="mySwiper"
        >
          <swiper-slide v-for="(review, index) in reviews" :key="index">
            <div class="lg:px-4 lg:pb-4">
              <div class="flex items-center">
                <div
                  class="flex-shrink-0 text-[48px] h-20 w-20 text-white flex items-center justify-center rounded-full"
                  :style="{ backgroundColor: review.color }"
                >
                  {{ review.name.charAt(0) }}
                </div>
                <div class="ml-2 text-tiffinTextPrimary">
                  <h6 class="text-lg font-bold">{{ review.name }}</h6>
                  <p>a month ago</p>
                  <span class="flex items-center gap-1">
                    <svg-icon
                      v-for="item in review.stars"
                      type="mdi"
                      :path="Star"
                      class="text-tiffinYellow"
                      :key="item"
                    ></svg-icon>
                  </span>
                </div>
              </div>
              <div class="h-64 mt-4 overflow-auto review-description pr-2">
                <p
                  v-html="review.review"
                  class="text-justify text-tiffinTextPrimary"
                ></p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div></div>
  </section>
</template>
<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiChevronLeft, mdiChevronRight, mdiStar } from "@mdi/js";
import { reviews } from "../../utils/data";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
export default {
  name: "HomeReviews",
  components: {
    SvgIcon,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      Star: mdiStar,
      ChevronLeft: mdiChevronLeft,
      ChevronRight: mdiChevronRight,
      reviews: reviews,
      modules: [Navigation],
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: false,
        pagination: { clickable: true },
        loop: true,
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
    };
  },
  methods: {
    prevSlide() {
      this.$refs.mySwiper.slidePrev();
    },
    nextSlide() {
      this.$refs.mySwiper.slideNext();
    },
  },
};
</script>
<style>
.review-description::-webkit-scrollbar {
  width: 8px; /* width of the entire scrollbar */
  height: 20px;
}

.review-description::-webkit-scrollbar-track {
  background: #f5f0e3; /* color of the tracking area */
}

.review-description::-webkit-scrollbar-thumb {
  background-color: #cfa030; /* color of the scroll thumb */
  border-radius: 20px; /* roundness of the scroll thumb */
  border: 3px solid #cfa030; /* creates padding around scroll thumb */
}

.swiper {
  width: 100%;
  height: 100%;
}
</style>
