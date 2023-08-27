<script setup>
// import ApexCharts from "apexcharts";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";

const series = ref([
  {
    name: "series1",
    data: [31, 40, 28, 109, 100, 51, 42, 10, 25, 30, 2],
  },
]);
const chartOptions = ref({
  chart: {
    height: 350,
    type: "area",
  },
  colors: ["#FFBE40"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    categories: [
      "2018-09-19T00:00:00.000Z",
      "2018-09-19T01:30:00.000Z",
      "2018-09-19T02:30:00.000Z",
      "2018-09-19T03:30:00.000Z",
      "2018-09-19T04:30:00.000Z",
      "2018-09-19T05:30:00.000Z",
      "2018-09-19T06:30:00.000Z",
      "2018-09-19T07:30:00.000Z",
      "2018-09-19T08:30:00.000Z",
      "2018-09-19T09:30:00.000Z",
      "2018-09-19T10:30:00.000Z",
    ],
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
});
definePageMeta({
  layout: "event",
});
</script>
<template>
  <div class="grid grid-cols-12 px-10 font-poppins">
    <div class="col-span-9">
      <div class="grid grid-cols-2 gap-4">
        <div class="grid grid-cols-2 text-4xl border-2 p-4 rounded-lg">
          <div class="space-y-4">
            <p class="text-base text-third">Booked</p>
            <p class="font-semibold">37321</p>
          </div>
          <div class="grid w-max grid-rows-3 justify-center">
            <span class="bg-[#D9D9D9] w-[1px]"></span>
            <Icon
              name="iconoir:group"
              class="text-secondary-text border-[1px] lg:text-4xl text-3xl border-[#D9D9D9] p-1 rounded-full -ml-4"
            />
            <span class="bg-[#D9D9D9] w-[1px]"></span>
          </div>
          <div class="sm:space-y-4 space-y-2 col-span-5 px-8 sm:py-3 py-2">
            <p class="text-base text-primary">Attended</p>
            <p class="font-semibold">37321</p>
          </div>
        </div>
        <div
          class="relative grid grid-cols-12 lg:text-4xl text-2xl border-2 rounded-lg"
        >
          <div class="sm:space-y-4 space-y-2 col-span-6 px-8 sm:py-3 py-2">
            <p class="text-base text-[#2158A4]">Upcoming</p>
            <p class="font-semibold">2</p>
          </div>
          <div class="grid w-max grid-rows-3 justify-center">
            <span class="bg-[#D9D9D9] w-[1px]"></span>
            <Icon
              name="heroicons-outline:ticket"
              class="text-secondary-text border-[1px] lg:text-4xl text-3xl border-[#D9D9D9] p-1 rounded-full -ml-4 -rotate-[15deg]"
            />
            <span class="bg-[#D9D9D9] w-[1px]"></span>
          </div>
          <div class="sm:space-y-4 space-y-2 col-span-5 px-8 sm:py-3 py-2">
            <p class="text-base text-primary-text">Total</p>
            <p class="font-semibold">17</p>
          </div>
        </div>
      </div>
      <div class="col-span-3 border-2 rounded-lg sm:py-5 sm:px-4 px-2 py-3">
        <TabGroup>
          <TabList
            class="flex w-full justify-between items-center sm:space-x-0 space-x-4"
          >
            <div class="flex w-full items-center sm:space-x-0 space-x-">
              <Tab
                as="template"
                v-slot="{ selected }"
                class="md:w-1/5 md:px-3 px-2 sm:text-base text-sm"
                ><div class="flex cursor-pointer items-center">
                  <div
                    class="font-semibold flex justify-center items-center space-x-2"
                    :class="
                      selected
                        ? '  border-primary border-b-2 text-primary py-2'
                        : 'text-primary-text-light   dark:text-dark-text-secondary'
                    "
                  >
                    <Icon name="iconoir:group" class="text-2xl mb-1"></Icon>

                    <p>Attendees</p>
                  </div>
                </div>
              </Tab>
              <Tab
                as="template"
                v-slot="{ selected }"
                class="md:w-1/5 px-3 sm:text-base text-sm"
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
                      name="heroicons-outline:ticket"
                      class="text-2xl mb-1"
                    ></Icon>

                    <p>Event</p>
                  </div>
                </div>
              </Tab>
            </div>
            <div class="float-right">
              <div class="relative flex w-max">
                <InputsDatePicker class="py-1" value="15/03/2023" />
                <Icon
                  name="uiw:date"
                  class="absolute right-2 mt-2 text-primary-text-light"
                />
              </div>
            </div>
          </TabList>
          <TabPanels>
            <TabPanel>
              <apexchart
                type="area"
                height="350"
                :options="chartOptions"
                :series="series"
              ></apexchart>
            </TabPanel>
            <TabPanel
              ><apexchart
                type="area"
                height="350"
                :options="chartOptions"
                :series="series"
              ></apexchart
            ></TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
    <div class="xl:col-span-3 col-span-9 border-l-[1px] grid grid-rows-2 px-4">
      <div></div>
      <div>
        <div>
          <h2 class="text-lg">Activities</h2>
          <p class="text-sm text-primary-text-light">
            Follow up the status update here
          </p>
        </div>
        <div class="mt-3">
          <div>
            <div class="grid grid-cols-12 items-center">
              <div class="col-span-2 flex items-center justify-center">
                <Icon
                  name="bi:person-fill"
                  class="w-8 h-8 text-white bg-neutral-500 rounded-full p-1"
                />
              </div>
              <p class="text-sm text-gray-900 col-span-8">
                You applied to Grant application
              </p>
              <p class="text-xs text-primary-text-light col-span-2">Sep 22</p>
            </div>
            <div class="grid grid-cols-12">
              <div class="col-span-2 flex justify-center p-1">
                <div class="w-px h-7 bg-primary-text-light"></div>
              </div>
            </div>
            <div class="grid grid-cols-12 items-center">
              <div class="col-span-2 flex items-center justify-center">
                <Icon
                  name="bi:person-fill"
                  class="w-8 h-8 text-white bg-neutral-500 rounded-full p-1"
                />
              </div>
              <p class="text-sm text-gray-900 col-span-8">
                You applied to Grant application
              </p>
              <p class="text-xs text-primary-text-light col-span-2">Sep 22</p>
            </div>
            <div class="grid grid-cols-12">
              <div class="col-span-2 flex justify-center p-1">
                <div class="w-px h-7 bg-primary-text-light"></div>
              </div>
            </div>
            <div class="grid grid-cols-12 items-center">
              <div class="col-span-2 flex items-center justify-center">
                <Icon
                  name="bi:person-fill"
                  class="w-8 h-8 text-white bg-neutral-500 rounded-full p-1"
                />
              </div>
              <p class="text-sm text-gray-900 col-span-8">
                You applied to Grant application
              </p>
              <p class="text-xs text-primary-text-light col-span-2">Sep 22</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
