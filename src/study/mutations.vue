<template>
  <div>
    <h2>针对state中的数据进行设置</h2>
    <ul>
      <p>age:{{$store.state.age}}</p>
      <p>num:{{$store.state.num}}</p>
      <button @click="$store.commit('SOME_MUTATION',10)">1.通过$store.commit</button>
      <button @click="__setNumber(10)">通过mapMutations</button>
      <button @click="setObj">对象的提交方式</button>
    </ul>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  methods:{
    //1.
    // ...mapMutations(['setNumber'])
    //2.
    ...mapMutations({
      __setNumber:'setNumber' //将 `this.__setNumber()` 映射为 `this.$store.commit('setNumber ')`
    }),
    setObj(){
      this.$store.commit({
        type:"setNumberObject", //使用对象风格的提交方式，整个对象都作为载荷传给 mutation 函数,type是函数函数的名称
        amount:1
      })
    }

  }

}
</script>