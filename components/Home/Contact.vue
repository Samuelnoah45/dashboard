<script setup></script>

<template>
    <div class="grid md:grid-cols-2 gap-10 place-items-center w-full">
          <div class="h-full flex w-full justify-center">
            <div class="grid grid-cols-2 gap-16 place-content-center">
              <div
                class="md:space-y-6 break-all flex md:inline-block flex-col justify-center items-center"
              >
                <div
                  class="h-14 w-14 bg-primary flex justify-center items-center rounded-full"
                >
                  <Icon
                    name="mi:email"
                    width="30"
                    color="white"
                    height="30"
                  ></Icon>
                </div>
                <p class="contact_name">Email</p>
                <p class="contact_value">
                  ethiopiayouthenterpreneurs@gmail.com
                </p>
              </div>
              <div
                class="md:space-y-6 break-all flex md:inline-block flex-col justify-center items-center"
              >
                <div
                  class="h-14 w-14 bg-primary flex justify-center items-center rounded-full"
                >
                  <Icon
                    name="ph:phone-call"
                    width="30"
                    color="white"
                    height="30"
                  ></Icon>
                </div>
                <p class="contact_name">Phone</p>
                <p class="contact_value">
                  +251 922 954 680
                </p>
              </div>
              <div
                class="md:space-y-6 break-all flex md:inline-block flex-col justify-center items-center"
              >
                <div
                  class="h-14 w-14 bg-primary flex justify-center items-center rounded-full"
                >
                  <Icon
                    name="mi:location"
                    width="30"
                    color="white"
                    height="30"
                  ></Icon>
                </div>
                <p class="contact_name">Office</p>
                <div class="contact_value">
                  <p class="flex">Cameroon st.</p>
                  <p class="md:text-base text-xs">Addis Ababa,Ethiopia</p>
                </div>
              </div>
              <div
                class="space-y-6 break-all flex md:inline-block flex-col justify-center items-center"
              >
                <div
                  class="h-14 w-14 bg-primary flex justify-center items-center rounded-full"
                >
                  <Icon
                    name="mdi:grid"
                    width="30"
                    color="white"
                    height="30"
                  ></Icon>
                </div>
                <p class="contact_name">Socials</p>
                <div class="flex text-primary justify-between flex-wrap">
                  <Icon name="gg:facebook" width="30" height="30"></Icon>
                  <Icon name="mdi:twitter" width="30" height="30"></Icon>
                  <Icon name="mdi:instagram" width="30" height="30"></Icon>
                  <Icon name="mdi:linkedin" width="30" height="30"></Icon>
                </div>
              </div>
            </div>
          </div>
          <div class="h-full flex w-full justify-center items-center">
            <div class="md:w-[80%] bg-[#FFFFFF] dark:bg-dark-secondary shadow-md p-4 rounded-md">
              <InputsTextfield
                name="email"
                class="focus:border-primary dark:text-white dark:bg-dark-secondary"
                placeholder="exmpale@gmail.com"
                placeholder-style="dark"
              >
                <template #label>
                  <p class="text-primary-text font-semibold pb-2 dark:text-white">Email</p>
                </template>
              </InputsTextfield>
              <div>
                <HTextarea
                  placeholder="write your message..."
                  :rows="10"
                  name="message"
                  textarea-class="dark:bg-dark-secondary dark:text-white"
                  label="Message"
                  class="dark:text-white dark:bg-dark-secondary"
                ></HTextarea>
              </div>
              <div class="flex justify-center items-center">
                <InputsButton
                  class="bg-primary py-2 px-4 rounded-md text-white w-[80%]"
                  name="Send"
                ></InputsButton>
              </div>
            </div>
          </div>
        </div>
</template>

<style>

.contact_name {
  @apply md:text-4xl text-lg text-primary-text font-bold 

}
.contact_value {
  @apply text-primary-text md:text-xl text-sm break-all 

}
</style>