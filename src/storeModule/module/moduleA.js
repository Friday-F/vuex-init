const SET_NUMBER = 'SET_NUMBER'
const moduleA = {
  state:{
    num:1
  },
  getters:{
    isNumber(state){
      return state.num % 2 === 0 ? '偶数' :"奇数"  
    }
  },
  mutations:{
    [SET_NUMBER](state, payload){
      state.num+=payload
    }
  },
  actions:{
    setAsyncNumber({
        commit,
        rootState,
        rootGetters,
        dispatch
        }, payload) {
      console.log(rootState, rootGetters)
      setTimeout(() => {
        commit('SET_NUMBER', payload)
        dispatch('setAsyncAge', payload)
      }, 2000);
    }
}
}
export {
  moduleA
}