<script lang="ts" setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { Menu, MenuButton, MenuItems, MenuItem, Switch } from "@headlessui/vue";
const router = useRouter();
const isMenuOpen = ref(false);

const openMenu = (): void => {
  console.log("isMenuOpen", isMenuOpen.value);
  isMenuOpen.value = isMenuOpen.value == false ? true : false;
};
interface Person {
  name: string;
  phone: string;
  level: string;
  occupation: string;
  status: string;
  paid: boolean;
  id: number;
}

const  userDetail = function(item:any ,e:any): void{
  router.push({
    name: "member-id",
    params: { id: item.status},
  });
}

// Generate random data for the Person objects
function generateRandomPerson(): Person {
  const names = [
    "John Doe",
    "Jane Smith",
    "Michael Johnson",
    "Emily Brown",
    "David Davis",
    "Olivia Martinez",
  ];
  const phones = [
    "+1234567890",
    "+9876543210",
    "+5555555555",
    "+1111111111",
    "+9999999999",
  ];
  const levels = ["Member plus", "Member", "Premium", "Basic"];
  const occupations = [
    "CEO",
    "Software Engineer",
    "Doctor",
    "Teacher",
    "Designer",
  ];
  const statuses = ["Accepted", "Decline", "Pending", "Suspended"];
  const paid = [true, false];

  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomPhone = phones[Math.floor(Math.random() * phones.length)];
  const randomLevel = levels[Math.floor(Math.random() * levels.length)];
  const randomPaid = paid[Math.floor(Math.random() * paid.length)];
  const randomOccupation =
    occupations[Math.floor(Math.random() * occupations.length)];
  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

  return {
    name: randomName,
    phone: randomPhone,
    level: randomLevel,
    occupation: randomOccupation,
    status: randomStatus,
    paid: randomPaid,
    id: Math.floor(Math.random() * 1000000),
  };
}

// Create an array of 20 Person objects
const people: Person[] = Array.from({ length: 100 }, generateRandomPerson);
const pendingPeople: Person[] = people.filter(
  (person) => person.status === "Pending"
);
const acceptedPeople: Person[] = people.filter(
  (person) => person.status === "Accepted"
);
const declinePeople: Person[] = people.filter(
  (person) => person.status === "Decline"
);
const suspendedPeople: Person[] = people.filter(
  (person) => person.status === "Suspended"
);

// Accessing and printing the array

