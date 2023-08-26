// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  //nuxt apollo module
  // ssr:false,
  modules: [
    "@vueuse/nuxt",
    "@pinia/nuxt",
    '@nuxt/image',
    "nuxt-headlessui",
    "nuxt-icon",
    "@vee-validate/nuxt",
    "@nuxt/content",
    "@nuxtjs/apollo",
    "@pinia-plugin-persistedstate/nuxt",
    '@nuxtjs/color-mode'
  ],
  colorMode: {
    preference: 'light', // default value of $colorMode.preference
    fallback: 'light',
    classSuffix: ''
  },
  // nuxt apollo module configuration
  apollo: {
    clients: {
      default: {
        // GraphQL API endpoint
        httpEndpoint: process.env.VITE_GRAPH_URL,
      },
    },
  },

  build: {
    transpile: [
      "@headlessui/vue", // headless ui components
      "graphql",
      "vee-validate/dist/rules", // vee-validate rules
    ],
  },
  css: [
    "~/assets/css/main.css",
    // "primevue/resources/themes/lara-light-blue/theme.css",
    // "primevue/resources/primevue.css",
  ],
  content: {},

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
 
  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      Form: "VeeForm",
      Field: "VeeField",
      FieldArray: "VeeFieldArray",
      ErrorMessage: "VeeErrorMessage",
    },
  },
  headlessui: {
    prefix: "Headless",
  },

  //localization
  
});
