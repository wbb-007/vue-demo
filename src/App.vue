<template>
  <div id="app">
    <el-container>
      <el-header class="header">
        <navHeader/>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <navMenu/>
        </el-aside>
        <el-main>
          <navMain/>
          <keep-alive>
            <router-view />
          </keep-alive>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import navMenu from '@/components/navMenu/navMenu'
import navHeader from '@/components/header/header'
import navMain from '@/components/navMain/navMain'

export default {
  name: 'App',
  components: {
    navMenu,
    navHeader,
    navMain
  }
}
</script>

<style>
.header {
  background-color: #b3c0d1;
  width: 100%;
  display: flex;
  align-content: center;
}
.el-container{
  height: 100%;
}
.el-main{
  padding: 0;
}
</style>
