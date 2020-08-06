import Vue from 'vue'

import Vuex from 'vuex'
import {
  moduleA
} from './module/moduleA'
import {
  moduleB
} from './module/moduleB'
import {
  moduleC
} from './module/moduleC'
// import Vuex from '../vuex/index'

Vue.use(Vuex)
export default new Vuex.Store({
  modules:{
    a: moduleA,
    b: moduleB,
    c: moduleC
  }
  
})