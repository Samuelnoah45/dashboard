<script setup></script>

<template>
  <div class="bg-[#FFF9ED] dark:bg-dark-secondary-light md:p-20 p-6 font-poppins gap-20">
    <div class="grid md:grid-cols-4 space-y-6 pb-10">
      <div class="space-y-4">
        <div class="">
          <img src="@/assets/images/logos/EYEA_logos/EYEA_logo_color.svg" class="md:w-60 w-40" alt="logo" srcset="" />
        </div>
        <div>
          <p class="text-secondary-text md:text-lg text-sm text-justify md:text-left dark:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            necessitatibus consequuntur voluptatibus ab at temporibus cumque
            mollitia nostrum reiciendis recusandae.
          </p>
        </div>
      </div>
      <div class="flex md:justify-center">
        <div class="md:space-y-6 space-y-2">
          <div class="md:text-2xl titles">Service</div>
          <div class="md:space-y-6 grid md:grid-cols-2 text-xs md:text-base grid-cols-4 md:inline-block gap-4">
            <p class="lists">Kean</p>
            <p class="lists">Zelela</p>
            <p class="lists">Events</p>
            <p class="lists">Gatherings</p>
            <p class="lists">Forums</p>
          </div>
        </div>
      </div>
      <div class="flex md:justify-center">
        <div class="md:space-y-6 space-y-2">
          <div class="md:text-2xl titles">Remaining</div>
          <div class="md:space-y-6 grid md:grid-cols-2 text-xs md:text-base grid-cols-4 md:inline-block gap-4">
            <p class="lists">News</p>
            <p class="lists">Membership</p>
            <p class="lists">Support</p>
            <p class="lists">Partner</p>
            <p class="lists">support</p>
          </div>
        </div>
      </div>
      <div class="space-y-4">
        <div class="md:text-2xl text-primary-text font-semibold dark:text-white">Newsletter</div>
        <div class="flex space-x-4 justify-center items-center">
          <InputsTextfield
            name="email"
            class="focus:border-primary md:h-12 dark:bg-dark-secondary dark:text-white"
            placeholder="example@gmail.com"
          >
          </InputsTextfield>
          <InputsButton
            name="Subscribe"
            class="px-4 md:h-[45px] h-[36px] rounded-md bg-primary text-white"
          ></InputsButton>
        </div>
      </div>
    </div>
    <div
      class="border-t-2 p-10 lists flex justify-center items-center"
    >
      <p>&copy; 2023 EYEA. All rights reserved.</p>
    </div>
  </div>
</template>
<style>
.lists{
  @apply text-primary-text-light dark:text-dark-text-secondary

}

.titles{
  @apply text-primary-text font-semibold dark:text-white
}
</style>