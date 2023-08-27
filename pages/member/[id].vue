<script setup>
const route = useRoute();
console.log(route.params.id);
definePageMeta({
  layout: "member",
});
</script>
<template>
  <div class="px-10 space-y-6 w-[80%] font-poppins">
    <div class="flex items-center space-x-3 text-sm text-primary-text-light">
      <Icon name="tabler:dashboard" />
      <h3>/</h3>
      <h3>Events</h3>
      <h3>/</h3>
      <h3>Create New Events</h3>
    </div>
    <div class="max-h-[80vh] space-y-6 overflow-y-scroll">
      <div class="p-4 px-10 flex w-full justify-between border-2 rounded-lg">
        <button
          v-if="route.params.id == 'Accepted'"
          class="flex items-center border rounded-md p-2 space-x-2"
        >
          <Icon name="octicon:id-badge-16" class="text-xl"></Icon>
          <p class="">Send Member ID</p>
        </button>
        <button
          v-if="route.params.id == 'Accepted' "
          class="flex items-center border rounded-md p-2 space-x-2"
        >
          <Icon name="mingcute:user-info-line" class="text-xl"></Icon>
          <p class="">Suspend Membership</p>
        </button>
        <button
          v-if="route.params.id == 'Pending' || route.params.id == 'Decline'"
          class="flex items-center border rounded-md p-2 space-x-2"
        >
          <Icon name="uil:user-check" class="text-xl"></Icon>
          <p class="">Accept Application</p>
        </button>
        <button
          v-if="route.params.id == 'Pending'"
          class="flex items-center border rounded-md p-2 space-x-2"
        >
          <Icon name="bx:user-x" class="text-xl"></Icon>
          <p>Decline Application</p>
        </button>
        <button class="flex items-center border rounded-md p-2 space-x-2">
          <Icon name="material-symbols:mail-outline" class="text-base"></Icon>
          <p>Send Message</p>
        </button>
        <button
          v-if="route.params.id == 'Pending'"
          class="flex items-center border rounded-md p-2 space-x-2"
        >
          <Icon name="material-symbols:delete-outline" class="text-xl"></Icon>
          <p>Delete Application</p>
        </button>
        <button
          v-if="route.params.id == 'Decline' || route.params.id == 'Accepted'"
          class="flex items-center border rounded-md p-2 space-x-2"
        >
          <Icon name="material-symbols:delete-outline" class="text-xl"></Icon>
          <p>Delete Member</p>
        </button>
      </div>
      <div class="p-10 px-10 flex w-full justify-between border-2 rounded-lg">
        <div class="w-fit">
          <div class="space-y-4 items-center">
            <div
              class="w-20 h-20 flex justify-center items-center overflow-hidden"
            >
              <img src="@/assets/images/temp/avator.png" alt="" />
            </div>
            <p class="font-medium text-xl">samuel Noah</p>
            <div>
              <div class="flex space-x-2 text-sm">
                <p>Member plus</p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-fit flex items-center">
          <p
            v-if="route.params.id == 'Pending'"
            class="px-3 py-1 rounded-full bg-[#DBEAFE] text-[#1E40AF]"
          >
            Pending
          </p>
          <p
            v-if="route.params.id == 'Accepted'"
            class="px-3 py-1 rounded-full bg-[#D1FAE5] text-[#065F46]"
          >
            Member
          </p>
          <p
            v-if="route.params.id == 'Decline'"
            class="px-3 py-1 rounded-full bg-[#FEE2E2] text-[#991B1B]"
          >
            Decline
          </p>
          <p
            v-if="route.params.id == 'Suspended'"
            class="px-3 py-1 rounded-full bg-[#EDE9FE] text-[#5B21B6]"
          >
            suspended
          </p>
        </div>
      </div>
      <div class="p-10 px-10 w-full border-2 rounded-lg space-y-4">
        <p class="text-xl font-medium">Personal Information</p>
        <div class="grid grid-cols-3 gap-10 w-[80%]">
          <div class="space-y-4">
            <p class="text-sm">First Name</p>
            <p class="font-bold">Jane Doe</p>
          </div>
          <div class="space-y-4">
            <p class="text-sm">Middle Name</p>
            <p class="font-bold">Jane Doe</p>
          </div>
          <div class="space-y-4">
            <p class="text-sm">last Name</p>
            <p class="font-bold">Jane Doe</p>
          </div>
          <div class="space-y-4">
            <p class="text-sm">Gender</p>
            <p class="font-bold">Male</p>
          </div>
          <div class="space-y-4">
            <p class="text-sm">Disability</p>
            <p class="font-bold">Disable</p>
          </div>
        </div>
      </div>
      <div class="p-10 px-10 w-full border-2 rounded-lg space-y-4">
        <p class="text-xl font-medium">Contact Information</p>
        <div class="grid grid-cols-3 gap-10 w-[80%]">
          <div class="space-y-4">
            <p class="text-sm">Phone number</p>
            <p class="font-bold">+251945003939</p>
          </div>
          <div class="space-y-4">
            <p class="text-sm">Alternative Phone Number</p>
            <p class="font-bold">Jane Doe</p>
          </div>
          <div class="space-y-4">
            <p class="text-sm">Email</p>
            <p class="font-bold">samuelnoah668@gmail.com</p>
          </div>
        </div>
      </div>
      <div class="p-10 px-10 w-full border-2 rounded-lg space-y-4">
        <p class="text-xl font-medium">Address Information</p>
        <div class="grid grid-cols-3 gap-10 w-[80%]">
          <div class="space-y-4">
            <p class="text-sm">Region</p>
            <p class="font-bold">Addis Ababa</p>
          </div>
          <div class="space-y-4">
            <p class="text-sm">Zone/Sub-city</p>
            <p class="font-bold">Addis Ababa</p>
          </div>
          <div class="space-y-4">
            <p class="text-sm">word</p>
            <p class="font-bold">Bole</p>
          </div>
          <div class="space-y-4">
            <p class="text-sm">Kebele</p>
            <p class="font-bold">Addis Ababa</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
::-webkit-scrollbar {
  width: 1px;
  height: 4px;
  display: none;
}

/* Track */
::-webkit-scrollbar-track {
  @apply bg-black;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #c3ddfd;
  border-radius: 3px;
  @apply bg-primary;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #c3ddfd;
}

.ql-toolbar.ql-snow {
  background-color: aqua;
}
</style>
