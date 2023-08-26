<script setup>
const DonateVia = ref([
  {
    id: 1,
    url: "https://res.cloudinary.com/blue-sky/image/upload/v1690984637/TeleBirr_ezrsod.png",
    name: "TeleBirr",
  },
  {
    id: 2,
    url: "https://res.cloudinary.com/blue-sky/image/upload/v1690984637/CBE_Birr_xpo0h9.png",
    name: "CBE Birr",
  },
  {
    id: 3,
    url: "https://res.cloudinary.com/blue-sky/image/upload/v1690984637/Visa_guxqog.png",
    name: "Visa",
  },
  {
    id: 4,
    url: "https://res.cloudinary.com/blue-sky/image/upload/v1690984637/alipay_ayrx3q.png",
    name: "AliPay",
  },
  {
    id: 5,
    url: "https://res.cloudinary.com/blue-sky/image/upload/v1690984637/Mastercard_e74nfy.png",
    name: "MasterCard",
  },
  {
    id: 6,
    url: "https://res.cloudinary.com/blue-sky/image/upload/v1690984637/HibretBank_uwyrt8.png",
    name: "Hibret Bank",
  },
]);
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
const openInterestModal = ref(false);
const openCollaborationModal = ref(false);
const openDonateModal = ref(false);
</script>

