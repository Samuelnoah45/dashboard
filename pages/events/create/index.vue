<script setup lang="ts">
import { Form, useForm } from "vee-validate";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";

const currentStep = ref(1);
const { handleSubmit } = useForm({});
const submit = handleSubmit(async (values) => {
  currentStep.value++;
});

definePageMeta({
  layout: "event",
});
</script>
<template>
  <div class="xl:h-[87vh] overflow-y-scroll lg:px-10 px-5">
    <div class="flex justify-between items-center w-full">
      <div class="flex items-center space-x-3 text-sm text-primary-text-light">
        <Icon name="tabler:dashboard" />
        <h3>/</h3>
        <h3>Events</h3>
        <h3>/</h3>
        <h3>Create New Events</h3>
      </div>
      <div>
        <button class="space-x-2" @click="() => currentStep++">
          <Icon name="tabler:cloud-upload" />
          <span>Save as Draft</span>
        </button>
      </div>
    </div>
    <div class="grid grid-cols-12 mt-5 gap-8">
      <div class="col-span-3 border-r-2">
        <div class="grid grid-cols-6">
          <div class="col-span-1 grid grid-rows-6">
            <div>
              <div
                class="col-span-2 flex items-center justify-center aspect-square rounded-full border w-max h-max px-[10px]"
                :class="
                  currentStep === 1
                    ? 'border-third'
                    : currentStep > 1
                    ? 'bg-third'
                    : 'border-primary-text-light'
                "
              >
                <span
                  v-if="currentStep <= 1"
                  class="w-[11px] h-[11px] rounded-full"
                  :class="
                    currentStep === 1 ? 'bg-third' : 'bg-primary-text-light'
                  "
                ></span>
                <Icon
                  v-else
                  name="ic:round-check"
                  class="text-white font-bold"
                />
              </div>
              <div class="col-span-2 ml-4">
                <div
                  class="w-px h-20"
                  :class="
                    currentStep >= 1 ? 'bg-third' : 'bg-primary-text-light'
                  "
                ></div>
              </div>
            </div>
            <div>
              <div
                class="col-span-2 flex items-center justify-center aspect-square rounded-full border w-max h-max px-[10px]"
                :class="
                  currentStep === 2
                    ? 'border-third'
                    : currentStep > 2
                    ? 'bg-third'
                    : 'border-primary-text-light'
                "
              >
                <span
                  v-if="currentStep <= 2"
                  class="w-[11px] h-[11px] rounded-full"
                  :class="currentStep === 2 ? 'bg-third' : 'bg-white'"
                ></span>
                <Icon
                  v-else
                  name="ic:round-check"
                  class="text-white font-bold"
                />
              </div>
              <div class="col-span-2 ml-4">
                <div
                  class="w-px h-20"
                  :class="
                    currentStep >= 2 ? 'bg-third' : 'bg-primary-text-light'
                  "
                ></div>
              </div>
            </div>
            <div>
              <div
                class="col-span-2 flex items-center justify-center aspect-square rounded-full border w-max h-max px-[10px]"
                :class="
                  currentStep === 3
                    ? 'border-third'
                    : currentStep > 3
                    ? 'bg-third'
                    : 'border-primary-text-light'
                "
              >
                <span
                  v-if="currentStep <= 3"
                  class="w-[11px] h-[11px] rounded-full"
                  :class="currentStep === 3 ? 'bg-third' : 'bg-white'"
                ></span>
                <Icon
                  v-else
                  name="ic:round-check"
                  class="text-white font-bold"
                />
              </div>
              <div class="col-span-2 ml-4">
                <div
                  class="w-px h-20"
                  :class="
                    currentStep >= 3 ? 'bg-third' : 'bg-primary-text-light'
                  "
                ></div>
              </div>
            </div>
            <div>
              <div
                class="col-span-2 flex items-center justify-center aspect-square rounded-full border w-max h-max px-[10px]"
                :class="
                  currentStep === 4
                    ? 'border-third'
                    : currentStep > 4
                    ? 'bg-third'
                    : 'border-primary-text-light'
                "
              >
                <span
                  v-if="currentStep <= 4"
                  class="w-[11px] h-[11px] rounded-full"
                  :class="currentStep === 4 ? 'bg-third' : 'bg-white'"
                ></span>
                <Icon
                  v-else
                  name="ic:round-check"
                  class="text-white font-bold"
                />
              </div>
              <div class="col-span-2 ml-4">
                <div
                  class="w-px h-20"
                  :class="
                    currentStep >= 4 ? 'bg-third' : 'bg-primary-text-light'
                  "
                ></div>
              </div>
            </div>
            <div>
              <div
                class="col-span-2 flex items-center justify-center aspect-square rounded-full border w-max h-max px-[10px]"
                :class="
                  currentStep === 5
                    ? 'border-third'
                    : currentStep > 5
                    ? 'bg-third'
                    : 'border-primary-text-light'
                "
              >
                <span
                  v-if="currentStep <= 5"
                  class="w-[11px] h-[11px] rounded-full"
                  :class="currentStep === 5 ? 'bg-third' : 'bg-white'"
                ></span>
                <Icon
                  v-else
                  name="ic:round-check"
                  class="text-white font-bold"
                />
              </div>
              <div class="col-span-2 ml-4">
                <div
                  class="w-px h-20"
                  :class="
                    currentStep >= 5 ? 'bg-third' : 'bg-primary-text-light'
                  "
                ></div>
              </div>
            </div>
            <div>
              <div
                class="col-span-2 flex items-center justify-center aspect-square rounded-full border w-max h-max px-[10px]"
                :class="
                  currentStep === 6
                    ? 'border-third'
                    : currentStep > 6
                    ? 'bg-third'
                    : 'border-primary-text-light'
                "
              >
                <span
                  class="w-[11px] h-[11px] rounded-full"
                  :class="currentStep === 6 ? 'bg-third' : 'bg-white'"
                ></span>
              </div>
            </div>
          </div>
          <div class="text-xs space-y-1 col-span-5 grid grid-rows-6">
            <div>
              <h3
                class="uppercase font-semibold"
                :class="
                  currentStep === 1 ? 'text-third' : 'text-primary-text-light'
                "
              >
                BASIC
              </h3>
              <p class="max-w-[39ch]">
                Title, Number of seats, Cover Image, Description
              </p>
            </div>
            <div>
              <h3
                class="uppercase font-semibold"
                :class="
                  currentStep === 2 ? 'text-third' : 'text-primary-text-light'
                "
              >
                Date & Location
              </h3>
              <p class="max-w-[39ch]">
                Cursus semper viverra facilisis et et some more.
              </p>
            </div>
            <div>
              <h3
                class="uppercase font-semibold"
                :class="
                  currentStep === 3 ? 'text-third' : 'text-primary-text-light'
                "
              >
                Sponsors & Partners
              </h3>
              <p class="max-w-[39ch]">Penatibus eu quis ante.</p>
            </div>
            <div>
              <h3
                class="uppercase font-semibold"
                :class="
                  currentStep === 4 ? 'text-third' : 'text-primary-text-light'
                "
              >
                Speakers
              </h3>
              <p class="max-w-[39ch]">Faucibus nec enim leo et.</p>
            </div>
            <div>
              <h3
                class="uppercase font-semibold"
                :class="
                  currentStep === 5 ? 'text-third' : 'text-primary-text-light'
                "
              >
                agenda
              </h3>
              <p class="max-w-[39ch]">
                Iusto et officia maiores prror ad non quas.
              </p>
            </div>
            <div>
              <h3
                class="uppercase font-semibold"
                :class="
                  currentStep === 6 ? 'text-third' : 'text-primary-text-light'
                "
              >
                Amenities & Services
              </h3>
              <p class="max-w-[39ch]">
                Iusto et officia maiores prror ad non quas.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-9">
        <div v-if="currentStep === 1">
          <form @submit.prevent="submit" class="space-y-8">
            <div class="border rounded-xl p-7 space-y-5">
              <div class="grid grid-cols-2 w-full gap-12">
                <InputsTextfield
                  placeholder="Event Title"
                  trailing-icon="tabler:list-tree"
                  name="title"
                  class="pl-10 py-3"
                >
                  <template #leading>
                    <Icon
                      name="tabler:list-tree"
                      class="absolute m-5 text-base"
                    />
                  </template>
                </InputsTextfield>
                <InputsTextfield
                  placeholder="Number of seats"
                  trailing-icon="tabler:list-tree"
                  name="seats"
                  class="pl-10 py-3"
                >
                  <template #leading>
                    <Icon name="uil:users-alt" class="absolute m-5 text-base" />
                  </template>
                </InputsTextfield>
              </div>

              <div class="space-y-5">
                <label for="image-upload"> Cover Image </label>
                <InputsFileUpload
                  accept="image/*"
                  id="image-upload"
                  name="image_upload"
                />
              </div>

              <div class="space-y-5">
                <HTextarea
                  class="border-1 outline-none m-0 border-primary-text-light"
                  name="description"
                  label="Description"
                >
                </HTextarea>
              </div>
            </div>
            <div class="w-full flex justify-between items-center">
              <button
                type="button"
                class="px-10 py-2 rounded-md text-primary border border-primary"
                @click="() => (currentStep > 1 ? currentStep-- : currentStep)"
              >
                <Icon name="uil:arrow-left" />
                <span> Previous </span>
              </button>
              <button
                type="submit"
                class="px-10 py-2 rounded-md text-white border bg-primary"
              >
                <Icon name="uil:arrow-right" />
                <span> Next </span>
              </button>
            </div>
          </form>
        </div>
        <div v-if="currentStep === 2">
          <form @submit.prevent="submit" class="space-y-8">
            <div class="grid grid-cols-2 gap-16 p-7 border rounded-xl">
              <div class="grid grid-rows-6">
                <h1 class="text-2xl text-primary-text">Location</h1>
                <InputsListselect name="city" class="py-3.5">
                  <template #label>
                    <h2>City</h2>
                  </template>
                </InputsListselect>
                <InputsListselect name="sub_city" class="py-3.5">
                  <template #label>
                    <h2>Zone/Sub City</h2>
                  </template>
                </InputsListselect>
                <InputsListselect name="woreda" class="py-3.5">
                  <template #label>
                    <h2>Woreda/Town</h2>
                  </template>
                </InputsListselect>
                <InputsTextfield name="venue" class="py-3.5">
                  <template #label>
                    <h2>Venue</h2>
                  </template>
                </InputsTextfield>
                <InputsTextfield name="venue" class="py-3.5">
                  <template #label>
                    <h2>Coordinates</h2>
                  </template>
                  <template #trailing>
                    <Icon
                      name="tdesign:location-1"
                      class="absolute right-2.5 top-2.5 text-base"
                    />
                  </template>
                </InputsTextfield>
              </div>
              <div>
                <h1 class="text-2xl text-primary-text pb-20">Time & Date</h1>
                <h2 class="text-lg">Registration Date</h2>
                <div class="grid grid-cols-2 gap-3 mt-3">
                  <InputsDatePicker
                    name="start_date"
                    label="Start Date"
                    class="py-3.5"
                  >
                    <template #trailing>
                      <Icon
                        name="solar:calendar-linear"
                        class="absolute top-4 right-4 text-base"
                      />
                    </template>
                  </InputsDatePicker>
                  <InputsDatePicker
                    name="end_date"
                    label="End Date"
                    class="py-3.5"
                  >
                    <template #trailing>
                      <Icon
                        name="solar:calendar-linear"
                        class="absolute top-4 right-4 text-base"
                      />
                    </template>
                  </InputsDatePicker>
                </div>
                <h2 class="text-lg">Event Date</h2>
                <div class="grid grid-cols-2 gap-3 mt-3">
                  <InputsDatePicker
                    name="start_date"
                    label="Start Date"
                    class="py-3.5"
                  >
                    <template #trailing>
                      <Icon
                        name="solar:calendar-linear"
                        class="absolute top-4 right-4 text-base"
                      />
                    </template>
                  </InputsDatePicker>
                  <InputsDatePicker
                    name="end_date"
                    label="End Date"
                    class="py-3.5"
                  >
                    <template #trailing>
                      <Icon
                        name="solar:calendar-linear"
                        class="absolute top-4 right-4 text-base"
                      />
                    </template>
                  </InputsDatePicker>
                </div>
              </div>
            </div>
            <div class="w-full flex justify-between items-center">
              <button
                type="button"
                class="px-10 py-2 rounded-md text-primary border border-primary"
                @click="() => (currentStep > 1 ? currentStep-- : currentStep)"
              >
                <Icon name="uil:arrow-left" />
                <span> Previous </span>
              </button>
              <button
                type="submit"
                class="px-10 py-2 rounded-md text-white border bg-primary"
              >
                <Icon name="uil:arrow-right" />
                <span> Next </span>
              </button>
            </div>
          </form>
        </div>
        <div v-if="currentStep === 3">
          <form @submit.prevent="submit" class="space-y-8">
            <div class="p-7 border rounded-xl space-y-5">
              <h1 class="text-2xl">Sponsors & Partners</h1>
              <TabGroup>
                <TabList class="flex space-x-16 border-b-2">
                  <Tab
                    as="template"
                    v-slot="{ selected }"
                    class="sm:text-base text-sm"
                    ><div class="flex cursor-pointer items-center">
                      <div
                        class="font-semibold flex justify-center items-center space-x-2"
                        :class="
                          selected
                            ? '  border-primary border-b-2 text-primary py-2'
                            : 'text-primary-text-light   dark:text-dark-text-secondary'
                        "
                      >
                        <Icon
                          name="heroicons-outline:speakerphone"
                          class="text-2xl mb-1"
                        ></Icon>

                        <p>Sponsors</p>
                      </div>
                    </div>
                  </Tab>
                  <Tab
                    as="template"
                    v-slot="{ selected }"
                    class="sm:text-base text-sm"
                    ><div class="flex cursor-pointer items-center">
                      <div
                        class="font-semibold flex justify-center items-center space-x-2"
                        :class="
                          selected
                            ? '  border-primary border-b-2 text-primary py-2'
                            : 'text-primary-text-light   dark:text-dark-text-secondary'
                        "
                      >
                        <Icon name="uil:sitemap" class="text-2xl mb-1"></Icon>
                        <p>Partners</p>
                      </div>
                    </div>
                  </Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <div
                      class="grid grid-cols-7 text-primary-text-light gap-10"
                    >
                      <div class="col-span-4 space-y-5">
                        <InputsTextfield name="venue" class="py-3.5 pl-12">
                          <template #label>
                            <h2>Organization Name</h2>
                          </template>
                          <template #leading>
                            <Icon
                              name="uil:building"
                              class="absolute left-4 top-4 text-xl"
                            />
                          </template>
                        </InputsTextfield>
                        <InputsTextfield name="venue" class="py-3.5 pl-12">
                          <template #label>
                            <h2>Organization Website</h2>
                          </template>
                          <template #leading>
                            <Icon
                              name="heroicons-outline:globe-alt"
                              class="absolute left-4 top-4 text-xl"
                            />
                          </template>
                        </InputsTextfield>
                        <InputsFileUpload name="file" label="Image">
                          <template #label>
                            <h2>Organization Website</h2>
                          </template>
                        </InputsFileUpload>
                        <button
                          class="w-full bg-primary flex py-3 items-center justify-center space-x-3 rounded-xl text-white"
                        >
                          <Icon name="ic:round-add" />
                          <span>Add Sponsor</span>
                        </button>
                      </div>
                      <div class="col-span-3 border-l px-7 space-y-5">
                        <div
                          class="border border-primary-text-light rounded-xl space-y-2 p-3.5"
                        >
                          <div
                            class="flex justify-between text-lg items-center"
                          >
                            <img
                              src="https://res.cloudinary.com/blue-sky/image/upload/v1690984637/EIC_cprdtk.png"
                            />
                            <div class="flex space-x-3 items-center">
                              <Icon name="uil:edit-alt" />
                              <Icon name="uil:trash-alt" />
                            </div>
                          </div>
                          <h1 class="text-base font-bold">
                            National Bank of Ethiopia
                          </h1>
                          <p class="text-base font-light">www.nba.gov.et</p>
                        </div>
                        <div
                          class="border border-primary-text-light rounded-xl space-y-2 p-3.5"
                        >
                          <div
                            class="flex justify-between text-lg items-center"
                          >
                            <img
                              src="https://res.cloudinary.com/blue-sky/image/upload/v1690984637/IPDC_pphqav.png"
                            />
                            <div class="flex space-x-3 items-center">
                              <Icon name="uil:edit-alt" />
                              <Icon name="uil:trash-alt" />
                            </div>
                          </div>
                          <h1 class="text-base font-bold">
                            Commercial Bank of Ethiopia
                          </h1>
                          <p class="text-base font-light">www.cbe.et</p>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                </TabPanels>
              </TabGroup>
            </div>
            <div class="w-full flex justify-between items-center">
              <button
                type="button"
                class="px-10 py-2 rounded-md text-primary border border-primary"
                @click="() => (currentStep > 1 ? currentStep-- : currentStep)"
              >
                <Icon name="uil:arrow-left" />
                <span> Previous </span>
              </button>
              <button
                type="submit"
                class="px-10 py-2 rounded-md text-white border bg-primary"
              >
                <Icon name="uil:arrow-right" />
                <span> Next </span>
              </button>
            </div>
          </form>
        </div>
        <div v-if="currentStep === 4">
          <form @submit.prevent="submit" class="space-y-8">
            <div class="p-7 border rounded-xl space-y-5">
              <h1 class="text-2xl">Speakers</h1>
              <div class="grid grid-cols-7 text-primary-text-light gap-10">
                <div class="col-span-4 space-y-5">
                  <InputsTextfield
                    name="venue"
                    class="py-3.5 pl-12"
                    placeholder="Full Name"
                  >
                    <template #leading>
                      <Icon
                        name="bx:user"
                        class="absolute left-4 top-4 text-xl"
                      />
                    </template>
                  </InputsTextfield>
                  <InputsTextfield
                    name="venue"
                    class="py-3.5 pl-12"
                    placeholder="Professional Title"
                  >
                    <template #leading>
                      <Icon
                        name="uis:list-ui-alt"
                        class="absolute left-4 top-4 text-xl"
                      />
                    </template>
                  </InputsTextfield>
                  <InputsTextfield
                    name="venue"
                    class="py-3.5 pl-12"
                    placeholder="Organization website"
                  >
                    <template #leading>
                      <Icon
                        name="octicon:globe-24"
                        class="absolute left-4 top-4 text-xl"
                      />
                    </template>
                  </InputsTextfield>
                  <div>
                    <h2 class="text-base">User Portrait</h2>
                    <InputsFileUpload name="file_upload" />
                  </div>
                  <div>
                    <h2 class="text-base">Bio</h2>
                    <HTextarea name="bio" />
                  </div>
                  <button
                    class="w-full bg-primary flex py-3 items-center justify-center space-x-3 rounded-xl text-white"
                  >
                    <Icon name="ic:round-add" class="text-xl" />
                    <span>Add Speaker</span>
                  </button>
                </div>
                <div class="col-span-3 border-l px-7 space-y-5">
                  <div
                    class="border border-primary-text-light rounded-xl space-y-1 p-3.5"
                  >
                    <div class="flex justify-between text-lg items-center">
                      <img
                        src="@/assets/images/temp/avator.png"
                        class="w-16 h-16 rounded-full"
                      />
                      <div class="flex space-x-3 items-center">
                        <Icon name="uil:edit-alt" />
                        <Icon name="uil:trash-alt" />
                      </div>
                    </div>
                    <h1 class="text-base font-bold">Ivan Mathews</h1>
                    <h3 class="text-base font-semibold">
                      Lead Digital Transformation Program at MInT
                    </h3>
                    <p class="text-base font-light">
                      Massa mi dolor nunc amet. Integer nisi turpis nisl
                      bibendum. Feugiat at purus nunc mattis sed sed. Elementum
                      turpis odio vulputate ...
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full flex justify-between items-center">
              <button
                type="button"
                class="px-10 py-2 rounded-md text-primary border border-primary"
                @click="() => (currentStep > 1 ? currentStep-- : currentStep)"
              >
                <Icon name="uil:arrow-left" />
                <span> Previous </span>
              </button>
              <button
                type="submit"
                class="px-10 py-2 rounded-md text-white border bg-primary"
              >
                <Icon name="uil:arrow-right" />
                <span> Next </span>
              </button>
            </div>
          </form>
        </div>
        <div v-if="currentStep === 5">
          <form @submit.prevent="submit" class="space-y-8">
            <div class="p-7 border rounded-xl space-y-5">
              <h1 class="text-2xl">Agenda</h1>
              <div class="grid grid-cols-7 text-primary-text-light gap-10">
                <div class="col-span-4 space-y-5">
                  <InputsTextfield
                    name="venue"
                    class="py-3.5 pl-12"
                    placeholder="Agenda"
                  >
                    <template #leading>
                      <Icon
                        name="uis:list-ui-alt"
                        class="absolute left-4 top-4 text-xl"
                      />
                    </template>
                  </InputsTextfield>
                  <div class="grid grid-cols-2 gap-3 mt-3">
                    <InputsDatePicker
                      name="start_date"
                      label="Start Date"
                      class="py-3.5"
                    >
                      <template #trailing>
                        <Icon
                          name="solar:calendar-linear"
                          class="absolute top-4 right-4 text-base"
                        />
                      </template>
                    </InputsDatePicker>
                    <InputsDatePicker
                      name="end_date"
                      label="End Date"
                      class="py-3.5"
                    >
                      <template #trailing>
                        <Icon
                          name="solar:calendar-linear"
                          class="absolute top-4 right-4 text-base"
                        />
                      </template>
                    </InputsDatePicker>
                  </div>
                  <InputsTextfield
                    name="venue"
                    class="py-3.5 pl-12"
                    placeholder="Venue"
                  >
                    <template #label>
                      <h2>Venue</h2>
                    </template>
                    <template #leading>
                      <Icon
                        name="fluent:building-bank-24-filled"
                        class="absolute top-4 left-4 text-2xl"
                      />
                    </template>
                  </InputsTextfield>
                  <div>
                    <h2 class="text-base">Description</h2>
                    <HTextarea name="bio" />
                  </div>
                  <button
                    class="w-full bg-primary flex py-3 items-center justify-center space-x-3 rounded-xl text-white"
                  >
                    <Icon name="ic:round-add" class="text-xl" />
                    <span>Add Agenda</span>
                  </button>
                </div>
                <div class="col-span-3 border-l px-7 space-y-5">
                  <div class="space-y-1 p-3.5">
                    <div class="flex justify-between text-lg items-center">
                      <h1 class="text-primary-text font-bold">Agenda Name</h1>
                      <div class="flex space-x-3 items-center">
                        <Icon name="uil:edit-alt" />
                        <Icon name="uil:trash-alt" />
                      </div>
                    </div>
                    <div class="grid grid-cols-2 gap-2 text-base">
                      <p class="space-x-2">
                        <icon name="lucide:clock-10" />
                        <span>2:30 PM - 4:30 PM</span>
                      </p>
                      <p class="space-x-2">
                        <Icon name="fluent:building-bank-24-filled" />
                        <span>Venue Two</span>
                      </p>
                    </div>
                    <p class="text-base font-light">
                      Turpis consectetur faucibus volutpat ultrices dolor. In
                      orci odio velit scelerisque molestie. Quis sit purus
                      vehicula enim nulla. Nulla at felis et vel adipiscing in
                      purus odio tincidunt. Consequat enim odio quis auctor
                      praesent nibh ut aliquam.
                    </p>
                  </div>
                  <div class="space-y-1 p-3.5">
                    <div class="flex justify-between text-lg items-center">
                      <h1 class="text-primary-text font-bold">Second Agenda</h1>
                      <div class="flex space-x-3 items-center">
                        <Icon name="uil:edit-alt" />
                        <Icon name="uil:trash-alt" />
                      </div>
                    </div>
                    <div class="grid grid-cols-2 gap-2 text-base">
                      <p class="space-x-2">
                        <icon name="lucide:clock-10" />
                        <span>2:30 PM - 4:30 PM</span>
                      </p>
                      <p class="space-x-2">
                        <Icon name="fluent:building-bank-24-filled" />
                        <span>Venue Two</span>
                      </p>
                    </div>
                    <p class="text-base font-light">
                      Turpis consectetur faucibus volutpat ultrices dolor. In
                      orci odio velit scelerisque molestie. Quis sit purus
                      vehicula enim nulla. Nulla at felis et vel adipiscing in
                      purus odio tincidunt. Consequat enim odio quis auctor
                      praesent nibh ut aliquam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full flex justify-between items-center">
              <button
                type="button"
                class="px-10 py-2 rounded-md text-primary border border-primary"
                @click="() => (currentStep > 1 ? currentStep-- : currentStep)"
              >
                <Icon name="uil:arrow-left" />
                <span> Previous </span>
              </button>
              <button
                type="submit"
                class="px-10 py-2 rounded-md text-white border bg-primary"
              >
                <Icon name="uil:arrow-right" />
                <span> Next </span>
              </button>
            </div>
          </form>
        </div>
        <div v-if="currentStep === 6">
          <form @submit.prevent="submit" class="space-y-8">
            <div class="p-7 border rounded-xl space-y-5">
              <h1 class="text-2xl">Amenities & Services</h1>
              <div class="grid grid-cols-7 text-primary-text-light gap-10">
                <div class="col-span-4 space-y-5">
                  <InputsTextfield
                    name="venue"
                    class="py-3.5 pl-12"
                    placeholder="Amenities & Services"
                  >
                    <template #leading>
                      <Icon
                        name="heroicons-outline:color-swatch"
                        class="absolute left-4 top-4 text-xl"
                      />
                    </template>
                  </InputsTextfield>
                  <button
                    class="w-full bg-primary flex py-3 items-center justify-center space-x-3 rounded-xl text-white"
                  >
                    <Icon name="ic:round-add" class="text-xl" />
                    <span>Add Agenda</span>
                  </button>
                </div>
                <div class="col-span-3 border-l px-7 space-y-5">
                  <div
                    class="space-y-1 p-4 flex bg-[#F5F5F5] items-center rounded-xl"
                  >
                    <p class="text-base font-semibold">
                      Id integer tellus habitasse vitae sed egestas sed netus.
                    </p>
                    <div class="flex flex-col space-y-3 items-center">
                      <Icon name="uil:edit-alt" />
                      <Icon name="uil:trash-alt" />
                    </div>
                  </div>
                  <div
                    class="space-y-1 p-4 flex bg-[#F5F5F5] items-center rounded-xl"
                  >
                    <p class="text-base font-semibold">
                      Id integer tellus habitasse vitae sed egestas sed netus.
                    </p>
                    <div class="flex flex-col space-y-3 items-center">
                      <Icon name="uil:edit-alt" />
                      <Icon name="uil:trash-alt" />
                    </div>
                  </div>
                  <div
                    class="space-y-1 p-4 flex bg-[#F5F5F5] items-center rounded-xl"
                  >
                    <p class="text-base font-semibold">
                      Id integer tellus habitasse vitae sed egestas sed netus.
                    </p>
                    <div class="flex flex-col space-y-3 items-center">
                      <Icon name="uil:edit-alt" />
                      <Icon name="uil:trash-alt" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full flex justify-between items-center">
              <button
                type="button"
                class="px-10 py-2 rounded-md text-primary border border-primary"
                @click="() => (currentStep > 1 ? currentStep-- : currentStep)"
              >
                <Icon name="uil:arrow-left" />
                <span> Previous </span>
              </button>
              <button
                type="submit"
                class="px-10 py-2 rounded-md text-white border bg-primary"
              >
                <Icon name="uil:arrow-right" />
                <span> Next </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
