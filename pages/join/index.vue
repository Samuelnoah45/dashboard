<script setup>
definePageMeta({
  layout: "registration",
});
</script>

<template>
  <div class="flex justify-center font-poppins dark:bg-dark-secondary">
    <div class="md:w-[70%] min-h-screen">
      <div class="flex justify-center">
        <img
          src="@/assets/images/logos/EYEA_logos/EYEA_logo_color.svg"
          alt=""
          srcset=""
         class="md:w-[400px] w-[200px]"
        />
      </div>
      <div class="flex justify-center dark:text-white">
        <div class="md:w-[50%] text-center space-y-4">
          <p class="md:text-4xl text-2xl">Register As</p>
          <p class="text-secondary-text dark:text-dark-text-secondary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
            eius fugit delectus ullam accusamus mollitia ea fuga! Optio,
            distinctio vel!
          </p>
        </div>
      </div>
      <div class="grid md:grid-cols-2 gap-4 w-full px-6 md:pt-40 pt-10 dark:text-white">
        <NuxtLink
          to="/individual"
          class="group space-y-4 p-8 border-[2px] hover:border-primary hover:border-[3px] cursor-pointer rounded-lg"
        >
          <Icon
            class="text-3xl text-secondary-text dark:text-dark-text-secondary"
            name="mdi:user-circle-outline"
          ></Icon>
          <p class="text-xl">Individual</p>
          <p class="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
            exercitationem, minus expedita dicta veniam nulla animi repudiandae
            quasi repellat debitis.
          </p>
          <InputsButton
            class="rgbuttton"
            name="Register as an Individual"
          ></InputsButton>
        </NuxtLink>
        <NuxtLink to="/organization">
          <div
            class="group space-y-4 p-8 border-[3px] hover:border-primary hover:border-[3px] cursor-pointer rounded-lg"
          >
            <Icon
              class="text-3xl text-secondary-text dark:text-dark-text-secondary"
              name="tabler:building"
            ></Icon>
            <p class="text-xl">Organization</p>
            <p class="">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
              exercitationem, minus expedita dicta veniam nulla animi
              repudiandae quasi repellat debitis.
            </p>
            <InputsButton
              class="rgbuttton"
              name="Register as an Organization"
            ></InputsButton>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style>
.rgbuttton {
  @apply w-full group-hover:bg-primary group-hover:text-white border-2 text-lg font-poppins border-primary text-primary rounded-md p-2;
}
</style>
