import { createRouter, createWebHistory } from 'vue-router'
import MainScreen from './features/MainScreen.vue'
import SecondScreen from './features/SecondScreen.vue'

const routes = [
    { path: '/', component: MainScreen, name: 'main' },
    { path: '/second/:differentNumber', component: SecondScreen, props: true }
  ]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router