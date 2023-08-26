<script setup>
import { Menu, MenuButton, MenuItems, MenuItem, Switch } from "@headlessui/vue";
const route = useRoute();
const colorMode = useColorMode()
const themeSwitcher = () => {
  colorMode.preference = colorMode.value == "light" ? "dark" : "light";
};
const isMenuOpen = ref(false);
const openMenu = () => {
   console.log("isMenuOpen", isMenuOpen.value);
  isMenuOpen.value = isMenuOpen.value == false ? true : false;
};
const porps = defineProps({
  navClass: {
    type: String,
    default: "",
  },
});

const NavBars = ref([
  {
    name: "about",
    to: "/about",
    class: "navbar",
  },
  {
    name: "news",
    to: "/news",
    class: "navbar",
  },
  {
    name: "events",
    to: "/events",
    class: "navbar",
  },
  {
    name: "services",
    to: "/Services",
    class: "navbar",
  },
  {
    name: "membership",
    to: "/membership",
    class: "membership",
  },
  {
    name: "supports",
    to: "/supports",
    class: "navbar",
  },
  {
    name: "partners",
    to: "/partners",
    class: "navbar",
  },
]);
</script>

<template>
  <div class="h-20 px-2 flex items-center" :class="navClass">
    <div class="flex w-full items-center">
      <div class="md:w-[25%] w-[30%] absolute md:relative md:pl-10 -ml-4">
        <img
          type="image"
          src="@/assets/images/logos/EYEA_logos/EYEA_logo_color.svg"
          alt=""
          class="md:w-[250px] w-[150px]"
        />
      </div>
      <div class="md:hidden flex justify-end w-full">
        <Menu as="div" class="md:hidden w-full inline-block text-left z-50">
          <MenuButton  @click="openMenu()" class="flex justify-end w-full">
            <Icon
            :name=" !isMenuOpen ? 'material-symbols:menu':'ic:baseline-close'"
              class="md:text-5xl text-3xl dark:text-white"
            ></Icon>
          </MenuButton>
          <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <MenuItems class="absolute w-full z-50 left-0 bg-white"
             :class="navClass ? navClass : 'bg-white '"
            >
              <div
                class="px-1 py-1 grid grid-cols-2 shadow-lg"
                :class="navClass ? navClass : 'bg-white '"
              >
                <MenuItem
                  class="hover:text-primary"
                  v-slot="{ active }"
               
                >
                  <NuxtLink
                  
                    to="/"
                    :class="[
                      'group flex w-full items-center rounded-md px-2 py-2  text-sm dark:text-white whitespace-nowrap',
                      '/' == route.path
                        ? '  text-primary dark:text-primary'
                        : '',
                    ]"
                    >Home</NuxtLink
                  >
                </MenuItem>
                <MenuItem
                  :class="route.path == '/'"
                  class="hover:text-primary"
                  v-slot="{ active }"
                  v-for="router in NavBars"
                >
                  <NuxtLink
                    :key="router.name"
                    :to="router.to"
                    :class="[
                      'group flex w-full items-center rounded-md px-2 py-2  capitalize text-sm dark:text-white whitespace-nowrap',
                      router.name == route.path.split('/')[1] ? 'text-primary dark:text-primary' : 'text-secondary-text',
                    ]"
                    >{{ router.name }}</NuxtLink
                  >
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
        <div class="">
          <div></div>
          <div
            @click="themeSwitcher"
            class="relative md:text-4xl text-xl ml-2 items-center rounded-full"
            :class="[]"
          >
            <Icon
              v-if="colorMode.value == 'dark'"
              name="material-symbols:light-mode"
              :class="colorMode.value == 'dark' ? 'inline-block' : 'hidden'"
              class="text-white transform rounded-full mb-1"
            ></Icon>
            <Icon
              v-else
              name="ic:baseline-dark-mode"
              :class="colorMode.value =='light' ? 'hidden' : 'inline-block'"
              class="transform rounded-full mb-1"
            ></Icon>
          </div>
        </div>
      </div>

      <div
        class="w-[38%] hidden hover:text-primary md:flex space-x-6 dark:text-white"
      >
        <NuxtLink to="/">
          <div
            class="hover:text-primary cursor-pointer  dark:text-white text-lg dark:hover:text-primary font-poppins"
            :class="['/' == route.path ? 'text-primary dark:text-primary' : 'text-secondary-text']"
          >
            Home
          </div>
        </NuxtLink>
        <NuxtLink v-for="navbar in NavBars" :to="navbar.to" :key="navbar.to">
          <div
            class="hover:text-primary cursor-pointer capitalize  dark:text-white text-lg dark:hover:text-primary font-poppins"
            :class="[
              navbar.name == route.path.split('/')[1] ? 'text-primary dark:text-primary' : 'text-secondary-text',
            ]"
          >
            {{ navbar.name }}
          </div>
        </NuxtLink>
      </div>
      <div class="md:w-[30%] w-full hidden md:flex pr-0 justify-end bg">
        <NuxtLink to="/join">
          <InputsButton
            class="border-2 flex justify-center space-x-2 items-center border-primary p-1 px-2 rounded-md text-primary"
            name="Join Us"
          >
            <template #leadingIcon>
              <Icon name="mingcute:send-line" width="30" height="30"></Icon>
            </template>
          </InputsButton>
        </NuxtLink>
      </div>
      <div class="w-[5%] hidden md:inline-block">
        <div></div>
        <div
          @click="themeSwitcher"
          class="relative text-4xl w-20 ml-6 items-center rounded-full"
        >
          <Icon
            v-if="$colorMode.preference == 'light'"
            name="material-symbols:light-mode"
            class="text-gray-500 transform rounded-full"
          ></Icon>
          <Icon
          v-if="$colorMode.preference == 'dark'"
            name="material-symbols:dark-mode"
            class="transform rounded-full text-gray-500"
          ></Icon>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.navbar {
  @apply hover:text-primary text-secondary-text dark:text-white text-lg dark:hover:text-primary font-poppins;
}
</style>
