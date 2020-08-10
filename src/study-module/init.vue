<template>
  <div>
    <p>num:{{num}}</p>
    <!-- <p>{{$store.state.a.num}}</p> -->
    <p>age:{{age}}</p>
    <p>timer:{{timer}}</p>
    <p>timer:{{isTimer}}</p>
    <p>a:{{a}}</p>
    <button @click="setNum">actions</button>
    <button @click="setTimer">带有命名空间的action</button>
    <button @click="setB">带命名空间的模块内访问全局内容</button>
    <button><router-link to='/createNamespacedHelpers'> 使用createNamespacedHelpers</router-link></button>
  </div>
</template>
<script>
import {mapState,mapActions,mapGetters} from 'vuex'
export default {
  data(){
    return{

    }
  },
  computed:{
    ...mapState({
      num(state){
        return state.a.num
      },
      age:state=>state.b.age,
      //1. 
      // timer:state=>state.c.timer,  
    }),
    //2
    // ...mapState('c',['timer','a']),
    //3.
    ...mapState('c',{
      timer:state=>state.timer,
      a:state=>state.a
    }),
    ...mapGetters('c',['isTimer'])
  },
  created(){
    
  },
  methods:{
    //模块化，但没有命名空间的模块
    ...mapActions(['setAsyncNumber']),
    // 模块化，有命名空间的模块:namespaced: true,
    ...mapActions('c',['changeTimer','changeB']),
    setNum(){
      this.setAsyncNumber(9)
    },
    setTimer(){
      this.changeTimer(9)
    },
    setB(){
      this.changeB(99)
    }
    
  }
}
</script>