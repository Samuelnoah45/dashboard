<script setup>
const DonateVia = ref([
  {
    id: 1,
    url: "https://res.cloudinary.com/blue-sky/image/upload/v1690984637/TeleBirr_ezrsod.png",
  },
  {
    id: 2,
    url: "https://res.cloudinary.com/blue-sky/image/upload/v1690984637/CBE_Birr_xpo0h9.png",
  },
  {
    id: 3,
    url: "https://res.cloudinary.com/blue-sky/image/upload/v1690984637/Visa_guxqog.png",
  },
  {
    id: 4,
    url: "https://res.cloudinary.com/blue-sky/image/upload/v1690984637/alipay_ayrx3q.png",
  },
  {
    id: 5,
    url: "https://res.cloudinary.com/blue-sky/image/upload/v1690984637/Mastercard_e74nfy.png",
  },
  {
    id: 6,
    url: "https://res.cloudinary.com/blue-sky/image/upload/v1690984637/HibretBank_uwyrt8.png",
  },
]);
const partnered = ref([
  {
    id: 1,
    url: "https://res.cloudinary.com/blue-sky/image/upload/v1690984637/EIC_cprdtk.png",
  },
  {
    id: 2,
    url: "https://res.cloudinary.com/blue-sky/image/upload/v1690984637/IPDC_pphqav.png",
  },
  {
    id: 2,
    url: "https://res.cloudinary.com/blue-sky/image/upload/v1690984637/MLS_meekf0.png",
  },
]);
</script>
<template>
  <div>
    <NavBar navClass="dark:bg-dark-primary"></NavBar>
    <div class="md:min-h-screen font-poppins dark:bg-dark-primary relative z-0">
      <div class="flex justify-center z-40">
        <div
          class="md:w-[80%] flex flex-col items-center pt-[4%] md:space-y-10 space-y-4"
        >
          <div
            class="flex flex-col items-center md:w-[50%] md:space-y-6 space-y-2"
          >
            <p class="text-third-bold text-lg">Jone Doe 19 Jan 2023</p>
            <p
              class="md:text-4xl text-primary-text dark:text-white text-center font-bold leading-relaxed"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p class="text-primary-text-light dark:text-dark-text-secondary px-4 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              ipsum?
            </p>
            <div
              class="bg-third-light px-2 w-32 py-1 space-x-1 flex justify-center items-center text-third rounded-full"
            >
              <div class="flex justify-start">
                <Icon name="tabler:news" width="15" height="25"></Icon>
              </div>
              <p class="text-sm">News</p>
            </div>
          </div>
          <div class="px-4">
            <img src="@/assets/images/temp/news_detail.jpg" alt="" />
          </div>
          <div
            class="flex flex-col items-center md:w-[50%] space-y-14 pb-14 md:text-lg px-4 text-justify md:text-left"
          >
            <div class="md:space-y-14 space-y-6">
              <p
                class="md:text-xl leading-relaxed pb-20 border-b-2 text-primary-text-light dark:text-dark-text-secondary fontWight"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi,
                vel nam. Omnis voluptatibus cum neque, veritatis delectus magnam
                mollitia illo. Magnam, earum sunt voluptate aliquid officiis
                totam consequuntur praesentium nihil doloremque nobis alias
                fugiat nam velit impedit distinctio ex nostrum adipisci fugit a
                cum modi veritatis. Magnam facilis nemo accusamus.
              </p>

              <div class="space-y-4">
                <p class="md:text-2xl text-xl text-primary-text dark:text-white font-bold">
                  Header 1
                </p>
                <p
                  class="md:text-lg leading-relaxed text-primary-text-light dark:text-dark-text-secondary fontWight"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sequi, vel nam. Omnis voluptatibus cum neque, veritatis
                  delectus magnam mollitia illo. Magnam, earum sunt voluptate
                  aliquid officiis totam consequuntur praesentium nihil
                  doloremque nobis alias fugiat nam velit impedit distinctio ex
                  nostrum adipisci fugit a cum modi veritatis. Magnam facilis
                  nemo accusamus.
                </p>
              </div>
              <p
                class="md:text-xl leading-relaxed py-4 pl-6 border-l-4 border-third-bold text-primary-text-light dark:text-dark-text-secondary fontWight"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi,
                vel nam. Omnis voluptatibus cum neque, veritatis delectus magnam
                mollitia illo. Magnam, earum sunt voluptate aliquid officiis
                totam consequuntur praesentium nihil doloremque nobis alias
                fugiat nam velit impedit distinctio ex nostrum adipisci fugit a
                cum modi veritatis. Magnam facilis nemo accusamus.
              </p>
              <p class="text-primary-text-light dark:text-dark-text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi,
                vel nam. Omnis voluptatibus cum neque, veritatis delectus magnam
                mollitia illo. Magnam, earum sunt voluptate aliquid officiis
                totam consequuntur praesentium nihil doloremque nobis alias
                fugiat nam velit impedit distinctio ex nostrum adipisci fugit a
                cum modi veritatis. Magnam facilis nemo accusamus.
              </p>
              <div class="space-y-4">
                <figure class="mb-4 inline-block max-w-sm">
                  <img src="@/assets/images/temp/news_detail.jpg" alt="" />
                  <figcaption
                    class="text-sm text-left text-primary-text-light dark:text-dark-text-secondary"
                  >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente, autem?
                  </figcaption>
                </figure>
              
              
              </div>
              <p class="text-2xl text-primary-text dark:text-white font-bold">Header 1</p>
              <div class="text-primary-text-light dark:text-dark-text-secondary space-y-4">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  sunt magnam asperiores consequuntur quia quis eius in mollitia
                  consequatur, voluptate adipisci reiciendis sed, quisquam culpa
                  tempore exercitationem labore, nobis deserunt!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  sunt magnam asperiores consequuntur quia quis eius in mollitia
                  consequatur, voluptate adipisci reiciendis sed, quisquam culpa
                  tempore exercitationem labore, nobis deserunt!
                </p>
                <p v-for="i in 3" class="space-x-1">
                  <span>{{ i }}.</span>
                  <span
                    >Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ratione, voluptatem.</span
                  >
                </p>
              </div>
              <p class="text-primary-text-light dark:text-dark-text-secondary pb-10 border-b-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad non
                consequuntur fuga necessitatibus. Dolore doloribus beatae dolor
                atque iure delectus excepturi illo ratione, deleniti deserunt.
                Incidunt eligendi maiores culpa error repellendus architecto
                atque voluptatum rem iure? Aspernatur nam tenetur fuga, tempore
                <span class="text-third capitalize underline"
                  >sed iusto dicta exercitationem,</span
                >
                inventore accusamus quo, itaque similique ex. Praesentium
                aliquid minima quo quisquam voluptatibus id consequatur dicta ad
                dolores illo quasi deleniti facere obcaecati, accusantium beatae
                numquam quidem magni debitis, porro harum nulla odit quae
                deserunt laudantium!
              </p>

              <div class="text-primary-text-light dark:text-dark-text-secondary flex justify-center">
                <div class="flex items-center justify-center space-x-4">
                  <InputsButton
                    name="copy link"
                    class="flex space-x-2 justify-center items-center border-2 rounded-md p-2"
                  >
                    <template #leadingIcon>
                      <Icon name="tabler:link" width="20" height="20"></Icon>
                    </template>
                  </InputsButton>
                  <div class="border-2 p-2 rounded-md">
                    <Icon name="line-md:facebook" width="20" height="20"></Icon>
                  </div>
                  <div class="border-2 p-2 rounded-md">
                    <Icon name="mdi:twitter" width="20" height="20"></Icon>
                  </div>
                  <div class="border-2 p-2 rounded-md">
                    <Icon
                      name="ri:instagram-fill"
                      width="20"
                      height="20"
                    ></Icon>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <LayoutFooter></LayoutFooter>
</template>
<style>
.scroll::-webkit-scrollbar {
  width: 1em;
  display: none;
}

.scroll::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  display: none;
}

.scroll::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
  display: none;
}
</style>
