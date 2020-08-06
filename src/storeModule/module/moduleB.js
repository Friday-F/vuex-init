const SET_AGE = 'SET_AGE'
const moduleB = {
    state: {
      age: 10
    },
    getters: {
      isAge(state) {
        return state.age % 2 === 0 ? '偶数' : "奇数"
      }
    },
    mutations: {
      [SET_AGE](state, payload) {
        state.age += payload
      }
    },
    actions: {
      setAsyncAge({
        commit,
      }, payload) {
        setTimeout(() => {
          commit('SET_AGE', payload)
        }, 2000);
      }
    }
}
export {
    moduleB
  }