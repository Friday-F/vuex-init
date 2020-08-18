const SET_TIMER = 'SET_TIMER'
const SET_A = 'SET_A'
const moduleC = {
  namespaced: true,
  state:{
    timer:0,
    a:10
  },
  getters: {
    isTimer(state){
      return state.timer % 2 === 0 ? '偶数' : "奇数"
    }
  },
  mutations: {
    [SET_TIMER](state, payload){
      state.timer += payload
    },
    [SET_A](state, payload) {
      state.a += payload
    },
  },
  actions: {
    changeTimer({
        commit,
        rootState,
        rootGetters,
        dispatch
      }, payload) {
      console.log(rootState, rootGetters)
      setTimeout(() => {
        commit('SET_TIMER', payload)
        dispatch('changeA', 100)
      }, 2000);
    },
    // changeA({
    //     commit
    //   }, payload) {
    //     commit('SET_A', payload)
    // },
    changeA:{
      root:true,
      handler({
          commit
        }, payload) {
          commit('SET_A', payload)
      }
    },
    changeB({
      dispatch
    }, payload) {
      // 若需要在全局命名空间内分发 action 或提交 mutation， 将 {
      //   root: true
      // }
      // 作为第三参数传给 dispatch 或 commit 即可。
      dispatch('setAsyncNumber', payload, {
        root: true
      })
    },
  }
}
export {
  moduleC
}