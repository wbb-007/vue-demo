import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/navMain/mainComponents/home'
import equipmentMana from '@/components/navMain/mainComponents/equipmentMana'
import materialMana from '@/components/navMain/mainComponents/materialMana'
import commuterTable from '@/components/navMain/mainComponents/commuterTable'
import workTime from '@/components/navMain/mainComponents/workTime'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/shebei',
      name: 'equipmentMana',
      component: equipmentMana
    }, {
      path: '/cailiao',
      name: 'materialMana',
      component: materialMana
    }, {
      path: '/tongqin',
      name: 'commuterTable',
      component: commuterTable
    }, {
      path: '/zhiban',
      name: 'workTime',
      component: workTime
    }
  ]
})
