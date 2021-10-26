<!--本页为tab标签-->
<template>
  <el-tabs
    v-model="editableTabsValue"
    type="card"
    closable
    @tab-remove="removeTab"
    @tab-click="handleClickTab($event.name)"
  >
    <el-tab-pane
      v-for="item in editableTabs"
      :label="item.title"
      :name="item.name"
      :key="item.id"
    />
  </el-tabs>
</template>

<script>
export default {
  name: 'NavMain',
  data() {
    return {
      editableTabsValue: 'home',
      editableTabs: [
        {
          title: '首页',
          name: 'home',
          id: 0
        }
      ],
      tabIndex: 1
    }
  },
  computed: {
    getOpenedTab() {
      return this.$store.state.openedtab
    },
    changeTab() {
      return this.$store.state.activeTab
    }
  },
  watch: {
    getOpenedTab(val) {
      if (val.length > this.editableTabs.length) {
        // 添加了新的tab页
        // 导致$store.state中的openedTab长度
        // 大于
        // 标签页中的openedTab长度
        // 因此需要新增标签页
        const newTab = val[val.length - 1] // 新增的肯定在数组最后一个
        // console.log(newTab)
        ++this.tabIndex
        this.editableTabs.push({
          title: newTab.title,
          name: newTab.name,
          content: '',
          id: newTab.id
        })
        this.editableTabsValue = newTab.title
      }
    },
    changeTab(val) {
      // 监听activetab以实现点击左侧栏时激活已存在的标签
      if (val !== this.editableTabsValue) {
        this.editableTabsValue = val
      }
    }
  },
  created() {
    // 刷新页面时（F11)
    // 因为<router-view>的<keep-alive>，会保留刷新时所在的router
    // 但是tab标签页因为刷新而被重构了，tab没有了
    // 因此需要将router回到index
    this.$router.push('home')
  },
  methods: {
    handleClickTab(route) {
      this.$store.commit('changeTab', route)
      this.$router.push(route)
      // console.log(route)
    },
    removeTab(targetName) {
      // 首页不允许被关闭（为了防止el-tabs栏中一个tab都没有）
      // if (targetName === "home") {
      //   return false;
      // }
      // console.log(targetName);
      const tabs = this.editableTabs
      let activeName = this.editableTabsValue
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            const nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
      }
      this.$store.commit('deductTab', targetName)
      this.$router.push(activeName)
      this.editableTabsValue = activeName
      this.editableTabs = tabs.filter((tab) => tab.name !== targetName)
      if (this.editableTabs.length === 0) {
        // this.$store.commit("addTabname", "home");
        this.editableTabs = [
          {
            title: '首页',
            name: 'home',
            id: 0
          }
        ]
        this.$store.commit('addTab', 'home')
        this.$store.commit('changeTab', 'home')
        this.$router.push('home')
      }
    }
  }
}
</script>

<style scoped>
</style>
