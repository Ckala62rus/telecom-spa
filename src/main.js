import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
window.axios = axios
window.axios.defaults.withCredentials = true;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('Token');
window.axios.defaults.baseURL = process.env.VUE_APP_API_URL;

import {ServerTable, ClientTable} from 'vue-tables-2';
Vue.use(ServerTable, {}, false, 'bootstrap4');
Vue.use(ClientTable, {}, false, 'bootstrap4');

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
