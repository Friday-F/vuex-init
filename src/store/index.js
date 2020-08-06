import Vue from 'vue'

import Vuex from 'vuex'

// import Vuex from '../vuex/index'

Vue.use(Vuex)
const SOME_MUTATION = 'SOME_MUTATION';
const SET_INFO = 'SET_INFO'


export default new Vuex.Store({ //内部会创造一个vue实例
  state: { //组件的状态，可以理解new Vue(data)
    age:18,
    num:10,
    info:'你好'
  },
  getters:{ //相当于计算属性,new Vue(computed) ,当依赖的值变化时会重新执行
    getAge(state){ //如果返回的结果相同，不会执行
      console.log('age执行')
      return state.age + 10
    },
    getNum: (state) => (speed)=> {
      return state.num+=speed
    },
  },

  mutations: { //vue中的方法，唯一可以更改状态的方法
    // payload称之为载荷，唯一更改state的状态的方式，并且是同步
    [SOME_MUTATION](state, payload) {
      state.age += payload
    },
    setNumber(state,payload){
      state.num += payload
    },
    setNumberObject(state, payload) {
      state.num += payload.amount
    },
    [SET_INFO](state, payload){
      state.info = payload
    }
  },
  actions: { //异步方式
    changeAge(context, payload) {
      console.log(context)
      setTimeout(() => {
        context.commit('SOME_MUTATION', payload)
      }, 2000);
    },
    changeNumber({commit},payload){
      setTimeout(() => {
        commit('setNumber', payload.amount)
      }, 2000);
    },
    changeInfo({
        commit,
        dispatch,
        state
      }, payload) {
        return new Promise((resolve) => {
            setTimeout(() => {
              commit('SET_INFO', payload)
              resolve(state.info)
              dispatch('changeAge',88)
            }, 2000);
        });
    }
  },
})
