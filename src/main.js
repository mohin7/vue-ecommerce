import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store/index.js'


const app = createApp(App)

app.use(router)

// Install the store instance as a plugin
app.use(store)

app.mount('#app')
