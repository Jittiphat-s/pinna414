import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MenuView from '../views/MenuView.vue'
import NewsCard from '../components/NewCard.vue'
import ANewsCard from '../components/A-NewCard.vue'
import orderList from '../views/orderList.vue'
import cart from '../views/cart-page.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/news',
      name: 'allnews',
      component: NewsCard
    },
    {
      path: '/news/:id',
      name: 'news',
      component: ANewsCard
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cart',
      name: 'cartlist',
      component: cart
    },
    {
      path: '/orderlist',
      name: 'orderlist',
      component: orderList
    },
    {
      path: '/menu',
      name: 'menu',
      component: MenuView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
