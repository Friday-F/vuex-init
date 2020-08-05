<template>
  <div>
    <h2>获取getters方式</h2>
    <ul>
      <li>1.通过$store.getters.属性名:{{setNumber}}</li>
      <li>2.通过mapGetters{{nameAge}}</li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  // 2.使用展开运算符的方式
  computed:{
    setNumber(){
      return this.$store.getters.getNum(10)
    },
    //1. 
    // ...mapGetters(['getAge']),
    //2.
    ...mapGetters({ 
      nameAge:'getAge', // this.$store.getters.getAge映射成nameAge

    })
  }

}
</script>