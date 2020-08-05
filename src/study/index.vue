<template>
  <div>
    <p></p>
    <button><router-link to="/vuex/state">state</router-link></button>
    <button><router-link to="/vuex/getters">getters</router-link></button>
    <button><router-link to="/vuex/mutations">mutations</router-link></button>
    <button><router-link to="/vuex/actions">actions</router-link></button>
    <router-view></router-view>
  </div>
</template>