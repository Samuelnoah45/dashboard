<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
</script>

<template>
  <div class="grid h-full grid-cols-12 w-full font-poppins">
    <div
      class="col-span-12 h-full px-10 justify-center flex items-center "
    >
      <div class="grid grid-cols-4 gap-10">
        <NuxtLink to="/content"
          class="flex flex-col hover:border-primary border-2 px-8 pt-8 pb-4 rounded-lg justify-between"
        >
          <div class="space-y-4">
            <div>
              <Icon
                name="ic:round-dashboard"
                class="text-6xl text-primary"
              ></Icon>
            </div>
            <p class="py-4 border-b-2 text-xl uppercase font-semibold">
              Content manager system
            </p>
            <div class="space-y-2 text-sm">
              <div class="flex space-x-2">
                <div
                  class="h-6 w-6 flex justify-center items-center bg-[#DDDDDD] rounded-full"
                >
                  <div class="h-2 w-2 bg-[#B5BDD6] rounded-full"></div>
                </div>
                <p>Blog, Article & News</p>
              </div>
              <div class="flex space-x-2">
                <div
                  class="h-6 w-6 flex justify-center items-center bg-[#DDDDDD] rounded-full"
                >
                  <div class="h-2 w-2 bg-[#B5BDD6] rounded-full"></div>
                </div>
                <p>Partnership & Membership</p>
              </div>
              <div class="flex space-x-2">
                <div
                  class="h-6 w-6 flex justify-center items-center bg-[#DDDDDD] rounded-full"
                >
                  <div class="h-2 w-2 bg-[#B5BDD6] rounded-full"></div>
                </div>

                <p>Team Members</p>
              </div>
              <div class="flex space-x-2">
                <div
                  class="h-6 w-6 flex justify-center items-center bg-[#DDDDDD] rounded-full"
                >
                  <div class="h-2 w-2 bg-[#B5BDD6] rounded-full"></div>
                </div>
                <p>Stat & Data</p>
              </div>
            </div>
          </div>
          <div class="flex justify-end text-base">
            <div class="flex items-center space-x-2">
              <p>Continue</p>
              <Icon name="tabler:arrow-right"></Icon>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink to="/events" 
          class="border-2 px-8 pt-8 pb-4 hover:border-primary rounded-lg flex flex-col justify-between"
        >
          <div class="space-y-4">
            <div>
              <Icon name="carbon:ticket" class="text-6xl text-primary"></Icon>
            </div>
            <p class="py-4 border-b-2 text-xl uppercase font-semibold">
              Event Management System
            </p>
            <div class="space-y-2 text-sm">
              <div class="flex space-x-2">
                <div
                  class="h-6 w-6 flex justify-center items-center bg-[#DDDDDD] rounded-full"
                >
                  <div class="h-2 w-2 bg-[#B5BDD6] rounded-full"></div>
                </div>
                <p>Post new events</p>
              </div>
              <div class="flex space-x-2">
                <div
                  class="h-6 w-6 flex justify-center items-center bg-[#DDDDDD] rounded-full"
                >
                  <div class="h-2 w-2 bg-[#B5BDD6] rounded-full"></div>
                </div>
                <p>Manage event contents</p>
              </div>
              <div class="flex space-x-2">
                <div
                  class="h-6 w-6 flex justify-center items-center bg-[#DDDDDD] rounded-full"
                >
                  <div class="h-2 w-2 bg-[#B5BDD6] rounded-full"></div>
                </div>

                <p>Zelela</p>
              </div>
              <div class="flex space-x-2">
                <div
                  class="h-6 w-6 flex justify-center items-center bg-[#DDDDDD] rounded-full"
                >
                  <div class="h-2 w-2 bg-[#B5BDD6] rounded-full"></div>
                </div>
                <p>Stat & Data</p>
              </div>
            </div>
          </div>

          <div  class="flex justify-end text-base">
            <div class="flex items-center space-x-2">
              <p>Continue</p>
              <Icon name="tabler:arrow-right"></Icon>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink to="/member"
          class="border-2 hover:border-primary px-8 pt-8 pb-4 rounded-lg flex flex-col justify-between"
        >
          <div class="space-y-4">
            <div>
              <Icon
                name="fa6-solid:id-card-clip"
                class="text-6xl text-primary"
              ></Icon>
            </div>
            <p class="py-4 border-b-2 text-xl uppercase font-semibold">
              member Management dashboard
            </p>
            <div class="space-y-2 text-sm">
              <div class="flex space-x-2">
                <div
                  class="h-6 w-6 flex justify-center items-center bg-[#DDDDDD] rounded-full"
                >
                  <div class="h-2 w-2 bg-[#B5BDD6] rounded-full"></div>
                </div>
                <p>Issue new ID for members</p>
              </div>
              <div class="flex space-x-2">
                <div
                  class="h-6 w-6 flex justify-center items-center bg-[#DDDDDD] rounded-full"
                >
                  <div class="h-2 w-2 bg-[#B5BDD6] rounded-full"></div>
                </div>
                <p>Accept membership request</p>
              </div>
              <div class="flex space-x-2">
                <div
                  class="h-6 w-6 flex justify-center items-center bg-[#DDDDDD] rounded-full"
                >
                  <div class="h-2 w-2 bg-[#B5BDD6] rounded-full"></div>
                </div>

                <p>Follow up on membership fee</p>
              </div>
              <div class="flex space-x-2">
                <div
                  class="h-6 w-6 flex justify-center items-center bg-[#DDDDDD] rounded-full"
                >
                  <div class="h-2 w-2 bg-[#B5BDD6] rounded-full"></div>
                </div>
                <p>Stat & Data</p>
              </div>
            </div>
          </div>
          <div class="flex justify-end text-base">
            <div class="flex items-center space-x-2">
              <p>Continue</p>
              <Icon name="tabler:arrow-right"></Icon>
            </div>
          </div>
        </NuxtLink>

        <NuxtLink to="/user"
          class="border-2  hover:border-primary px-8 pt-8 pb-4 rounded-lg flex flex-col justify-between"
        >
          <div class="space-y-4">
            <div>
              <Icon name="mdi:users" class="text-6xl text-primary"></Icon>
            </div>
            <p class="py-4 border-b-2 text-xl uppercase font-semibold">
              user Management Dashboard
            </p>
            <div class="space-y-2 text-sm">
              <div class="flex space-x-2">
                <div
                  class="h-6 w-6 flex justify-center items-center bg-[#DDDDDD] rounded-full"
                >
                  <div class="h-2 w-2 bg-[#B5BDD6] rounded-full"></div>
                </div>
                <p>Create New Users</p>
              </div>
              <div class="flex space-x-2">
                <div
                  class="h-6 w-6 flex justify-center items-center bg-[#DDDDDD] rounded-full"
                >
                  <div class="h-2 w-2 bg-[#B5BDD6] rounded-full"></div>
                </div>
                <p>Reset users password</p>
              </div>
              <div class="flex space-x-2">
                <div
                  class="h-6 w-6 flex justify-center items-center bg-[#DDDDDD] rounded-full"
                >
                  <div class="h-2 w-2 bg-[#B5BDD6] rounded-full"></div>
                </div>

                <p>Invite new admins</p>
              </div>
              <div class="flex space-x-2">
                <div
                  class="h-6 w-6 flex justify-center items-center bg-[#DDDDDD] rounded-full"
                >
                  <div class="h-2 w-2 bg-[#B5BDD6] rounded-full"></div>
                </div>
                <p>Stat & Data</p>
              </div>
            </div>
          </div>
          <div class="flex justify-end text-base">
            <div class="flex items-center space-x-2">
              <p>Continue</p>
              <Icon name="tabler:arrow-right"></Icon>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style></style>
