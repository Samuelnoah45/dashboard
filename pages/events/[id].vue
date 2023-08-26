<script setup>
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
const gender = ref("");
const current = ref(1);
const genderList = ref([
  {
    id: "CEO",
    name: "CEO",
  },
  {
    id: "CFO",
    name: "CFO",
  },
]);
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
]);
const testimonialCarousel = ref(null);
const breakpoint = ref({
  // 700px and up
  700: {
    itemsToShow: 1,
    // snapAlign: "center",
  },
  // 1024 and up
  1024: {
    itemsToShow: 3,
  },
});
const settings = ref({
  itemsToShow: 1,

  // snapAlign: "end",
});
const openBookModal = ref(true);
</script>
<template>
  <div>
    <HModal
      v-model="openBookModal"
      wrapperClass="w-[30%] h-[96vh] space-y-4 px-2 dark:bg-dark-secondary py-6 rounded-lg py-3 bg-white shadow-xl overflow-visible  duration-300"
      class=""
    >
      <template #ModalContent>
        <div class="px-6 flex justify-between">
          <p class="dark:text-white">Book Event</p>
          <Icon
            @click="openBookModal = false"
            class="ml-auto cursor-pointer text-2xl dark:text-white"
            name="carbon:close-outline"
          ></Icon>
        </div>
        <div class="px-6">
          <InputsTextfield
            name="id"
            rules=""
            type="email"
            class="focus:border-primary px-16 py-[12px] mb-4  dark:bg-dark-secondary"
            placeholder="EYEA Membership ID"
            placeholder-style="text-primary-text-light dark:text-dark-text-secondary  "
          >
            <template #leading>
              <div
                class="absolute top-3 left-6 text-primary-text-light dark:text-white font-poppins"
              >
                <Icon name="octicon:id-badge-16" width="25" height="25"></Icon>
              </div>
            </template>
            <template #label>
              <div
                class="top-3 left-6 text-secondary-text mb-3 dark:text-white font-poppins"
              >
                Membership ID
              </div>
            </template>
          </InputsTextfield>
          <div class="border-[1px] relative my-4">
            <div
              class="absolute left-[35%] -top-3  dark:text-white bg-white dark:bg-dark-secondary px-4"
            >
              Not A Member
            </div>
          </div>
          <InputsTextfield
            name="full name"
            rules=""
            type="email"
            class="focus:border-primary px-16 py-[12px] mb-4  dark:bg-dark-secondary"
            placeholder="Full Name"
            placeholder-style="text-primary-text-light dark:text-dark-text-secondary  "
          >
            <template #leading>
              <div
                class="absolute top-3 left-6 text-primary-text-light dark:text-dark-text-secondary font-poppins"
              >
                <Icon
                  name="eva:person-done-outline"
                  width="25"
                  height="25"
                ></Icon>
              </div>
            </template>
            <template #label>
              <div
                class="top-3 left-6 text-secondary-text mb-3 dark:text-dark-text-secondary font-poppins"
              >
                Full Name
              </div>
            </template>
          </InputsTextfield>
          <InputsTextfield
            name="email"
            rules=""
            type="email"
            class="focus:border-primary px-16 py-[12px] mb-4  dark:bg-dark-secondary dark:"
            placeholder="user@example.com"
            placeholder-style="text-primary-text-light dark:text-dark-text-secondary  "
          >
            <template #leading>
              <div
                class="absolute top-3 left-6 text-primary-text-light dark:text-dark-text-secondary font-poppins"
              >
                <Icon name="ic:outline-email" width="25" height="25"></Icon>
              </div>
            </template>
            <template #label>
              <div
                class="top-3 left-6 text-secondary-text mb-3 dark:text-dark-text-secondary font-poppins"
              >
                Email
              </div>
            </template>
          </InputsTextfield>
          <InputsTextfield
            name="Company name"
            rules=""
            type="email"
            class="focus:border-primary px-16 py-[12px] mb-4  dark:bg-dark-secondary"
            placeholder="Company Name"
            placeholder-style="text-primary-text-light dark:text-dark-text-secondary  "
          >
            <template #leading>
              <div
                class="absolute top-3 left-6 text-primary-text-light dark:text-dark-text-secondary font-poppins"
              >
                <Icon name="uil:building" width="25" height="25"></Icon>
              </div>
            </template>
            <template #label>
              <div
                class="top-3 left-6 text-primary-text mb-3 dark:text-white font-poppins"
              >
                Company Name
              </div>
            </template>
          </InputsTextfield>
          <InputsTextfield
            name="phone number"
            rules=""
            type="number"
            class="focus:border-primary px-20 py-[12px] mb-4  dark:bg-dark-secondary"
            placeholder-style="text-primary-text-light dark:text-dark-text-secondary"
          >
            <template #leading>
              <div
                class="absolute flex justify-center py-4 px-4 bg-gray-200 h-[95%] top-[1px] dark:bg-dark-secondary border-r-[1px] left-[1px] rounded-l-md text-primary-text-light dark:text-dark-text-secondary font-poppins"
              >
                <span>+251</span>
              </div>
            </template>
            <template #label>
              <div
                class="top-3 left-6 text-secondary-text mb-3 dark:text-dark-text-secondary font-poppins"
              >
                Phone Number
              </div>
            </template>
          </InputsTextfield>
          <InputsListselect
            name="occupation"
            :items="genderList"
            v-model="gender"
            class="block w-full py-[12px] rounded-md dark:bg-dark-secondary"
            rules=""
            placeholder="Select Occupation"
          >
            <template v-slot:label>
              <div
                class="block text-base font-medium leading-6 text-gray-700 mb-4 dark:text-dark-text-secondary"
              >
                occupation
              </div>
            </template>
          </InputsListselect>
          <InputsTextfield
            name="photo"
            type="email"
            :disabled="true"
            class="focus:border-primary px-16 py-[12px] mb-4  dark:bg-dark-secondary dark:"
            placeholder=""
            placeholder-style="text-primary-text-light dark:text-dark-text-secondary  "
          >
            <template #leading>
              <div
                class="absolute top-3 left-6 text-primary-text-light dark:text-dark-text-secondary font-poppins"
              >
                <Icon name="mingcute:scan-line" width="25" height="25"></Icon>
              </div>
            </template>
            <template #trailing>
              <div
                class="absolute flex justify-center py-4 px-4 dark:bg-dark-secondary bg-gray-200 h-[93%] w-[40%] top-[1px] right-[1px] rounded-r-md text-primary-text-light dark:text-dark-text-secondary font-poppins"
              >
                <Icon name="pajamas:upload" width="20" height="20"></Icon>
                <span
                  class="text-primary-text ml-4 dark:text-dark-text-secondary"
                  >upload</span
                >
              </div>
            </template>
            <template #label>
              <div
                class="top-3 left-6 text-secondary-text mb-3 dark:text-dark-text-secondary font-poppins"
              >
                Photo
              </div>
            </template>
          </InputsTextfield>
          <div class="text-left dark:text-white pb-2">Please check your account for an email  form us and confirm to RSVP .Thank you!</div>
          <InputsButton
            @click="openBookModal = true"
            class="flex justify-center items-center space-x-2 text-white bg-primary font-poppins text-xl w-full p-2 py-3 rounded-lg"
            name="Book Now"
          >
            <template #leadingIcon>
              <Icon name="lucide:ticket" width="25" height="25"></Icon>
            </template>
          </InputsButton>
        </div>
      </template>
    </HModal>
    <NavBar navClass="dark:bg-dark-primary"></NavBar>
    <div
      class="md:min-h-screen font-poppins md:px-20 px-2 md:pt-10 dark:bg-dark-primary"
    >
      <div class="relative">
        <carousel class="w-full" :items-to-show="1">
          <slide v-for="slide in 10" :key="slide">
            <div class="w-full relative">
              <div class="absolute left-[3%] bottom-[9%] md:w-[50%]">
                <p
                  class="font-poppins md:text-2xl text-xs md:font-semibold text-white"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt enim provident nesciunt! Debitis est animi dolores
                  harum quas deserunt deleniti.
                </p>
              </div>
              <img
                class="w-full"
                src="https://res.cloudinary.com/blue-sky/image/upload/v1691062782/event_detail1_hej0nv.png"
                alt=""
                srcset=""
              />
            </div>
          </slide>

          <template #addons>
            <navigation />
            <!-- <pagination /> -->
          </template>
        </carousel>
      </div>
      <div class="grid md:grid-cols-11 md:pt-20 pt-2">
        <div
          class="md:col-span-8 md:pr-20 border-r-2 dark:border-dark-text-secondary space-y-10"
        >
          <div class="dark:text-dark-text-secondary">12 Feb 2023</div>
          <div>
            <p
              class="md:text-5xl text-center md:text-left text-lg dark:text-white"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              debitis quos quibusdam?
            </p>
          </div>
          <div>
            <p
              class="md:text-xl md:text-left text-justify md:leading-relaxed text-secondary-text dark:text-dark-text-secondary"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
              repudiandae ratione reiciendis, aperiam vero facilis praesentium
              sapiente, omnis temporibus consequuntur commodi laboriosam,
              corrupti amet doloremque esse repellendus? Eius debitis quibusdam
              soluta? Possimus, expedita ipsum quaerat id voluptatibus sequi!
              Commodi quia, molestias ut iure quos illo dolores rem velit ea,
              autem soluta inventore expedita assumenda ab facere odio! Dolores,
              modi earum nam expedita error nesciunt dignissimos, suscipit
              recusandae iste nisi eveniet vel aut? Excepturi veritatis nobis ut
              id facilis aspernatur voluptates eum obcaecati a? Laborum eos amet
              corrupti laboriosam. Veniam perspiciatis laudantium excepturi
              beatae voluptatem, rerum doloribus aliquam quae minus cumque?
            </p>
          </div>
          <div class="space-y-10 pb-8 px-2">
            <p class="font-semibold text-2xl dark:text-white">Sponsors</p>
            <div class="flex flex-wrap">
              <div
                v-for="paretner in partners"
                class="md:pb-4 md:pr-4 pb-2 pr-2"
              >
                <NuxtImg
                  class="w-[100px] h-[100px]] md:w-auto md:h-auto"
                  format="webp"
                  loading="lazy"
                  :src="paretner.name"
                ></NuxtImg>
              </div>
            </div>
          </div>
          <div class="space-y-10 pb-8">
            <p class="md:text-2xl font-semibold dark:text-white">
              Time & Place
            </p>
            <div class="grid md:grid-cols-2 space-y-14 md:space-y-0 px-2">
              <div class="md:border-r-4">
                <div class="flex md:space-x-14 space-x-2">
                  <div class="md:text-3xl text-xl text-primary">
                    <div
                      class="bg-primary-light dark:bg-[#FAC45D57] p-2 px-4 rounded-lg"
                    >
                      <Icon name="zondicons:calendar"></Icon>
                    </div>
                  </div>
                  <div class="md:space-y-10 space-y-2">
                    <p class="pl-2 md:text-2xl dark:text-white">
                      Date and Time
                    </p>
                    <p
                      class="pl-2 text-secondary-text dark:text-dark-text-secondary"
                    >
                      Saturday August 27 20223, 10:30 PM
                    </p>
                    <div class="flex text-primary space-x-2 items-center">
                      <p class="pl-2 font-semibold">Add To Calendar</p>
                      <Icon class="text-2xl" name="jam:arrow-up-right"></Icon>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex md:justify-center">
                <div class="flex md:space-x-14 space-x-2">
                  <div class="md:text-3xl text-xl text-primary">
                    <div
                      class="bg-primary-light dark:bg-[#FAC45D57] p-2 px-4 rounded-lg"
                    >
                      <Icon name="zondicons:location"></Icon>
                    </div>
                  </div>
                  <div class="md:space-y-10 space-y-2">
                    <p class="pl-2 md:text-2xl dark:text-white">Location</p>
                    <p
                      class="pl-2 text-secondary-text dark:text-dark-text-secondary"
                    >
                      Science Museum, 4 kill,Addis Ababa
                    </p>
                    <div class="flex text-primary space-x-2 items-center">
                      <p class="pl-2 font-semibold">Add To Calendar</p>
                      <Icon class="text-2xl" name="jam:arrow-up-right"></Icon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="space-y-10 pb-8 px-2">
            <p class="font-semibold text-2xl dark:text-white">Partners</p>
            <div class="flex flex-wrap md:space-x-6">
              <div
                v-for="paretner in partners"
                class="md:pb-4 md:pr-4 pb-2 pr-2"
              >
                <NuxtImg
                  class="w-[100px] h-[100px]] md:w-auto md:h-auto"
                  format="webp"
                  loading="lazy"
                  :src="paretner.name"
                ></NuxtImg>
              </div>
            </div>
          </div>
          <div class="flex justify-center">
            <div class="max-w-[300px] md:max-w-[100%]">
              <carousel
                class="pb-20"
                :breakpoints="breakpoint"
                snap-align="center"
              >
                <slide class="pb-10" v-for="i in 6" :key="i">
                  <div
                    class="px-10 space-y-2 md:text-left flex md:items-start items-center flex-col text-center font-poppins"
                  >
                    <div
                      class="w-[100px] h-[100px] overflow-hidden bg-black rounded-full"
                    >
                      <img
                        src="@/assets/images/temp/speaker.jpg"
                        alt=""
                        srcset=""
                      />
                    </div>
                    <div class="md:text-lg text-white -text font-semibold">
                      IVan Mathews
                    </div>
                    <p class="md:text-lg text-third-bold">
                      Lead Digital Transformation of Program at MInT
                    </p>
                    <div class="col-span-1">
                      <p
                        class="text-primary-text-light md:text-base text-sm dark:text-dark-text-secondary"
                      >
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Asperiores voluptatem optio suscipit quisquam? Et
                        modi unde accusantium voluptates itaque nisi suscipit
                        explicabo consequatur ipsam ducimus ipsa, quos assumenda
                        enim laborum!
                      </p>
                    </div>
                  </div>
                </slide>

                <template #addons>
                  <pagination />
                </template>
              </carousel>
            </div>
          </div>

          <div class="md:w-[50%] space-y-6">
            <div>
              <p class="text-2xl font-semibold dark:text-white">Agenda</p>
            </div>
            <div
              v-for="i in 3"
              class="space-y-4 pb-10 pl-4 border-l-[3px] relative"
            >
              <Icon
                class="absolute -left-[9px] -top-2 text-gray-400"
                name="octicon:dot-fill-16"
              ></Icon>
              <p class="text-2xl dark:text-white">
                Lorem ipsum, dolor sit amet
              </p>
              <div
                class="flex text-secondary-text dark:text-dark-text-secondary space-x-4"
              >
                <div class="flex items-center justify-center space-x-2">
                  <Icon name="subway:time-5"></Icon>
                  <span class="pt-1 dark:text-dark-text-secondary"
                    >2:30 PM - 4:30 PM</span
                  >
                </div>
                <div class="flex items-center justify-center space-x-2">
                  <Icon name="mdi:museum-outline"></Icon>
                  <span>2:30 PM - 4:30 PM</span>
                </div>
              </div>
              <p
                class="text-primary-text-light md:text-left text-sm md:text-base dark:text-dark-text-secondary text-justify"
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
                eligendi sit commodi, non odio aliquid dolorum expedita dicta,
                provident officia soluta sapiente. Provident voluptate dolorum
                esse pariatur vero culpa quo expedita, eum tenetur, consectetur
                consequuntur officiis eveniet sunt voluptatibus quis corrupti!
                Id veniam voluptate maxime, quasi alias quam incidunt
                laboriosam.
              </p>
            </div>
          </div>
        </div>
        <div class="px-6 md:col-span-3">
          <div
            class="w-full space-y-10 border-2 border-primary p-4 py-8 rounded-lg"
          >
            <div class="flex justify-between">
              <p class="text-2xl font-semibold text-primary">Free</p>
              <p class="text-secondary-text dark:text-dark-text-secondary">
                12d left
              </p>
            </div>
            <p
              class="text-secondary-text dark:text-dark-text-secondary text-justify md:text-left md:text-base text-sm"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
              temporibus beatae culpa saepe doloribus possimus nesciunt magnam
              provident maiores harum.
            </p>
            <InputsButton
              @click="openBookModal = true"
              class="flex justify-center items-center space-x-4 text-white bg-primary font-poppins text-xl w-full p-2 py-4 rounded-lg"
              name="Book Now"
            >
              <template #leadingIcon>
                <Icon name="lucide:ticket" width="25" height="25"></Icon>
              </template>
            </InputsButton>
          </div>
          <div
            class="py-10 flex items-center space-x-2 text-secondary-text dark:text-dark-text-secondary text-lg"
          >
            <img src="@/assets/images/temp/subscribers.png" alt="" />
            <span>people are attending</span>
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

.carousel__next,
.carousel__prev {
  @apply bg-[#5c5b5bb9] rounded-full md:h-10 md:w-10 h-6 w-6 text-white;
}

.carousel__pagination-button::after {
  @apply bg-primary-light h-2 rounded-lg hover:bg-primary;
}
.carousel__pagination-button--active::after {
  @apply bg-primary w-8 rounded-lg;
}
</style>
