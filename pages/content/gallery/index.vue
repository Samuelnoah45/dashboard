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
  <TabGroup as="div" class="w-md:[100%] px-20 space-y-4 flex flex-col">
    <TabList class="flex w-full border-b">
      <div class="flex md:w-[20%] justify-between space-x-6 w-full">
        <Tab as="template" v-slot="{ selected }" class="md:w-1/3"
          ><div class="flex cursor-pointer items-center">
            <div
              class="font-semibold flex justify-center items-center space-x-2"
              :class="
                selected
                  ? '  border-primary border-b-2 text-primary py-2'
                  : 'text-primary-text-light   dark:text-dark-text-secondary'
              "
            >
              <Icon name="ri:image-fill" class="text-2xl mb-1"></Icon>

              <p>Image</p>
            </div>
          </div>
        </Tab>
        <Tab as="template" v-slot="{ selected }" class=""
          ><div class="flex cursor-pointer items-center">
            <div
              class="font-semibold flex justify-center items-center space-x-2"
              :class="
                selected
                  ? '  border-primary border-b-2 text-primary py-2'
                  : 'text-primary-text-light'
              "
            >
              <Icon name="tabler:video" class="text-3xl mb-1"></Icon>

              <p>Video</p>
            </div>
          </div>
        </Tab>
      </div>
    </TabList>
    <TabPanels>
      <TabPanel class="w-full space-y-4">
        <div class="flex justify-between">
          <p class="text-xl font-medium">Images</p>

          <button
            class="flex justify-center items-center space-x-2 p-2 bg-primary text-white font-semibold rounded-md"
          >
            <Icon name="gridicons:add-image" class="text-2xl"></Icon>
            <p>Add image</p>
          </button>
        </div>
        <div class="h-[68vh] px-2 overflow-y-scroll space-y-4">
          <div class="grid grid-cols-4 gap-20">
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
          </div>
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

      <TabPanel class="w-full space-y-4">
        <div class="flex justify-between">
          <p class="text-xl font-medium">Videos</p>
          <button
            class="flex justify-center items-center space-x-2 p-2 bg-primary text-white font-semibold rounded-md"
          >
            <Icon
              name="ant-design:video-camera-add-outlined"
              class="text-2xl"
            ></Icon>
            <p>Add Video</p>
          </button>
        </div>
        <div class="h-[68vh] px-2 overflow-y-scroll space-y-4">
          <div class="grid grid-cols-4 gap-20">
            <div v-for="(image, i) in gallery" class="rounded-lg flex">
              <NuxtLink class="" to="/communications/1">
                <div class="space-y-4 rounded-lg overflow-hidden">
                  <div class="h-[200px] md:w-[300px] max-w-full relative">
                    <Icon
                      v-if="0 == 0"
                      name="carbon:play-filled"
                      class="absolute z-50 top-[30%] left-[30%] text-[#E71D37] text-[90px]"
                    ></Icon>
                    <img
                      :src="image"
                      alt=""
                      class="w-full h-full object-cover"
                      :class="true ? 'blur-sm' : ''"
                    />
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
</template>
<style scoped>
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
