<script setup>
// import ApexCharts from "apexcharts";

const series = ref([
  {
    name: "series1",
    data: [31, 40, 28, 51, 42, 109, 100],
  },
  {
    name: "series2",
    data: [11, 32, 45, 32, 34, 52, 41],
  },
]);
const chartOptions = ref({
  chart: {
    height: 350,
    type: "area",
  },
  colors: ["#77B6EA", "#545454"],
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
  <div class="grid grid-cols-12 px-20 font-poppins">
    <div class="col-span-9">
      <div class="grid grid-cols-2 gap-4">
        <div class="grid grid-cols-2 text-4xl border-2 p-4 rounded-lg">
          <div class="space-y-4">
            <p class="text-base text-third">Booked</p>
            <p  class="font-semibold">37321</p>
          </div>
          <div class="space-y-4">
            <p class="text-base text-primary">Attended</p>
            <p class="font-semibold"> 37321</p>
          </div>
        </div>
        <div class="grid grid-cols-2">
          <div>
            <p>Booked</p>
            <p>37321</p>
          </div>
          <div>
            <p>Booked</p>
            <p>37321</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-3">
      <apexchart
        type="area"
        height="350"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </div>
</template>
