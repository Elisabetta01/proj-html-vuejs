import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import { phone } from '@fortawesome/free-solid-svg-icons'
// library.add(phone)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
