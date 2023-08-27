<script setup>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
definePageMeta({
  layout: "content",
});
</script>
<template>
  <div class="px-10">
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
    <div class="grid grid-cols-12 h-[80vh] py-10">
      <div class="col-span-4 flex-col overflow-y-scroll space-y-4 h-full flex">
        <div v-for="i in 10" class="w-[90%] space-y-4 rounded-lg border-2 p-4">
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
            aspernatur hic, voluptatibus quae minus a cum, mollitia illum rem.
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
      <div class="col-span-8 flex pr-10 overflow-y-scroll justify-end">
        <div class="w-[95%]">
          <ClientOnly>
            <QuillEditor class="h-[100px]" toolbar="full" theme="snow" />
          </ClientOnly>
        </div>
      </div>
    </div>
  </div>
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
.ql-toolbar {
  @apply bg-primary;
}
</style>
