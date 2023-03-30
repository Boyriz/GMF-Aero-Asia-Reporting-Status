import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AppHome from '@/views/AppHome.vue'
import AppLogin from '@/views/AppLogin.vue'
import tcComponent from '@/views/tcComponent.vue'
import nontcComponent from '@/views/nontcComponent.vue'
import AppUpdate from '@/views/AppUpdate.vue'
import AppComparisonTCVue from '@/views/AppComparisonTC.vue'
import AppComparisonNONTCvue from '@/views/AppComparisonNONTC.vue'
import AppLoginUser from '@/views/AppLoginUser.vue'
import AppHomeUser from '@/views/AppHomeUser.vue'
import tcComponentUser from '@/views/tcComponentUser.vue'
import nontcComponentUser from '@/views/nontcComponentUser.vue'
import AppRegisterVue from '@/views/AppRegister.vue'


const routes: Array<RouteRecordRaw> = [
  {path: '/home', component: AppHome},
  {path: '/', component: AppLogin},
  {path: '/tcComponent', component: tcComponent},
  {path: '/nontcComponent', component: nontcComponent},
  {path: '/update', component: AppUpdate},
  {path: '/appComparisonTC', component: AppComparisonTCVue},
  {path: '/appComparisonNONTC', component: AppComparisonNONTCvue},
  {path: '/login-user', component: AppLoginUser},
  {path: '/home-user', component: AppHomeUser},
  {path: '/tcComponent-user', component: tcComponentUser},
  {path: '/nontcComponent-user', component: nontcComponentUser},
  {path: '/register', component: AppRegisterVue}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
