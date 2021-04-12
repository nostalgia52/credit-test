import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/components/Layout/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: () => import('@/views/Login/index')
  },
  {
    path:'/',
    component: Layout,
    redirect: '/dashboard',
    children:[
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/components/Dashboard/Dashboard'),
        meta: {title: '首页'}
      }
    ]
  },
  {
    path:'/orgManage',
    name: 'OrgManage',
    alwaysShow: true,
    component: Layout,
    children: [
      {
        path: 'orgInfoManage',
        name: 'OrgInfoManage',
        component: () => import('@/views/orgManage/orgInfoManage/index'),
        meta: { title: '机构信息' }
      },
      {
        path: 'orgMemberManage',
        name: 'OrgMemberManage',
        component: () => import('@/views/orgManage/orgMemberManage/index'),
        meta: { title: '机构成员' }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
