import { createApp } from 'vue'
import App from '@/App'
import components from "@/components/UI"
import router from '@/router/router'
import VIntersection from '@/directives/VIntersection'
import directives from '@/directives'
import store from '@/store'
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8081/api';

// axios.defaults.headers= {
//         'Access-Control-Allow-Origin': '*',
//         'Content-Type': 'application/json',
//       }
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

directives.forEach(directive => {
    app.directive(directive.name, directive)
})

app
    .use(router) // таким образом подключаются плагины, бутстрап и т.п.
    .use(store)
    .mount('#app');