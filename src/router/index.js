import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DepoNews from '../views/NewsView.vue'
import Compass from '../views/CompassesView.vue'
import Messages from '../views/MessagesView.vue'
import NewsDetailView from '@/views/NewsDetailView.vue'
import CompassDetailView from '@/views/CompassDetailView.vue'
import MessagesDetailView from '@/views/MessagesDetailView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/depoNews',
    name: 'depoNews',
    component: DepoNews
  },
  {
    path: '/compasses',
    name: 'compasses',
    component: Compass
  },
  {
    path: '/messages',
    name: 'messages',
    component: Messages
  },
  {
    path: '/newsDetail',
    name: 'newsDetail',
    component: NewsDetailView
  },
  {
    path: '/compassDetail',
    name: 'compassDetail',
    component: CompassDetailView
  },
  {
    path: '/messageDetail',
    name: 'messageDetail',
    component: MessagesDetailView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
