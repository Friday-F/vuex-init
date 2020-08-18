const applyMixin = (Vue)=>{
  //在根组件和子组件在创建前都会执行vuexInit初始化，将store注入进去
  Vue.mixin({
    beforeCreate:vuexInit
  })
}
function vuexInit() {
  // 给每个组件都注册一个$store属性，指向同一个，所有组件都共用一个store
  // this.$options当前组件实例的属性
  // console.log(this.$options)
  const options = this.$options;
  // 组件的创建过程，先父后子
  if(options.store){
    // 根实例
    this.$store = options.store
  } else if (options.parent && options.parent.$store) {
    this.$store = options.parent.$store
  }
}
export {
  applyMixin
}