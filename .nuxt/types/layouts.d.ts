import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "registration"
declare module "/home/sky/dev/minab/EYEA/eyea-web-client/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}