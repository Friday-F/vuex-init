<template>
  <div>
    <h2>actions</h2>
    <ul>
      <p>Action 提交的是 mutation，而不是直接变更状态。</p>
      <p>Action 可以包含任意异步操作。</p>
      <p>age:{{$store.state.age}}</p>
      <p>num:{{$store.state.num}}</p>
      <button @click="$store.dispatch('changeAge',8)">1.通过$store.dispatch</button>
      <button @click="__changeAge(10)">通过mapActions</button>
      <button @click="setObj">对象的提交方式</button>
      <button @click="modifyInfo">借助Promise,得到action里面异步执行后的状态然后再去修改其他信息</button>
    </ul>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  methods:{
    //1.
    ...mapActions(['changeAge','changeInfo']),
    //2.
    // ...mapActions({
    //   __changeAge:'changeAge' //将 `this.__changeAge()` 映射为 `this.$store.dispatch('changeAge ')`
    // }),
    setObj(){
      this.$store.dispatch({
        type:"changeNumber", //使用对象风格的提交方式，整个对象都作为载荷传给 mutation 函数,type是函数函数的名称
        amount:1
      })
    },
  modifyInfo(){
    this.changeInfo('我好').then(res=>{
      console.log(res)
    })
  }
    

  }

}
</script>