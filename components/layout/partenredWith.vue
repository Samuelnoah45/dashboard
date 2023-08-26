<script setup>
const partners = ref([
  {
    id: 1,
    url: "https://res.cloudinary.com/blue-sky/image/upload/v1690920133/wishelp_dqnbvv.svg",
  },
  {
    id: 2,
    url: "https://res.cloudinary.com/blue-sky/image/upload/v1690920133/symtric_rneg2a.svg",
  },
  {
    id: 2,
    url: "https://res.cloudinary.com/blue-sky/image/upload/v1690920132/resecurb_g5q3tz.svg",
  },
  {
    id: 2,
    url: "https://res.cloudinary.com/blue-sky/image/upload/v1690920121/JIGGLE_pndr63.svg",
  },
]);
</script>

<template>
  <div class="md:flex space-y-2 grid grid-cols-2 flex-wrap items-center">
    <div v-for="image in partners" :key="image.id" class="mr-6">
      <NuxtImg format="webp" loading="lazy" :src="image.url"></NuxtImg>
    </div>

    <div class="mr-6 text-primary font-poppins font-semibold">+17 Partners</div>
  </div>
</template>
