import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import guan from '@/components/guan'
import mainTrue from '@/components/mainTrue'
import geshou from '@/components/geshou'
import subNav from '@/components/subNav'

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
      component: mainTrue
    },

  ]
})
