import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/home/sky/eyea-web-client/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}