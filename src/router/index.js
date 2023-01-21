import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import Detail from "../views/DetailView.vue"
import Category from "../views/CategoryView.vue"
import Cart from "../components/Cart/Cart.vue"
import Contact from "../components/Contact/Contact.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/detail/:id',//asi es dinamico como react
      name: 'detail',
      component: Detail
    }, {
      path: '/category/:category',//asi es dinamico como react
      name: 'category',
      component: Category
    },{
      path: '/cart',
      name: 'cart',
      component: Cart
    },
  ]
})

export default router
