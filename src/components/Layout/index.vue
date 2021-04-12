<template>
  <div class="layout">
    <Sidebar/>
    <AppMain/>
  </div>
</template>
<script>
import AppMain from './AppMain/AppMain'
import Sidebar from './Sidebar/Sidebar'
export default {
  components: {
    AppMain,
    Sidebar
  },
  created() {
    console.log('layout');
  }
}
</script>
<style lang="scss">
</style>
