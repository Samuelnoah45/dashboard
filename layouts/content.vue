<script setup></script>
<template>
  <div class="h-screen">
    <NavBar dashboard-name="Events" />
    <div class="md:h-[81vh] grid md:grid-cols-12 w-full">
      <div class="col-span-2 pt-20 hidden md:inline-block border-primary border-r">
        <div class="space-y-10">
          <div>
            <NuxtLink to="/content" class="">
              <div class="flex space-x-2 pl-12 items-center">
                <Icon name="material-symbols:speed-outline" class="text-2xl">
                </Icon>
                <p class="font-medium text-lg">Dashboard</p>
              </div>
            </NuxtLink>
          </div>
          <div>
            <NuxtLink to="/content/news-articles-research" class="">
              <div class="flex space-x-2 pl-12 items-center">
                <Icon name="tabler:news" class="text-2xl"> </Icon>
                <p class="font-medium text-lg">News, Articles & Research</p>
              </div>
            </NuxtLink>
          </div>
          <div>
            <NuxtLink to="/content/partnership" class="">
              <div class="flex space-x-2 pl-12 blackIcon items-center">
                <Icon name="mdi:partnership-outline" class="text-2xl"> </Icon>

                <p class="font-medium text-lg">Partnership</p>
              </div>
            </NuxtLink>
          </div>
          <div>
            <NuxtLink to="/content/team" class="">
              <div class="flex space-x-2 pl-12 items-center">
                <Icon name="ant-design:team-outlined" class="text-3xl"> </Icon>
                <p class="font-medium text-lg">Team</p>
              </div>
            </NuxtLink>
          </div>
          <div>
            <NuxtLink to="/content/newsletter" class="">
              <div class="flex space-x-2 pl-12 items-center">
                <Icon name="uil:mailbox" class="text-3xl"> </Icon>
                <p class="font-medium text-lg">Newsletter</p>
              </div>
            </NuxtLink>
          </div>
          <div>
            <NuxtLink to="/content/gallery" class="">
              <div class="flex space-x-2 pl-12 items-center">
                <Icon name="grommet-icons:gallery" class="text-xl"> </Icon>
                <p class="font-medium text-lg">Gallery</p>
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
        class="flex justify-center z-50 space-x-2 w-full mt-4 bg-primary p-2 pt-6 text-black"
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
