import { createApp } from 'vue'
import mitt from 'mitt'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

const emitter = mitt();


createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .use(emitter)
  .mount('#app')

