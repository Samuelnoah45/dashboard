<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { VuePDF, usePDF } from "@tato30/vue-pdf";
const { pdf, pages } = usePDF(
  "https://res.cloudinary.com/blue-sky/image/upload/v1691122359/1._INTERNSHIP_MANAGEMENT_PROCESS_chvtih.pdf"
);
const page = ref(1);
const scale = ref(1);
// import pdf from 'vue-pdf'
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
  <div>
    <NavBar navClass="dark:bg-dark-secondary"></NavBar>
    <div class="relative dark:bg-dark-secondary">
      <div class="flex justify-center items-center md:py-32 py-4 px-38">
        <div class="grid md:grid-cols-9 h place-content-center gap-x-10">
          <div class="md:flex hidden justify-center col-span-2">
            <img src="@/assets/images/shapes/pages.svg"
              width="295"
              height="333"
             />
          </div>
          <div class="col-span-7 flex flex-col items-center space-y-20">
            <p class="md:text-6xl text-3xl text-primary text-center uppercase">
              memorandum of understanding
            </p>
            <p class="text-lg dark:text-white">between</p>
            <div class="flex space-x-10">
              <img
                src="@/assets/images/logos/MLS.png"
                alt=""
                sizes=""
                width="200"
                height="200"
                srcset=""
              />

              <Icon name="mingcute:and-fill" class="text-xl dark:text-gray-500"></Icon>
              <img
                src="@/assets/images/logos/MLS.png"
                alt=""
                sizes=""
                width="200"
                height="200"
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          class="h-screen flex flex-col items-center md:py-20 py-4 bg-[#3d3d3d] dark:bg-dark-primary space-y-4"
        >
          <!-- <div class="flex justify-between w-[28%]">
            <button
              class="bg-primary text-white rounded-lg p-2"
              @click="page = page > 1 ? page - 1 : page"
            >
              Prev
            </button>
            <span class="text-lg text-white">{{ page }} / {{ pages }}</span>
            <button
              class="bg-primary text-white p-2 rounded-lg"
              @click="page = page < pages ? page + 1 : page"
            >
              Next
            </button>
          </div> -->
          <div class="space-x-6 text-white">
            <button @click="scale = scale > 0.25 ? scale - 0.25 : scale">
              -
            </button>
            <span>{{ scale * 100 }}%</span>
            <button @click="scale = scale < 2 ? scale + 0.25 : scale">+</button>
          </div>
          <div
            class="h-screen flex flex-col items-center p bg-[#3d3d3d] md:w-[29%] overflow-scroll space-y-4"
          >
            <div class="">
              <div v-for="page in pages" class="">
                <VuePDF :pdf="pdf" :page="page" :scale="scale" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <LayoutFooter></LayoutFooter>
</template>

<style>
::-webkit-scrollbar {
  width: 4px;
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
</style>
