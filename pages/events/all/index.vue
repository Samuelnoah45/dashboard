<script setup lang="ts">
const onClickHandler = (page: number) => {
  console.log(page);
};

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

const currentPage = ref(1);

definePageMeta({
  layout: "event",
});
</script>
<template>
  <div class="xl:h-[87vh] overflow-y-scroll lg:px-10 px-5">
    <div class="grid grid-cols-6 md:gap-10 items-center">
      <div class="col-span-2">
        <InputsTextfield placeholder="Search" name="search" />
      </div>
      <div class="">
        <InputsListselect
          name="filter"
          :items="[{ id: 1, name: 'All' }]"
          class="text-primary-text"
        />
      </div>
      <div class="">
        <NuxtLink
          to="/events/create"
          class="bg-primary py-2 text-base space-x-2 text-white rounded-md px-3"
        >
          <Icon name="material-symbols:add" />
          <span>Create New</span>
        </NuxtLink>
      </div>
    </div>
    <div
      class="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 font-poppins gap-10"
    >
      <div
        v-for="i in 3"
        :key="i"
        class="border-2 shadow-md dark:shadow-white rounded-lg overflow-hidden dark:bg-dark-primary"
      >
        <NuxtLink :to="`/events/${1}`" class="space-y-2">
          <div class="text-primary w-full h-[229px] overflow-hidden">
            <NuxtImg
              src="https://res.cloudinary.com/blue-sky/image/upload/v1691043130/event_image_ve4ssf.jpg"
              format="webp"
              fit="cover"
              loading="lazy"
              width="100%"
              height="100%"
            ></NuxtImg>
          </div>
          <div class="px-4 space-y-3 py-5">
            <div class="text-2xl dark:text-white">Placerat eget ac lorem</div>
            <div class="flex w-full justify-between">
              <div
                class="flex items-center space-x-2 text-secondary-text dark:text-dark-text-secondary"
              >
                <Icon name="uil:calender" width="25" height="25"></Icon>
                <span class="text-base mt-1">12 Mar, 2023</span>
              </div>
              <div
                class="flex items-center space-x-2 text-secondary-text dark:text-dark-text-secondary"
              >
                <Icon name="mdi:museum-outline" width="25" height="25"></Icon>
                <span class="text-base mt-1">Science Museum</span>
              </div>
            </div>
            <div>
              <span class="text-[#92400E] bg-[#FEF3C7] rounded-lg">
                <Icon name="mdi:dot" class="text-2xl text-yellow-400" />
                <span class="text-xs pr-3 text-[#92400E]"> Upcoming </span>
              </span>
            </div>
            <div>
              <p
                class="text-secondary-text dark:text-dark-text-secondary leading-relaxed text-sm"
              >
                Urna adipiscing laoreet tellus dolor morbi eget. Eget id
                pellentesque facilisi blandit sem dapibus diam nunc etiam a at
                bibendum. Vestibulum ac augue et ut ornare Neque natoque ...
              </p>
            </div>
            <div class="space-y-2">
              <div class="">
                <p
                  class="text-base text-secondary-text dark:text-dark-text-secondary"
                >
                  Speakers
                </p>
              </div>
              <div class="flex overflow-x-scroll scroll items-center space-x-4">
                <div v-for="i in 3" :key="i">
                  <div
                    class="w-[200px] h-[50px] flex items-center border-2 p-1 rounded-lg"
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
                      <div class="dark:text-white">
                        <p>Dr.Salu Milan</p>
                        <p class="text-xs dark:text-dark-text-secondary">
                          state Minter of Science
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="space-y-2">
              <div>
                <p
                  class="text-base text-secondary-text dark:text-dark-text-secondary"
                >
                  Sponsored by:-
                </p>
              </div>
              <div class="grid grid-cols-3 items-center gap-2">
                <div v-for="partner in partnered" :key="partner.id">
                  <NuxtImg
                    :src="partner.url"
                    format="webp"
                    loading="lazy"
                  ></NuxtImg>
                </div>
              </div>
            </div>
            <div class="pt-4">
              <div class="space-y-2">
                <div class="w-full h-1 flex">
                  <span class="w-[60%] h-full bg-green-700 rounded-lg"></span>
                  <span class="flex-grow bg-green-300 rounded-r-lg"></span>
                </div>
                <div class="flex w-full justify-between text-sm">
                  <h3>43% Booked</h3>
                  <h3>62/200 Seates</h3>
                </div>
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
    <vue-awesome-paginate
      :total-items="50"
      :items-per-page="5"
      :max-pages-shown="3"
      v-model="currentPage"
      :hidePrevNextWhenEnds="true"
      :on-click="onClickHandler"
      class="w-full flex justify-center relative py-2"
    >
      <template #prev-button>
        <div class="flex absolute left-0 items-center space-x-2 top-2">
          <Icon name="mingcute:arrow-left-line"></Icon>
          <p>Previous</p>
        </div>
      </template>
      <template #next-button>
        <div class="flex absolute right-0 items-center space-x-2 top-2">
          <p>Next</p>
          <Icon name="mingcute:arrow-right-line"></Icon>
        </div>
      </template>
    </vue-awesome-paginate>
  </div>
</template>

<style scoped>
::-webkit-scrollbar {
  width: 1px;
  height: 4px;
}

/* Track */
::-webkit-scrollbar-track {
  @apply bg-black;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #c3ddfd;
  border-radius: 3px;
  @apply bg-primary;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #c3ddfd;
}

.ql-toolbar.ql-snow {
  background-color: aqua;
}

.pagination-container {
  @apply flex space-x-4 border-t-2;
}
.paginate-buttons {
  @apply md:w-10 max-w-[80%]  cursor-pointer pt-2;
}

.active-page {
  @apply border-t-2 border-primary;
}
::-webkit-scrollbar {
  width: 1px;
  height: 4px;
  display: none;
}

/* Track */
::-webkit-scrollbar-track {
  @apply bg-primary;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #c3ddfd;
  border-radius: 3px;
  @apply bg-primary;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #c3ddfd;
}
</style>
