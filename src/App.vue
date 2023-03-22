<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <testInput></testInput> -->
    <!-- <testI18n></testI18n> -->
    <!-- <v-camara></v-camara> -->
    <router-view></router-view>
    <!-- <testMixins></testMixins> -->
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // testI18n,
    // vCamara
    // testMixins
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
