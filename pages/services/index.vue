<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
</script>

<template>
  <div>
    <NavBar nav-class="dark:bg-dark-secondary"></NavBar>
    <div class="md:min-h-screen">
      <div
        class="w-full bg-primary-light dark:border-0 border-b-4 border-b-primary dark:bg-dark-primary md:p-36 p-20"
      >
        <div class="flex justify-center items-center md:h-full">
          <div
            class="md:w-[40%] flex items-center justify-center flex-col space-y-8"
          >
            <div class="text-5xl font-semibold text-center dark:text-white">
              Services
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col md:py-20 md:px-32 px-2 items-center dark:bg-dark-secondary font-poppins space-y-24"
      >
        <div class="grid md:grid-cols-11 w-full pt-10">
          <div
            class="col-span-6 space-y-6 text-secondary-text dark:text-dark-text-secondary"
          >
            <div
              class="text-3xl space-x-2 flex items-center text-black dark:text-white"
            >
              <Icon name="mdi:arm-flex-outline" class="text-4xl"> </Icon>
              <p class="">Capacity Building</p>
            </div>
            <p
              class="md:text-lg leading-relaxed text-sm px-2 text-justify md:text-left"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              non maxime ad vitae? Minus totam molestias recusandae, doloremque
              laudantium, at cum officia voluptate reiciendis odit voluptas
              magni tempore iure sint consequuntur, animi numquam pariatur
              distinctio maiores nesciunt reprehenderit veniam molestiae! cum
              officia voluptate reiciendis odit voluptas magni tempore iure sint
              consequuntur, animi numquam pariatur distinctio maiores nesciunt
              reprehenderit veniam molestiae!
            </p>
            <p
              class="md:text-lg leading-relaxed text-sm px-2 text-justify md:text-left"
            >
              Non maxime ad vitae? Minus totam molestias recusandae, doloremque
              laudantium, at cum officia voluptate reiciendis odit voluptas
              magni tempore iure sint consequuntur, animi numquam pariatur
              distinctio maiores nesciunt reprehenderit veniam molestiae!
            </p>
          </div>
          <div class="hidden md:inline-block col-span-2"></div>
          <div class="hidden md:inline-block col-span-3 h-[517px] dotDiv">
            <div class="h-[440px] w-[400px] bg-gray-300"></div>
          </div>
        </div>
        <div class="grid md:grid-cols-3 gap-20 w-full">
          <div class="py-10 px-4 rounded-lg space-y-4 border-2 relative">
            <div
              class="w-[90px] h-[91px] conerDiv absolute bg-[#FF9BA8] flex justify-center items-center rounded-lg -top-[17%] left-[4%]"
            >
              <div>
                <img
                  class=""
                  src="@/assets/images/logos/kena_logo.png"
                  alt=""
                  width="32"
                  height="32"
                  srcset=""
                />
              </div>
            </div>
            <p class="text-2xl dark:text-white">Kana</p>
            <p class="text-secondary-text dark:text-dark-text-secondary">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
              inventore fugiat. Fugiat, recusandae explicabo laudantium corrupti
              doloribus assumenda pariatur deleniti quo repudiandae, maiores
              tenetur eum omnis fuga ea officia voluptates.u u
            </p>
            <div class="flex space-x-2 items-center text-primary">
              <p class="text-lg">Explore More</p>
              <Icon name="jam:arrow-up-right" class="text-2xl"></Icon>
            </div>
          </div>
          <div class="py-10 px-4 rounded-lg space-y-4 border-2 relative">
            <div
              class="w-[90px] h-[91px] conerDiv absolute bg-third-light2 flex justify-center items-center rounded-lg -top-[17%] left-[4%]"
            >
              <div>
                <Icon name="uil:books" class="text-4xl"></Icon>
              </div>
            </div>
            <p class="text-2xl dark:text-white">Study</p>
            <p class="text-secondary-text dark:text-dark-text-secondary">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
              inventore fugiat. Fugiat, recusandae explicabo laudantium corrupti
              doloribus assumenda pariatur deleniti quo repudiandae, maiores
              tenetur eum omnis fuga ea officia voluptates.u u
            </p>
            <div class="flex space-x-2 items-center text-primary">
              <p class="text-lg">Explore More</p>
              <Icon name="jam:arrow-up-right" class="text-2xl"></Icon>
            </div>
          </div>
          <div class="py-10 px-4 rounded-lg space-y-4 border-2 relative">
            <div
              class="w-[90px] h-[91px] conerDiv absolute bg-[#A597FF] flex justify-center items-center rounded-lg -top-[17%] left-[4%]"
            >
              <div>
                <Icon name="fluent-mdl2:education" class="text-4xl"></Icon>
              </div>
            </div>
            <p class="text-2xl dark:text-white">Education</p>
            <p class="text-secondary-text dark:text-dark-text-secondary">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
              inventore fugiat. Fugiat, recusandae explicabo laudantium corrupti
              doloribus assumenda pariatur deleniti quo repudiandae, maiores
              tenetur eum omnis fuga ea officia voluptates.u u
            </p>
            <div class="flex space-x-2 items-center text-primary">
              <p class="text-lg">Explore More</p>
              <Icon name="jam:arrow-up-right" class="text-2xl"></Icon>
            </div>
          </div>
        </div>
        <div class="grid md:grid-cols-11 w-full md:pt-10">
          <div
            class="col-span-6 space-y-6 text-secondary-text dark:text-dark-text-secondary"
          >
            <div
              class="text-3xl space-x-2 flex items-center text-black dark:text-white"
            >
              <Icon name="grommet-icons:announce" class="text-4xl"> </Icon>
              <p class="">Advocacy</p>
            </div>
            <p
              class="md:text-lg leading-relaxed text-sm px-2 text-justify md:text-left"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              non maxime ad vitae? Minus totam molestias recusandae, doloremque
              laudantium, at cum officia voluptate reiciendis odit voluptas
              magni tempore iure sint consequuntur, animi numquam pariatur
              distinctio maiores nesciunt reprehenderit veniam molestiae! cum
              officia voluptate reiciendis odit voluptas magni tempore iure sint
              consequuntur, animi numquam pariatur distinctio maiores nesciunt
              reprehenderit veniam molestiae!
            </p>
            <p
              class="md:text-lg leading-relaxed text-sm px-2 text-justify md:text-left"
            >
              Non maxime ad vitae? Minus totam molestias recusandae, doloremque
              laudantium, at cum officia voluptate reiciendis odit voluptas
              magni tempore iure sint consequuntur, animi numquam pariatur
              distinctio maiores nesciunt reprehenderit veniam molestiae!
            </p>
          </div>
          <div class="hidden md:inline-block col-span-2"></div>
          <div class="hidden md:inline-block col-span-3 h-[517px] dotDiv">
            <div class="h-[440px] w-[400px] bg-gray-300"></div>
          </div>
        </div>
        <div class="grid md:grid-cols-11 w-full pt-10">
          <div
            class="col-span-6 space-y-6 text-secondary-text dark:text-dark-text-secondary"
          >
            <div
              class="text-3xl space-x-2 flex items-center text-black dark:text-white"
            >
              <Icon name="el:network" class="text-4xl"> </Icon>
              <p class="">Newtwork & Explore</p>
            </div>
            <p
              class="md:text-lg leading-relaxed text-sm px-2 text-justify md:text-left"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              non maxime ad vitae? Minus totam molestias recusandae, doloremque
              laudantium, at cum officia voluptate reiciendis odit voluptas
              magni tempore iure sint consequuntur, animi numquam pariatur
              distinctio maiores nesciunt reprehenderit veniam molestiae! cum
              officia voluptate reiciendis odit voluptas magni tempore iure sint
              consequuntur, animi numquam pariatur distinctio maiores nesciunt
              reprehenderit veniam molestiae!
            </p>
            <p
              class="md:text-lg leading-relaxed text-sm px-2 text-justify md:text-left"
            >
              Non maxime ad vitae? Minus totam molestias recusandae, doloremque
              laudantium, at cum officia voluptate reiciendis odit voluptas
              magni tempore iure sint consequuntur, animi numquam pariatur
              distinctio maiores nesciunt reprehenderit veniam molestiae!
            </p>
          </div>
          <div class="hidden md:inline-block col-span-2"></div>
          <div class="hidden md:inline-block col-span-3 h-[517px] dotDiv">
            <div class="h-[440px] w-[400px] bg-gray-300"></div>
          </div>
        </div>
        <div class="grid md:grid-cols-3 gap-20 w-full">
          <div class="py-10 px-4 rounded-lg space-y-4 border-2 relative">
            <div
              class="w-[90px] h-[91px] conerDiv absolute bg-[#4B1796] flex justify-center items-center rounded-lg -top-[17%] left-[4%]"
            >
              <div>
                <img
                  class=""
                  src="@/assets/images/logos/zelela_logo.png"
                  alt=""
                  width="32"
                  height="32"
                  srcset=""
                />
              </div>
            </div>
            <p class="text-2xl dark:text-white">Kana</p>
            <p class="text-secondary-text dark:text-dark-text-secondary">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
              inventore fugiat. Fugiat, recusandae explicabo laudantium corrupti
              doloribus assumenda pariatur deleniti quo repudiandae, maiores
              tenetur eum omnis fuga ea officia voluptates.u u
            </p>
            <div class="flex space-x-2 items-center text-primary">
              <p class="text-lg">Explore More</p>
              <Icon name="jam:arrow-up-right" class="text-2xl"></Icon>
            </div>
          </div>
          <div class="py-10 px-4 rounded-lg space-y-4 border-2 relative">
            <div
              class="w-[90px] h-[91px] conerDiv absolute bg-third-light2 flex justify-center items-center rounded-lg -top-[17%] left-[4%]"
            >
              <div>
                <Icon name="uil:books" class="text-4xl"></Icon>
              </div>
            </div>
            <p class="text-2xl dark:text-white">Study</p>
            <p class="text-secondary-text dark:text-dark-text-secondary">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
              inventore fugiat. Fugiat, recusandae explicabo laudantium corrupti
              doloribus assumenda pariatur deleniti quo repudiandae, maiores
              tenetur eum omnis fuga ea officia voluptates.u u
            </p>
            <div class="flex space-x-2 items-center text-primary">
              <p class="text-lg">Explore More</p>
              <Icon name="jam:arrow-up-right" class="text-2xl"></Icon>
            </div>
          </div>
          <div class="py-10 px-4 rounded-lg space-y-4 border-2 relative">
            <div
              class="w-[90px] h-[91px] conerDiv absolute bg-primary-light flex justify-center items-center rounded-lg -top-[17%] left-[4%]"
            >
              <div>
                <Icon
                  name="heroicons-outline:light-bulb"
                  class="text-5xl text-[#FCB219]"
                ></Icon>
              </div>
            </div>
            <p class="text-2xl dark:text-white">Education</p>
            <p class="text-secondary-text dark:text-dark-text-secondary">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
              inventore fugiat. Fugiat, recusandae explicabo laudantium corrupti
              doloribus assumenda pariatur deleniti quo repudiandae, maiores
              tenetur eum omnis fuga ea officia voluptates.u u
            </p>
            <div class="flex space-x-2 items-center text-primary">
              <p class="text-lg">Explore More</p>
              <Icon name="jam:arrow-up-right" class="text-2xl"></Icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <LayoutFooter></LayoutFooter>
</template>

<style>
.dotDiv {
  background-image: url("@/assets/images/shapes/dots.svg");
  background-repeat: no-repeat;
  background-position: right bottom;
  height: 100;
  width: 100;
}
.conerDiv {
  clip-path: polygon(100% 0, 100% 50%, 67% 100%, 0% 100%, 0 50%, 0% 0%);
}
</style>
