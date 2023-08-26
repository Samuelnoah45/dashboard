<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
definePageMeta({
  layout: "content",
});
</script>
<template>
  <TabGroup as="div" class="w-md:[100%] px-20 space-y-4 flex flex-col">
    <TabList class="flex w-full border-b">
      <div class="flex md:w-[45%] space-x-6 w-full">
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
              <Icon name="tabler:news" class="text-2xl mb-1"></Icon>

              <p>News</p>
            </div>
          </div>
        </Tab>
        <Tab as="template" v-slot="{ selected }" class="md:w-1/3"
          ><div class="flex cursor-pointer items-center">
            <div
              class="font-semibold flex justify-center items-center space-x-2"
              :class="
                selected
                  ? '  border-primary border-b-2 text-primary py-2'
                  : 'text-primary-text-light'
              "
            >
              <Icon
                name="streamline:interface-text-formatting-right-align-rag-paragraph-text-alignment-align-right-formatting-left"
                class="text-xl mb-1"
              ></Icon>

              <p>Article</p>
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
              <Icon name="uil:atom" class="text-2xl mb-1"></Icon>
              <p>Research</p>
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
              <Icon name="tdesign:book" class="text-2xl mb-1"></Icon>
              <p>Magazine</p>
            </div>
          </div>
        </Tab>
      </div>
    </TabList>
    <TabPanels>
      <TabPanel class="w-full">
        <div class="flex justify-between">
          <InputsTextfield name="search" class="pl-10">
            <template #leading>
              <Icon
                name="gala:search"
                class="text-gray-500 -rotate-90 absolute top-2 text-2xl left-2"
              ></Icon>
            </template>
          </InputsTextfield>
          <button
            class="flex justify-center items-center space-x-2 p-2 bg-primary text-white font-semibold rounded-md"
          >
            <Icon name="solar:pen-2-linear"></Icon>
            <p>write article</p>
          </button>
        </div>
        <div class="grid grid-cols-12 h-[70vh] py-10">
          <div
            class="col-span-4 flex-col overflow-y-scroll space-y-4 h-full flex"
          >
            <div
              v-for="i in 10"
              class="w-[90%] space-y-4 rounded-lg border-2 p-4"
            >
              <p class="text-2xl font-semibold">Lorem, ipsum dolor.</p>

              <div
                class="flex justify-center w-fit items-center bg-third-light px-2 py-1 space-x-1 text-third rounded-full"
              >
                <Icon name="tabler:news" width="15" height="25"></Icon>
                <p class="text-sm">News</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                voluptate aperiam ex cum nisi sed quo earum! Cumque, sit quod
                aspernatur hic, voluptatibus quae minus a cum, mollitia illum
                rem.
              </p>
              <div class="flex space-x-4 items-center">
                <div
                  class="w-10 h-10 flex justify-center items-center overflow-hidden"
                >
                  <img src="@/assets/images/temp/avator.png" alt="" />
                </div>
                <div>
                  <p class="font-medium">samuel Noah</p>
                  <div class="flex space-x-2 text-sm">
                    <p>Mar 23 ,20223</p>
                    <p>Edited</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-8 flex overflow-y-scroll pr-10 justify-end">
            <div class="w-[95%]">
              <ClientOnly>
                <QuillEditor class="h-[100px]" toolbar="full" theme="snow" />
              </ClientOnly>
            </div>
          </div>
        </div>
        <!-- <vue-awesome-paginate
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
            </vue-awesome-paginate> -->
      </TabPanel>
      <TabPanel class="w-full">
        <div>article</div>
        <!-- </div> -->
      </TabPanel>
      <TabPanel class="w-full">
        <div>research</div>
      </TabPanel>
      <TabPanel class="w-full space-y-4">
        <div class="flex justify-end">
          
          <button
            class="flex justify-center items-center space-x-2 p-2 bg-primary text-white font-semibold rounded-md"
          >
            <Icon name="bytesize:download"></Icon>
            <p>Upload New</p>
          </button>
        </div>
        <div class="grid grid-cols-3 gap-20 h-[68vh] px-2 overflow-y-scroll">
          <div v-for="i in 10" class="rounded-lg border-2 space-y-4 p-4">
            <div class="w-[218px] h-[205px]">
              <img
                src="@/assets/images/temp/zelelabook.png"
                class="object-fit"
                alt=""
              />
            </div>
            <p class="text-lg font-poppins font-medium">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <div class="text-sm ">28,Feb, 2023</div>
            <div class="flex justify-between font-medium space-x-4">
              <button class="flex items-center  border rounded-md p-2 space-x-2">
                <Icon name="bytesize:download" class="text-2xl"></Icon>
                <p>Download</p>
              </button>
              <button class="flex items-center border rounded-md p-2 space-x-2">
                <Icon name="tabler:reload" class="text-2xl"></Icon>
                <p>Update</p>
              </button>
              <button class="flex items-center border rounded-md p-2 space-x-2">
                <Icon name="mi:delete" class="text-2xl"></Icon>
                <p>Delete</p>
              </button>
            </div>
          </div>
        </div>
      </TabPanel>
    </TabPanels>
  </TabGroup>
</template>

<style scoped>
::-webkit-scrollbar {
  width: 1px;
  height: 4px;
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
.ql-container {
  @apply h-[50vh];
}
</style>
