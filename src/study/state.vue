<template>
  <div>
    <h2>获取state方式</h2>
    <ul>
      <li>1.通过$store.state.属性名:{{$store.state.age}}</li>
      <li>2.通过mapState{{age}}--{{num}}--{{ageCount}}</li>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  // 1.如果使用mapState的方式，需要对computed进行改造
  // computed:mapState({
  //   age:state=>state.age,
  //   // 传入字符创'num'，相当于num:num=>state.num
  //   num:'num',
  //   ageCount(state){
  //     return state.age + 10;
  //   }
  // })

  // 2.如果使用展开运算符的方式，不需要用computed进行改造
  computed:{
    //1. 
    // ...mapState(['age','num'])
    //2. 
    ...mapState({
      age:state=>state.age,
      num:'num', //相当于 this.$store.state.num
      ageCount(state){
        return state.age + 10;
      }
    })
  },
   mounted(){
    // console.log('子组件',this)
  }

}
</script>