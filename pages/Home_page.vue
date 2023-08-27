<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

const links = ref([
    { href: '/account-settings', label: 'Account settings' },
    { href: '/support', label: 'Support' },
    { href: '/license', label: 'License' },
    { href: '/sign-out', label: 'Sign out' },
  ])
</script>

<template>
  <div class="md:min-h-screen relative dark:bg-dark-primary font-poppins">
    <div class="absolute hidden md:inline-block">
      <img
        alt=""
        src="@/assets/images/shapes/yellow_curv.svg"
        sizes=""
        srcset=""
      />
    </div>
    <Menu  as="div" class="hidden">
      <MenuButton>Options</MenuButton>
      <MenuItems>
        <!-- Use the `active` state to conditionally style the active item. -->
        <MenuItem
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          as="a"
          class="ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black"
        >
          {{ link.label }}
        </MenuItem>
      </MenuItems>
    </Menu>
    <NavBar navClass="dark:bg-dark-primary" />
    <!-- ###### section one ####### -->

    <div
      class="md:grid-cols-2 grid-cols-1 md:grid flex flex-col-reverse md:px-24 px-2 py-4 md:py-0 md:h-[92%]"
    >
      <div
        class="flex flex-col md:justify-evenly justify-center text-center dark:text-white md:text-start font-poppins md:pt-32 pt-10 space-y-6"
      >
        <p class="flex md:inline-block justify-center items-center">
          <span>Lorem ipsum dolor sit amet consectetur.</span>
        </p>
        <p class="md:text-4xl text-xl leading-relaxed font-poppins">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, ipsa
          reiciendis! Corrupti quod aut libero cum consequatur atque nulla est
          nisi, ipsa quibusdam a blanditiis?
        </p>
        <div class="relative w-full">
          <div
            class="w-2 h-2 absolute -top-[4px] rounded-full bg-secondary-text"
          ></div>
          <div class="w-full h-[1px] bg-secondary-text"></div>
        </div>
        <p class="text-secondary-text dark:text-dark-text-secondary">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea nam
          recusandae qui eos quos doloribus fugiat aliquam! Sit, culpa cumque
          dolorum magni omnis error dolore?
        </p>
        <!-- Partnership  -->
        <div class="md:pt-20 space-y-4">
          <div
            class="font-poppins text-secondary-text dark:text-dark-text-secondary font-semibold"
          >
            Partnered
          </div>
          <LayoutPartenredWith></LayoutPartenredWith>
        </div>
      </div>

      <div class="md:flex justify-center items-center relative">
        <div>
          <img
            src="@/assets/images/temp/two_happy_girls.png"
            alt=""
            srcset=""
          />
        </div>

        <div class="bg-primary top-[35%] md:left-10 left-0 floutingButton">
          <div class="bg-primary-light floutingButtonSub">
            <Icon name="ci:users" width="24" height="24"></Icon>
          </div>
          <p class="text-sm">3.5K Members</p>
        </div>
        <div
          class="bg-[#2F9D55] md:top-[40%] top-[0%] md:right-14 right-0 floutingButton"
        >
          <p class="text-sm">17 Partners</p>
          <div class="bg-[#2F9D55] floutingButtonSub fullShadow">
            <Icon name="mdi:partnership-outline" width="24" height="24"></Icon>
          </div>
        </div>
        <div
          class="bg-[#40D1FF] md:top-[60%] top-[90%] right-20 floutingButton"
        >
          <p>Birr 12M Grant</p>
          <div class="bg-[#77DBFB] floutingButtonSub">
            <Icon
              name="fluent-emoji-high-contrast:money-bag"
              width="24"
              height="24"
            ></Icon>
          </div>
        </div>
        <!--
         -->
      </div>
    </div>
  </div>
  <!-- ###### section two ####### -->
  <div
    class="md:min-h-screen font-poppins w-full bg-[#FFF9ED] dark:bg-dark-secondary relative"
  >
    <div class="relative">
      <LayoutSectionHeader
        iconName="uil:newspaper"
        title="What is New with Us"
        subtitle="lates from the association"
      ></LayoutSectionHeader>
      <div class="absolute top-0 hidden md:inline-block">
        <img src="@/assets/images/shapes/green_curv.svg" alt="" srcset="" />
      </div>
    </div>

    <div class="absolute hidden md:inline-block bottom-0 right-0">
      <NuxtImg
        format="webp"
        loading="lazy"
        src="https://res.cloudinary.com/blue-sky/image/upload/v1690920129/section2shape2_ckmqlq.svg"
      ></NuxtImg>
    </div>
    <div></div>

    <div class="grid md:grid-cols-9 md:h-[80%]">
      <div class="w-full flex justify-end md:col-span-4 p-2">
        <div class="flex flex-col items-end">
          <div
            class="md:w-[60%] pb-4 grow-0 md:inline-block grid grid-rows-4 bg-white dark:bg-dark-primary rounded-2xl shadow-lg"
          >
            <div class="md:h-[236px] bg-black">
              <img
                alt=""
                src="@/assets/images/temp/bigCardImage.png"
                sizes=""
                srcset=""
                class="object-fill w-full h-full"
              />
            </div>
            <div class="pl-4 space-y-2 row-span-3">
              <div class="w-auto pt-4">
                <p
                  class="bg-third-light w-20 flex items-center justify-center text-third space-x-1 p-[2px] rounded-full"
                >
                  <span><Icon name="uil:newspaper"></Icon></span
                  ><span class="text-sm">News</span>
                </p>
              </div>
              <div class="space-y-2">
                <p
                  class="text-primary-text-light dark:text-dark-text-secondary"
                >
                  Join Doe .19 jan 2022
                </p>
                <p class="font-semibold dark:text-white">
                  Lorem ipsum dolor sit amet.
                </p>
                <p
                  class="text-sm text-secondary-text dark:text-dark-text-primary leading-relaxed"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe, ipsam id iure reprehenderit quibusdam quisquam quae
                  doloribus tempore aspernatur odiipsam id iure reprehenderit
                  quibusdam quisquam quae doloribus tempore aspernatur odit
                  facilis odio eligendi nemo expedita velit aperiam, ducimus
                  perferendis voluptate? velit aperiam, ducimus perferendis
                  voluptate?t facilis odio eligendi nemo expedita velit aperiam,
                  ducimus perferendis voluptate? velit aperiam, ducimus
                  perferendis ipsam eligendi nemo expedita velit aperiam,
                  ducimus perferendis voluptate? velit aperiam, ducimus
                  perferendis voluptate?t facilis odio eligendi nemo expedita
                  velit aperiam, ducimus perferendis voluptate? velit aperiam,
                  ducimus perferendis ipsam
                </p>

                <p class="text-third font-semibold">Read Post</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-1 md:flex hidden justify-center">
        <div class="md:min-h-[80%] mb-8 border-[1px]"></div>
      </div>
      <div class="md:col-span-4 grid-rows-3 grid gap-2 p-4">
        <div
          class="bg-white dark:bg-dark-primary shadow-md md:w-[60%] flex flex-col md:flex-row overflow-hidden rounded-lg"
        >
          <div class="md:w-[156px] bg-black">
            <img
              alt=""
              src="@/assets/images/temp/event_image.jpg"
              sizes=""
              srcset=""
              class="w-full h-full object-cover"
            />
          </div>
          <div class="p-6 space-y-2 md:w-[70%]">
            <p class="font-semibold dark:text-white">
              Lorem ipsum dolor sit amet.
            </p>
            <p class="text-secondary-text dark:text-dark-text-primary">
              12-Feb-2023
            </p>
            <p
              class="text-secondary-text leading-relaxed text-sm dark:text-dark-text-primary"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
              omnis quaerat, expedita quisquam odio molestiae eligendi
              veritatis.
            </p>
          </div>
        </div>
        <div
          class="bg-white dark:bg-dark-primary shadow-md md:w-[60%] flex flex-col md:flex-row rounded-lg overflow-hidden"
        >
          <div class="md:w-[156px] bg-black">
            <img
              alt=""
              src="@/assets/images/temp/event_image.jpg"
              sizes=""
              srcset=""
              class="w-full h-full object-cover"
            />
          </div>
          <div class="p-6 space-y-2 md:w-[70%]">
            <p class="font-semibold dark:text-white">
              Lorem ipsum dolor sit amet.
            </p>
            <p class="text-secondary-text dark:text-dark-text-primary">
              12-Feb-2023
            </p>
            <p
              class="text-secondary-text text-sm leading-relaxed dark:text-dark-text-primary"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
              omnis quaerat, expedita quisquam odio molestiae eligendi
              veritatis.
            </p>
          </div>
        </div>
        <div
          class="bg-white dark:bg-dark-primary shadow-md md:w-[60%] flex flex-col md:flex-row rounded-lg overflow-hidden"
        >
          <div class="md:w-[156px] bg-black">
            <img
              alt=""
              src="@/assets/images/temp/event_image.jpg"
              sizes=""
              srcset=""
              class="w-full h-full object-cover"
            />
          </div>
          <div class="p-6 space-y-2 md:w-[70%]">
            <p class="font-semibold dark:text-white">
              Lorem ipsum dolor sit amet.
            </p>
            <p class="text-secondary-text dark:text-dark-text-primary">
              12-Feb-2023
            </p>
            <p
              class="text-secondary-text text-sm leading-relaxed dark:text-dark-text-primary"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
              omnis quaerat, expedita quisquam odio molestiae eligendi
              veritatis.
            </p>
          </div>
        </div>
        <InputsButton
          name="View All"
          class="border-2 border-primary md:w-[60%] dark:text-white p-2 px-4 rounded-lg flex justify-between"
        >
          <template #tralingIcon>
            <Icon name="bx:right-arrow-alt" width="24" height="24"></Icon>
          </template>
        </InputsButton>
      </div>
    </div>
  </div>
  <!-- ###### section three ####### -->

  <div
    class="md:min-h-screen font-poppins w-full relative pb-10 dark:bg-dark-primary"
  >
    <LayoutSectionHeader
      iconName="tabler:books"
      title="Our story"
      subtitle="Brife backgroud"
    ></LayoutSectionHeader>
    <HomeStory></HomeStory>
  </div>

  <!-- ###### section four ####### -->
  <div
    class="md:min-h-screen font-poppins w-full relative dark:bg-dark-secondary bg-[#FFF9ED] md:px-10 px-2 md:mb-0 pb-10"
  >
    <LayoutSectionHeader
      iconName="uil:shop"
      title="What We offer You"
      subtitle="Service"
    ></LayoutSectionHeader>

    <HomeService></HomeService>
  </div>

  <!--  section five  -->
  <div
    class="md:min-h-screen font-poppins w-full relative md:px-10 dark:bg-dark-primary"
  >
    <LayoutSectionHeader
      iconName="bi:person-check"
      title="Join US"
      subtitle="Memebership"
    ></LayoutSectionHeader>
    <div class="w-full flex justify-center pb-10">
      <div class="flex justify-center md:w-[80%]">
        <JoinUs></JoinUs>
      </div>
    </div>
  </div>
  <!--  section six  -->
  <div
    class="md:min-h-screen font-poppins w-full relative md:px-10 px-4 bg-[#FFF9ED] dark:bg-dark-secondary"
  >
    <LayoutSectionHeader
      iconName="mdi:partnership-outline"
      title="Work With Us"
      subtitle="paretnership"
    ></LayoutSectionHeader>
    <div class="w-full flex justify-center">
      <div class="flex justify-center md:w-[80%]">
        <div class="w-full flex-col md:space-y-16 space-y-2 flex items-center">
          <!-- Title -->
          <div class="md:w-[80%]">
            <div class="space-y-10">
              <p
                class="md:text-3xl text-xl font-semibold text-primary-text dark:text-white text-center"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Placeat praesentium et
              </p>
              <p
                class="text-center text-primary-text-light dark:text-dark-text-secondary md:font-semibold text-sm md:text-base"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing. Lorem, ipsum
                dolor.
              </p>
            </div>
          </div>
          <!-- Group -->
          <HomePartners></HomePartners>
          <div class="grid grid-cols-3 md:w-[70%]"></div>
          <div class="w-full"></div>
          <div class="flex flex-col justify-center items-center space-y-8">
            <div>
              <img src="@/assets/images/shapes/partner.svg" alt="" srcset="" />
            </div>
            <div class="text-2xl backdrop: dark:text-white">
              Do you want to work with us ?
            </div>
            <div
              class="md:w-[50%] text-center leading-relaxed text-secondary-text dark:text-dark-text-secondary"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
              distinctio corporis laboriosam quaerat a dolor. Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Delectus distinctio
              corporis laboriosam quaerat a dolor. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Delectus distinctio corporis
              laboriosam quaerat a dolor.
            </div>
            <div class="pb-10">
              <InputsButton
                class="bg-primary text-white px-6 text-lg py-2 border-4 border-primary rounded-md"
                name="Express interest of partnership"
              ></InputsButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- section seven -->
  <div
    class="md:min-h-screen font-poppins dark:bg-dark-primary w-full relative"
  >
    <LayoutSectionHeader
      iconName="simple-line-icons:call-out"
      title="Les't say connected"
      subtitle="Contact"
    ></LayoutSectionHeader>

    <div class="w-full h-[60%] flex justify-center md:px-10 p-4">
      <div class="flex justify-center md:w-[80%]">
        <HomeContact></HomeContact>
      </div>
    </div>
    <LayoutFooter></LayoutFooter>
  </div>
  <!-- section eight -->
</template>

<style>
.element {
  float: right;
  shape-outside: rectangle(0, 0, 100%, 100%);
  /* width: 120px; */
  /* height: 200px; */
  @apply md:w-40 md:h-40 w-28 h-28 md:pl-4 md:pb-4 pl-2 pb-2;
}
.floutingButton {
  @apply absolute  md:w-[200px] w-[170px] rounded-full font-poppins justify-center items-center space-x-2 md:p-2 p-1 flex;
}
.floutingButtonSub {
  @apply flex items-center justify-center rounded-full md:w-10 md:h-10 h-8 w-8;
}

element.style {
}

.fullShadow {
  box-shadow: 0 0 5px 2px #fff;
}
.carousel__pagination-button::after {
  @apply bg-primary-light h-2 rounded-lg hover:bg-primary;
}
.carousel__pagination-button--active::after {
  @apply bg-primary w-8 rounded-lg;
}
</style>
