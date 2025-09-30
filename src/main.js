import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import EN from './locale/en.json'
import MX from './locale/mx.json'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const i18n = createI18n({
    locale: 'EN',
    messages: {
        EN: EN,
        MX: MX,
    }
})

app.use(createPinia())
app.use(i18n)
app.use(router)

app.mount('#app')
