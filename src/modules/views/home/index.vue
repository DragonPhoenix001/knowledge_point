<template>
  <div class="home">
    <button @click="onShowpopupClick">弹窗</button>
    <div class="home__list" v-for="item in 60" :key="item">{{item}}</div>
    <div class="home__banner" v-expo="{ onShow: initData }">模块</div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {}
  },
  mounted() {},
  methods: {
    onShowpopupClick() {
      console.log(window)
      window.eventBus.$emit('showGeneralPopup', {
        compId: 'dome2',
        compData: {
          title: '我是变量标题'
        }
      })
    },
    initData() {
      window.eventBus.$emit('showGeneralPopup', {
        compId: 'dome2',
        compData: {
          title: '我是模板'
        }
      })
    }
  }
}
</script>

<style scoped>
.home__list {
  height: 50px;
  width: 100%;
  background: #eee;
}
.home__banner {
  height: 100px;
  background: #ed8a8a;
}
</style>
