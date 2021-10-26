<!--本页为左侧下拉菜单-->
<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu
        class="el-menu-vertical-demo"
        background-color="#b3c0d1"
        text-color="#fff"
        router
        active-text-color="#fff"
      >
        <el-menu-item index="home" @click="clickMenu('home', '首页', 0)">
          <i class="el-icon-star-on"/>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu v-for="item of menu" :index="item.name" :key="item.id">
          <template slot="title">
            <i class="el-icon-location"/>
            <span>{{ item.name }}</span>
          </template>
          <el-menu-item-group class="over-hide">
            <el-menu-item
              v-for="child of item.children"
              :index="child.pathName"
              :key="child.id"
              @click="clickMenu(child.pathName, child.tabname, child.id)"
            >
              {{ child.name }}
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
// import menu from "@/config/menu-config.js";
import ALL from '@/config/jsonTest.json'
export default {
  name: 'NavMenu',
  data() {
    return {
      menu: ALL.menu,
      openedTab: []
    }
  },
  methods: {
    clickMenu(pathName, tabname, tabid) {
      this.openedTab = this.$store.state.openedTab
      // tabNum 为当前点击的列表项在openedTab中的index，若不存在则为-1
      const tabNum = this.openedTab.indexOf(pathName)
      // console.log(tabNum);
      // console.log(this.openedTab);
      // console.log(this.$store.state.openedTab);
      if (tabNum === -1) {
        // 该标签当前没有打开
        // 将componentName加入到已打开标签页state.openedTab数组中
        this.$store.commit('addTab', pathName)
        this.$store.commit('addTabname', {
          title: tabname,
          name: pathName,
          id: tabid
        })
        this.$store.commit('changeTab', pathName)
      } else {
        // 该标签是已经打开过的，需要激活此标签页
        this.$store.commit('changeTab', pathName)
        // console.log(this.$store.state.activeTab)
      }
    }
  }
}
</script>

<style scoped>
.over-hide {
  overflow-x: hidden;
}
.el-submenu__title {
  border-bottom: 1px solid #8d98a2;
}
.tac,
.el-col,
.el-menu {
  height: 100%;
}
</style>
