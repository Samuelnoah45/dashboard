<template>
  <div class="h-screen">
    <NavBar />
    <div class="h-[81vh] w-full ">
      <slot></slot>
    </div>
    <div>
      <div
        class="flex justify-center space-x-2 w-full pt-6 bg-primary p-2 text-black"
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
