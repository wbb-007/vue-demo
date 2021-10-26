import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id: '123456',
    openedTab: ['home'],
    activeTab: '',
    openedtab: [
      {
        title: '首页',
        name: 'home',
        id: 1
      }
    ]
  },
  mutations: {
    addTab(state, tabname) {
      state.openedTab.push(tabname)
    },
    addTabname(state, tab) {
      state.openedtab.push(tab)
    },
    changeTab(state, pathName) {
      state.activeTab = pathName
    },
    deductTab(state, targetName) {
      const index = state.openedTab.indexOf(targetName)
      state.openedTab.splice(index, 1)
    }
  }
})
