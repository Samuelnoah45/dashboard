<script setup>
const colorMode = useColorMode()
const themeSwitcher = () => {
  colorMode.preference = colorMode.value == "light" ? "dark" : "light";
};
</script>

<template>
  <div class="w-full md:min-h-screen">
    <div class="grid md:grid-cols-8 min-h-[100vh]">
      <div class="col-span-5">
        <slot></slot>
      </div>

      <div
        class="bg-third-light2 dark:bg-dark-primary-light md:flex hidden col-span-3 dark:text-white items-center"
      >
        <div class="space-y-10 border-l-4 px-20 border-[#40FF81]">
          <div>
            <Icon name=""></Icon>
            <img
              src="@/assets/images/shapes/Highlight_top_green.svg"
              alt=""
              srcset=""
            />
          </div>
          <p class="text-2xl leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto
            explicabo! Velit amet praesentium, consectetur, aliquam, nostrum
            suscipit similique facere doloremque repellat sunt voluptatum
            impedit tempora at itaque voluptas facilis! Alias, nobis! Eos id
          </p>
          <div class="flex space-x-2 items-center">
            <div class="w-20 h-20 bg-black overflow-hidden rounded-full">
              <img
                src="@/assets/images/temp/speaker.jpg"
                alt=""
                srcset=""
                width="100"
                height="100"
              />
            </div>
            <div class="space-y-2">
              <p class="text-xl font-semibold">Samuel Noah</p>
              <p class="text-sm text-secondary-texts">CEO eLikeAddis</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <LayoutFooter></LayoutFooter>
</template>