<template>
  <HModal
    v-model="openInterestModal"
    wrapperClass="w-[30%] h-[90vh] space-y-4 px-2 dark:bg-dark-secondary py-6 rounded-lg py-3 bg-white shadow-xl overflow-visible  duration-300"
    class=""
  >
    <template #ModalContent>
      <div class="px-6 flex justify-between">
        <p class="dark:text-white">Express Interest of Partnership</p>
        <Icon
          @click="openInterestModal = false"
          class="ml-auto cursor-pointer text-2xl dark:text-white"
          name="carbon:close-outline"
        ></Icon>
      </div>
      <div class="px-6 pt-10">
        <InputsTextfield
          name="full name"
          rules=""
          type="email"
          class="focus:border-primary px-16 py-[12px] mb-4 dark:bg-dark-secondary"
          placeholder="Full Name"
          placeholder-style="text-primary-text-light dark:text-dark-text-secondary  "
        >
          <template #leading>
            <div
              class="absolute top-3 left-6 text-primary-text-light dark:text-dark-text-secondary font-poppins"
            >
              <Icon
                name="eva:person-done-outline"
                width="25"
                height="25"
              ></Icon>
            </div>
          </template>
          <template #label>
            <div
              class="top-3 left-6 text-secondary-text mb-3 dark:text-dark-text-secondary font-poppins"
            >
              Full Name
            </div>
          </template>
        </InputsTextfield>
        <InputsTextfield
          name="email"
          rules=""
          type="email"
          class="focus:border-primary px-16 py-[12px] mb-4 dark:bg-dark-secondary dark:"
          placeholder="user@example.com"
          placeholder-style="text-primary-text-light dark:text-dark-text-secondary  "
        >
          <template #leading>
            <div
              class="absolute top-3 left-6 text-primary-text-light dark:text-dark-text-secondary font-poppins"
            >
              <Icon name="ic:outline-email" width="25" height="25"></Icon>
            </div>
          </template>
          <template #label>
            <div
              class="top-3 left-6 text-secondary-text mb-3 dark:text-dark-text-secondary font-poppins"
            >
              Email
            </div>
          </template>
        </InputsTextfield>

        <InputsTextfield
          name="Document"
          type="email"
          :disabled="true"
          class="focus:border-primary px-16 py-[12px] mb-4 dark:bg-dark-secondary dark:"
          placeholder=""
          placeholder-style="text-primary-text-light dark:text-dark-text-secondary  "
        >
          <template #leading>
            <div
              class="absolute top-3 left-6 text-primary-text-light dark:text-dark-text-secondary font-poppins"
            >
              <Icon name="mingcute:scan-line" width="25" height="25"></Icon>
            </div>
          </template>
          <template #trailing>
            <div
              class="absolute flex justify-center py-4 px-4 dark:bg-dark-secondary bg-gray-200 h-[93%] w-[40%] top-[1px] right-[1px] rounded-r-md text-primary-text-light dark:text-dark-text-secondary font-poppins"
            >
              <Icon name="pajamas:upload" width="20" height="20"></Icon>
              <span class="text-primary-text ml-4 dark:text-dark-text-secondary"
                >upload</span
              >
            </div>
          </template>
          <template #label>
            <div
              class="top-3 left-6 text-secondary-text mb-3 dark:text-dark-text-secondary font-poppins"
            >
              Document
            </div>
          </template>
        </InputsTextfield>
        <HTextarea
          name="description"
          label="About"
          label-class="dark:text-white"
          textareaClass="dark:bg-dark-secondary dark:text-white"
        >
          <template #label>
            <div
              class="top-3 left-6 text-secondary-text mb-3 dark:text-dark-text-secondary font-poppins"
            >
              Description
            </div>
          </template>
        </HTextarea>

        <InputsButton
          @click="openBookModal = true"
          class="flex justify-center items-center space-x-2 text-white bg-primary font-poppins text-xl w-full p-2 py-3 rounded-lg"
          name="Book Now"
        >
          <template #leadingIcon>
            <Icon name="lucide:ticket" width="25" height="25"></Icon>
          </template>
        </InputsButton>
        <div class="border-[1px] relative my-12">
          <div
            class="absolute left-[35%] -top-3 dark:text-white bg-white dark:bg-dark-secondary px-4"
          >
            Not A Member
          </div>
        </div>
        <div class="flex justify-evenly dark:text-white">
          <div class="flex items-center space-x-2 ">
            <Icon name="ph:phone" width="30" height="30"></Icon>
            <p>+251 998 764 700</p>
          </div>
          <div class="flex items-center space-x-2">
            <Icon name="material-symbols:mail-outline" width="30" height="30"></Icon>
            <p>info.eteyea.org</p>
          </div>
        </div>
      </div>
    </template>
  </HModal>
  <HModal
    v-model="openCollaborationModal"
    wrapperClass="w-[30%] h-[90vh] space-y-4 px-2 dark:bg-dark-secondary py-6 rounded-lg py-3 bg-white shadow-xl overflow-visible  duration-300"
    class=""
  >
    <template #ModalContent>
      <div class="px-6 flex justify-between">
        <p class="dark:text-white">Implementation & Collaboration</p>
        <Icon
          @click="openCollaborationModal = false"
          class="ml-auto cursor-pointer text-2xl dark:text-white"
          name="carbon:close-outline"
        ></Icon>
      </div>
      <div class="px-6 pt-10">
        <InputsTextfield
          name="full name"
          rules=""
          type="email"
          class="focus:border-primary px-16 py-[12px] mb-4 dark:bg-dark-secondary"
          placeholder="Full Name"
          placeholder-style="text-primary-text-light dark:text-dark-text-secondary  "
        >
          <template #leading>
            <div
              class="absolute top-3 left-6 text-primary-text-light dark:text-dark-text-secondary font-poppins"
            >
              <Icon
                name="eva:person-done-outline"
                width="25"
                height="25"
              ></Icon>
            </div>
          </template>
          <template #label>
            <div
              class="top-3 left-6 text-secondary-text mb-3 dark:text-dark-text-secondary font-poppins"
            >
              Full Name
            </div>
          </template>
        </InputsTextfield>
        <InputsTextfield
          name="email"
          rules=""
          type="email"
          class="focus:border-primary px-16 py-[12px] mb-4 dark:bg-dark-secondary dark:"
          placeholder="user@example.com"
          placeholder-style="text-primary-text-light dark:text-dark-text-secondary  "
        >
          <template #leading>
            <div
              class="absolute top-3 left-6 text-primary-text-light dark:text-dark-text-secondary font-poppins"
            >
              <Icon name="ic:outline-email" width="25" height="25"></Icon>
            </div>
          </template>
          <template #label>
            <div
              class="top-3 left-6 text-secondary-text mb-3 dark:text-dark-text-secondary font-poppins"
            >
              Email
            </div>
          </template>
        </InputsTextfield>

        <InputsTextfield
          name="Document"
          type="email"
          :disabled="true"
          class="focus:border-primary px-16 py-[12px] mb-4 dark:bg-dark-secondary dark:"
          placeholder=""
          placeholder-style="text-primary-text-light dark:text-dark-text-secondary  "
        >
          <template #leading>
            <div
              class="absolute top-3 left-6 text-primary-text-light dark:text-dark-text-secondary font-poppins"
            >
              <Icon name="mingcute:scan-line" width="25" height="25"></Icon>
            </div>
          </template>
          <template #trailing>
            <div
              class="absolute flex justify-center py-4 px-4 dark:bg-dark-secondary bg-gray-200 h-[93%] w-[40%] top-[1px] right-[1px] rounded-r-md text-primary-text-light dark:text-dark-text-secondary font-poppins"
            >
              <Icon name="pajamas:upload" width="20" height="20"></Icon>
              <span class="text-primary-text ml-4 dark:text-dark-text-secondary"
                >upload</span
              >
            </div>
          </template>
          <template #label>
            <div
              class="top-3 left-6 text-secondary-text mb-3 dark:text-dark-text-secondary font-poppins"
            >
              Document
            </div>
          </template>
        </InputsTextfield>
        <HTextarea
          name="description"
          label="About"
          label-class="dark:text-white"
          textareaClass="dark:bg-dark-secondary dark:text-white"
        >
          <template #label>
            <div
              class="top-3 left-6 text-secondary-text mb-3 dark:text-dark-text-secondary font-poppins"
            >
              Description
            </div>
          </template>
        </HTextarea>

        <InputsButton
          @click="openBookModal = true"
          class="flex justify-center items-center space-x-2 text-white bg-primary font-poppins text-xl w-full p-2 py-3 rounded-lg"
          name="Book Now"
        >
          <template #leadingIcon>
            <Icon name="lucide:ticket" width="25" height="25"></Icon>
          </template>
        </InputsButton>
        <div class="border-[1px] relative my-12">
          <div
            class="absolute left-[35%] -top-3 dark:text-white bg-white dark:bg-dark-secondary px-4"
          >
            For More Information
          </div>
        </div>
        <div class="flex justify-evenly dark:text-white">
          <div class="flex items-center space-x-2 ">
            <Icon name="ph:phone" width="30" height="30"></Icon>
            <p>+251 998 764 700</p>
          </div>
          <div class="flex items-center space-x-2">
            <Icon name="material-symbols:mail-outline" width="30" height="30"></Icon>
            <p>info.eteyea.org</p>
          </div>
        </div>
      </div>
    </template>
  </HModal>
  <HModal
    v-model="openDonateModal"
    wrapperClass="w-[30%] h-[50vh] space-y-4 px-2 dark:bg-dark-secondary py-6 rounded-lg py-3 bg-white shadow-xl overflow-visible  duration-300"
    class=""
  >
    <template #ModalContent>
      <div class="px-6 flex justify-between">
        <p class="dark:text-white">Donate Cash</p>
        <Icon
          @click="openDonateModal = false"
          class="ml-auto cursor-pointer text-2xl dark:text-white"
          name="carbon:close-outline"
        ></Icon>
      </div>
      <div class="px-6 pt-10">
          <div class="grid grid-cols-3 gap-6">
           <div v-for="bank in DonateVia" class="border-[1px] rounded-lg p-4">
            <div class="space-y-2">
              <img
              :src="bank.url"
              
            >
             <p class="dark:text-white text-left">{{ bank.name }}</p>
            </div>
           
           </div>
          </div>

     
        <div class="border-[1px] relative my-12">
          <div
            class="absolute left-[35%] -top-3 dark:text-white bg-white dark:bg-dark-secondary px-4"
          >
             For More Information
          </div>
        </div>
        <div class="flex justify-evenly dark:text-white">
          <div class="flex items-center space-x-2 ">
            <Icon name="ph:phone" width="30" height="30"></Icon>
            <p>+251 998 764 700</p>
          </div>
          <div class="flex items-center space-x-2">
            <Icon name="material-symbols:mail-outline" width="30" height="30"></Icon>
            <p>info.eteyea.org</p>
          </div>
        </div>
      </div>
    </template>
  </HModal>
  <div>
    <NavBar navClass="bg-third-light2 dark:bg-dark-secondary"></NavBar>
    <div
      class="md:h-[80vh] bg-third-light2 relative md:px-10 px-2 pb-10 md:pb-0 dark:bg-dark-secondary"
    >
      <div class="grid md:grid-cols-2 h-full place-items-center">
        <div class="space-y-4 flex flex-col">
          <p class="dark:text-dark-text-secondary text-center md:text-left">
            OUR MISSION
          </p>
          <p
            class="md:text-[80px] text-center md:text-left text-[40px] uppercase md:pr-10 leading-tight dark:text-white"
          >
            Lorem ipsum dolorwheihf
            <span class="">Tellus</span> consectetur.
          </p>
          <div class="flex">
            <p
              class="md:w-[50%] font-poppins text-center md:text-left text-secondary-text dark:text-dark-text-secondary"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Pariatur, impedit? Fugiat officia id numquam sint. Lorem ipsum
              dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div class="flex pt-10 relative md:w-[45%] px-2">
            <InputsButton
              class="border-2 w-full md:w-auto flex justify-center space-x-2 text-lg items-center bg-primary border-primary md:p-2 p-1 rounded-md text-white md:font-semibold"
              name="Ways to help"
            >
              <template #leadingIcon>
                <Icon name="mdi:cube-outline" width="30" height="30"></Icon>
              </template>
            </InputsButton>
            <div class="absolute hidden md:inline-block right-[23%] bottom-4">
              <img src="@/assets/images/shapes/arrow.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="h-full md:flex hidden items-end">
          <NuxtImg
            format="webp"
            loading="lazy"
            src="https://res.cloudinary.com/blue-sky/image/upload/v1690987356/Donation_ubvpvh.png"
          ></NuxtImg>
        </div>
      </div>
    </div>
    <div class="font-poppins w-full relative dark:bg-dark-primary">
      <div class="text-primary-text dark:text-dark-text-secondary">
        <LayoutSectionHeader
          iconName="mdi:cube-outline"
          title="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          subtitle="Browse Background"
        ></LayoutSectionHeader>
        <div class="flex justify-center">
          <div class="w-[100%] md:pt-20 pt-4 pb-10 md:pb-0">
            <div class="grid md:grid-cols-3 grid-cols-2 gap-4">
              <div class="flex justify-end">
                <div
                  class="grid grid-rows-2 flex-col justify-center gap-4 px-4"
                >
                  <div class="space-y-4">
                    <p
                      class="text-primary md:text-4xl text-3xl font-poppins font-semibold"
                    >
                      2.4K+
                    </p>
                    <p class="text-sm">Registered Members</p>
                  </div>
                  <div class="space-y-4">
                    <p class="text-primary text-4xl font-poppins font-semibold">
                      23
                    </p>
                    <p>Signed Partners</p>
                  </div>
                </div>
              </div>
              <div class="md:flex hidden items-end">
                <NuxtImg
                  format="webp"
                  loading="lazy"
                  src="https://res.cloudinary.com/blue-sky/image/upload/v1690982437/supportBoxtpng_fsjfvv.png"
                ></NuxtImg>
              </div>
              <div class="flex">
                <div class="grid grid-rows-2 flex-col justify-center px-4">
                  <div class="space-y-4">
                    <p class="text-primary text-4xl font-poppins font-semibold">
                      $ 50.5M
                    </p>
                    <p>Total Grant Spent</p>
                  </div>
                  <div class="space-y-4 md:pt-10">
                    <p class="text-primary text-4xl font-poppins font-semibold">
                      78
                    </p>
                    <p>Supported Entrepreneurs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="pb-10 bg-third-light font-poppins w-full relative md:px-20 dark:bg-dark-secondary"
    >
      <LayoutSectionHeader
        titleClass="text-primary-text md:text-4xl text-2xl"
        subtitle-class="text-primary-text-light"
        iconName="bi:person-check"
        title="Benefits of Membership"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      ></LayoutSectionHeader>
      <div class="flex justify-center pt-10">
        <div class="md:w-[80%] px-2">
          <div class="grid md:grid-cols-3 gap-20">
            <div
              class="border-2 md:space-y-8 space-y-4 shadow-md rounded-lg p-6"
            >
              <div class="text-primary md:text-8xl text-6xl">
                <Icon name="fa-solid:donate"></Icon>
              </div>
              <div>
                <p class="text-2xl font-poppins font-semibold dark:text-white">
                  Donate Cash
                </p>
              </div>
              <div>
                <p
                  class="text-secondary-text text-justify dark:text-dark-text-secondary leading-relaxed"
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laudantium optio incidunt qui! Iste iure exercitationem
                  mollitia dolore quasi debitis asperiores enim deserunt fugit
                  dicta, deleniti aliquam ducimus tenetur provident neque.
                </p>
              </div>
              <div>
                <p
                  class="text-xs text-secondary-text dark:text-dark-text-secondary"
                >
                  Donate though
                </p>
              </div>
              <div class="flex flex-wrap items-center space-x-4">
                <div v-for="banks in DonateVia" :key="banks.id">
                  <NuxtImg
                    :src="banks.url"
                    format="webp"
                    loading="lazy"
                  ></NuxtImg>
                </div>
              </div>
              <div>
                <InputsButton
                 @click="openDonateModal = true"
                  class="bg-primary text-white w-full p-2 rounded-lg"
                  name="Donate Now"
                ></InputsButton>
              </div>
            </div>
            <div
              class="border-2 md:space-y-8 space-y-4 shadow-md rounded-lg p-6"
            >
              <div class="text-primary md:text-8xl text-6xl">
                <Icon name="mdi:partnership"></Icon>
              </div>
              <div>
                <p class="text-2xl font-poppins font-semibold dark:text-white">
                  Strategic partnership
                </p>
              </div>
              <div>
                <p
                  class="text-secondary-text text-justify dark:text-dark-text-secondary leading-relaxed"
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laudantium optio incidunt qui! Iste iure exercitationem
                  mollitia dolore quasi debitis asperiores enim deserunt fugit
                  dicta, deleniti aliquam ducimus tenetur provident neque.
                </p>
              </div>
              <div>
                <p
                  class="text-xs text-secondary-text dark:text-dark-text-secondary"
                >
                  Donate though
                </p>
              </div>
              <div class="flex flex-wrap items-center space-x-2">
                <div v-for="partner in partnered" :key="partner.id">
                  <NuxtImg
                    :src="partner.url"
                    format="webp"
                    loading="lazy"
                  ></NuxtImg>
                </div>
                <div class="dark:text-white">17+ partners</div>
              </div>
              <div>
                <InputsButton
                  @click="openInterestModal = true"
                  class="bg-primary text-white w-full p-2 rounded-lg"
                  name="Express Interest of Partnership"
                ></InputsButton>
              </div>
            </div>
            <div class="border-2 space-y-8 shadow-md rounded-lg p-6">
              <div
                class="text-primary flex flex-col justify-between md:text-8xl text-6xl"
              >
                <Icon name="pepicons-pop:chain"></Icon>
              </div>
              <div>
                <p class="text-2xl font-poppins font-semibold dark:text-white">
                  Implementation $ Collaboration
                </p>
              </div>
              <div>
                <p
                  class="text-secondary-text dark:text-dark-text-secondary text-justify leading-relaxed"
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laudantium optio incidunt qui! Iste iure exercitationem
                  mollitia dolore quasi debitis asperiores enim deserunt fugit
                  dicta, deleniti aliquam ducimus tenetur provident neque.
                </p>
              </div>
              <!-- temp div -->
              <div class="h-24 hidden md:inline-block"></div>
              <div class="s">
                <InputsButton
                 @click="openCollaborationModal = true"
                  class="bg-primary text-white w-full p-2 rounded-lg"
                  name="Express Interest of collaboration"
                ></InputsButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <LayoutFooter></LayoutFooter>
</template>
