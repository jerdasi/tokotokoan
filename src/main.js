import {createApp} from 'vue'
import './index.css'
import App from './App.vue'
import router from "@/router/index.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import {faPhone, faBars, faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

library.add(faPhone, faBars, faCartShopping);

createApp(App).use(router).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
