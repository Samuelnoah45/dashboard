<script setup></script>

<template>
  <div class="justify-center p-4 rounded-xl relative border-2 flex">
    <button class="absolute right-2">
      <Icon name="bx:edit" class="text-2xl font-bold"></Icon>
    </button>
    <div class="flex flex-col items-center space-y-4">
      <NuxtImg
        format="webp"
        loading="lazy"
        src="https://res.cloudinary.com/blue-sky/image/upload/v1690975775/avator_q97k44.png"
      ></NuxtImg>
      <div>
        <p class="text-xl font-semibold text-primary-text dark:text-white">
          MAcalurey Herring
        </p>
      </div>
      <div class="text-[#2F9D55] text-xl">CEO & Founder</div>
      <div>
        <p
          class="text-center text-primary-text-light dark:text-dark-text-secondary"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div class="flex text-gray-400 justify-between w-[50%] flex-wrap">
        <Icon name="gg:facebook" width="25" height="25"></Icon>
        <Icon name="mdi:twitter" width="25" height="25"></Icon>
        <Icon name="mdi:instagram" width="25" height="25"></Icon>
        <Icon name="mdi:linkedin" width="25" height="25"></Icon>
      </div>
    </div>
  </div>
</template>
