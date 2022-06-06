import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

const EquipmentTypes = () => import('../views/EquipmentTypes')
const Equipment = () => import('../views/Equipment')
const EquipmentEdit = () => import('../views/EquipmentEdit')
const EquipmentCreate = () => import('../views/EquipmentCreate')
const LoginPage = () => import('../views/LoginPage')

Vue.use(VueRouter)

const routes = [
  {path: '/',name: 'home',component: HomeView},
  {path: '/equipment-types',name: 'equipment-types', component: EquipmentTypes},

  {path: '/equipment',name: 'equipment', component: Equipment},
  {path: '/equipment/:id',name: 'equipment-edit', component: EquipmentEdit},
  {path: '/equipment-create',name: 'equipment-create', component: EquipmentCreate},
  {path: '/login',name: 'login', component: LoginPage},

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
