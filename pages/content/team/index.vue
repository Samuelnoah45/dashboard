<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
definePageMeta({
  layout: "content",
});
</script>
<template>
  <TabGroup as="div" class="w-md:[100%] lg:px-10 px-2 space-y-4 flex flex-col">
    <TabList class="flex w-full border-b">
      <div class="flex lg:w-[45%] justify-between w-full">
        <Tab as="template" v-slot="{ selected }" class=""
          ><div class="flex cursor-pointer items-center">
            <div
              class="font-semibold flex justify-center items-center space-x-2"
              :class="
                selected
                  ? '  border-primary border-b-2 text-primary py-2'
                  : 'text-primary-text-light   dark:text-dark-text-secondary'
              "
            >
              <Icon name="tabler:news" class="lg:text-2xl mb-1"></Icon>

              <p>Board of Directors</p>
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
              <Icon
                name="streamline:interface-text-formatting-right-align-rag-paragraph-text-alignment-align-right-formatting-left"
                class="text-xl mb-1"
              ></Icon>

              <p>Advisor</p>
            </div>
          </div>
        </Tab>
        <Tab as="template" v-slot="{ selected }" class=""
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
              <p>Team Members</p>
            </div>
          </div>
        </Tab>
      </div>
    </TabList>
    <TabPanels>
      <TabPanel class="w-full space-y-4">
        <div class="flex items-end justify-between">
          <div class="w-1/2 lg:w-auto h-10">
            <InputsTextfield name="search" class="pl-10">
              <template #leading>
                <Icon
                  name="gala:search"
                  class="text-gray-500 -rotate-90 absolute top-2 text-2xl left-2"
                ></Icon>
              </template>
            </InputsTextfield>
          </div>
          <button
            class="flex justify-center items-center space-x-2 p-2 bg-primary text-white font-semibold rounded-md"
          >
            <Icon name="solar:pen-2-linear"></Icon>
            <p>Board of Directors</p>
          </button>
        </div>
        <div
          class="grid lg:grid-cols-4 gap-5 lg:h-[68vh]  overflow-y-scroll"
        >
          <PeronsInfo v-for="i in 16"></PeronsInfo>
        </div>
      </TabPanel>
      <TabPanel class="w-full space-y-4">
        <div class="flex items-end justify-between">
          <div class="w-1/2 lg:w-auto h-10">
            <InputsTextfield name="search" class="pl-10">
              <template #leading>
                <Icon
                  name="gala:search"
                  class="text-gray-500 -rotate-90 absolute top-2 text-2xl left-2"
                ></Icon>
              </template>
            </InputsTextfield>
          </div>
          <button
            class="flex justify-center items-center space-x-2 p-2 bg-primary text-white font-semibold rounded-md"
          >
            <Icon name="solar:pen-2-linear"></Icon>
            <p>Advisor</p>
          </button>
        </div>
        <div
          class="grid lg:grid-cols-4 gap-5 lg:h-[68vh]  overflow-y-scroll"
        >
          <PeronsInfo v-for="i in 16"></PeronsInfo>
        </div>
      </TabPanel>

      <TabPanel class="w-full space-y-4">
        <div class="flex items-end justify-between">
          <div class="w-1/2 lg:w-auto h-10">
            <InputsTextfield name="search" class="pl-10">
              <template #leading>
                <Icon
                  name="gala:search"
                  class="text-gray-500 -rotate-90 absolute top-2 text-2xl left-2"
                ></Icon>
              </template>
            </InputsTextfield>
          </div>
          <button
            class="flex justify-center items-center space-x-2 p-2 bg-primary text-white font-semibold rounded-md"
          >
            <Icon name="solar:pen-2-linear"></Icon>
            <p>Team Member </p>
          </button>
        </div>
        <div
          class="grid lg:grid-cols-4 gap-5 lg:h-[68vh]  overflow-y-scroll"
        >
          <PeronsInfo v-for="i in 16"></PeronsInfo>
        </div>
      </TabPanel>
    </TabPanels>
  </TabGroup>
</template>

<style scoped>
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
.ql-container {
  @apply lg:h-[50vh];
}
</style>
