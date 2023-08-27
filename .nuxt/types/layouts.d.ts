import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "content" | "default" | "event" | "member" | "user"
declare module "C:/Users/VICTUS/Documents/sami/dashboard/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}