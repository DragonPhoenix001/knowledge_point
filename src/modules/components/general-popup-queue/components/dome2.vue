<template>
  <div>
    <div class="dome2">
      {{compData.title}}
    </div>
    <button @click="close">关闭</button>
  </div>
</template>

<script>
export default {
  name: 'dome1',
  props: ['compData'],
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
  .dome2 {
    height: 300px;
    width: 150px;
    margin: auto;
    text-align: center;
    line-height: 300px;
    background: #fff;
  }
</style>
