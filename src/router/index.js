import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component:() => import('../views/login.vue')
  },
  {
    //首页
    path: '/',
    name: 'main',
    component: () => import('../views/main.vue'),
    children:[// 开始嵌套路由，这下面的所有路由都是Main路由的子路由
      {
        path:'/', // 嵌套路由里默认是哪个网页
        redirect: '/index'
      },
      {
        path:'/index',// 首页的路由
        name:'index',
        component:() => import('../views/index.vue')
      },
      {
        path:'/seting',// 设置页面的路由
        name:'seting',
        component:() => import('../views/seting.vue')
      },
      {
        path:'/table',// 设置页面的路由
        name:'table',
        component:() => import('../views/table.vue')
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
