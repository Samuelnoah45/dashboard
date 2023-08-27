<script setup>
definePageMeta({
  layout: "content",
});
const partners = ref([
  {
    id: 1,
    url: "https://res.cloudinary.com/blue-sky/image/upload/v1690990176/yencomad_fczbto.svg",
  },
  {
    id: 2,
    url: "https://res.cloudinary.com/blue-sky/image/upload/v1690990176/Awash_bank_ze75oc.png",
  },
  {
    id: 3,
    url: "https://res.cloudinary.com/blue-sky/image/upload/v1690990176/Sunshine_construction_qckz6k.png",
  },
  {
    id: 4,
    url: "https://res.cloudinary.com/blue-sky/image/upload/v1690990176/nib_international_bank_noqxxp.png",
  },
  {
    id: 5,
    url: "https://res.cloudinary.com/blue-sky/image/upload/v1690990176/hibertBank_sig3ty.png",
  },
  {
    id: 6,
    url: "https://res.cloudinary.com/blue-sky/image/upload/v1690990176/wegagen_bank_vnq0d1.png",
  },
  {
    id: 7,
    url: "https://res.cloudinary.com/blue-sky/image/upload/v1690990175/aser_h67vni.png",
  },
]);
</script>
<template>
  <div class="lg:px-10 px-4 space-y-4">
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
            <p>New Partner</p>
          </button>
        </div>
    <div class="grid lg:grid-cols-3 gap-10 lg:h-[72vh]  overflow-y-scroll">
      <div
        v-for="partner  in partners" :key="partner.id"
        class="rounded-lg space-y-4 flex-col flex justify-between border-2 p-4"
      >
        <div class="space-y-4">
          <div class="w-[218px] h-[82px]">
            <img
              :src="partner.url"
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
