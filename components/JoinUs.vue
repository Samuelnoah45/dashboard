<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
</script>

<template>
  <div class="w-full flex-col md:space-y-16 space-y-2 flex items-center">
    <!-- Title -->
    <div class="md:w-[100%]">
      <div class="md:space-y-10 space-y-2">
        <p
          class="md:text-3xl text-xl font-semibold text-primary-text dark:text-white text-center"
        >
          Lorem ipsum dolor sit amet, consectetur
        </p>
        <p class="text-center text-primary-text-light md:font-semibold dark:text-dark-text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
      </div>
    </div>
    <TabGroup as="div" class="w-full flex flex-col items-center px-4">
      <TabList class="flex md:w-[40%] justify-between">
        <Tab as="template" v-slot="{ selected }" class="w-1/2 border-b-2"
          ><div
            :class="
              selected
                ? 'border-b-2 border-primary text-primary'
                : 'border-b-2 text-primary-text-light'
            "
            class="flex md:space-x-4 space-x-2 cursor-pointer justify-center items-center"
          >
            <Icon name="lucide:user-check-2" width="25" height="25"></Icon>
            <div class="font-semibold flex mt-2">Individual</div>
          </div></Tab
        >
        <Tab class="w-1/2" as="template" v-slot="{ selected }">
          <div
            :class="
              selected
                ? 'border-b-2 border-primary text-primary'
                : 'border-b-2 text-primary-text-light'
            "
            class="flex md:space-x-4 space-x-2  cursor-pointer justify-center items-center border-b-2 p-2"
          >
            <Icon name="uil:building" width="30" height="30"></Icon>
            <p>Organization</p>
          </div></Tab
        >
      </TabList>
      <TabPanels class="w-full">
        <TabPanel class="w-full flex justify-center">
          <!-- <div class="md:w-[70%] bg-black w-full grid md:grid-cols-2  grid-cols-1 md:gap-16 gap-4"> -->
          <!-- card one -->
          <div
            class="grid md:grid-cols-2 md:w-[70%] md:space-x-10 pt-10 space-y-4 md:space-y-0"
            >
            <div class="bg-[#F7F8F9]  dark:bg-dark-third rounded-lg flex-col flex justify-between">
              <div
                class="flex justify-between items-center border-b-2 py-6 px-6"
              >
                <div class="space-y-2">
                  <p class="text-3xl text-primary-text dark:text-white  font-semibold">
                    Member Plus
                  </p>
                  <p class="text-primary-text-light dark:text-white">For bigger team</p>
                </div>
                <div>
                  <span class="font-semibold dark:text-white text-primary-text">$</span>
                  
                  <span class="text-5xl font-semibold dark:text-white text-primary-text"
                    >12</span
                  >
                  <span class="text-primary-text-light dark:text-white">/mo</span>
                </div>
              </div>
              <div class="border-b-2">
                <div class="">
                  <div class="p-6 space-y-4">
                    <div class="flex space-x-4">
                      <div class="w-6 h-6 bg-primary rounded-full">
                        <Icon
                          name="iconamoon:check-fill"
                          color="white"
                          width="25"
                          height="25"
                        ></Icon>
                      </div>
                      <div class="">
                        <p class="text-primary-text-light dark:text-white">
                          Access to all feature
                        </p>
                      </div>
                    </div>
                    <div class="flex space-x-4">
                      <div class="w-6 h-6 bg-primary rounded-full">
                        <Icon
                          name="iconamoon:check-fill"
                          color="white"
                          width="25"
                          height="25"
                        ></Icon>
                      </div>
                      <div class="">
                        <p class="text-primary-text-light dark:text-white">
                          CPM overage:unlimited
                        </p>
                      </div>
                    </div>
                    <div class="flex space-x-4">
                      <div class="w-6 h-6 bg-primary rounded-full">
                        <Icon
                          name="iconamoon:check-fill"
                          color="white"
                          width="25"
                          height="25"
                        ></Icon>
                      </div>
                      <div class="">
                        <p class="text-primary-text-light dark:text-white">
                          Assisted onboarding support
                        </p>
                      </div>
                    </div>
                    <div class="flex space-x-4">
                      <div class="w-6 h-6 bg-primary rounded-full">
                        <Icon
                          name="iconamoon:check-fill"
                          color="white"
                          width="25"
                          height="25"
                        ></Icon>
                      </div>
                      <div class="">
                        <p class="text-primary-text-light dark:text-white">
                          Program reviews 1X a month
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <NuxtLink to="/individual">
                  <div class="flex justify-center items-center p-6">
                    <InputsButton
                      class="bg-primary p-2 w-[70%] text-white rounded-lg"
                      name="Get Started Now"
                    ></InputsButton>
                  </div>
                </NuxtLink>
              </div>
            </div>
            <!-- card two -->
            <div class="bg-[#F7F8F9] dark:bg-dark-third rounded-lg shadow">
              <div
                class="flex justify-between items-center border-b-2 py-6 px-6"
              >
                <div class="space-y-2">
                  <p class="text-3xl text-primary-text dark:text-white font-semibold">
                    Regular
                  </p>
                  <p class="text-primary-text-light dark:text-white">Unlimited possibility</p>
                </div>
                <div>
                  <span class="font-semibold dark:text-white text-primary-text">$</span>
                  <span class="text-5xl font-semibold dark:text-white text-primary-text"
                    >189</span
                  >
                  <span class="text-primary-text-light dark:text-white">/mo</span>
                </div>
              </div>
              <div class="border-b-2">
                <div class="">
                  <div class="p-6 space-y-4">
                    <div class="flex space-x-4">
                      <div class="w-6 h-6 bg-primary rounded-full">
                        <Icon
                          name="iconamoon:check-fill"
                          color="white"
                          width="25"
                          height="25"
                        ></Icon>
                      </div>
                      <div class="">
                        <p class="text-primary-text-light dark:text-white">
                          Access to all feature
                        </p>
                      </div>
                    </div>
                    <div class="flex space-x-4">
                      <div class="w-6 h-6 bg-primary rounded-full">
                        <Icon
                          name="iconamoon:check-fill"
                          color="white"
                          width="25"
                          height="25"
                        ></Icon>
                      </div>
                      <div class="">
                        <p class="text-primary-text-light dark:text-white">
                          CPM overage:unlimited
                        </p>
                      </div>
                    </div>
                    <div class="flex space-x-4">
                      <div class="w-6 h-6 bg-primary rounded-full">
                        <Icon
                          name="iconamoon:check-fill"
                          color="white"
                          width="25"
                          height="25"
                        ></Icon>
                      </div>
                      <div class="">
                        <p class="text-primary-text-light dark:text-white">
                          Assisted onboarding support
                        </p>
                      </div>
                    </div>
                    <div class="flex space-x-4">
                      <div class="w-6 h-6 bg-primary rounded-full">
                        <Icon
                          name="iconamoon:check-fill"
                          color="white"
                          width="25"
                          height="25"
                        ></Icon>
                      </div>
                      <div class="">
                        <p class="text-primary-text-light dark:text-white">
                          Assisted onboarding support
                        </p>
                      </div>
                    </div>
                    <div class="flex space-x-4">
                      <div class="w-6 h-6 bg-primary rounded-full">
                        <Icon
                          name="iconamoon:check-fill"
                          color="white"
                          width="25"
                          height="25"
                        ></Icon>
                      </div>
                      <div class="">
                        <p class="text-primary-text-light dark:text-white">
                          Program reviews 1X a month
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <NuxtLink to="/individual">
                  <div class="flex justify-center items-center p-6">
                    <InputsButton
                      class="bg-primary p-2 w-[70%] text-white rounded-lg"
                      name="Get Started Now"
                    ></InputsButton>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- </div> -->
        </TabPanel>
        <TabPanel class="w-full">
          <!-- <div class="md:w-[70%] bg-black w-full grid md:grid-cols-2  grid-cols-1 md:gap-16 gap-4"> -->
          <!-- card one -->
          <div
            class="grid md:grid-cols-3 md:space-x-10 pt-10 space-y-4 md:space-y-0"
          >
            <div class="bg-[#F7F8F9] dark:bg-dark-third rounded-lg flex-col flex justify-between">
              <div
                class="flex justify-between items-center border-b-2 py-6 px-6"
              >
                <div class="space-y-2">
                  <p class="text-3xl text-primary-text dark:text-white font-semibold">Small</p>
                  <p class="text-primary-text-light dark:text-white">For small company</p>
                </div>
                <div>
                  <span class="font-semibold dark:text-white text-primary-text">$</span>
                  <span class="text-5xl font-semibold dark:text-white text-primary-text"
                    >12</span
                  >
                  <span class="text-primary-text-light dark:text-white">/mo</span>
                </div>
              </div>
              <div class="border-b-2">
                <div class="">
                  <div class="p-6 space-y-4">
                    <div class="flex space-x-4">
                      <div class="w-6 h-6 bg-primary rounded-full">
                        <Icon
                          name="iconamoon:check-fill"
                          color="white"
                          width="25"
                          height="25"
                        ></Icon>
                      </div>
                      <div class="">
                        <p class="text-primary-text-light dark:text-white">
                          Access to all feature
                        </p>
                      </div>
                    </div>
                    <div class="flex space-x-4">
                      <div class="w-6 h-6 bg-primary rounded-full">
                        <Icon
                          name="iconamoon:check-fill"
                          color="white"
                          width="25"
                          height="25"
                        ></Icon>
                      </div>
                      <div class="">
                        <p class="text-primary-text-light dark:text-white">
                          CPM overage:unlimited
                        </p>
                      </div>
                    </div>
                    <div class="flex space-x-4">
                      <div class="w-6 h-6 bg-primary rounded-full">
                        <Icon
                          name="iconamoon:check-fill"
                          color="white"
                          width="25"
                          height="25"
                        ></Icon>
                      </div>
                      <div class="">
                        <p class="text-primary-text-light dark:text-white">
                          Assisted onboarding support
                        </p>
                      </div>
                    </div>
                    <div class="flex space-x-4">
                      <div class="w-6 h-6 bg-primary rounded-full">
                        <Icon
                          name="iconamoon:check-fill"
                          color="white"
                          width="25"
                          height="25"
                        ></Icon>
                      </div>
                      <div class="">
                        <p class="text-primary-text-light dark:text-white">
                          Program reviews 1X a month
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="flex justify-center items-center p-6">
                  <InputsButton
                    class="bg-primary p-2 w-[70%] text-white rounded-lg"
                    name="Get Started Now"
                  ></InputsButton>
                </div>
              </div>
            </div>
            <!-- card two -->
            <div class="bg-[#F7F8F9] dark:bg-dark-third rounded-lg shadow">
              <div
                class="flex justify-between items-center border-b-2 py-6 px-6"
              >
                <div class="space-y-2">
                  <p class="text-3xl text-primary-text dark:text-white font-semibold">Medium</p>
                  <p class="text-primary-text-light dark:text-white">For Medium company</p>
                </div>
                <div>
                  <span class="font-semibold dark:text-white text-primary-text">$</span>
                  <span class="text-5xl font-semibold dark:text-white text-primary-text"
                    >24</span
                  >
                  <span class="text-primary-text-light dark:text-white">/mo</span>
                </div>
              </div>
              <div class="border-b-2">
                <div class="">
                  <div class="p-6 space-y-4">
                    <div class="flex space-x-4">
                      <div class="w-6 h-6 bg-primary rounded-full">
                        <Icon
                          name="iconamoon:check-fill"
                          color="white"
                          width="25"
                          height="25"
                        ></Icon>
                      </div>
                      <div class="">
                        <p class="text-primary-text-light dark:text-white">
                          Access to all feature
                        </p>
                      </div>
                    </div>
                    <div class="flex space-x-4">
                      <div class="w-6 h-6 bg-primary rounded-full">
                        <Icon
                          name="iconamoon:check-fill"
                          color="white"
                          width="25"
                          height="25"
                        ></Icon>
                      </div>
                      <div class="">
                        <p class="text-primary-text-light dark:text-white">
                          CPM overage:unlimited
                        </p>
                      </div>
                    </div>
                    <div class="flex space-x-4">
                      <div class="w-6 h-6 bg-primary rounded-full">
                        <Icon
                          name="iconamoon:check-fill"
                          color="white"
                          width="25"
                          height="25"
                        ></Icon>
                      </div>
                      <div class="">
                        <p class="text-primary-text-light dark:text-white">
                          Assisted onboarding support
                        </p>
                      </div>
                    </div>
                    <div class="flex space-x-4">
                      <div class="w-6 h-6 bg-primary rounded-full">
                        <Icon
                          name="iconamoon:check-fill"
                          color="white"
                          width="25"
                          height="25"
                        ></Icon>
                      </div>
                      <div class="">
                        <p class="text-primary-text-light dark:text-white">
                          Assisted onboarding support
                        </p>
                      </div>
                    </div>
                    <div class="flex space-x-4">
                      <div class="w-6 h-6 bg-primary rounded-full">
                        <Icon
                          name="iconamoon:check-fill"
                          color="white"
                          width="25"
                          height="25"
                        ></Icon>
                      </div>
                      <div class="">
                        <p class="text-primary-text-light dark:text-white">
                          Program reviews 1X a month
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="flex justify-center items-center p-6">
                  <InputsButton
                    class="bg-primary p-2 w-[70%] text-white rounded-lg"
                    name="Get Started Now"
                  ></InputsButton>
                </div>
              </div>
            </div>
            <div class="bg-[#F7F8F9] dark:bg-dark-third rounded-lg shadow">
              <div
                class="flex justify-between items-center border-b-2 py-6 px-6"
              >
                <div class="space-y-2">
                  <p class="text-3xl text-primary-text dark:text-white font-semibold">Large</p>
                  <p class="text-primary-text-light dark:text-white">For large Company</p>
                </div>
                <div>
                  <span class="font-semibold dark:text-white text-primary-text">$</span>
                  <span class="text-5xl font-semibold dark:text-white text-primary-text"
                    >75</span
                  >
                  <span class="text-primary-text-light dark:text-white">/mo</span>
                </div>
              </div>
              <div class="border-b-2">
                <div class="">
                  <div class="p-6 space-y-4">
                    <div class="flex space-x-4">
                      <div class="w-6 h-6 bg-primary rounded-full">
                        <Icon
                          name="iconamoon:check-fill"
                          color="white"
                          width="25"
                          height="25"
                        ></Icon>
                      </div>
                      <div class="">
                        <p class="text-primary-text-light dark:text-white">
                          Access to all feature
                        </p>
                      </div>
                    </div>
                    <div class="flex space-x-4">
                      <div class="w-6 h-6 bg-primary rounded-full">
                        <Icon
                          name="iconamoon:check-fill"
                          color="white"
                          width="25"
                          height="25"
                        ></Icon>
                      </div>
                      <div class="">
                        <p class="text-primary-text-light dark:text-white">
                          CPM overage:unlimited
                        </p>
                      </div>
                    </div>
                    <div class="flex space-x-4">
                      <div class="w-6 h-6 bg-primary rounded-full">
                        <Icon
                          name="iconamoon:check-fill"
                          color="white"
                          width="25"
                          height="25"
                        ></Icon>
                      </div>
                      <div class="">
                        <p class="text-primary-text-light dark:text-white">
                          Assisted onboarding support
                        </p>
                      </div>
                    </div>
                    <div class="flex space-x-4">
                      <div class="w-6 h-6 bg-primary rounded-full">
                        <Icon
                          name="iconamoon:check-fill"
                          color="white"
                          width="25"
                          height="25"
                        ></Icon>
                      </div>
                      <div class="">
                        <p class="text-primary-text-light dark:text-white">
                          Assisted onboarding support
                        </p>
                      </div>
                    </div>
                    <div class="flex space-x-4">
                      <div class="w-6 h-6 bg-primary rounded-full">
                        <Icon
                          name="iconamoon:check-fill"
                          color="white"
                          width="25"
                          height="25"
                        ></Icon>
                      </div>
                      <div class="">
                        <p class="text-primary-text-light dark:text-white">
                          Program reviews 1X a month
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="flex justify-center items-center p-6">
                  <InputsButton
                    class="bg-primary p-2 w-[70%] text-white rounded-lg"
                    name="Get Started Now"
                  ></InputsButton>
                </div>
              </div>
            </div>
          </div>

          <!-- </div> -->
        </TabPanel>
      </TabPanels>
    </TabGroup>
    <!-- Group -->
    <div class="grid grid-cols-2 md:w-[40%]"></div>
    <!-- cards -->
  </div>
</template>
