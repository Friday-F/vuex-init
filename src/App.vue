<template>
  <div id="app">
    <p>我的年龄:{{$store.state.age}}</p>
    <p>计算属性之后的年龄:{{$store.getters.getAge}}</p>
    <p>num:{{$store.state.num}}</p>
    <button @click="$store.commit('setNumber',88)">更改num</button>
    <button @click="$store.commit('SOME_MUTATION',10)">更改年纪</button>
    <button @click="$store.dispatch('changeAge',5)">异步更改年纪</button>
  <p>-------------------------------------------------------------------------------------------</p>
  <button><router-link to="/vuex">vuex</router-link></button>
  <button><router-link to="/module">模块化</router-link></button>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  mounted(){
    console.log('根组件',this)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
