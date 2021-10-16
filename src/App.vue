<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <general-popup-queue></general-popup-queue>
  </div>
</template>

<script>
// import GeneralPopupQueue from './modules/components/general-popup-queue/index'
import GeneralPopupQueue from './modules/components/general-popup-queue/index'

export default {
  name: 'App',
  components: {
    GeneralPopupQueue
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
