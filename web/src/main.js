import Vue from 'vue'
import App from './App.vue'
import router from './router'


import VueAwesomeSwiper from 'vue-awesome-swiper'
//require iconfont
import './assets/iconfont/iconfont.css' 

import Card from './components/Card.vue'
Vue.component('my-card',Card)
import ListCard from './components/ListCard.vue'
Vue.component('my-list-card',ListCard)
// require styles
import 'swiper/dist/css/swiper.css'
 
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.config.productionTip = false
import "../src/assets/scss/style.scss"
import axios from 'axios'
Vue.prototype.$http= axios.create({
    baseURL:'http://localhost:3000/web/api'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
