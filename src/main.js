import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { library } from '@fortawesome/fontawesome-svg-core'

import { faCircleInfo,
        faCircleQuestion,
        faBars} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import './assets/main.css'
library.add(faCircleInfo, faCircleQuestion, faBars)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

