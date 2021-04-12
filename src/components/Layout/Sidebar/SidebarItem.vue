<template>
  <div class="menu-wrapper">
    <template v-if="item.children">
      <el-submenu :index="item.path">
        <template slot="title">
          <span>{{item.title}}</span>
        </template>
        <sidebar-item v-for="child in item.children"
        :key="child.path"
        :item="child"
        />
      </el-submenu>
    </template>
  </div>
</template>
<script>
export default {
  name: 'SidebarItem',
  props:{
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ''
    }
  }
}
</script>