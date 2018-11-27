import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import AppCars from './components/AppCars'
import AddCar from './components/AddCar'

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  {path:'/', redirect:'/cars'},
  {path:'/cars', component: AppCars, name:'cars'},
  {path:'/add', component: AddCar, name:'add-car'},

]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  mode:'history',
  render: h => h(App),
}).$mount('#app')
