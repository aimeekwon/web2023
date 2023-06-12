import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MemberView from '../views/MemberView.vue'
import MovieView from '../views/MovieView.vue'
import PortView from '../views/PortView.vue'
import YoutubeView from '../views/YoutubeView.vue'
import UnsplashView from '../views/UnsplashView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }, {
    path: '/',
    name: 'member',
    component: MemberView
  }, {
    path: '/',
    name: 'port',
    component: PortView
  }, {
    path: '/',
    name: 'movie',
    component: MovieView
  }, {
    path: '/',
    name: 'youtube',
    component: YoutubeView
  }, {
    path: '/',
    name: 'unsplash',
    component: UnsplashView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
