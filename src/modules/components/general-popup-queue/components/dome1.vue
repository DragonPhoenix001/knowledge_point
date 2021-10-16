<template>
  <div>
    <div class="dome1">
      dome1
    </div>
    <button @click="close">关闭</button>
  </div>
</template>

<script>
export default {
  name: 'dome1',
  data() {
    return {}
  },
  mounted() {},
  methods: {
    close() {
      window.eventBus.$emit('hideGeneralPopup')
    }
  }
}
</script>

<style>
  .dome1 {
    height: 300px;
    width: 150px;
    margin: auto;
    text-align: center;
    line-height: 300px;
    background: #fff;
  }
</style>
