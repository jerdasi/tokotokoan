import {createApp} from 'vue'
import './index.css'
import App from './App.vue'
import router from "@/router/index.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faPhone,
    faBars,
    faCartShopping,
    faEye,
    faArrowCircleRight,
    faPenToSquare, faPlus,
    faTrash
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

library.add(faPhone, faBars, faCartShopping, faEye, faArrowCircleRight, faPenToSquare, faPlus, faTrash);

createApp(App).use(router).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
