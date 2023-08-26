<script setup>
import { Form, useForm } from "vee-validate";

definePageMeta({
  layout: "registration",
});
console.log("refevevfrf");
const { handleSubmit } = useForm({});
const Disability = ref("");
const martial = ref("");
const gender = ref("");
const current = ref(1);
const genderList = ref([
  {
    id: "male",
    name: "Male",
  },
  {
    id: "female",
    name: "Female",
  },
]);
const MartialStatus = ref([
  {
    id: "single",
    name: "Single",
  },
  {
    id: "married",
    name: "Married",
  },
]);
const haveDisability = ref([
  {
    id: "yes",
    name: "Yes",
  },
  {
    id: "no",
    name: "No",
  },
]);

const submit = handleSubmit(async (values) => {
  console.log("hggui");
  current.value++;
});
const prev = function () {
  current.value--;
};
</script>

<template>
  <div class="flex items-center flex-col font-poppins dark:bg-dark-secondary">
    <div class="md:w-[100%] min-h-screen">
      <div class="flex justify-center">
        <img
          src="@/assets/images/logos/EYEA_logos/EYEA_logo_color.svg"
          alt=""
          srcset=""
          width="300"
          height="100"
          class="md:w-[300px] w-[200px]"
        />
      </div>
      <div class="w-full flex justify-center">
        <div class="grid grid-cols-6 md:w-[50%] w-full px-12 md:pl-24 gap-2">
          <div
            @click="current = 1"
            :class="[
              current > 1 ? 'bg-third' : 'bg-third-light2 dark:bg-gray-500',
            ]"
            class="h-2 rounded-lg"
          ></div>
          <div
            @click="current = 2"
            :class="[
              current > 2 ? 'bg-third' : 'bg-third-light2 dark:bg-gray-500',
            ]"
            class="h-2 rounded-lg"
          ></div>
          <div
            @click="current = 3"
            :class="[
              current > 3 ? 'bg-third' : 'bg-third-light2 dark:bg-gray-500',
            ]"
            class="h-2 rounded-lg"
          ></div>
          <div
            @click="current = 4"
            :class="[
              current > 4 ? 'bg-third' : 'bg-third-light2 dark:bg-gray-500',
            ]"
            class="h-2 rounded-lg"
          ></div>
          <div
            @click="current = 5"
            :class="[
              current > 5 ? 'bg-third' : 'bg-third-light2 dark:bg-gray-500',
            ]"
            class="h-2 rounded-lg"
          ></div>
        </div>
      </div>
      <div class="w-full flex justify-center pt-10">
        <div class="md:w-[100%] px-4 md:px-0 pb-10">
          <div class="w-full flex justify-center">
            <div class="md:w-[70%]">
              <!-- form one  -->
              <form
                v-if="current == 1"
                @submit.prevent="submit"
                class="md:px-[20%]"
              >
                <InputsTextfield
                  name="Company name"
                  rules=""
                  type="email"
                  class="focus:border-primary px-16 py-[12px] mb-6 dark:bg-dark-secondary"
                  placeholder="Company Name"
                  placeholder-style="text-primary-text-light dark:text-dark-text-secondary  "
                >
                  <template #leading>
                    <div
                      class="absolute top-3 left-6 text-primary-text-light dark:text-dark-text-secondary font-poppins"
                    >
                      <Icon name="uil:building" width="25" height="25"></Icon>
                    </div>
                  </template>
                  <template #label>
                    <div
                      class="top-3 left-6 text-primary-text mb-3 dark:text-white font-poppins"
                    >
                      Company Name
                    </div>
                  </template>
                </InputsTextfield>
                <InputsListselect
                  name="current_monthly_revenue"
                  :items="genderList"
                  v-model="gender"
                  class="block w-full py-[12px] rounded-md dark:bg-dark-secondary"
                  rules=""
                  placeholder="Select"
                >
                  <template v-slot:label>
                    <div
                      class="block text-base font-medium leading-6 text-primary-text dark:text-white mb-4 dar"
                    >
                      Business type
                    </div>
                  </template>
                </InputsListselect>
                <InputsTextfield
                  name="id"
                  rules=""
                  type="email"
                  class="focus:border-primary px-16 py-[12px] mb-6 dark:bg-dark-secondary"
                  placeholder="Enter Tax ID"
                  placeholder-style="text-primary-text-light dark:text-white  "
                >
                  <template #leading>
                    <div
                      class="absolute top-3 left-6 text-primary-text-light dark:text-white font-poppins"
                    >
                      <Icon
                        name="octicon:id-badge-16"
                        width="20"
                        height="20"
                      ></Icon>
                    </div>
                  </template>
                  <template #label>
                    <div
                      class="top-3 left-6 text-primary-text mb-3 dark:text-white font-poppins"
                    >
                      ID Number
                    </div>
                  </template>
                </InputsTextfield>
                <InputsTextfield
                  name="scanned_id"
                  type="email"
                  :disabled="true"
                  class="focus:border-primary px-16 py-[12px] mb-6 dark:bg-dark-secondary"
                  placeholder=""
                  placeholder-style="text-primary-text-light dark:text-white  "
                >
                  <template #leading>
                    <div
                      class="absolute top-3 left-6 text-primary-text-light dark:text-white font-poppins"
                    >
                      <Icon
                        name="mingcute:scan-line"
                        width="25"
                        height="25"
                      ></Icon>
                    </div>
                  </template>
                  <template #trailing>
                    <div
                      class="absolute flex justify-center py-4 px-4 border-l-[1px] dark:bg-dark-secondary bg-gray-200 h-[93%] w-[40%] top-[1px] right-[1px] rounded-r-md text-primary-text-light dark:text-white font-poppins"
                    >
                      <Icon name="pajamas:upload" width="20" height="20"></Icon>
                      <span class="text-primary-text ml-4 dark:text-white"
                        >upload</span
                      >
                    </div>
                  </template>
                  <template #label>
                    <div
                      class="top-3 left-6 text-primary-text mb-3 dark:text-white font-poppins"
                    >
                      Scanned TIN Document
                    </div>
                  </template>
                </InputsTextfield>
                <InputsTextfield
                  name="Number of co-owners"
                  rules=""
                  type="email"
                  class="focus:border-primary px-16 py-[12px] mb-6 dark:bg-dark-secondary"
                  placeholder="Number of co-owners"
                  placeholder-style="text-primary-text-light dark:text-white  "
                >
                  <template #leading>
                    <div
                      class="absolute top-3 left-6 text-primary-text-light dark:text-white font-poppins"
                    >
                      <Icon name="ph:users" width="25" height="25"></Icon>
                    </div>
                  </template>
                  <template #label>
                    <div
                      class="top-3 left-6 text-primary-text mb-3 dark:text-white font-poppins"
                    >
                      Number of co-owners
                    </div>
                  </template>
                </InputsTextfield>
                <button
                  type="submit"
                  class="px-4 w-full h-[40px] rounded-md bg-primary text-white mt-4"
                >
                  Create
                </button>
              </form>
              <form
                v-if="current == 2"
                @submit.prevent="submit"
                class="md:px-[20%]"
              >
                <InputsListselect
                  name="Region"
                  :items="genderList"
                  v-model="gender"
                  class="block w-full py-[12px] rounded-md dark:bg-dark-secondary"
                  rules=""
                  placeholder="Select Region"
                >
                  <template v-slot:label>
                    <div
                      class="block text-base font-medium leading-6 text-primary-text dark:text-white mb-4"
                    >
                      Region
                    </div>
                  </template>
                </InputsListselect>
                <InputsListselect
                  name="zone"
                  :items="genderList"
                  v-model="gender"
                  class="block w-full py-[12px] rounded-md dark:bg-dark-secondary"
                  rules=""
                  placeholder="Select Zone"
                >
                  <template v-slot:label>
                    <div
                      class="block text-base font-medium leading-6 text-primary-text dark:text-white mb-4"
                    >
                      Zone/Sub-city
                    </div>
                  </template>
                </InputsListselect>
                <InputsListselect
                  name="woreda"
                  :items="genderList"
                  v-model="gender"
                  class="block w-full py-[12px] rounded-md dark:bg-dark-secondary"
                  rules=""
                  placeholder="Select Worda"
                >
                  <template v-slot:label>
                    <div
                      class="block text-base font-medium leading-6 text-primary-text dark:text-white mb-4"
                    >
                      Worda/Town
                    </div>
                  </template>
                </InputsListselect>
                <InputsListselect
                  name="city"
                  :items="MartialStatus"
                  v-model="martial"
                  class="block w-full py-[12px] rounded-md dark:bg-dark-secondary"
                  rules=""
                  placeholder="select city"
                >
                  <template v-slot:label>
                    <div
                      class="block text-base font-medium leading-6 text-primary-text dark:text-white mb-4"
                    >
                      City
                    </div>
                  </template>
                </InputsListselect>
                <InputsListselect
                  name="kebele"
                  :items="haveDisability"
                  v-model="Disability"
                  class="block w-full py-[12px] rounded-md dark:bg-dark-secondary"
                  rules=""
                  placeholder="select kebele"
                >
                  <template v-slot:label>
                    <div
                      class="block text-base font-medium leading-6 text-primary-text dark:text-white mb-4"
                    >
                      kebele
                    </div>
                  </template>
                </InputsListselect>
                <div class="grid grid-cols-2 gap-12">
                  <div
                    @click="prev"
                    class="px-4 w-full flex justify-center items-center h-[40px] rounded-md border-2 border-primary text-primary mt-4"
                  >
                    Previous
                  </div>
                  <button
                    type="submit"
                    class="px-4 w-full h-[40px] rounded-md bg-primary text-white mt-4"
                  >
                    Next
                  </button>
                </div>
              </form>

              <form
                v-if="current == 3"
                @submit.prevent="submit"
                class="md:px-[20%]"
              >
                <InputsTextfield
                  name="phone number"
                  rules=""
                  type="number"
                  class="focus:border-primary px-20 py-[12px] mb-6 dark:bg-dark-secondary"
                  placeholder-style="text-primary-text-light dark:text-white  "
                >
                  <template #leading>
                    <div
                      class="absolute flex justify-center py-4 px-4 bg-gray-200 h-[95%] dark:bg-dark-secondary border-r-[1px] top-[1px] left-[1px] rounded-l-md text-primary-text-light dark:text-white font-poppins"
                    >
                      <span>+251</span>
                    </div>
                  </template>
                  <template #label>
                    <div
                      class="top-3 left-6 text-primary-text mb-3 dark:text-white font-poppins"
                    >
                      Phone Number
                    </div>
                  </template>
                </InputsTextfield>

                <InputsTextfield
                  name="phone number"
                  rules=""
                  type="number"
                  class="focus:border-primary px-20 py-[12px] mb-6 dark:bg-dark-secondary"
                  placeholder-style="text-primary-text-light dark:text-white  "
                >
                  <template #leading>
                    <div
                      class="absolute flex justify-center py-4 px-4 bg-gray-200 h-[95%] dark:bg-dark-secondary border-r-[1px] top-[1px] left-[1px] rounded-l-md text-primary-text-light dark:text-white font-poppins"
                    >
                      <span>+251</span>
                    </div>
                  </template>
                  <template #label>
                    <div
                      class="top-3 left-6 text-primary-text mb-3 dark:text-white font-poppins"
                    >
                      Alternative Phone Number
                    </div>
                  </template>
                </InputsTextfield>
                <InputsTextfield
                  name="website link"
                  rules=""
                  type="number"
                  class="focus:border-primary px-20 py-[12px] mb-6 dark:bg-dark-secondary"
                  placeholder-style="text-primary-text-light dark:text-white  "
                >
                  <template #leading>
                    <div
                      class="absolute flex justify-center py-4 px-4 bg-gray-200 h-[95%] dark:bg-dark-secondary border-r-[1px] top-[1px] left-[1px] rounded-l-md text-primary-text-light dark:text-white font-poppins"
                    >
                      <span>http://</span>
                    </div>
                  </template>
                  <template #label>
                    <div
                      class="top-3 left-6 text-primary-text mb-3 dark:text-white font-poppins"
                    >
                      website
                    </div>
                  </template>
                </InputsTextfield>

                <InputsTextfield
                  name="email"
                  rules=""
                  type="email"
                  class="focus:border-primary px-16 py-[12px] mb-6 dark:bg-dark-secondary"
                  placeholder="user@example.com"
                  placeholder-style="text-primary-text-light dark:text-dark-text-secondary  "
                >
                  <template #leading>
                    <div
                      class="absolute top-3 left-6 text-primary-text-light dark:text-white font-poppins"
                    >
                      <Icon
                        name="ic:outline-email"
                        width="25"
                        height="25"
                      ></Icon>
                    </div>
                  </template>
                  <template #label>
                    <div
                      class="top-3 left-6 text-primary-text mb-3 dark:text-white font-poppins"
                    >
                      Email
                    </div>
                  </template>
                </InputsTextfield>
                <InputsTextfield
                  name="company logo"
                  type="email"
                  :disabled="true"
                  class="focus:border-primary px-16 py-[12px] mb-6 dark:bg-dark-secondary"
                  placeholder=""
                  placeholder-style="text-primary-text-light dark:text-dark-text-secondary  "
                >
                  <template #leading>
                    <div
                      class="absolute top-3 left-6 text-primary-text-light dark:text-white font-poppins"
                    >
                      <Icon
                        name="mingcute:scan-line"
                        width="25"
                        height="25"
                      ></Icon>
                    </div>
                  </template>
                  <template #trailing>
                    <div
                      class="absolute flex justify-center py-4 px-4 border-l-[1px] dark:bg-dark-secondary bg-gray-200 h-[93%] w-[40%] top-[1px] right-[1px] rounded-r-md text-primary-text-light dark:text-white font-poppins"
                    >
                      <Icon name="pajamas:upload" width="20" height="20"></Icon>
                      <span class="text-primary-text ml-4 dark:text-white"
                        >upload</span
                      >
                    </div>
                  </template>
                  <template #label>
                    <div
                      class="top-3 left-6 text-primary-text mb-3 dark:text-white font-poppins"
                    >
                      Company Logo
                    </div>
                  </template>
                </InputsTextfield>

                <div class="grid grid-cols-2 gap-12">
                  <div
                    @click="prev"
                    class="px-4 w-full cursor-pointer h-[40px] flex justify-center items-center rounded-md border-2 border-primary text-primary mt-4"
                  >
                    Previous
                  </div>
                  <button
                    type="submit"
                    class="px-4 w-full h-[40px] rounded-md bg-primary text-white mt-4"
                  >
                    Next
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div v-if="current == 4" class="pb-4">
            <div class="w-full flex justify-center pb-2">
              <div class="text-3xl text-center dark:text-white">
                project Ideas You would Like to share
              </div>
            </div>
          </div>
          <div v-if="current == 5" class="flex flex-col items-center pb-4">
            <div class="w-full flex flex-col space-y-4 items-center pb-2">
              <div class="md:w-[50%] text-3xl text-center dark:text-white">Membership plan</div>
              <div class="md:w-[50%] text-center text-primary-text dark:text-dark-text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia, vitae minima voluptatibus doloribus distinctio
                accusamus voluptates sequi alias facilis voluptas, sunt tenetur
                nostrum iure aliquid temporibus blanditiis similique, ex nobis.
              </div>
            </div>
            <div
              class="grid md:grid-cols-3 md:space-x-10 pt-10 space-y-4 md:space-y-0"
            >
              <div
                class="bg-[#F7F8F9] dark:bg-dark-third rounded-lg flex-col flex justify-between"
              >
                <div
                  class="flex justify-between items-center border-b-2 py-6 px-6"
                >
                  <div class="space-y-2">
                    <p
                      class="text-3xl text-primary-text dark:text-white font-semibold"
                    >
                      Small
                    </p>
                    <p class="text-primary-text-light dark:text-white">
                      For small company
                    </p>
                  </div>
                  <div>
                    <span
                      class="font-semibold dark:text-white text-primary-text"
                      >$</span
                    >
                    <span
                      class="text-5xl font-semibold dark:text-white text-primary-text"
                      >12</span
                    >
                    <span class="text-primary-text-light dark:text-white"
                      >/mo</span
                    >
                  </div>
                </div>
                <div class="border-b-2">
                  <div class="">
                    <div class="p-6 space-y-4">
                      <div class="flex space-x-4">
                        <div class="w-6 h-6 bg-primary rounded-full">
                          <Icon
                            name="iconamoon:check-fill"
                            color="white"
                            width="25"
                            height="25"
                          ></Icon>
                        </div>
                        <div class="">
                          <p class="text-primary-text-light dark:text-white">
                            Access to all feature
                          </p>
                        </div>
                      </div>
                      <div class="flex space-x-4">
                        <div class="w-6 h-6 bg-primary rounded-full">
                          <Icon
                            name="iconamoon:check-fill"
                            color="white"
                            width="25"
                            height="25"
                          ></Icon>
                        </div>
                        <div class="">
                          <p class="text-primary-text-light dark:text-white">
                            CPM overage:unlimited
                          </p>
                        </div>
                      </div>
                      <div class="flex space-x-4">
                        <div class="w-6 h-6 bg-primary rounded-full">
                          <Icon
                            name="iconamoon:check-fill"
                            color="white"
                            width="25"
                            height="25"
                          ></Icon>
                        </div>
                        <div class="">
                          <p class="text-primary-text-light dark:text-white">
                            Assisted onboarding support
                          </p>
                        </div>
                      </div>
                      <div class="flex space-x-4">
                        <div class="w-6 h-6 bg-primary rounded-full">
                          <Icon
                            name="iconamoon:check-fill"
                            color="white"
                            width="25"
                            height="25"
                          ></Icon>
                        </div>
                        <div class="">
                          <p class="text-primary-text-light dark:text-white">
                            Program reviews 1X a month
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <NuxtLink to="/organization/completed">
                    <div class="flex justify-center items-center p-6">
                      <InputsButton
                        class="bg-primary p-2 w-[70%] text-white rounded-lg"
                        name="Select Small"
                      ></InputsButton>
                    </div>
                  </NuxtLink>
                </div>
              </div>
              <!-- card two -->
              <div
                class="bg-[#F7F8F9] dark:bg-dark-third border-2 border-primary rounded-lg shadow"
              >
                <div
                  class="flex justify-between items-center border-b-2 py-6 px-6"
                >
                  <div class="space-y-2">
                    <p
                      class="text-3xl text-primary-text dark:text-white font-semibold"
                    >
                      Medium
                    </p>
                    <p class="text-primary-text-light dark:text-white">
                      For Medium company
                    </p>
                  </div>
                  <div>
                    <span
                      class="font-semibold dark:text-white text-primary-text"
                      >$</span
                    >
                    <span
                      class="text-5xl font-semibold dark:text-white text-primary-text"
                      >24</span
                    >
                    <span class="text-primary-text-light dark:text-white"
                      >/mo</span
                    >
                  </div>
                </div>
                <div class="border-b-2">
                  <div class="">
                    <div class="p-6 space-y-4">
                      <div class="flex space-x-4">
                        <div class="w-6 h-6 bg-primary rounded-full">
                          <Icon
                            name="iconamoon:check-fill"
                            color="white"
                            width="25"
                            height="25"
                          ></Icon>
                        </div>
                        <div class="">
                          <p class="text-primary-text-light dark:text-white">
                            Access to all feature
                          </p>
                        </div>
                      </div>
                      <div class="flex space-x-4">
                        <div class="w-6 h-6 bg-primary rounded-full">
                          <Icon
                            name="iconamoon:check-fill"
                            color="white"
                            width="25"
                            height="25"
                          ></Icon>
                        </div>
                        <div class="">
                          <p class="text-primary-text-light dark:text-white">
                            CPM overage:unlimited
                          </p>
                        </div>
                      </div>
                      <div class="flex space-x-4">
                        <div class="w-6 h-6 bg-primary rounded-full">
                          <Icon
                            name="iconamoon:check-fill"
                            color="white"
                            width="25"
                            height="25"
                          ></Icon>
                        </div>
                        <div class="">
                          <p class="text-primary-text-light dark:text-white">
                            Assisted onboarding support
                          </p>
                        </div>
                      </div>
                      <div class="flex space-x-4">
                        <div class="w-6 h-6 bg-primary rounded-full">
                          <Icon
                            name="iconamoon:check-fill"
                            color="white"
                            width="25"
                            height="25"
                          ></Icon>
                        </div>
                        <div class="">
                          <p class="text-primary-text-light dark:text-white">
                            Assisted onboarding support
                          </p>
                        </div>
                      </div>
                      <div class="flex space-x-4">
                        <div class="w-6 h-6 bg-primary rounded-full">
                          <Icon
                            name="iconamoon:check-fill"
                            color="white"
                            width="25"
                            height="25"
                          ></Icon>
                        </div>
                        <div class="">
                          <p class="text-primary-text-light dark:text-white">
                            Program reviews 1X a month
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <NuxtLink to="/organization/completed">
                    <div class="flex justify-center items-center p-6">
                      <InputsButton
                        class="bg-primary p-2 w-[70%] text-white rounded-lg"
                        name="Select Medium"
                      ></InputsButton>
                    </div>
                  </NuxtLink>
                </div>
              </div>
              <div
                class="bg-[#F7F8F9] dark:bg-dark-third rounded-lg flex-col flex justify-between"
              >
                <div
                  class="flex justify-between items-center border-b-2 py-6 px-6"
                >
                  <div class="space-y-2">
                    <p
                      class="text-3xl text-primary-text dark:text-white font-semibold"
                    >
                      Large
                    </p>
                    <p class="text-primary-text-light dark:text-white">
                      For small company
                    </p>
                  </div>
                  <div>
                    <span
                      class="font-semibold dark:text-white text-primary-text"
                      >$</span
                    >
                    <span
                      class="text-5xl font-semibold dark:text-white text-primary-text"
                      >12</span
                    >
                    <span class="text-primary-text-light dark:text-white"
                      >/mo</span
                    >
                  </div>
                </div>
                <div class="border-b-2">
                  <div class="">
                    <div class="p-6 space-y-4">
                      <div class="flex space-x-4">
                        <div class="w-6 h-6 bg-primary rounded-full">
                          <Icon
                            name="iconamoon:check-fill"
                            color="white"
                            width="25"
                            height="25"
                          ></Icon>
                        </div>
                        <div class="">
                          <p class="text-primary-text-light dark:text-white">
                            Access to all feature
                          </p>
                        </div>
                      </div>
                      <div class="flex space-x-4">
                        <div class="w-6 h-6 bg-primary rounded-full">
                          <Icon
                            name="iconamoon:check-fill"
                            color="white"
                            width="25"
                            height="25"
                          ></Icon>
                        </div>
                        <div class="">
                          <p class="text-primary-text-light dark:text-white">
                            CPM overage:unlimited
                          </p>
                        </div>
                      </div>
                      <div class="flex space-x-4">
                        <div class="w-6 h-6 bg-primary rounded-full">
                          <Icon
                            name="iconamoon:check-fill"
                            color="white"
                            width="25"
                            height="25"
                          ></Icon>
                        </div>
                        <div class="">
                          <p class="text-primary-text-light dark:text-white">
                            Assisted onboarding support
                          </p>
                        </div>
                      </div>
                      <div class="flex space-x-4">
                        <div class="w-6 h-6 bg-primary rounded-full">
                          <Icon
                            name="iconamoon:check-fill"
                            color="white"
                            width="25"
                            height="25"
                          ></Icon>
                        </div>
                        <div class="">
                          <p class="text-primary-text-light dark:text-white">
                            Program reviews 1X a month
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <NuxtLink to="/organization/completed">
                    <div class="flex justify-center items-center p-6">
                      <InputsButton
                        class="bg-primary p-2 w-[70%] text-white rounded-lg"
                        name="Select Large"
                      ></InputsButton>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
