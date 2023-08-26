<script setup></script>
<template>
  <div class="h-screen">
    <NavBar  dashboard-name="Events"/>
    <div class="h-[81vh] grid grid-cols-12 w-full">
      <div class="col-span-2 pt-20 border-primary border-r">
        <div class="space-y-10">
          <div>
            <NuxtLink to="/member" class="">
              <div class="flex space-x-2 pl-12 items-center">
                <Icon name="material-symbols:speed-outline" class="text-2xl">
                </Icon>
                <p class="font-medium text-lg">Dashboard</p>
              </div>
            </NuxtLink>
          </div>
          <div>
            <NuxtLink to="/member/all" class="">
              <div class="flex space-x-2 pl-12 items-center">
                <Icon name="carbon:ticket" class="text-2xl"> </Icon>
                <p class="font-medium text-lg">Member</p>
              </div>
            </NuxtLink>
          </div>
         
          <div>
            <NuxtLink to="/member/setting" class="">
              <div class="flex space-x-2 pl-12 items-center">
                <Icon name="uiw:setting-o" class="text-xl"> </Icon>
                <p class="font-medium text-lg">Setting</p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="col-span-10">
        <slot></slot>
      </div>
    </div>
    <div>
      <div
        class="flex justify-center space-x-2 w-full bg-primary p-2 pt-6 text-black"
      >
        <p>© 2023 EYEA. All rights reserved.</p>
        <div class="flex space-x-2">
          <img src="@/assets/images/logos/minab_logo.svg" alt="" />
          <p>Powered by : Minab IT Solutions</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.router-link-active div {
  @apply border-primary border-r-2 text-primary;
}
.router-link-active div {
  @apply border-primary border-r-2 text-primary;
}

.router-link-active div {
  @apply border-primary border-r-2 text-primary;
}
</style>
