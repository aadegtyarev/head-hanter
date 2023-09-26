import { createApp } from 'vue'
import App from '@/App'
import components from "@/components/UI"
import router from '@/router/router'
import directives from '@/directives'
import axios from "axios";
import VueCookies from 'vue-cookies'
import useAuth from './hooks/useAuth'
import store from './store'

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

directives.forEach(directive => {
    app.directive(directive.name, directive)
})

const { checkCookie } = useAuth()

let token = ""
const cookie = $cookies.get("head-hunter")
if (cookie) {
    token = cookie.token
}

axios.defaults.baseURL = 'http://localhost:8081/api';
axios.defaults.headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
}

// store.state.auth.isAuth = $cookies.get("head-hunter")

// if (store.state.auth.isAuth)
//     store.state.auth.user_id = $cookies.get("head-hunter").id

app
    .use(router) // таким образом подключаются плагины, бутстрап и т.п.
    .use(store)
    .use(VueCookies, { expire: '14d' })
    .mount('#app');