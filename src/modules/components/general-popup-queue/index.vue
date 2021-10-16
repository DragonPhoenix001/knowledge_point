<template>
  <transition name="popup-zoom">
    <div class="general-popup-queue" v-if="isVisible">
      <div class="mask"></div>
      <div class="content">
        <component :is="compId" v-bind="$data" @close="close"/>
        <button class="close" @click="close" v-if="showCloseIcon">关闭</button>
      </div>
    </div>
  </transition>
</template>
<script>
import dome1 from './components/dome1'
import dome2 from './components/dome2'

export default {
  name: 'general-popup-queue',
  components: {
    dome2
  },
  data() {
    return {
      isVisible: false,
      compId: null,
      compData: {},
      showCloseIcon: false
    }
  },
  created() {
    window.eventBus.$on('showGeneralPopup', data => {
      console.log(data)
      this.compId = data.compId;
      this.compData = data.compData;
      this.showCloseIcon = data.showCloseIcon;
      this.isVisible = true
    })
    window.eventBus.$on('hideGeneralPopup', data => {
      this.isVisible = false
    })
  },
  mounted() {},
  methods: {
    close() {
      this.isVisible = false
    }
  }
}
</script>

<style>
  .general-popup-queue{
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }

  .close {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
  }

  .content {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    animation: dialog-zoom .4s;
  }

  @keyframes dialog-fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes dialog-zoom {
    0% {
      transform: scale(0)
    }
    50% {
      transform: scale(1.1)
    }
    100% {
      transform: scale(1)
    }
  }
</style>
