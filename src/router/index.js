import Vue from 'vue'
import Router from 'vue-router'
import guan from '@/components/guan'
import mainTrue from '@/components/mainTrue'
import geshou from '@/components/geshou'
import subNav from '@/components/subNav'
import woxihuan from '@/components/woxihuan'
import gedan from '@/components/gedan'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'guan',
      component: guan,
      children:[
        {path: '/',
          component: subNav},
        {path: 'geshou',
          component: geshou},
      ]

    },{
      path: '/mainTrue',
      name: 'mainTrue',
      component: mainTrue,
      children:[
        {path: '/',
          component: woxihuan},
        {path: 'gedan',
          component: gedan}
      ]
    }

  ]
})
