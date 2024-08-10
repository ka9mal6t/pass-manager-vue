import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import DashboardView from '@/views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterView,
    },


    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardView,
      meta: { requiresAuth: true },
    },
    {
      path: '/profile',
      name: 'Progile',
      component: DashboardView,
      meta: { requiresAuth: true },
    },
    {
      path: '/search',
      name: 'Search',
      component: DashboardView,
      meta: { requiresAuth: true },
    },
    {
      path: '/interesting',
      name: 'Interesting',
      component: DashboardView,
      meta: { requiresAuth: true },
    },
    {
      path: '/create',
      name: 'Create',
      component: DashboardView,
      meta: { requiresAuth: true },
    },
  ]
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token');
  
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router
