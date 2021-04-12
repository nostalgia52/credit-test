<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :default-active="$route.path"
      background-color="white"
      text-color="black"
      active-text-color="green"
      mode="vertical"
    >
      <sidebar-item
        v-for="route in routes"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      />
    </el-menu>
  </el-scrollbar>
</template>
<script>
export default {
  data(){
    return {
      routes:[
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
    }
  }
}
</script>