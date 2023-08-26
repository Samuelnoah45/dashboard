<script setup></script>

<template>
  <div>
    <NavBar navClass="bg-third-light2 dark:bg-dark-secondary"></NavBar>
    <div
      class="md:min-h-screen bg-third-light2 relative dark:bg-dark-secondary"
    >
      <img
        class="absolute hidden md:inline-block bottom-28 left-10"
        src="@/assets/images/shapes/whyJoin.svg"
        alt=""
        srcset=""
      />
      <img
        class="absolute hidden md:inline-block bottom-[30%] left-10"
        src="@/assets/images/temp/member3.png"
        alt=""
        srcset=""
      />
      <img
        class="absolute hidden md:inline-block w-40 top-28 right-16"
        src="@/assets/images/temp/member2.png"
        alt=""
        srcset=""
      />
      <img
        class="absolute hidden md:inline-block w-40 top-28 left-10"
        src="@/assets/images/temp/memeber1.png"
        alt=""
        srcset=""
      />
      <img
        class="absolute hidden md:inline-block bottom-40 right-32"
        src="@/assets/images/temp/member4.png"
        alt=""
        srcset=""
      />

      <div class="flex justify-center items-center md:py-20">
        <div class="md:w-[70%] space-y-4 px-2 pb-4">
          <p
            class="md:text-[120px] text-[40px] uppercase text-center leading-tight dark:text-white"
          >
            Lorem ipsum dolorwheihf
            <span class="md:p-2 bg-primary-light">Tellus</span> consectetur.
          </p>
          <div class="flex justify-center">
            <p
              class="md:w-[50%] text-center font-poppins text-secondary-text dark:text-dark-text-secondary"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Pariatur, impedit? Fugiat officia id numquam sint. Lorem ipsum
              dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <NuxtLink to="/join">
            <div class="flex justify-center pt-10 relative">
              <InputsButton
                class="border-2 flex px-4 justify-center space-x-2 text-lg items-center bg-primary border-primary md:p-2 p-1 md:w-[30%] rounded-md text-white md:font-semibold"
                name="Join Now"
              >
                <template #leadingIcon>
                  <!-- <Icon name="mingcute:send-line" width="30" height="30"></Icon> -->
                  <img
                    src="@/assets/images/temp/subscribers.png"
                    alt=""
                    class="h-10"
                  />
                </template>
              </InputsButton>
              <div class="absolute hidden md:inline-block right-[20%] bottom-0">
                <img src="@/assets/images/shapes/joinVerctor.svg" alt="" />
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div
      class="md:min-h-screen font-poppins w-full relative md:px-20 pt-20 dark:bg-dark-primary"
    >
      <div class="w-full flex justify-center pb-10">
        <div class="flex justify-center md:w-[80%]">
          <JoinUs></JoinUs>
        </div>
      </div>
    </div>
    <div
      class="pb-10 bg-third-light font-poppins w-full relative md:px-20 dark:bg-dark-secondary"
    >
      <div class="absolute right-0 bottom-4">
        <NuxtImg
          format="webp"
          loading="lazy"
          src="https://res.cloudinary.com/blue-sky/image/upload/v1690980105/flowerShape_bkwvfq.svg"
        ></NuxtImg>
      </div>
      <LayoutSectionHeader
        iconName="carbon:money"
        title="Benefits of Membership"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magni perspiciatis beatae, possimus animi."
      ></LayoutSectionHeader>
      <div class="flex justify-center pt-10">
        <div class="md:w-[80%] px-2">
          <div class="grid md:grid-cols-2 gap-20">
            <div class="space-y-10">
              <div class="flex space-x-8">
                <div
                  class="self-start bg-third-light2 p-2 rounded-full text-secondary-text dark:text-dark-text-secondary"
                >
                  <Icon
                    name="heroicons-outline:mail"
                    class="md:text-4xl text-2xl"
                  ></Icon>
                </div>
                <p
                  class="md:text-2xl text-sm leading-relaxed text-secondary-text dark:text-dark-text-secondary font-poppins"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  nulla saepe incidunt natus voluptas distinctio libero.
                  Voluptatum tempora natus, laboriosam harum eligendi
                  consequuntur nisi?
                </p>
              </div>
              <div class="flex space-x-8">
                <div
                  class="self-start bg-third-light2 p-2 rounded-full text-secondary-text dark:text-dark-text-secondary"
                >
                  <Icon
                    name="iconoir:arrow-bl"
                    class="md:text-4xl text-2xl"
                  ></Icon>
                </div>
                <p
                  class="md:text-2xl text-sm leading-relaxed text-secondary-text dark:text-dark-text-secondary font-poppins"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  nulla saepe incidunt natus voluptas distinctio libero.
                  Voluptatum tempora natus, laboriosam harum eligendi
                  consequuntur nisi?
                </p>
              </div>
              <div class="flex space-x-8">
                <div
                  class="self-start bg-third-light2 p-2 rounded-full text-secondary-text dark:text-dark-text-secondary"
                >
                  <Icon
                    name="material-symbols:electric-bolt-outline"
                    class="md:text-4xl text-2xl"
                  ></Icon>
                </div>
                <p
                  class="md:text-2xl text-sm leading-relaxed text-secondary-text dark:text-dark-text-secondary font-poppins"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  nulla saepe incidunt natus voluptas distinctio libero.
                  Voluptatum tempora natus, laboriosam harum eligendi
                  consequuntur nisi?
                </p>
              </div>
              <div class="flex space-x-8">
                <div
                  class="self-start bg-third-light2 p-2 rounded-full text-secondary-text dark:text-dark-text-secondary"
                >
                  <Icon
                    name="mdi:cup-water"
                    class="md:text-4xl text-2xl"
                  ></Icon>
                </div>
                <p
                  class="md:text-2xl text-sm leading-relaxed text-secondary-text dark:text-dark-text-secondary font-poppins"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  nulla saepe incidunt natus voluptas distinctio libero.
                  Voluptatum tempora natus, laboriosam harum eligendi
                  consequuntur nisi?
                </p>
              </div>
            </div>
            <div class="space-y-10">
              <div class="flex space-x-8">
                <div
                  class="self-start bg-third-light2 p-2 rounded-full text-secondary-text dark:text-dark-text-secondary"
                >
                  <Icon name="ph:flower" class="md:text-4xl text-2xl"></Icon>
                </div>
                <p
                  class="md:text-2xl text-sm leading-relaxed text-secondary-text dark:text-dark-text-secondary font-poppins"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  nulla saepe incidunt natus voluptas distinctio libero.
                  Voluptatum tempora natus, laboriosam harum eligendi
                  consequuntur nisi?
                </p>
              </div>
              <div class="flex space-x-8">
                <div
                  class="self-start bg-third-light2 p-2 rounded-full text-secondary-text dark:text-dark-text-secondary"
                >
                  <Icon
                    name="material-symbols:computer-outline"
                    class="md:text-4xl text-2xl"
                  ></Icon>
                </div>
                <p
                  class="md:text-2xl text-sm leading-relaxed text-secondary-text dark:text-dark-text-secondary font-poppins"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  nulla saepe incidunt natus voluptas distinctio libero.
                  Voluptatum tempora natus, laboriosam harum eligendi
                  consequuntur nisi?
                </p>
              </div>
              <div class="flex space-x-8">
                <div
                  class="self-start bg-third-light2 p-2 rounded-full text-secondary-text dark:text-dark-text-secondary"
                >
                  <Icon
                    name="material-symbols:send-outline"
                    class="md:text-4xl text-2xl"
                  ></Icon>
                </div>
                <p
                  class="md:text-2xl text-sm leading-relaxed text-secondary-text dark:text-dark-text-secondary font-poppins"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  nulla saepe incidunt natus voluptas distinctio libero.
                  Voluptatum tempora natus, laboriosam harum eligendi
                  consequuntur nisi?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <LayoutFooter></LayoutFooter>
</template>
