<script setup>
import { Form, useForm } from "vee-validate";


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
  <div class="flex items-center flex-col dark:bg-dark-secondary font-poppins">
    <div class="w-full min-h-screen">
      <div class="flex justify-center">
        <img
          src="@/assets/images/logos/EYEA_logos/EYEA_logo_color.svg"
          alt=""
          srcset=""
          width="300"
          class="md:w-[300px] w-[200px]"
        />
      </div>
      <div class="flex md:px-[10%] justify-center">
      
        <div class="grid grid-cols-6 md:w-[50%] w-full px-12 pb-4 gap-2">
          <div
            @click="current = 1"
            :class="[current > 1 ? 'bg-third' : 'bg-third-light2 dark:bg-gray-500']"
            class="h-2 rounded-lg"
          ></div>
          <div
            @click="current = 2"
            :class="[current > 2 ? 'bg-third' : 'bg-third-light2 dark:bg-gray-500']"
            class="h-2 rounded-lg"
          ></div>
          <div
            @click="current = 3"
            :class="[current > 3 ? 'bg-third' : 'bg-third-light2 dark:bg-gray-500']"
            class="h-2 rounded-lg"
          ></div>
          <div
            @click="current = 4"
            :class="[current > 4 ? 'bg-third' : 'bg-third-light2 dark:bg-gray-500']"
            class="h-2 rounded-lg"
          ></div>
          <div
            @click="current = 5"
            :class="[current > 5 ? 'bg-third' : 'bg-third-light2 dark:bg-gray-500']"
            class="h-2 rounded-lg"
          ></div>
          <div
            @click="current = 6"
            :class="[current > 6 ? 'bg-third' : 'bg-third-light2 dark:bg-gray-500 ']"
            class="h-2 rounded-lg"
          ></div>
        </div>
      </div>
      <div class="w-full flex justify-center md:pt-10  md:px-[10%] pb-10 md:pb-0">
        <div class="md:w-[50%] px-6 md:px-0">
          <!-- form one  -->
          <form v-if="current == 1" @submit.prevent="submit" class="">
            <InputsTextfield
              name="full name"
              rules=""
              type="email"
              class="focus:border-primary px-16 py-[12px] mb-6 dark:bg-dark-secondary dark:bg-dark-secondary"
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
            <InputsDatePicker
              name="date of birth"
              label="Date of Birth"
              rules=""
              label-class="text-secondary-text mb-3 dark:text-dark-text-secondary  font-poppins"
              placeholder="Date of Birth"
              placeholder-style="text-primary-text-light dark:text-dark-text-secondary  "
              :show-star="true"
              class="py-3 dark:bg-dark-secondary"
            >
              <template #trailing>
                <div class="absolute text-secondary-text top-2 right-3">
                  <Icon
                    name="eva:calendar-outline"
                    width="25"
                    height="25"
                  ></Icon>
                </div>
              </template>
            </InputsDatePicker>
            <InputsListselect
              name="current_monthly_revenue"
              :items="genderList"
              v-model="gender"
              class="block w-full py-[12px] rounded-md dark:bg-dark-secondary"
              rules=""
              placeholder="Gender"
            >
              <template v-slot:label>
                <div
                  class="block text-base font-medium leading-6 text-gray-700 mb-4 dark:text-dark-text-secondary"
                >
                  Gender
                </div>
              </template>
            </InputsListselect>
            <InputsListselect
              name="current_monthly_revenue"
              :items="MartialStatus"
              v-model="martial"
              class="block w-full py-[12px] rounded-md dark:bg-dark-secondary"
              rules=""
              placeholder="Martial Status"
            >
              <template v-slot:label>
                <div
                  class="block text-base font-medium leading-6 text-gray-700 mb-4 dark:text-dark-text-secondary"
                >
                  Martial Status
                </div>
              </template>
            </InputsListselect>
            <InputsListselect
              name="current_monthly_revenue"
              :items="haveDisability"
              v-model="Disability"
              class="block w-full py-[12px] rounded-md dark:bg-dark-secondary"
              rules=""
              placeholder="yes/no"
            >
              <template v-slot:label>
                <div
                  class="block text-base font-medium leading-6 text-gray-700 mb-4 dark:text-dark-text-secondary"
                >
                  Do you have disability?
                </div>
              </template>
            </InputsListselect>
            <button
              type="submit"
              class="px-4 w-full h-[40px] rounded-md bg-primary text-white mt-4"
            >
              Create
            </button>
          </form>
          <form v-if="current == 2" @submit.prevent="submit" class="">
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
                  class="block text-base font-medium leading-6 text-gray-700 mb-4 dark:text-dark-text-secondary"
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
                  class="block text-base font-medium leading-6 text-gray-700 mb-4 dark:text-dark-text-secondary"
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
                  class="block text-base font-medium leading-6 text-gray-700 mb-4 dark:text-dark-text-secondary"
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
                  class="block text-base font-medium leading-6 text-gray-700 mb-4 dark:text-dark-text-secondary"
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
                  class="block text-base font-medium leading-6 text-gray-700 mb-4 dark:text-dark-text-secondary"
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

          <form v-if="current == 3" @submit.prevent="submit" class="">
            <InputsTextfield
              name="phone number"
              rules=""
              type="number"
              class="focus:border-primary px-20 py-[12px] mb-6 dark:bg-dark-secondary"
              placeholder-style="text-primary-text-light dark:text-dark-text-secondary"
            >
              <template #leading>
                <div
                  class="absolute flex justify-center py-4 px-4 bg-gray-200 h-[95%] top-[1px] dark:bg-dark-secondary border-r-[1px] left-[1px] rounded-l-md text-primary-text-light dark:text-dark-text-secondary font-poppins"
                >
                  <span>+251</span>
                </div>
              </template>
              <template #label>
                <div
                  class="top-3 left-6 text-secondary-text mb-3 dark:text-dark-text-secondary font-poppins"
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
              placeholder-style="text-primary-text-light dark:text-dark-text-secondary  "
            >
              <template #leading>
                <div
                  class="absolute flex justify-center py-4 px-4 bg-gray-200 h-[95%] top-[1px] dark:bg-dark-secondary border-r-[1px] left-[1px] rounded-l-md text-primary-text-light dark:text-dark-text-secondary font-poppins"
                >
                  <span>+251</span>
                </div>
              </template>
              <template #label>
                <div
                  class="top-3 left-6 text-secondary-text mb-3 dark:text-dark-text-secondary font-poppins"
                >
                  Alternative Phone Number
                </div>
              </template>
            </InputsTextfield>
            <InputsTextfield
              name="scanned_id"
              type="email"
              :disabled="true"
              class="focus:border-primary px-16 py-[12px] mb-6 dark:bg-dark-secondary dark:"
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
                  <span class="text-primary-text ml-4 dark:text-dark-text-secondary">upload</span>
                </div>
              </template>
              <template #label>
                <div
                  class="top-3 left-6 text-secondary-text mb-3 dark:text-dark-text-secondary font-poppins"
                >
                  Scanned ID
                </div>
              </template>
            </InputsTextfield>
            <InputsTextfield
              name="id"
              rules=""
              type="email"
              class="focus:border-primary px-16 py-[12px] mb-6 dark:bg-dark-secondary"
              placeholder="Your ID Number or Your ID Card"
              placeholder-style="text-primary-text-light dark:text-dark-text-secondary  "
            >
              <template #leading>
                <div
                  class="absolute top-3 left-6 text-primary-text-light dark:text-dark-text-secondary font-poppins"
                >
                  <Icon
                    name="octicon:id-badge-16"
                    width="25"
                    height="25"
                  ></Icon>
                </div>
              </template>
              <template #label>
                <div
                  class="top-3 left-6 text-secondary-text mb-3 dark:text-dark-text-secondary font-poppins"
                >
                  ID Number
                </div>
              </template>
            </InputsTextfield>
            <InputsTextfield
              name="email"
              rules=""
              type="email"
              class="focus:border-primary px-16 py-[12px] mb-6 dark:bg-dark-secondary dark:"
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
          <form v-if="current == 4" @submit.prevent="submit" class="p-4">
            <InputsFileUpload
              name="file"
              max-file-size="2000"
            ></InputsFileUpload>

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
      <div v-if="current == 5" class="md:w-[80%] md:pb-4 md:space-y-10">
      <div class="w-full flex justify-center md:pb-2 ">
        <div class="md:w-full  dark:text-white md:text-3xl text-2xl text-center">
          project Ideas You would Like to share
        </div>
      </div>

      <div class="grid md:grid-cols-5 space-y-6 pb-10">
        <form
          class="col-span-3 flex justify-end md:pr-10 px-4  md:px-0"
          v-if="true"
          @submit.prevent="submit"
        >
          <div class="md:w-[80%]">
            <InputsTextfield
              name="title"
              rules=""
              type="email"
              class="focus:border-primary px-16 py-[12px] mb-6 dark:bg-dark-secondary dark:"
              placeholder="Title of you project"
              placeholder-style="text-primary-text-light dark:text-dark-text-secondary  "
            >
              <template #leading>
                <div
                  class="absolute top-3 left-6 text-primary-text-light dark:text-dark-text-secondary font-poppins"
                >
                  <Icon
                    name="pepicons-print:menu"
                    width="25"
                    height="25"
                  ></Icon>
                </div>
              </template>
              <template #label>
                <div
                  class="top-3 left-6 text-secondary-text mb-3 dark:text-dark-text-secondary font-poppins"
                >
                  Project title
                </div>
              </template>
            </InputsTextfield>
            <InputsTextfield
              name="number of people"
              rules=""
              type="email"
              class="focus:border-primary px-16 py-[12px] mb-6 dark:bg-dark-secondary dark:"
              placeholder="People you employed or need to employ"
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
                  Number of People Employed
                </div>
              </template>
            </InputsTextfield>
            <InputsTextfield
              name="finance"
              rules=""
              type="email"
              class="focus:border-primary px-16 py-[12px] mb-6 dark:bg-dark-secondary dark:"
              placeholder="Found requirement"
              placeholder-style="text-primary-text-light dark:text-dark-text-secondary  "
            >
              <template #leading>
                <div
                  class="absolute top-3 left-6 text-primary-text-light dark:text-dark-text-secondary font-poppins"
                >
                  <Icon name="carbon:money" width="25" height="25"></Icon>
                </div>
              </template>
              <template #label>
                <div
                  class="top-3 left-6 text-secondary-text mb-3 dark:text-dark-text-secondary font-poppins"
                >
                  Financial Requirement
                </div>
              </template>
            </InputsTextfield>
            <InputsTextfield
              name="expected date"
              rules=""
              type="text"
              class="focus:border-primary px-16 py-[12px] mb-6 dark:bg-dark-secondary dark:"
              placeholder="Date, year or duration"
              placeholder-style="text-primary-text-light dark:text-dark-text-secondary  "
            >
              <template #leading>
                <div
                  class="absolute top-3 left-6 text-primary-text-light dark:text-dark-text-secondary font-poppins"
                >
                  <Icon
                    name="solar:calendar-outline"
                    width="25"
                    height="25"
                  ></Icon>
                </div>
              </template>
              <template #label>
                <div
                  class="top-3 left-6 text-secondary-text mb-3 dark:text-dark-text-secondary font-poppins"
                >
                  Expected Return Date
                </div>
              </template>
            </InputsTextfield>
            <HTextarea name="description" textareaClass="dark:bg-dark-secondary dark:text-white"> </HTextarea>

            <div class="grid grid-cols-2 gap-12">
              <div
                class="px-4 w-full cursor-pointer h-[40px] flex justify-center items-center rounded-md border-2 border-primary text-primary mt-4"
              >
                Add
              </div>
              <button
                type="submit"
                class="px-4 w-full h-[40px] rounded-md bg-primary text-white mt-4"
              >
                Next
              </button>
            </div>
          </div>
        </form>
        <div class="col-span-2 md:ml-10 md:pl-10 px-4 md:border-l-2 text-gray-500">
          <div class="flex flex-col space-y-4">
            <div class="text-lg">submitted project(1/3)</div>
            <div class="grid grid-cols-7 space-x-4 p-2 border-2 rounded-xl">
              <div class="flex justify-center items-center">
                <Icon class="col-span-1 text-3xl" name="akar-icons:file"></Icon>
              </div>
              <p class="col-span-5">At Lorem ipsum dolor sit.</p>
              <div class="flex justify-center items-center">
                <Icon
                  class="col-span-1 cursor-pointer"
                  name="ic:baseline-close"
                ></Icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="current == 6" class="flex flex-col items-center pb-4">
      <div class="w-full flex flex-col md:space-y-4 items-center pb-2">
        <div class="md:w-[50%] text-3xl text-center dark:text-white">Membership plan</div>
        <div class="md:w-[50%] text-center text-secondary-text dark:text-dark-text-secondary  md:text-base text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          vitae minima voluptatibus doloribus distinctio accusamus voluptates
          sequi alias facilis voluptas, sunt tenetur nostrum iure aliquid
          temporibus blanditiis similique, ex nobis.
        </div>
      </div>
      <div
        class="grid md:grid-cols-2 md:w-[70%] md:space-x-10 md:pt-10 space-y-4 md:space-y-0"
      >
        <div
          class="bg-[#F7F8F9] border-2 border-primary dark:bg-dark-third rounded-lg flex-col flex justify-between"
        >
          <div class="flex justify-between items-center border-b-2 py-6 px-6">
            <div class="space-y-2">
              <p
                class="text-3xl text-primary-text dark:text-white font-semibold"
              >
                Member Plus
              </p>
              <p class="text-primary-text-light dark:text-white">
                For bigger team
              </p>
            </div>
            <div>
              <span class="font-semibold dark:text-white text-primary-text"
                >$</span
              >
              <span
                class="text-5xl font-semibold dark:text-white text-primary-text"
                >12</span
              >
              <span class="text-primary-text-light dark:text-white">/mo</span>
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
            <NuxtLink to="/individual/registration/completed">
              <div class="flex justify-center items-center p-6">
                <InputsButton
                  class="bg-primary p-2 w-[70%] text-white rounded-lg"
                  name="Select Member Plus"
                ></InputsButton>
              </div>
            </NuxtLink>
          </div>
        </div>
        <!-- card two -->
        <div class="bg-[#F7F8F9] dark:bg-dark-third rounded-lg shadow">
          <div class="flex justify-between items-center border-b-2 py-6 px-6">
            <div class="space-y-2">
              <p
                class="text-3xl text-primary-text dark:text-white font-semibold"
              >
                Regular
              </p>
              <p class="text-primary-text-light dark:text-white">
                Unlimited possibility
              </p>
            </div>
            <div>
              <span class="font-semibold dark:text-white text-primary-text"
                >$</span
              >
              <span
                class="text-5xl font-semibold dark:text-white text-primary-text"
                >189</span
              >
              <span class="text-primary-text-light dark:text-white">/mo</span>
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
            <NuxtLink to="/individual/registration/completed">
              <div class="flex justify-center items-center p-6">
                <InputsButton
                  class="bg-primary p-2 w-[70%] text-white rounded-lg"
                  name="Select Regular"
                ></InputsButton>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    </div>
  
  
  </div>
</template>

<style></style>
