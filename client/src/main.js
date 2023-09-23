import { createApp } from 'vue'
import App from '@/App'
import components from "@/components/UI"
import router from '@/router/router'
import directives from '@/directives'
import axios from "axios";
import VueCookies from 'vue-cookies'
import store from '@/store'

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

directives.forEach(directive => {
    app.directive(directive.name, directive)
})



axios.defaults.baseURL = 'http://localhost:8081/api';

store.state.auth.isAuth = $cookies.get("head-hunter")

app
    .use(router) // таким образом подключаются плагины, бутстрап и т.п.
    .use(store)
    .use(VueCookies, { expire: '14d' })
    .mount('#app');