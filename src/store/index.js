import Vue from 'vue'

// import Vuex from 'vuex'

import Vuex from '../vuex/index'

Vue.use(Vuex)


export default new Vuex.Store({ //内部会创造一个vue实例
  state: { //组件的状态，可以理解new Vue(data)
    age:18,
    num:10
  },
  getters:{ //相当于计算属性,new Vue(computed) ,当依赖的值变化时会重新执行
    getAge(state){ //如果返回的结果相同，不会执行
      console.log('age执行')
      return state.age + 10
    }
  },

  mutations: { //vue中的方法，唯一可以更改状态的方法
    // payload称之为载荷，唯一更改state的状态的方式，并且是同步
    setAge(state,payload){
      state.age += payload
    }
  },
  actions: { //异步方式
    changeAge({
        commit
      }, payload) {
      setTimeout(() => {
        commit('setAge', payload)
      }, 3000);
    }
  },

})
