<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
</script>

<template>
  <div>
    <NavBar nav-class="dark:bg-dark-secondary"></NavBar>
    <div class="md:min-h-screen">
      <div class="w-full bg-[#FFF9ED] dark:bg-dark-primary p-10">
        <div class="flex justify-center items-center md:h-full">
          <div
            class="md:w-[40%] flex items-center justify-center flex-col space-y-8"
          >
            <Icon
              name="tabler:news"
              class="text-[#655E5E] dark:text-white"
              width="80"
              height="80"
            ></Icon>
            <div class="text-primary-text-light text-center dark:text-dark-text-secondary  text-lg">
              To get the latest form us please subscribe to our newsletter our
              newsletter
            </div>
            <div class="flex space-x-4 justify-center items-center">
              <InputsTextfield
                name="email"
                class="focus:border-primary h-10 dark:bg-dark-primary-light "
                placeholder="example@gmail.com"
                
              >
              </InputsTextfield>
              <InputsButton
                name="Subscribe"
                class="px-4 h-[40px] rounded-md bg-primary text-white"
              ></InputsButton>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col pt-10 items-center dark:bg-dark-secondary">
        <div class="md:w-[40%] px-2 flex flex-col items-center space-y-8">
          <p
            class="text-center text-primary-text-light  dark:text-dark-text-secondary font-semibold leading-relaxed"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facere
            ratione blanditiis exercitationem quidem iure ipsum corrupti
            deserunt nobis, dolore doloremque commodi aut sed explicabo!
            Explicabo officia
          </p>
          <InputsTextfield
            name="email"
            class="focus:border-primary h-10 pl-[40px]"
            placeholder="exmpale@gmail.com"
            placeholder-style="text-primary-text-light dark:text-dark-text-secondary  "
          >
            <template #leading>
              <div class="absolute top-2 left-2 text-primary-text-light dark:text-dark-text-secondary font-poppins">
                <Icon
                  name="uil:search-alt"
                 
                  width="25"
                  height="25"
                ></Icon>
              </div>
            </template>
          </InputsTextfield>
        </div>
        <TabGroup as="div" class="w-md:[80%] flex flex-col px-4  pt-20">
          <TabList class="flex w-full justify-center">
            <div class="flex md:w-[40%]  w-full justify-evenly">
              <Tab as="template" v-slot="{ selected }" class="md:w-1/3"
                ><div class="flex cursor-pointer justify-center items-center">
                  <div
                    class="font-semibold flex"
                    :class="
                      selected
                        ? 'bg-[#BBF7D0] px-4 py-2 text-third rounded-lg'
                        : 'text-primary-text-light  dark:text-dark-text-secondary'
                    "
                  >
                    News
                  </div>
                </div>
              </Tab>
              <Tab as="template" v-slot="{ selected }" class="md:w-1/3"
                ><div class="flex cursor-pointer justify-center items-center">
                  <div
                    class="font-semibold flex"
                    :class="
                      selected
                        ? 'bg-[#BBF7D0] px-4 py-2 text-third rounded-lg'
                        : 'text-primary-text-light dark:text-dark-text-secondary'
                    "
                  >
                    Articles
                  </div>
                </div>
              </Tab>
              <Tab as="template" v-slot="{ selected }" class="md:w-1/3"
                ><div class="flex cursor-pointer justify-center items-center">
                  <div
                    class="font-semibold flex"
                    :class="
                      selected
                        ? 'bg-[#BBF7D0] px-4 py-2 text-third rounded-lg'
                        : 'text-primary-text-light  dark:text-dark-text-secondary'
                    "
                  >
                    Research
                  </div>
                </div>
              </Tab>
            </div>
          </TabList>
          <TabPanels>
            <TabPanel v-for="i in 3" :key="i" class="w-full">
              <!-- <div class="md:w-[70%] bg-black w-full grid md:grid-cols-2  grid-cols-1 md:gap-16 gap-4"> -->
              <!-- card one -->
              <div class="flex justify-center">
                <div class="grid md:grid-cols-2 md:w-[80%] gap-y-10 py-10">
                  <div
                    v-for="i in 4"
                    :key="i"
                    class="rounded-lg flex-col flex items-center"
                  >
                    <NuxtLink 
                    class="w-[80%] h-full rounded-lg overflow-hidden "
                    to="/news/1">
                      <div
                        class="space-y-4 "
                      >
                        <div class="h-[50%] bg-black">
                          <img
                            src="@/assets/images/temp/news.png"
                            alt=""
                            class="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div
                            class="bg-third-light px-2 w-32 py-1 space-x-1 flex justify-center items-center text-third rounded-full"
                          >
                            <div class="flex justify-start">
                              <Icon
                                name="tabler:news"
                                width="15"
                                height="25"
                              ></Icon>
                            </div>
                            <p class="text-sm">News</p>
                          </div>
                        </div>
                        <div>
                          <p class="text-primary-text-light dark:text-dark-text-secondary">
                            Jonh Doe. 12 Jan 2023
                          </p>
                        </div>
                        <div>
                          <p class="text-2xl text-primary-text font-semibold dark:text-white">
                            A Small business is only as goog as its tools and it
                            is totally true
                          </p>
                        </div>
                        <div
                          class="px-2 w-32 py-1 space-x-1 flex justify-center items-center text-third rounded-full"
                        >
                          <div class="flex space-x-1">
                            <p class="t font-semibold">Read post</p>
                            <Icon
                              name="uil:arrow-right"
                              width="23"
                              height="23"
                            ></Icon>
                          </div>
                        </div>
                      </div>
                    </NuxtLink>
                  </div>
                  <div class="col-span-1"></div>
                  <!-- card two -->
                </div>
              </div>
              <!-- </div> -->
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  </div>
  <LayoutFooter></LayoutFooter>
</template>
