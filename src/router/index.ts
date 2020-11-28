import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Secure from '@/secure/Secure.vue';
import Dashboard from '@/secure/dashboard/Dashboard.vue';
// import Register from '@/public/Register.vue';
// import Login from '@/public/Login.vue';
// import Users from '@/secure/users/Users.vue';
// import UsersCreate from '@/secure/users/UsersCreate.vue';


const routes: Array<RouteRecordRaw> = [
  {path: '/register',  component: () => import('@/public/Register.vue')},
  {path: '/login',component: () => import ('@/public/Login.vue')},
  {
    path: '',
    component: Secure,
    children: [
      {path: '', redirect: '/dashboard'},
      {path: '/dashboard', component: Dashboard},
      {path: '/users', component: () => import('@/secure/users/Users.vue')},
      {path: '/users/create', component: () => import('@/secure/users/UsersCreate.vue')},
      {path: '/users/:id/edit', component: () => import('@/secure/users/UsersEdit.vue')},
      {path: '/roles', component: () => import('@/secure/roles/Roles.vue')},
      {path: '/roles/create', component: () => import('@/secure/roles/RolesCreate.vue')},
      {path: '/roles/:id/edit', component: () => import('@/secure/roles/RolesEdit.vue')},
      {path: '/products', component: () => import('@/secure/products/Products.vue')},
      {path: '/products/create', component: () => import('@/secure/products/ProductsCreate.vue')},
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
