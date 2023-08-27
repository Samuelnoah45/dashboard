<script>
import _get from "lodash.get";
import _set from "lodash.set";

export default {
  name: "v-table",
  components: {},
  props: {
    headers: {
      type: Array,
    },
    total: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
    },
    //to store ids of checked items
    checkedItems: {
      type: Array,
      default: [],
    },
    hasCheckBox: {
      type: Boolean,
      default: false,
    },

    hasRecordsPerPage: {
      type: Boolean,
      default: true,
    },
    sort: {
      type: Array,
    },
    loading: {
      type: Boolean,
      default: true,
    },
    supporterClass: {
      type: String,
    },
    supportHeaderClass: {
      type: String,
    },
    createRow: {
      type: String,
    },
    searchPlaceholder: String,
    bodyClass: String,
  },
  emits: [
    "click:row",
    "update:checkedItems",
    "search",
    "changedStatus",
    "createRow",
  ],
  data() {
    return {
      _sort: {},
      searchKey: "",
      recordsPerPage: 10,
      statusValue: "All",

      status: [
        {
          id: "all",
          name: "All",
        },
        {
          id: "approved",
          name: "Approved",
        },
        {
          id: "pending",
          name: "Pending",
        },
        {
          id: "submitted",
          name: "Submitted",
        },
        {
          id: "rejected",
          name: "Rejected",
        },
        {
          id: "Roll backed",
          name: "rollBacked",
        },
      ],
    };
  },
  created() {
    this.sort.forEach((item) => {
      this._sort = { ...this._sort, ...item };
    });
  },
  watch: {
    searchKey(newValue) {
      this.$emit("search", newValue);
    },

    recordsPerPage(newRecordsPerPage) {
      this.$emit("changedRecordsPerPage", newRecordsPerPage);
    },
    statusValue(newStatusValue) {
      this.$emit("changedStatus", newStatusValue);
    },
  },
  computed: {
    checkCheckedAll() {
      return (
        this.checkedItems.length === this.items.length && this.items.length > 0
      );
    },
  },
  methods: {
    _get,
    _set,
    sort_by(header) {
      if (header.sortable === false) return;

      let direction = this._sort[header.value];

      if (direction && direction === "asc") {
        this._sort[header.value] = "desc";
      } else if (direction && direction === "desc") {
        delete this._sort[header.value];
      } else {
        this._sort[header.value] = "asc";
      }

      let sort = [];

      Object.keys(this._sort).forEach((key) => {
        let obj = {};
        _set(obj, key, this._sort[key]);
        sort.push(obj);
      });

      this.$emit("update:sort", sort);
    },
    rowChecked(id) {
      this.$emit(
        "update:checkedItems",
        Array.isArray(this.checkedItems)
          ? this.checkedItems.includes(id)
            ? this.checkedItems.filter((_id) => id !== _id)
            : [...this.checkedItems, id]
          : [id]
      );
    },
    rowCheckedAll() {
      this.$emit(
        "update:checkedItems",
        this.checkedItems.length == this.items.length
          ? []
          : this.items.map((item) => item.id)
      );
    },

    click_row(item, e) {
      
      this.$emit("click:row", item, e);
    },
  },
};
</script>

<template>
   <slot name="tab"></slot>
  <div class="grid grid-cols-1">
    <div class="h-1">
      <ClientOnly> <h-progress v-if="loading" /></ClientOnly>
    </div>
    <div :class="supporterClass" class="sm:rounded-lg border-2">
      <table
        class="table-auto border-collapse w-full divide-y divide-secondary-4 font-body"
      >
        <thead class="bg-white">
          <tr>
            <!-- select option header -->
            <th
              v-if="hasCheckBox"
              class="text-xs xl:px-6 px-4 font-bold text-left items-center text-black 2xl:py-5 py-3 table-cell tracking-wider uppercase"
            >
              <div class="flex gap-x-2 w-8">
                <input
                  v-if="checkCheckedAll"
                  type="checkbox"
                  @click.prevent="rowCheckedAll()"
                  :checked="checkCheckedAll"
                />
                <input
                  v-else
                  type="checkbox"
                  @click.prevent="rowCheckedAll()"
                  :checked="checkCheckedAll"
                />
                <p v-if="checkedItems.length > 0">
                  {{ checkedItems.length }}/{{ items.length }}
                </p>
                <p v-else></p>
              </div>
            </th>
            <th
              class="text-xs 2xl:px-6 px-3 font-bold text-left text-black 2xl:py-5 py-3 table-cell tracking-wider uppercase"
              :class="header?.visibility"
              v-for="(header, i) in headers"
              :key="header.value"
            >
              <span class="cursor-pointer font-body" @click="sort_by(header)">
                {{ header.text }}
                <div
                  v-if="
                    _sort[header.value] === 'asc' && header.sortable !== false
                  "
                  class="h-3 w-3 inline-block text-primary"
                />
                <div
                  v-if="
                    _sort[header.value] === 'desc' && header.sortable !== false
                  "
                  class="h-3 w-3 inline-block text-primary"
                />
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            :class="[
              ' border-gray-200 rounded last:border-0  cursor-pointer lg:hover:bg-blue-50 ',
            ]"
            v-for="(item, index) in items"
            :key="index"
            @click="click_row(item, $event)"
            class="table-row flex-no-wrap lg:shadow-none shadow mb-0"
          >
            <!-- check box entry for each row -->
            <td
              v-if="hasCheckBox"
              class="w-full lg:w-auto table-cell relative lg:static border-b rounded py-4 2xl:px-6 px-2 2xl:text-sm text-xs"
            >
              <input
                v-if="checkedItems.includes(item.id)"
                type="checkbox"
                :checked="checkedItems.includes(item.id)"
                @click.stop="rowChecked(item.id)"
              />
              <input
                v-else
                type="checkbox"
                :checked="checkedItems.includes(item.id)"
                @click.stop="rowChecked(item.id)"
              />
            </td>
            <td
              v-for="header in headers"
              :key="header.value"
              class="w-full font-body lg:w-auto table-cell relative lg:static text-left text-gray-900 border-b rounded py-4 2xl:px-6 px-2 2xl:text-sm text-xs"
              :class="header.visibility"
            >
              <slot :item="item" :name="header.value">
                <span
                  :class="bodyClass"
                  class="align-middle inline-block overflow-ellipsis overflow-hidden whitespace-nowrap font-body  "
                  v-if="header.value == 'full_name'"
                >
                  {{ _get(item, header.value) || "-" }}
                </span>
                <span
                  :class="bodyClass"
                  class="lg:w-10/12 xl:w-11/12 align-middle inline-block overflow-ellipsis overflow-hidden whitespace-nowrap font-body "
                  v-else-if="_get(item, header.value) == '0'"
                >
                  {{ _get(item, header.value) }}
                </span>
                <span
                  :title="_get(item, header.value) || '-'"
                  :class="bodyClass"
                  class="lg:w-10/12 xl:w-11/12 align-middle inline-block overflow-ellipsis overflow-hidden whitespace-nowrap font-body truncate"
                  v-else
                >
                  {{ _get(item, header.value) || "-" }}
                </span>
              </slot>
            </td>
          </tr>

       
        </tbody>
      </table>
    </div>
  </div>
</template>