const selected = ref<string>("pending");
definePageMeta({
  layout: "member",
});
</script>
<template>
  <TabGroup as="div" class="lg:px-10 px-4 space-y-4 flex flex-col">
    <TabList class="flex w-full border-b">
      <div class="flex md:w-[45%] md:space-x-6 justify-between text-sm w-full">
        <Tab as="template" v-slot="{ selected }" class=""
          ><div class="flex cursor-pointer items-center">
            <div
              class="font-semibold flex justify-center items-center space-x-2"
              :class="
                selected
                  ? '  border-primary border-b-2 text-primary py-2'
                  : 'text-primary-text-light   dark:text-dark-text-secondary'
              "
            >
              <Icon
                name="mdi:comment-user-outline"
                class="text-2xl mb-1"
              ></Icon>

              <p>Pending</p>
            </div>
          </div>
        </Tab>
        <Tab as="template" v-slot="{ selected }" class=""
          ><div class="flex cursor-pointer items-center">
            <div
              class="font-semibold flex justify-center items-center space-x-2"
              :class="
                selected
                  ? '  border-primary border-b-2 text-primary py-2'
                  : 'text-primary-text-light'
              "
            >
              <Icon name="uil:user-check" class="text-xl mb-1"></Icon>

              <p>Accepted</p>
            </div>
          </div>
        </Tab>
        <Tab as="template" v-slot="{ selected }" class=""
          ><div class="flex cursor-pointer justify-center items-center">
            <div
              class="font-semibold flex justify-center items-center space-x-2"
              :class="
                selected
                  ? ' border-primary border-b-2 text-primary py-2'
                  : 'text-primary-text-light   dark:text-dark-text-secondary'
              "
            >
              <Icon name="mingcute:user-x-line" class="text-2xl mb-1"></Icon>
              <p>Decline</p>
            </div>
          </div>
        </Tab>
        <Tab as="template" v-slot="{ selected }" class=""
          ><div class="flex cursor-pointer justify-center items-center">
            <div
              class="font-semibold flex justify-center items-center space-x-2"
              :class="
                selected
                  ? ' border-primary border-b-2 text-primary py-2'
                  : 'text-primary-text-light   dark:text-dark-text-secondary'
              "
            >
              <Icon name="mingcute:user-info-line" class="text-2xl mb-1"></Icon>
              <p>Suspended</p>
            </div>
          </div>
        </Tab>
      </div>
    </TabList>
    <TabPanels>
      <TabPanel class="w-full">
        <div
          class="min-h-[75vh] 3xl:min-h-[75vh] 3xl:max-h-[80vh] overflow-y-scroll max-h-[80vh] pr-2"
        >
          <div class="space-y-4">
            <div class="flex items-end justify-between">
              <div class="w-1/2 lg:w-auto space-x-4 flex h-10">
                <InputsTextfield name="search" class="pl-10">
                  <template #leading>
                    <Icon
                      name="gala:search"
                      class="text-gray-500 -rotate-90 absolute top-2 text-2xl left-2"
                    ></Icon>
                  </template>
                </InputsTextfield>
                <div
                  class="p-4 border-2 flex items-center justify-center rounded-md"
                >
                  <Icon name="tabler:adjustments-filled"></Icon>
                </div>
              </div>
              <button
                class="flex justify-center items-center space-x-2 p-2 bg-primary text-white font-semibold rounded-md"
              >
                <Icon name="mingcute:user-add-line"></Icon>
                <p>Register Member</p>
              </button>
            </div>
            <div class="w-fit flex space-x-3 text-sm">
              <div
                class="p-2 px-4 border-primary border-2 flex items-center justify-center rounded-md"
              >
                <p>All</p>
              </div>
              <div
                class="p-2 border-2 space-x-2 flex items-center justify-center rounded-md"
              >
                <Icon name="fa-solid:building"></Icon>
                <p>Organization</p>
              </div>
              <div
                class="p-2 border-2 space-x-2 flex items-center justify-center rounded-md"
              >
                <Icon name="ph:users-bold" class="text-xl"></Icon>
                <p>Individual</p>
              </div>
            </div>
          </div>
          <HTable
            :headers="[
              { text: 'Name', value: 'name' },
              { text: 'Phone Number', value: 'phone', visibility: 'w-fit' },
              { text: 'Membership level', value: 'level' },
              { text: 'Occupation', value: 'occupation' },
              { text: 'status', value: 'status' },
              { text: 'Action', value: 'action' },
            ]"
            :items="pendingPeople"
            @click:row="userDetail"
            :sort="[]"
          >
            <template #action="{ item }">
              <div class="flex space-x-2">
                <Menu
                  as="div"
                  class="relative inline-block text-left space-x-1"
                >
                  <MenuButton
                    @click="openMenu()"
                    class="flex space-x-2 items-center p-1 rounded-full justify-end"
                  >
                    <div class="lg:flex hidden items-center space-x-2 px-2">
                      <Icon
                        name="vaadin:ellipsis-dots-v"
                        class="text-lg"
                      ></Icon>
                    </div>
                  </MenuButton>
                  <transition
                    enter-active-class="transition duration-100 ease-out"
                    enter-from-class="transform scale-95 opacity-0"
                    enter-to-class="transform scale-100 opacity-100"
                    leave-active-class="transition duration-75 ease-in"
                    leave-from-class="transform scale-100 opacity-100"
                    leave-to-class="transform scale-95 opacity-0"
                  >
                    <MenuItems
                      class="absolute bg-white shadow-sm border-2 min-w-[250px] rounded-md text-base z-50 w-full -left-48"
                    >
                      <div class="flex flex-col px-4">
                        <MenuItem class="px-2 py-2 w-full" v-slot="{ active }">
                          <div class="flex space-x-4 items-center border-b">
                            <Icon
                              name="ri:account-box-line"
                              class="text-2xl"
                            ></Icon>
                            <p>View Full Profile</p>
                          </div>
                        </MenuItem>
                        <MenuItem class="px-2 py-2 w-full" v-slot="{ active }">
                          <div class="flex space-x-4 items-center border-b">
                            <Icon name="uil:user-check" class="text-2xl"></Icon>
                            <p>Accept Application</p>
                          </div>
                        </MenuItem>
                        <MenuItem class="px-2 py-2 w-full" v-slot="{ active }">
                          <div class="flex space-x-4 items-center border-b">
                            <Icon name="bx:user-x" class="text-2xl"></Icon>
                            <p>Decline Application</p>
                          </div>
                        </MenuItem>
                        <MenuItem class="px-2 py-2 w-full" v-slot="{ active }">
                          <div class="flex space-x-4 items-center border-b">
                            <Icon
                              name="fluent:mail-multiple-16-regular"
                              class="text-2xl"
                            ></Icon>
                            <p>Send Message</p>
                          </div>
                        </MenuItem>
                        <MenuItem class="px-2 py-2 w-full" v-slot="{ active }">
                          <div class="flex space-x-4 items-center border-b">
                            <Icon
                              name="material-symbols:delete-outline"
                              class="text-2xl"
                            ></Icon>
                            <p>Delete Application</p>
                          </div>
                        </MenuItem>
                      </div>
                    </MenuItems>
                  </transition>
                </Menu>
              </div>
            </template>
            <template #status="{ item }">
              <div class="flex space-x-2">
                <p class="px-3 py-1 rounded-full bg-[#DBEAFE] text-[#1E40AF]">
                  Pending
                </p>
              </div>
            </template>
            <template #name>
              <div class="flex space-x-4 items-center">
                <div
                  class="w-10 h-10 flex justify-center items-center overflow-hidden"
                >
                  <img src="@/assets/images/temp/avator.png" alt="" />
                </div>
                <div>
                  <p class="font-medium">samuel Noah</p>
                  <div class="flex space-x-2 text-sm">
                    <p>Individual . member puls</p>
                  </div>
                </div>
              </div>
            </template>
          </HTable>
        </div>
      </TabPanel>
      <TabPanel class="w-full">
        <div
          class="min-h-[75vh] 3xl:min-h-[75vh] 3xl:max-h-[80vh] overflow-y-scroll max-h-[80vh] pr-2"
        >
          <div class="space-y-4">
            <div class="flex items-end justify-between">
              <div class="w-1/2 lg:w-auto space-x-4 flex h-10">
                <InputsTextfield name="search" class="pl-10">
                  <template #leading>
                    <Icon
                      name="gala:search"
                      class="text-gray-500 -rotate-90 absolute top-2 text-2xl left-2"
                    ></Icon>
                  </template>
                </InputsTextfield>
                <div
                  class="p-4 border-2 flex items-center justify-center rounded-md"
                >
                  <Icon name="tabler:adjustments-filled"></Icon>
                </div>
              </div>
              <button
                class="flex justify-center items-center space-x-2 p-2 bg-primary text-white font-semibold rounded-md"
              >
                <Icon name="mingcute:user-add-line"></Icon>
                <p>Register Member</p>
              </button>
            </div>
            <div class="w-fit flex space-x-3 text-sm">
              <div
                class="p-2 px-4 border-primary border-2 flex items-center justify-center rounded-md"
              >
                <p>All</p>
              </div>
              <div
                class="p-2 border-2 space-x-2 flex items-center justify-center rounded-md"
              >
                <Icon name="fa-solid:building"></Icon>
                <p>Organization</p>
              </div>
              <div
                class="p-2 border-2 space-x-2 flex items-center justify-center rounded-md"
              >
                <Icon name="ph:users-bold" class="text-xl"></Icon>
                <p>Individual</p>
              </div>
            </div>
          </div>
          <HTable
            :headers="[
              { text: 'Name', value: 'name' },
              { text: 'Phone Number', value: 'phone' },
              { text: 'EYEA ID', value: 'id' },
              { text: 'Membership level', value: 'level' },
              { text: 'Occupation', value: 'occupation' },
              { text: 'status', value: 'status' },
              { text: 'Membership fee', value: 'paid' },
              { text: 'Action', value: 'action' },
            ]"
            :items="acceptedPeople"
            :sort="[]"
            @click:row="userDetail"
          >
            <template #action="{ item }">
              <div class="flex space-x-2">
                <Menu
                  as="div"
                  class="relative inline-block text-left space-x-1"
                >
                  <MenuButton
                    @click="openMenu()"
                    class="flex space-x-2 items-center p-1 rounded-full justify-end"
                  >
                    <div class="lg:flex hidden items-center space-x-2 px-2">
                      <Icon
                        name="vaadin:ellipsis-dots-v"
                        class="text-lg"
                      ></Icon>
                    </div>
                  </MenuButton>
                  <transition
                    enter-active-class="transition duration-100 ease-out"
                    enter-from-class="transform scale-95 opacity-0"
                    enter-to-class="transform scale-100 opacity-100"
                    leave-active-class="transition duration-75 ease-in"
                    leave-from-class="transform scale-100 opacity-100"
                    leave-to-class="transform scale-95 opacity-0"
                  >
                    <MenuItems
                      class="absolute bg-white shadow-sm border-2 min-w-[300px] rounded-md text-base z-50 w-full -left-56"
                    >
                      <div class="flex flex-col px-4">
                        <MenuItem v-if="!item.paid" class="px-2 py-2 w-full" v-slot="{ active }">
                          <div class="flex space-x-4 items-center border-b">
                            <Icon
                              name="iconamoon:notification-light"
                              class="text-2xl"
                            ></Icon>
                            <p>Send Payment Reminder</p>
                          </div>
                        </MenuItem>
                        <MenuItem v-if="!item.paid"  class="px-2 py-2 w-full" v-slot="{ active }">
                          <div class="flex space-x-4 items-center border-b">
                            <Icon
                              name="iconamoon:news"
                              class="text-2xl"
                            ></Icon>
                            <p>Mark as Paid</p>
                          </div>
                        </MenuItem>
                        <MenuItem class="px-2 py-2 w-full" v-slot="{ active }">
                          <div class="flex space-x-4 items-center border-b">
                            <Icon
                              name="ri:account-box-line"
                              class="text-2xl"
                            ></Icon>
                            <p>View Full Profile</p>
                          </div>
                        </MenuItem>
                        <MenuItem class="px-2 py-2 w-full" v-slot="{ active }">
                          <div class="flex space-x-4 items-center border-b">
                            <Icon
                              name="teenyicons:id-outline"
                              class="text-2xl"
                            ></Icon>
                            <p v-if="!item.paid" >Issue Membership Certificate</p>
                            <p v-else>Issue New ID card</p>
                          </div>
                        </MenuItem>
                        <MenuItem class="px-2 py-2 w-full" v-slot="{ active }">
                          <div class="flex space-x-4 items-center border-b">
                            <Icon name="bx:user-x" class="text-2xl"></Icon>
                            <p>Decline Application</p>
                          </div>
                        </MenuItem>
                        <MenuItem class="px-2 py-2 w-full" v-slot="{ active }">
                          <div class="flex space-x-4 items-center border-b">
                            <Icon
                              name="fluent:mail-multiple-16-regular"
                              class="text-2xl"
                            ></Icon>
                            <p>Send Message</p>
                          </div>
                        </MenuItem>
                        <MenuItem class="px-2 py-2 w-full" v-slot="{ active }">
                          <div class="flex space-x-4 items-center border-b">
                            <Icon
                              name="material-symbols:delete-outline"
                              class="text-2xl"
                            ></Icon>
                            <p>Delete Application</p>
                          </div>
                        </MenuItem>
                      </div>
                    </MenuItems>
                  </transition>
                </Menu>
              </div>
            </template>
            <template #status="{ item }">
              <div class="flex space-x-2">
                <p class="px-3 py-1 rounded-full bg-[#D1FAE5] text-[#065F46]">
                  Member
                </p>
              </div>
            </template>
            <template #name>
              <div class="flex space-x-4 items-center">
                <div
                  class="w-10 h-10 flex justify-center items-center overflow-hidden"
                >
                  <img src="@/assets/images/temp/avator.png" alt="" />
                </div>
                <div>
                  <p class="font-medium">samuel Noah</p>
                  <div class="flex space-x-2 text-sm">
                    <p>Individual . member puls</p>
                  </div>
                </div>
              </div>
            </template>
          </HTable>
        </div>
        <!-- </div> -->
      </TabPanel>
      <TabPanel class="w-full">
        <div
          class="min-h-[75vh] 3xl:min-h-[75vh] 3xl:max-h-[80vh] overflow-y-scroll max-h-[80vh] pr-2"
        >
          <div class="space-y-4">
            <div class="flex items-end justify-between">
              <div class="w-1/2 lg:w-auto space-x-4 flex h-10">
                <InputsTextfield name="search" class="pl-10">
                  <template #leading>
                    <Icon
                      name="gala:search"
                      class="text-gray-500 -rotate-90 absolute top-2 text-2xl left-2"
                    ></Icon>
                  </template>
                </InputsTextfield>
                <div
                  class="p-4 border-2 flex items-center justify-center rounded-md"
                >
                  <Icon name="tabler:adjustments-filled"></Icon>
                </div>
              </div>
              <button
                class="flex justify-center items-center space-x-2 p-2 bg-primary text-white font-semibold rounded-md"
              >
                <Icon name="mingcute:user-add-line"></Icon>
                <p>Register Member</p>
              </button>
            </div>
            <div class="w-fit flex space-x-3 text-sm">
              <div
                class="p-2 px-4 border-primary border-2 flex items-center justify-center rounded-md"
              >
                <p>All</p>
              </div>
              <div
                class="p-2 border-2 space-x-2 flex items-center justify-center rounded-md"
              >
                <Icon name="fa-solid:building"></Icon>
                <p>Organization</p>
              </div>
              <div
                class="p-2 border-2 space-x-2 flex items-center justify-center rounded-md"
              >
                <Icon name="ph:users-bold" class="text-xl"></Icon>
                <p>Individual</p>
              </div>
            </div>
          </div>
          <HTable
            :headers="[
              { text: 'Name', value: 'name' },
              { text: 'Phone Number', value: 'phone', visibility: 'w-fit' },
              { text: 'Membership level', value: 'level' },
              { text: 'Occupation', value: 'occupation' },
              { text: 'status', value: 'status' },
              { text: 'Action', value: 'action' },
            ]"
            :items="declinePeople"
            :sort="[]"
            @click:row="userDetail"
          >
            <template #action="{ item }">
              <div class="flex space-x-2">
                <Menu
                  as="div"
                  class="relative inline-block text-left space-x-1"
                >
                  <MenuButton
                    @click="openMenu()"
                    class="flex space-x-2 items-center p-1 rounded-full justify-end"
                  >
                    <div class="lg:flex hidden items-center space-x-2 px-2">
                      <Icon
                        name="vaadin:ellipsis-dots-v"
                        class="text-lg"
                      ></Icon>
                    </div>
                  </MenuButton>
                  <transition
                    enter-active-class="transition duration-100 ease-out"
                    enter-from-class="transform scale-95 opacity-0"
                    enter-to-class="transform scale-100 opacity-100"
                    leave-active-class="transition duration-75 ease-in"
                    leave-from-class="transform scale-100 opacity-100"
                    leave-to-class="transform scale-95 opacity-0"
                  >
                    <MenuItems
                      class="absolute bg-white shadow-sm border-2 min-w-[250px] rounded-md text-base z-50 w-full -left-48"
                    >
                      <div class="flex flex-col px-4">
                        <MenuItem class="px-2 py-2 w-full" v-slot="{ active }">
                          <div class="flex space-x-4 items-center border-b">
                            <Icon
                              name="ri:account-box-line"
                              class="text-2xl"
                            ></Icon>
                            <p>View Full Profile</p>
                          </div>
                        </MenuItem>
                        <MenuItem class="px-2 py-2 w-full" v-slot="{ active }">
                          <div class="flex space-x-4 items-center border-b">
                            <Icon name="uil:user-check" class="text-2xl"></Icon>
                            <p>Accept Application</p>
                          </div>
                        </MenuItem>
                        <MenuItem class="px-2 py-2 w-full" v-slot="{ active }">
                          <div class="flex space-x-4 items-center border-b">
                            <Icon name="bx:user-x" class="text-2xl"></Icon>
                            <p>Decline Application</p>
                          </div>
                        </MenuItem>
                        <MenuItem class="px-2 py-2 w-full" v-slot="{ active }">
                          <div class="flex space-x-4 items-center border-b">
                            <Icon
                              name="fluent:mail-multiple-16-regular"
                              class="text-2xl"
                            ></Icon>
                            <p>Send Message</p>
                          </div>
                        </MenuItem>
                        <MenuItem class="px-2 py-2 w-full" v-slot="{ active }">
                          <div class="flex space-x-4 items-center border-b">
                            <Icon
                              name="material-symbols:delete-outline"
                              class="text-2xl"
                            ></Icon>
                            <p>Delete Application</p>
                          </div>
                        </MenuItem>
                      </div>
                    </MenuItems>
                  </transition>
                </Menu>
              </div>
            </template>
            <template #status="{ item }">
              <div class="flex space-x-2">
                <p class="px-3 py-1 rounded-full bg-[#FEE2E2] text-[#991B1B]">
                  Decline
                </p>
              </div>
            </template>
            <template #name>
              <div class="flex space-x-4 items-center">
                <div
                  class="w-10 h-10 flex justify-center items-center overflow-hidden"
                >
                  <img src="@/assets/images/temp/avator.png" alt="" />
                </div>
                <div>
                  <p class="font-medium">samuel Noah</p>
                  <div class="flex space-x-2 text-sm">
                    <p>Individual . member puls</p>
                  </div>
                </div>
              </div>
            </template>
          </HTable>
        </div>
      </TabPanel>
      <TabPanel class="w-full space-y-4">
        <div
          class="min-h-[75vh] 3xl:min-h-[75vh] 3xl:max-h-[80vh] overflow-y-scroll max-h-[80vh] pr-2"
        >
          <div class="space-y-4">
            <div class="flex items-end justify-between">
              <div class="w-1/2 lg:w-auto space-x-4 flex h-10">
                <InputsTextfield name="search" class="pl-10">
                  <template #leading>
                    <Icon
                      name="gala:search"
                      class="text-gray-500 -rotate-90 absolute top-2 text-2xl left-2"
                    ></Icon>
                  </template>
                </InputsTextfield>
                <div
                  class="p-4 border-2 flex items-center justify-center rounded-md"
                >
                  <Icon name="tabler:adjustments-filled"></Icon>
                </div>
              </div>
              <button
                class="flex justify-center items-center space-x-2 p-2 bg-primary text-white font-semibold rounded-md"
              >
                <Icon name="mingcute:user-add-line"></Icon>
                <p>Register Member</p>
              </button>
            </div>
            <div class="w-fit flex space-x-3 text-sm">
              <div
                class="p-2 px-4 border-primary border-2 flex items-center justify-center rounded-md"
              >
                <p>All</p>
              </div>
              <div
                class="p-2 border-2 space-x-2 flex items-center justify-center rounded-md"
              >
                <Icon name="fa-solid:building"></Icon>
                <p>Organization</p>
              </div>
              <div
                class="p-2 border-2 space-x-2 flex items-center justify-center rounded-md"
              >
                <Icon name="ph:users-bold" class="text-xl"></Icon>
                <p>Individual</p>
              </div>
            </div>
          </div>
          <HTable
            :headers="[
              { text: 'Name', value: 'name' },
              { text: 'Phone Number', value: 'phone', visibility: 'w-fit' },
              { text: 'Membership level', value: 'level' },
              { text: 'Occupation', value: 'occupation' },
              { text: 'status', value: 'status' },
              { text: 'Action', value: 'action' },
            ]"
            :items="suspendedPeople"
            :sort="[]"
            @click:row="userDetail"
          >
            <template #action="{ item }">
              <div class="flex space-x-2">
                <Menu
                  as="div"
                  class="relative inline-block text-left space-x-1"
                >
                  <MenuButton
                    @click="openMenu()"
                    class="flex space-x-2 items-center p-1 rounded-full justify-end"
                  >
                    <div class="lg:flex hidden items-center space-x-2 px-2">
                      <Icon
                        name="vaadin:ellipsis-dots-v"
                        class="text-lg"
                      ></Icon>
                    </div>
                  </MenuButton>
                  <transition
                    enter-active-class="transition duration-100 ease-out"
                    enter-from-class="transform scale-95 opacity-0"
                    enter-to-class="transform scale-100 opacity-100"
                    leave-active-class="transition duration-75 ease-in"
                    leave-from-class="transform scale-100 opacity-100"
                    leave-to-class="transform scale-95 opacity-0"
                  >
                    <MenuItems
                      class="absolute bg-white shadow-sm border-2 min-w-[250px] rounded-md text-base z-50 w-full -left-48"
                    >
                      <div class="flex flex-col px-4">
                        <MenuItem class="px-2 py-2 w-full" v-slot="{ active }">
                          <div class="flex space-x-4 items-center border-b">
                            <Icon
                              name="ri:account-box-line"
                              class="text-2xl"
                            ></Icon>
                            <p>View Full Profile</p>
                          </div>
                        </MenuItem>
                        <MenuItem class="px-2 py-2 w-full" v-slot="{ active }">
                          <div class="flex space-x-4 items-center border-b">
                            <Icon name="uil:user-check" class="text-2xl"></Icon>
                            <p>Accept Application</p>
                          </div>
                        </MenuItem>
                        <MenuItem class="px-2 py-2 w-full" v-slot="{ active }">
                          <div class="flex space-x-4 items-center border-b">
                            <Icon name="bx:user-x" class="text-2xl"></Icon>
                            <p>Decline Application</p>
                          </div>
                        </MenuItem>
                        <MenuItem class="px-2 py-2 w-full" v-slot="{ active }">
                          <div class="flex space-x-4 items-center border-b">
                            <Icon
                              name="fluent:mail-multiple-16-regular"
                              class="text-2xl"
                            ></Icon>
                            <p>Send Message</p>
                          </div>
                        </MenuItem>
                        <MenuItem class="px-2 py-2 w-full" v-slot="{ active }">
                          <div class="flex space-x-4 items-center border-b">
                            <Icon
                              name="material-symbols:delete-outline"
                              class="text-2xl"
                            ></Icon>
                            <p>Delete Application</p>
                          </div>
                        </MenuItem>
                      </div>
                    </MenuItems>
                  </transition>
                </Menu>
              </div>
            </template>
            <template #status="{ item }">
              <div class="flex space-x-2">
                <p class="px-3 py-1 rounded-full bg-[#EDE9FE] text-[#5B21B6]">
                  suspended
                </p>
              </div>
            </template>
            <template #name>
              <div class="flex space-x-4 items-center">
                <div
                  class="w-10 h-10 flex justify-center items-center overflow-hidden"
                >
                  <img src="@/assets/images/temp/avator.png" alt="" />
                </div>
                <div>
                  <p class="font-medium">samuel Noah</p>
                  <div class="flex space-x-2 text-sm">
                    <p>Individual . member puls</p>
                  </div>
                </div>
              </div>
            </template>
          </HTable>
        </div>
      </TabPanel>
    </TabPanels>
  </TabGroup>
</template>

<style scoped>
::-webkit-scrollbar {
  width: 1px;
  height: 4px;
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
