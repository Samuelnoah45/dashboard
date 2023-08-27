<script setup>
const DonateVia = ref([
  {
    id: 1,
    url: "https://res.cloudinary.com/blue-sky/image/upload/v1690984637/TeleBirr_ezrsod.png",
  },
  {
    id: 2,
    url: "https://res.cloudinary.com/blue-sky/image/upload/v1690984637/CBE_Birr_xpo0h9.png",
  },
  {
    id: 3,
    url: "https://res.cloudinary.com/blue-sky/image/upload/v1690984637/Visa_guxqog.png",
  },
  {
    id: 4,
    url: "https://res.cloudinary.com/blue-sky/image/upload/v1690984637/alipay_ayrx3q.png",
  },
  {
    id: 5,
    url: "https://res.cloudinary.com/blue-sky/image/upload/v1690984637/Mastercard_e74nfy.png",
  },
  {
    id: 6,
    url: "https://res.cloudinary.com/blue-sky/image/upload/v1690984637/HibretBank_uwyrt8.png",
  },
]);
const partnered = ref([
  {
    id: 1,
    url: "https://res.cloudinary.com/blue-sky/image/upload/v1690984637/EIC_cprdtk.png",
  },
  {
    id: 2,
    url: "https://res.cloudinary.com/blue-sky/image/upload/v1690984637/IPDC_pphqav.png",
  },
  {
    id: 2,
    url: "https://res.cloudinary.com/blue-sky/image/upload/v1690984637/MLS_meekf0.png",
  },
]);
</script>
<template>
  <div>
    <NavBar navClass="dark:bg-dark-secondary"></NavBar>
    <div class="md:h-screen  relative dark:bg-dark-secondary">
      <div class="grid md:grid-cols-2 md:h-full">
        <div
          class="space-y-4 h-full flex flex-col md:px-14   px-4 md:pt-28 relative dark:text-white"
        >
          <div class="absolute hidden md:inline-block top-[18%] left-[30%]">
            <img src="@/assets/images/shapes/Highlight_right.svg" alt="" />
          </div>
          <p class="text-center md:text-left">Lorem ipsum dolor sit amet consectetur.</p>
          <div class="md:text-[96px]  text-[45px] justify-center text-center md:text-left md:inline-block flex space-x-6 md:space-x-0 font-semibold uppercase pr-10 leading-tight">
            <p>our</p>
            <p>Events</p>
          </div>

          <div class="flex">
            <ul>
              <li
                v-for="i in 3"
                class="font-poppins text-sm text-secondary-text  dark:text-white"
              >
                <span class="text-6xl ">.</span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </li>
            </ul>
          </div>
          <div class="flex pt-10 relative w-[45%]">
            <NuxtLink to="/join">
              <InputsButton
                class="border-2 px-2 flex justify-center space-x-2 text-lg items-center bg-primary border-primary md:p-2 p-1 rounded-md text-white md:font-semibold"
                name="Join Us"
              >
                <template #leadingIcon>
                  <Icon
                    name="radix-icons:arrow-top-right"
                    class="text-white md:text-2xl"
                  ></Icon>
                </template>
              </InputsButton>
            </NuxtLink>
            <!-- <div class="absolute right-[23%] bottom-4">
              <img src="@/assets/images/shapes/arrow.svg" alt="" />
            </div> -->
          </div>
        </div>
        <div class="md:h-[90%] pt-28 grid pb-10 md:pb-0 grid-cols-2 gap-10">
          <div class="h-full flex flex-col md:items-end relative">
            <div class="absolute hidden md:inline-block -bottom-10 left-[40%]">
              <img src="@/assets/images/shapes/Highlight_left.svg" alt="" />
            </div>
            <div class="space-y-6">
              <img src="@/assets/images/temp/event_cover1.png" alt="" />
              <div>
                <img src="@/assets/images/temp/event_cover2.png" alt="" />
              </div>
            </div>
          </div>
          <div class="h-full flex flex-col justify-end relative">
            <div class="absolute hidden md:inline-block -top-10 left-[30%]">
              <img src="@/assets/images/shapes/Highlight_top.svg" alt="" />
            </div>
            <div class="space-y-6">
              <img src="@/assets/images/temp/event_cover3.png" alt="" />
              <div>
                <img src="@/assets/images/temp/evnet_cover4.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pb-10 font-poppins w-full relative md:px-10 dark:bg-dark-secondary">
      <LayoutSectionHeader
        titleClass="text-primary-text text-4xl"
        subtitle-class="text-primary-text-light"
        iconName="ic:baseline-live-tv"
        title="Upcoming events"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      ></LayoutSectionHeader>
      <div class="flex justify-center pt-10">
        <div class="md:w-[95%]">
          <div class="grid md:grid-cols-3 px-4 gap-20">
            <div
              v-for="i in 6"
              :key="i"
              class="border-2 space-y-8 shadow-md  dark:shadow-white rounded-lg overflow-hidden dark:bg-dark-primary"
            >
              <NuxtLink :to="`/events/${1}`" class="space-y-6">
                <div
                  class="text-primary w-full text-8xl h-[200px] overflow-hidden"
                >
                  <NuxtImg
                    src="https://res.cloudinary.com/blue-sky/image/upload/v1691043130/event_image_ve4ssf.jpg"
                    format="webp"
                    fit="cover"
                    loading="lazy"
                    width="100%"
                    height="100"
                  ></NuxtImg>
                </div>
                <div class="px-6 text-xl dark:text-white">Lorem ipsum dolor sit amet.</div>
                <div class="px-6 flex space-x-10">
                  <div class="flex items-center space-x-2 text-secondary-text dark:text-dark-text-secondary">
                    <Icon name="uil:calender" width="25" height="25"></Icon>
                    <span class="text-lg mt-1">12 Mar, 2023</span>
                  </div>
                  <div class="flex items-center space-x-2 text-secondary-text dark:text-dark-text-secondary">
                    <Icon
                      name="mdi:museum-outline"
                      width="25"
                      height="25"
                    ></Icon>
                    <span class="text-lg mt-1">Science Museum</span>
                  </div>
                </div>

                <div class="px-6">
                  <p class="text-secondary-text dark:text-dark-text-secondary leading-relaxed">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Laudantium optio incidunt qui! Iste iure exercitationem
                    mollitia dolore quasi debitis asperiores enim deserunt fugit
                    dicta, deleniti aliquam ducimus tenetur provident neque.
                  </p>
                </div>
                <div class="space-y-2">
                  <div class="px-6">
                    <p class="text-base text-secondary-text dark:text-dark-text-secondary">Speakers</p>
                  </div>
                  <div
                    class="flex overflow-x-scroll scroll items-center space-x-4 px-6"
                  >
                    <div v-for="i in 6" :key="i">
                      <div
                        class="w-[200px] h-[50px] flex items-center border-2 px-1 rounded-lg"
                      >
                        <div class="flex items-center space-x-4">
                          <div
                            class="rounded-full flex justify-center overflow-hidden w-8 h-8"
                          >
                            <NuxtImg
                              src="https://res.cloudinary.com/blue-sky/image/upload/v1691039210/event_image_qcg3ic.png"
                              format="webp"
                              loading="lazy"
                              fit="contain"
                            ></NuxtImg>
                          </div>
                          <div  class="dark:text-white">
                            <p>Dr.Salu Milan</p>
                            <p class="text-xs dark:text-dark-text-secondary">state Minter of Science</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="space-y-2">
                  <div>
                    <p class="text-base text-secondary-text dark:text-dark-text-secondary px-6">
                      Sponsored by:-
                    </p>
                  </div>
                  <div class="flex flex-wrap items-center space-x-2 px-6">
                    <div v-for="partner in partnered" :key="partner.id">
                      <NuxtImg
                        :src="partner.url"
                        format="webp"
                        loading="lazy"
                      ></NuxtImg>
                    </div>
                  </div>
                </div>

                <div class="px-6 pb-6">
                  <InputsButton
                    class="border-primary border-2 flex justify-center items-center space-x-4 text-primary font-poppins text-xl w-full p-2 py-4 rounded-lg"
                    name="Book Now"
                  >
                    <template #leadingIcon>
                      <Icon name="lucide:ticket" width="25" height="25"></Icon>
                    </template>
                  </InputsButton>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <LayoutFooter></LayoutFooter>
</template>
<style>
.scroll::-webkit-scrollbar {
  width: 1em;
  display: none;
}

.scroll::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  display: none;
}

.scroll::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
  display: none;
}
</style>
