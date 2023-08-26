<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem, Switch } from "@headlessui/vue";
const route = useRoute();
const colorMode = useColorMode();
const props = defineProps({
  dashboardName: {
    type: String,
    default: "",
  },
  type:{
    type:String,
    default:""
  }
});
const isMenuOpen = ref(false);
const openMenu = ():void =>  {
  console.log("isMenuOpen", isMenuOpen.value);
  isMenuOpen.value = isMenuOpen.value == false ? true : false;
};
const name = function name(params: string):string {
  if (params!.split("/").length == 2) {
    return "Dashboard";
  }
  if (params!.split("/").length == 3 && params!.split("/")[2] == "all") {
    return params!.split("/")[1];
  }
  
  return  params!.split("/")[2];
}

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
]);
</script>

<template>
  <div class="grid grid-cols-12">
    <div class="flex w-full col-span-2  items-center " :class="route.path !='/' ?'border-r border-primary':''">
      <NuxtLink  to="/">
      <img
        type="image"
        src="@/assets/images/logos/EYEA_logos/EYEA_logo_color.svg"
        alt=""
        class="w-[170px]"
      />
      </NuxtLink>
    </div>
    <div class="col-span-10 flex justify-between px-20 items-center">
      <div class="text-3xl font-medium  text-primary capitalize ">{{ name(route.path)}}</div>
      <div class="flex items-center space-x-4">
        <Icon name="fluent:mail-multiple-16-regular" class="text-2xl font-semibold"></Icon>
        <Icon name="clarity:notification-line" class="text-2xl font-semibold"></Icon>
        <Menu as="div" class="relative inline-block text-left space-x-1">
          <MenuButton @click="openMenu()" class="flex bg-[#EEF0F3] space-x-2    items-center p-1 rounded-full justify-end">
            <div
              class="w-8 h-8 rounded-full flex justify-center items-center overflow-hidden"
            >
              <img src="@/assets/images/temp/smallCard3.png" alt="" />
            </div>
            <div class="flex items-center space-x-2 px-2">
               <p>Samuel Noah</p>
              <Icon
                :name="isMenuOpen ? 'ep:arrow-down-bold' : 'ep:arrow-down-bold'"
                class="text-lg"
              ></Icon>
            </div>
          </MenuButton>
          <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <MenuItems class="absolute  bg-[#EEF0F3]    w-full  right-0">
              <div class="flex flex-col">
                <MenuItem class="hover:text-primary border px-2" v-slot="{ active }">
                  <NuxtLink to="/">Text</NuxtLink>
                </MenuItem>
                <MenuItem class="hover:text-primary border px-2" v-slot="{ active }">
                  <NuxtLink to="/">Text</NuxtLink> </MenuItem
                ><MenuItem class="hover:text-primary border px-2" v-slot="{ active }">
                  <NuxtLink to="/">Text</NuxtLink>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
      </div>
    </div>
  </div>
</template>

<style>
.navbar {
  @apply hover:text-primary text-secondary-text font-poppins;
}
</style>
