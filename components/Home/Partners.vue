<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
const testimonialCarousel = ref(null);
//  const  props = defineProps({
//   partners: {
//     type: Array,
//     required: true,
//   },
// });

const partners = ref([
  {
    id: 1,
    name: "https://res.cloudinary.com/blue-sky/image/upload/v1690920132/symertic_color_b56fq9.png",
  },
  {
    id: 2,
    name: "https://res.cloudinary.com/blue-sky/image/upload/v1690920133/wishelp_s0vf7k.png",
  },
  {
    id: 3,
    name: "https://res.cloudinary.com/blue-sky/image/upload/v1690920128/rescued_color_jorryr.png",
  },
  {
    id: 4,
    name: "https://res.cloudinary.com/blue-sky/image/upload/v1690920121/JIGGE_color_ap7of5.png",
  },
  {
    id: 5,
    name: "https://res.cloudinary.com/blue-sky/image/upload/v1690920132/symertic_color_b56fq9.png",
  },
  {
    id: 6,
    name: "https://res.cloudinary.com/blue-sky/image/upload/v1690920133/wishelp_s0vf7k.png",
  },
  {
    id: 7,
    name: "https://res.cloudinary.com/blue-sky/image/upload/v1690920128/rescued_color_jorryr.png",
  },
  {
    id: 8,
    name: "https://res.cloudinary.com/blue-sky/image/upload/v1690920121/JIGGE_color_ap7of5.png",
  },
]);
const breakpoint = ref({
  // 700px and up
  700: {
    itemsToShow: 4,
    // snapAlign: "center",
  },
  // 1024 and up
  1024: {
    itemsToShow: 4,
  },
});
const settings = ref({
  itemsToShow: 1,

  // snapAlign: "end",
});
</script>

<template>
  <TabGroup
    as="div"
    class="flex w-full flex-col justify-center items-center space-y-10"
  >
    <TabList class="flex md:w-2/3 justify-center">
      <div class="w-full flex space-x-2 md:space-x-0">
        <Tab class="w-1/3" v-slot="{ selected }">
          <div
            :class="
              selected
                ? 'border-b-2 border-primary text-primary'
                : 'border-b-2 text-primary-text-light dark:text-dark-text-secondary '
            "
            class="flex space-x-4 justify-center items-center p-2"
          >
            <div class="font-semibold flex">
              <span>Private(8)</span>
            </div>
          </div>
        </Tab>
        <Tab class="w-1/3" v-slot="{ selected }">
          <div
            :class="
              selected
                ? 'border-b-2 border-primary text-primary'
                : 'border-b-2 text-primary-text-light dark:text-dark-text-secondary '
            "
            class="flex space-x-4 justify-center items-center p-2"
          >
            <p>Government(4)</p>
          </div></Tab
        >
        <Tab class="w-1/3" v-slot="{ selected }">
          <div
            :class="
              selected
                ? 'border-b-2 border-primary text-primary'
                : 'border-b-2 text-primary-text-light dark:text-dark-text-secondary '
            "
            class="flex space-x-4 justify-center items-center p-2"
          >
            <p><span class="hidden">Developer Partner-</span>NGO(2)</p>
          </div></Tab
        >
      </div>
    </TabList>
    <TabPanels>
      <TabPanel>
        <div class="flex space-x-10">
          <div
            @click="testimonialCarousel.prev()"
            class="text-xl font-bold cursor-pointer hover:text-primary"
          >
            <Icon name="ooui:next-rtl" />
          </div>
          <carousel
            ref="testimonialCarousel"
            class=""
            :breakpoints="breakpoint"
          >
            <slide v-for="paretner in partners" :key="paretner.id">
              <div class="h-[100px]">
                <NuxtImg
                  format="webp"
                  loading="lazy"
                  :src="paretner.name"
                ></NuxtImg>
              </div>
            </slide>

            <template #addons>
              <!-- <navigation /> -->

              <pagination />
            </template>
          </carousel>

          <div
            @click="testimonialCarousel.next()"
            class="text-xl font-bold cursor-pointer hover:text-primary"
          >
            <Icon name="ooui:next-ltr" />
          </div>
        </div>
      </TabPanel>
      <TabPanel>Content 2</TabPanel>
      <TabPanel>Content 3</TabPanel>
    </TabPanels>
  </TabGroup>
</template>
<style>
/* 
.carousel {
  @apply flex justify-center flex-col items-center;
} */
/* .carousel__pagination-button::after {
  @apply bg-primary-light h-2 rounded-lg hover:bg-primary;
}
.carousel__pagination-button--active::after {
  @apply bg-primary w-8 rounded-lg;
} */
</style>
