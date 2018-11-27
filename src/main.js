import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import AppCars from './components/AppCars'
Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  {path:'/', redirect:'/cars'},
  {path:'/cars', component: AppCars}
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
