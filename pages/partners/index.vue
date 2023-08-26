<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
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
    <div class="md:min-h-screen relative dark:bg-dark-secondary">
      <img
        class="absolute hidden md:inline-block bottom-40 right-32"
        src="https://res.cloudinary.com/blue-sky/image/upload/v1690975775/whyJoin_oobnee.svg"
        alt=""
        srcset=""
      />

      <div class="flex justify-center items-center md:py-20 py-10">
        <div class="md:w-[50%] space-y-10">
          <div class="flex justify-center">
            <NuxtImg
              format="webp"
              loading="lazy"
              src="https://res.cloudinary.com/blue-sky/image/upload/v1690989033/partnerHand_jslops.png"
            ></NuxtImg>
          </div>
          <p class="md:text-7xl text-4xl uppercase text-center leading-tight dark:text-white">
            Lorem ipsum dolorwheihf
            <span class="">Tellus</span> consectetur.
          </p>
          <div class="flex justify-center">
            <p class="md:w-[50%] px-2 text-center font-poppins text-secondary-text dark:text-dark-text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Pariatur, impedit? Fugiat officia id numquam sint. Lorem ipsum
              dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div class="flex justify-center pt-10 relative">
            <InputsButton
              class="border-2 flex justify-center space-x-2 text-lg items-center bg-primary border-primary md:p-2 p-1 md:w-[40%] rounded-md text-white md:font-semibold"
              name="Express Interest of partnership"
            >
              <template #leadingIcon> </template>
            </InputsButton>
          </div>
           <div class="px-4">
          <LayoutPartenredWith></LayoutPartenredWith>
           </div>
        </div>
      </div>
    </div>
    <div
      class="md:min-h-[60vh] font-poppins bg-[#B5B5B53B] dark:bg-dark-primary w-full relative md:px-20 md:pt-20"
    >
      <LayoutSectionHeader
        titleClass="md:text-4xl text-xl text-primary-text"
        iconName="mdi:partnership-outline"
        title="Lorem ipsum dolor  consectetur."
        subtitle="lates from the association"
      ></LayoutSectionHeader>

      <div class="w-full flex justify-center pb-10">
        <div class="flex justify-center md:w-[60%] px-4">
          <TabGroup
            as="div"
            class="flex w-full flex-col justify-center items-center space-y-10"
          >
            <TabList class="flex md:w-2/3 justify-center">
              <div class="w-full flex space-x-2 md:space-x-0">
                <Tab class="w-1/3" v-slot="{ selected }">
                  <div
                    :class="
                      selected
                        ? 'border-b-2 border-primary text-primary'
                        : 'border-b-2 text-primary-text-light'
                    "
                    class="flex space-x-4 justify-center items-center p-2"
                  >
                    <div class="font-semibold flex">
                      <span>Private(8)</span>
                    </div>
                  </div>
                </Tab>
                <Tab class="w-1/3" v-slot="{ selected }">
                  <div
                    :class="
                      selected
                        ? 'border-b-2 border-primary text-primary'
                        : 'border-b-2 text-primary-text-light'
                    "
                    class="flex space-x-4 justify-center items-center p-2"
                  >
                    <p>Government(4)</p>
                  </div></Tab
                >
                <Tab class="w-1/3" v-slot="{ selected }">
                  <div
                    :class="
                      selected
                        ? 'border-b-2 border-primary text-primary'
                        : 'border-b-2 text-primary-text-light'
                    "
                    class="flex space-x-4 justify-center items-center p-2"
                  >
                    <p><span class="hidden">Developer Partner-</span>NGO(2)</p>
                  </div></Tab
                >
              </div>
            </TabList>
            <TabPanels>
              <TabPanel>
                <div class="md:flex md:space-x-20 justify-center  grid grid-cols-2 flex-wrap">
                  <div class="pb-10" v-for="partner in partners">
                    <NuxtLink
                     :to="`/partners/${partner.id}`"
                    >
                      <NuxtImg
                        format="webp"
                        loading="lazy"
                        :src="partner.url"
                      ></NuxtImg>
                    </NuxtLink>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>Content 2</TabPanel>
              <TabPanel>Content 3</TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </div>
    <div class="pb-10 bg-third-light font-poppins w-full relative md:px-20 dark:bg-dark-secondary">
      <div class="absolute hidden md:inline-block right-0 bottom-4">
        <NuxtImg
          format="webp"
          loading="lazy"
          src="https://res.cloudinary.com/blue-sky/image/upload/v1690980105/flowerShape_bkwvfq.svg"
        ></NuxtImg>
      </div>
      <LayoutSectionHeader
        iconName="mdi:partnership-outline"
        title="Why should you  partner with us?"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magni perspiciatis beatae, possimus animi."
      ></LayoutSectionHeader>
      <div class="flex justify-center pt-10">
        <div class="md:w-[80%] px-2">
          <div class="grid md:grid-cols-2 gap-20">
            <div class="space-y-10">
              <div class="flex space-x-8">
                <div
                  class="self-start bg-third-light2 p-2 rounded-full text-secondary-text dark:text-dark-text-secondary"
                >
                  <Icon
                    name="heroicons-outline:mail"
                    class="md:text-4xl text-2xl"
                  ></Icon>
                </div>
                <p
                  class="md:text-2xl text-sm leading-relaxed text-secondary-text dark:text-dark-text-secondary font-poppins"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  nulla saepe incidunt natus voluptas distinctio libero.
                  Voluptatum tempora natus, laboriosam harum eligendi
                  consequuntur nisi?
                </p>
              </div>
              <div class="flex space-x-8">
                <div
                  class="self-start bg-third-light2 p-2 rounded-full text-secondary-text dark:text-dark-text-secondary"
                >
                  <Icon
                    name="iconoir:arrow-bl"
                    class="md:text-4xl text-2xl"
                  ></Icon>
                </div>
                <p
                  class="md:text-2xl text-sm leading-relaxed text-secondary-text dark:text-dark-text-secondary font-poppins"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  nulla saepe incidunt natus voluptas distinctio libero.
                  Voluptatum tempora natus, laboriosam harum eligendi
                  consequuntur nisi?
                </p>
              </div>
              <div class="flex space-x-8">
                <div
                  class="self-start bg-third-light2 p-2 rounded-full text-secondary-text dark:text-dark-text-secondary"
                >
                  <Icon
                    name="material-symbols:electric-bolt-outline"
                    class="md:text-4xl text-2xl"
                  ></Icon>
                </div>
                <p
                  class="md:text-2xl text-sm leading-relaxed text-secondary-text dark:text-dark-text-secondary font-poppins"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  nulla saepe incidunt natus voluptas distinctio libero.
                  Voluptatum tempora natus, laboriosam harum eligendi
                  consequuntur nisi?
                </p>
              </div>
              <div class="flex space-x-8">
                <div
                  class="self-start bg-third-light2 p-2 rounded-full text-secondary-text dark:text-dark-text-secondary"
                >
                  <Icon
                    name="mdi:cup-water"
                    class="md:text-4xl text-2xl"
                  ></Icon>
                </div>
                <p
                  class="md:text-2xl text-sm leading-relaxed text-secondary-text dark:text-dark-text-secondary font-poppins"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  nulla saepe incidunt natus voluptas distinctio libero.
                  Voluptatum tempora natus, laboriosam harum eligendi
                  consequuntur nisi?
                </p>
              </div>
            </div>
            <div class="space-y-10">
              <div class="flex space-x-8">
                <div
                  class="self-start bg-third-light2 p-2 rounded-full text-secondary-text dark:text-dark-text-secondary"
                >
                  <Icon name="ph:flower" class="md:text-4xl text-2xl"></Icon>
                </div>
                <p
                  class="md:text-2xl text-sm leading-relaxed text-secondary-text dark:text-dark-text-secondary font-poppins"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  nulla saepe incidunt natus voluptas distinctio libero.
                  Voluptatum tempora natus, laboriosam harum eligendi
                  consequuntur nisi?
                </p>
              </div>
              <div class="flex space-x-8">
                <div
                  class="self-start bg-third-light2 p-2 rounded-full text-secondary-text dark:text-dark-text-secondary"
                >
                  <Icon
                    name="material-symbols:computer-outline"
                    class="md:text-4xl text-2xl"
                  ></Icon>
                </div>
                <p
                  class="md:text-2xl text-sm leading-relaxed text-secondary-text dark:text-dark-text-secondary font-poppins"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  nulla saepe incidunt natus voluptas distinctio libero.
                  Voluptatum tempora natus, laboriosam harum eligendi
                  consequuntur nisi?
                </p>
              </div>
              <div class="flex space-x-8">
                <div
                  class="self-start bg-third-light2 p-2 rounded-full text-secondary-text dark:text-dark-text-secondary"
                >
                  <Icon
                    name="material-symbols:send-outline"
                    class="md:text-4xl text-2xl"
                  ></Icon>
                </div>
                <p
                  class="md:text-2xl text-sm leading-relaxed text-secondary-text dark:text-dark-text-secondary font-poppins"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  nulla saepe incidunt natus voluptas distinctio libero.
                  Voluptatum tempora natus, laboriosam harum eligendi
                  consequuntur nisi?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <LayoutFooter></LayoutFooter>
</template>
