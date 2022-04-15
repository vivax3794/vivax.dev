import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

import App from './App.vue'
import Router from "./router.ts"

loadFonts()

createApp(App)
  .use(vuetify)
  .use(Router)
  .mount('#app')
