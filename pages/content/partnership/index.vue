<script setup>
definePageMeta({
  layout: "content",
});
</script>
<template>
  <div class="px-20 space-y-4">
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
        <p>New Partner</p>
      </button>
    </div>
    <div class="grid grid-cols-3 gap-20 h-[68vh] px-2 overflow-y-scroll">
      <div
        v-for="i in 10"
        class="rounded-lg space-y-4 flex-col flex justify-between border-2 p-4"
      >
        <div class="space-y-4">
          <div class="w-[218px] h-[82px]">
            <img
              src="@/assets/images/logos/awash_bank.png"
              class="object-fit"
              alt=""
            />
          </div>
          <p class="text-lg font-poppins font-medium">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <p class="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eos
            soluta quas magnam pariatur magni libero, deserunt eum atque fugit
            adipisci doloremque ex provident temporibus illum officiis natus
            quod aspernatur?
          </p>
        </div>
        <div class="flex justify-end font-medium space-x-4">
          <Icon name="tdesign:arrow-right" class="text-2xl"></Icon>
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
</style>
