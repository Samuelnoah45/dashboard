<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  iconName: {
    type: String,
    required: true,
  },
  titleClass: {
    type: String,
    default: "",
  },
  subtitleClass: {
    type: String,
    default: "",
  },

});
</script>
<template>
  <div
    class="absolute md:left-[48.7%] left-[43%] -top-4 w-12 h-12 flex justify-center items-center rounded-full border-[1px] "
  >
    <Icon :name="iconName" color="#D9D9D9" width="30" height="30"></Icon>
  </div>
  <div class="w-full flex  flex-col relative items-center md:p-14 py-8 text-center space-y-4">
    <p class="md:text-2xl  font-semibold dark:text-white" :class="titleClass">{{ title }}</p>
    <p class="text-secondary-text dark:text-dark-text-secondary" :class="subtitleClass">{{ subtitle }}</p>
  </div>
</template>
