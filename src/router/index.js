import { createRouter, createWebHistory } from 'vue-router'
import Layout from "@/layout/Layout";

const routes = [
  {
    path: '/',
    name: 'layout',
    component:  Layout,
    children  :[
      {
        path:  'cheProperty',
        name:  'CheProperty',
        component:  ()=>import("@/views/CheProperty")
      }]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
