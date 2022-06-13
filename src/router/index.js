import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home-view.vue')
  },
  {
    path: '/chapter/:fictionId',
    name: 'chapter',
    component: () => import('../views/chapter-view.vue')
  },
  {
    path: '/content/:chapterId/:title/:index',
    name: 'content',
    component: () => import('../views/content-view.vue')
  }
]

export default createRouter({
  routes,
  history: createWebHashHistory()
})
