<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
const onClickHandler = (page) => {
  console.log(page);
};

const currentPage = ref(1);
const gallery = ref([
  "https://res.cloudinary.com/blue-sky/image/upload/v1692546069/gallery_10_nfmnuw.jpg",
  "https://res.cloudinary.com/blue-sky/image/upload/v1692546069/gallery_9_cihchx.jpg",
  "https://res.cloudinary.com/blue-sky/image/upload/v1692546067/gallery_3_bw7rzj.jpg",
  "https://res.cloudinary.com/blue-sky/image/upload/v1692546066/gallery_6_am3nxt.jpg",
  "https://res.cloudinary.com/blue-sky/image/upload/v1692546066/gallery_8_qiglgp.jpg",
  "https://res.cloudinary.com/blue-sky/image/upload/v1692546065/gallery_7_uloiku.jpg",
  "https://res.cloudinary.com/blue-sky/image/upload/v1692546064/gallery_4_icwfje.jpg",
  "https://res.cloudinary.com/blue-sky/image/upload/v1692546065/gallery_5_uk85oj.jpg",
  "https://res.cloudinary.com/blue-sky/image/upload/v1692546069/gallery_10_nfmnuw.jpg",
  "https://res.cloudinary.com/blue-sky/image/upload/v1692546069/gallery_9_cihchx.jpg",
  "https://res.cloudinary.com/blue-sky/image/upload/v1692546067/gallery_3_bw7rzj.jpg",
  "https://res.cloudinary.com/blue-sky/image/upload/v1692546066/gallery_6_am3nxt.jpg",
]);
definePageMeta({
  layout: "content",
});
</script>
<template>
  <div class="flex md:px-[100px] px-4">
    <TabGroup as="div" class="w-md:[100%] flex flex-col">
      <TabList class="flex w-full border-b">
        <div class="flex md:w-[24%] space-x-6 w-full">
          <Tab as="template" v-slot="{ selected }" class="md:w-1/3"
            ><div class="flex cursor-pointer items-center">
              <div
                class="font-semibold flex justify-center items-center space-x-2"
                :class="
                  selected
                    ? ' border-primary border-b-2 text-primary py-2'
                    : 'text-primary-text-light   dark:text-dark-text-secondary'
                "
              >
                <Icon name="lucide:image" class="text-2xl mb-1"></Icon>

                <p>Images</p>
              </div>
            </div>
          </Tab>
          <Tab as="template" v-slot="{ selected }" class="md:w-1/3"
            ><div class="flex cursor-pointer justify-center items-center">
              <div
                class="font-semibold flex justify-center items-center space-x-2"
                :class="
                  selected
                    ? ' border-primary border-b-2 text-primary py-2'
                    : 'text-primary-text-light   dark:text-dark-text-secondary'
                "
              >
                <Icon name="lucide:video" class="text-2xl mb-1"></Icon>
                <p>Videos</p>
              </div>
            </div>
          </Tab>
        </div>
      </TabList>
      <TabPanels>
        <TabPanel class="w-full">
          <div class="flex h-[72vh]">
            <div class="grid md:grid-cols-4 gap-10 py-10">
              <div v-for="(image, i) in gallery" class="rounded-lg flex">
                <NuxtLink class="" to="/communications/1">
                  <div class="space-y-4 rounded-lg overflow-hidden">
                    <div class="h-[200px] md:w-[300px] max-w-full relative">
                      <img
                        :src="image"
                        alt=""
                        class="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </NuxtLink>
              </div>

              <!-- card two -->
            </div>
          </div>
          <!-- </div> -->
          <vue-awesome-paginate
            :total-items="50"
            :items-per-page="5"
            :max-pages-shown="3"
            v-model="currentPage"
            :hidePrevNextWhenEnds="true"
            :on-click="onClickHandler"
            class="w-full flex justify-center relative"
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
        </TabPanel>
        <TabPanel class="w-full">
          <!-- <div class="md:w-[70%] bg-black w-full grid md:grid-cols-2  grid-cols-1 md:gap-16 gap-4"> -->
          <!-- card one -->
          <div class="flex h-[72vh]">
            <div class="grid md:grid-cols-4 gap-10 py-10">
              <div v-for="(image, i) in gallery" class="rounded-lg flex">
                <NuxtLink class="" to="/communications/1">
                  <div class="space-y-4 rounded-lg overflow-hidden">
                    <div class="h-[200px] md:w-[300px] max-w-full relative">
                      <Icon
                        name="carbon:play-filled"
                        class="absolute z-50 top-[45%] left-[45%] text-[#E71D37] text-[90px]"
                      ></Icon>
                      <img
                        :src="image"
                        alt=""
                        class="w-full h-full object-cover"
                        :class="i % 3 == 0 ? 'blur-sm' : 'blur-sm'"
                      />
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="px-4">
            <vue-awesome-paginate
              :total-items="50"
              :items-per-page="5"
              :max-pages-shown="3"
              v-model="currentPage"
              :hidePrevNextWhenEnds="true"
              :on-click="onClickHandler"
              class="w-full flex justify-center relative"
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
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>
<style>
.pagination-container {
  @apply flex space-x-4 border-t-2;
}
.paginate-buttons {
  @apply md:w-10 max-w-[80%]  cursor-pointer pt-2;
}

.active-page {
  @apply border-t-2 border-primary;
}
</style>
