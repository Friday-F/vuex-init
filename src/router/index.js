import Vue from "vue"
import Router from "vue-router"
Vue.use(Router)

export default new Router({
  routes:[
    {
      path:'/vuex',
      component: resolve => require(['../study/index.vue'], resolve),
      redirect:{
        path:'/vuex/state'
      },
      children:[
        {
          path: "state",
          name:'state',
          component: resolve => require(['../study/state.vue'], resolve),
        },
        {
          path: "getters",
          name: 'getters',
          component: resolve => require(['../study/getters.vue'], resolve),
        },
        {
          path: "mutations",
          name: 'mutations',
          component: resolve => require(['../study/mutations.vue'], resolve),
        },
        {
          path: "actions",
          name: 'actions',
          component: resolve => require(['../study/actions.vue'], resolve),
        }
      ]
    }
     
  ]
})