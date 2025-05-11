import Router from 'vue-router'
const Vue = () => import('vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomePage')
  },
  {
    path: '/about-me',
    name: 'About Me',
    component: () => import('../views/AboutMePage')
  },
  {
    path: '/work',
    name: 'Contributions',
    component: () => import('../views/ContributionsPage')
  },
  {
    path: '/cv',
    name: 'CV',
    component: () => import('../views/CVPage')
  },
  {
    path: '/contact-me',
    name: 'Contact Me',
    component: () => import('../views/ContactMePage')
  },
  {
    path: '*',
    name: 'Not Found',
    component: () => import('../views/NotFoundPage')
  }
]

Vue().then((VuePromise) => {
  VuePromise.default.use(Router)
})

const router = new Router({
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: routes
})

export default router
