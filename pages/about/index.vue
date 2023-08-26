<script setup>
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
</script>

<template>
  <div>
    <NavBar nav-class="dark:bg-dark-primary bg-white"></NavBar>
    <!-- section one -->
    <div
      class="md:min-h-[90%] flex justify-end md:p-20 dark:bg-dark-primary -z-20 relative"
    >
      <div
        class="md:w-[80%] md:pl-[10%] md:pr-10 md:py-10 p-4 text-sm md:text-base md:h-[80%] rounded-lg bg-[#d9d9d97c] dark:bg-dark-secondary dark:text-white relative -z-10"
      >
        <div
          class="absolute md:-left-[20%] md:top-[30%] top-40 leading-tight md:w-[500px] h-[300px] md:text-[100px] text-[80px]"
        >
          HOW WE STARTED
        </div>
        <img
          class="md:absolute right-0 bottom-[5%]"
          src="@/assets/images/shapes/riverShape.svg"
          alt=""
        />
        <p
          v-for="i in 2"
          class="leading-relaxed text-justify md:text-left md:text-lg text-[12px] mb-8"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
          facilis quo deserunt magni nulla cumque, eveniet quia aliquam esse
          dicta reprehenderit debitis modi incidunt laborum quod! Voluptates
          nesciunt esse ipsum consequatur saepe dolore nulla velit odit ut et
          unde, voluptate architecto, possimus excepturi doloremque vitae
          perspiciatis totam minus hic aliquam! Culpa magni distinctio modi
          fugit tempora? Reiciendis dignissimos, explicabo iusto doloremque
          accusamus adipisci iste doloribus corporis qui nihil sit officia
          magni? Reprehenderit obcaecati tenetur nisi, natus quaerat optio ab
          sapiente at adipisci, ut aperiam? Rem consequatur laudantium delectus
          ducimus nemo sapiente, maxime optio ex amet praesentium iure deserunt
          ipsum et placeat aliquam recusandae! Exercitationem odit modi
          accusamus vitae facilis consequuntur qui quia voluptatem, quos
          similique omnis, sit quas porro incidunt adipisci illum sequi quaerat
          perferendis voluptatibus, ut quod praesentium! Illo soluta error quod
          consequatur et vel fugit commodi ipsam nobis aliquam debitis ut sunt
          odit saepe, enim sapiente, nemo reiciendis culpa impedit quas
          distinctio ex sint labore. Blanditiis quas necessitatibus atque et
          temporibus earum eveniet alias ea praesentium assumenda nesciunt
          doloribus ad harum eaque distinctio possimus, quia consequatur cumque
          repellendus! Harum voluptates, provident earum exercitationem nam
          porro facere iure magnam inventore tempora ea sed eos dignissimos!
          Voluptas repellat itaque id.
        </p>
      </div>
    </div>
    <!-- section two -->
    <div
      class="md:min-h-screen font-poppins w-full bg-[#FFF0D2] dark:bg-dark-secondary px-6 relative md:px-20"
    >
      <LayoutSectionHeader
        iconName="fluent-emoji-high-contrast:open-mailbox-with-lowered-flag"
        title="Purpose and Needs"
        subtitle="porro facere iure magnam inventore tempora ea sed eos dignissimos"
      ></LayoutSectionHeader>
      <div class="w-full flex justify-center pb-10">
        <div class="flex justify-center">
          <div class="grid md:grid-cols-10">
            <div
              class="col-span-4 md:leading-relaxed text-sm md:text-base space-y-6 text-justify md:text-left dark:text-white"
            >
              <div class="md:text-[36px] text-[30px]">
                <div
                  class="md:text-[36px] text-[30px] flex space-x-2 items-center"
                >
                  <Icon name="ri:ruler-line" width="40" height="40"></Icon>
                  <span>Purpose</span>
                </div>
              </div>
              <p v-for="i in 4" :key="i" class="text-[12px] md:text-[20px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                vitae tenetur cumque porro mollitia rem distinctio excepturi
                voluptatibus! Officia beatae repudiandae consequuntur pariatur!
                Facilis, corporis.
              </p>
              <div>
                <NuxtLink class="" to="/join">
                  <InputsButton
                    class="border-2 flex justify-center space-x-2 items-center border-primary md:p-2 p-1 w-full md:w-[30%] rounded-md text-primary md:font-semibold"
                    name="Join Now"
                  >
                  </InputsButton>
                </NuxtLink>
              </div>
            </div>
            <div class="col-span-2 flex justify-center pt-10 relative">
              <div class="absolute md:inline-block hidden top-0">
                <Icon
                  name="mingcute:and-fill"
                  class="dark:text-white"
                  width="40"
                  height="40"
                ></Icon>
              </div>
              <div class="w-[2px] bg-secondary-text h-full"></div>
            </div>
            <div
              class="col-span-4 md:leading-relaxed text-sm md:text-base space-y-6 text-justify md:text-left dark:text-white"
            >
              <div
                class="md:text-[36px] text-[30px] flex space-x-2 items-center"
              >
                <Icon name="mdi:dna"></Icon>
                <span>Needs</span>
              </div>
              <p v-for="i in 4" :key="i" class="text-[12px] md:text-[20px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                vitae tenetur cumque porro mollitia rem distinctio excepturi
                voluptatibus! Officia beatae repudiandae consequuntur pariatur!
                Facilis, corporis.
              </p>

              <InputsButton
                class="flex justify-center items-center bg-primary p-2 md:w-[30%] w-full rounded-md text-white md:font-semibold"
                name="Donate Now"
              >
              </InputsButton>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- section three -->
    <div
      class="md:h-screen font-poppins w-full relative md:px-20 dark:bg-dark-primary"
    >
      <LayoutSectionHeader
        iconName="bx:layer"
        title="Orgainizational Structure"
        subtitle="porro facere iure magnam inventore tempora ea sed eos dignissimos"
      ></LayoutSectionHeader>
      <div
        class="w-full flex flex-col items-center pb-10 text-[#655E5E] dark:text-dark-text-secondary"
      >
        <div class="flex justify-center">
          <div class="w-full space-y-4 md:text-[20px] text-[12px]">
            <div class="flex justify-center md:space-y-6 flex-col">
              <div class="w-full flex justify-center">
                <Icon
                  name="material-symbols:move-location-outline-rounded"
                  class="struct_Icon"
                ></Icon>
              </div>
              <p class="md:text-2xl flex justify-center">Chairman</p>
              <div class="w-full flex justify-center">
                <div class="line"></div>
              </div>
            </div>
            <div class="flex justify-center md:space-y-6 flex-col">
              <div class="w-full flex justify-center">
                <Icon name="ph:users" class="struct_Icon"></Icon>
              </div>
              <p class="">Board of Directory</p>
              <div class="w-full flex justify-center">
                <div class="line"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-[80%]">
          <div class="grid grid-cols-3 justify-center flex-col">
            <div class="flex flex-col items-center space-y-2">
              <div class="flex">
                <Icon
                  name="material-symbols:finance"
                  class="struct_Icon"
                ></Icon>
              </div>
              <p class="fullName">Chie Finanace officer</p>
              <p class="short">CFO</p>
            </div>
            <div class="flex flex-col items-center space-y-2">
              <div class="flex">
                <Icon
                  name="streamline:interface-setting-tool-box-box-briefcase-tool-settings"
                  class="struct_Icon"
                ></Icon>
              </div>
              <p class="fullName">Chie Excutive officer</p>
              <p class="short">CEO</p>
            </div>
            <div class="flex flex-col items-center space-y-2">
              <div class="flex">
                <Icon
                  name="material-symbols:move-location-outline-rounded"
                  class="struct_Icon"
                ></Icon>
              </div>
              <p class="fullName">Chie Technology officer</p>
              <p class="short">CTO</p>
            </div>
          </div>
        </div>
        <div class="w-[80%]">
          <div class="grid grid-cols-3 justify-center md:space-y-6 flex-col">
            <div class="flex flex-col items-center space-y-2"></div>
            <div class="flex flex-col items-center space-y-2"></div>
            <div class="flex flex-col items-center space-y-2">
              <div class="w-full flex justify-center">
                <div class="line"></div>
              </div>
              <div class="flex">
                <Icon
                  name="material-symbols:computer-outline"
                  class="struct_Icon"
                ></Icon>
              </div>
              <p class="text-2xl">IT staff</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="md:min-h-screen font-poppins w-full bg-[#BDF9D13B] dark:bg-dark-secondary relative md:px-20"
    >
      <LayoutSectionHeader
        iconName="fluent-emoji-high-contrast:open-mailbox-with-lowered-flag"
        title="Purpose and Needs"
        subtitle="porro facere iure magnam inventore tempora ea sed eos dignissimos"
      ></LayoutSectionHeader>
      <div class="w-full flex justify-center pb-10 font-poppins">
        <div class="flex justify-center w-full">
          <div class="grid md:grid-cols-12 w-full px-6">
            <div class="col-span-5 space-y-10">
              <div class="md:text-[36px] text-[24px] dark:text-white">
                <Icon name="la:bed" width="40" height="40"></Icon>
                Board and Directors
              </div>
              <div
                class="text-sm md:text-base text-justify md:text-left dark:text-dark-text-secondary"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officia voluptatem excepturi obcaecati maxime sunt quae quam
                  incidunt praesentium numquam nulla iure veritatis explicabo,
                  ipsam odio eaque, suscipit hic est molestias?
                </p>
              </div>
              <div class="md:inline-block hidden">
                <carousel
                  class="w-full"
                  :items-to-show="1"
                  snap-align="center"
                  :items-to-scroll="1"
                >
                  <slide v-for="i in 6" :key="i">
                    <div class="grid grid-cols-2 gap-4">
                      <AboutPersonInfo v-for="i in 4"></AboutPersonInfo>
                    </div>
                  </slide>

                  <template #addons>
                    <!-- <navigation /> -->

                    <pagination />
                  </template>
                </carousel>
              </div>
              <div class="max-w-[380px] md:max-w-full md:hidden">
                <carousel class="w-full">
                  <slide v-for="i in 9" :key="i">
                    <AboutPersonInfo></AboutPersonInfo>
                  </slide>

                  <template #addons>
                    <!-- <navigation /> -->

                    <pagination />
                  </template>
                </carousel>
              </div>
            </div>
            <div class="col-span-2 flex justify-center pt-10 relative">
              <div class="w-[2px] bg-secondary-text h-full"></div>
            </div>
            <div class="col-span-5 space-y-10">
              <div class="text-[36px] dark:text-white">
                <Icon name="cil:book" width="40" height="40"></Icon>
                Advisrory
              </div>
              <div class="text-sm md:text-base dark:text-dark-text-secondary">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officia voluptatem excepturi obcaecati maxime sunt quae quam
                  incidunt praesentium numquam nulla iure veritatis explicabo,
                  ipsam odio eaque, suscipit hic est molestias?
                </p>
              </div>
              <div class="md:inline-block hidden">
                <carousel
                  class="w-full"
                  :items-to-show="1"
                  snap-align="center"
                  :items-to-scroll="1"
                >
                  <slide v-for="i in 6" :key="i">
                    <div class="grid grid-cols-2 gap-4">
                      <AboutPersonInfo v-for="i in 4"></AboutPersonInfo>
                    </div>
                  </slide>

                  <template #addons>
                    <!-- <navigation /> -->

                    <pagination />
                  </template>
                </carousel>
              </div>
              <div class="max-w-[380px] md:max-w-full md:hidden">
                <carousel class="w-full">
                  <slide v-for="i in 9" :key="i">
                    <AboutPersonInfo></AboutPersonInfo>
                  </slide>

                  <template #addons>
                    <!-- <navigation /> -->

                    <pagination />
                  </template>
                </carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="md:min-h-screen font-poppins w-full relative md:px-20 dark:bg-dark-primary-light"
    >
      <LayoutSectionHeader
        iconName="bx:layer"
        title="Our Team"
        subtitle="porro facere iure magnam inventore tempora ea sed eos dignissimos"
      ></LayoutSectionHeader>
      <div class="w-full flex flex-col items-center pb-10">
        <carousel
          class="w-full"
          :items-to-show="1"
          snap-align="center"
          :items-to-scroll="1"
        >
          <slide v-for="i in 6" :key="i">
            <div class="grid grid-cols-4 gap-4">
              <AboutPersonInfo v-for="i in 8"></AboutPersonInfo>
            </div>
          </slide>

          <template #addons>
            <!-- <navigation /> -->

            <pagination />
          </template>
        </carousel>
      </div>
    </div>
    <LayoutFooter></LayoutFooter>
  </div>
</template>
<style>


</style>
