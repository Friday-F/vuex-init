import {
  applyMixin
} from './applyMixin'
import {
  forEach
} from './util'
let Vue;
class Store{
  constructor(options){
    // 1.state
    let state = options.state; //用户传过的状态
    // 1.不能直接将state定义在实例上，因为我们state中的值是需要改变的，如果直接定义在实例上视图是不能直接更新的
    // this.state = options.state;
    // 2.所以我们采用new Vue讲state绑定在data上，这样就会触发vue中的observe方法，从而收集watcher，进行视图更新
    // 这也是为什么vuex跟vue是进行强依赖的


    // 2.getter
    //getter 其实写的是方法，但是取值的是属性
    //所以我们使用Object.defineProperty
    this.getters = {};

    // 这样写是没有缓存效果，一旦页面中的取值发生变换，都会进行重新执行渲染
    // forEach(options.getters,(fn,key)=>{
    //   Object.defineProperty(this.getters, key, {
    //     get:()=>fn(state)
    //   })
    // })

    // 在vue中我们computed是具有缓存效果
    // computed里面的值也是一个个的方法
    const computed = {};
    forEach(options.getters, (fn, key) => {
      computed[key] = ()=>{
        return fn(state)
      }
      Object.defineProperty(this.getters, key, {
        get:()=>this._vm[key]
      })
    })
    

    // 在vue中定义数据的时候，是有特点的，如果属性名是以$xxx命名，是不会代理到vue实例中
    this._vm = new Vue({
      data:{
        // state: state
        // 在vuex源码中是使用$$,表示内部状态
        $$state:state
      },
      computed //计算属性会将自己的属性直接放在实例上,也就是说我们可以直接this._vm.getAge
    })
    console.log(this._vm) //如果不以$xxx命名，是直接可以从实例拿到
    // console.log(this._vm) //


    // 3.mutations
    // 采用了发布订阅模式，将用户定义的mutation和action先保存起来，然后当调用commit的时候我们调用mutations方法
    // 调用dispatch时候我们调用action的方法
    this._mutations = {}
    forEach(options.mutations, (fn, key) => {
      this._mutations[key] = (playload) => fn.call(this,state, playload)
    })

    // 4.actions
    // 采用了发布订阅模式，将用户定义的mutation和action先保存起来，然后当调用commit的时候我们调用mutations方法
    // 调用dispatch时候我们调用action的方法
    this._actions = {}
    forEach(options.actions, (fn, key) => {
      this._actions[key] = (playload) => fn.call(this, this, playload)
    })
  }

  // 类的属性访问器，当用户去这个实例上去拿state属性时，会执行此方法
  get state(){
    return this._vm._data.$$state
  }

  // commit的方法
  commit = (type, playload) => {
    this._mutations[type](playload)
  }
  dispatch = (type, playload)=>{
    this._actions[type](playload)
  }
  
}
const install = (_Vue)=>{
  Vue = _Vue;
  // 我们可以在组件中使用store，
  //将store混入到vue中，在全局进行注册，
  applyMixin(Vue)
  // console.log('install', Vue)
}
export {
  Store,
  install
}