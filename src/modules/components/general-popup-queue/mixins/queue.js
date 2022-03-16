
function noop () {}

function isFunction(val) {
  return typeof val === 'function'
}

export default class Queue {
  
  constructor({ manual }) {
    this.count = 0
    this.runCount = 0
    this.waitting = false
    this.list = []
    this.manual = manual
  }

  run() {
    const len = this.list.length
    if (len) {
      this.waitting = true
      const fn = this.list.shift() || noop
      this.runCount++

      if (this.manual) {
        fn && fn()
      } else if (isFunction(fn)) {
        Promise.resolve(fn().then(() => {
        }).catch((e) => {
          console.error(e)
        }).then(() => {
          this.run()
        }))
      } else {
        this.run()
      }

    } else {
      this.waitting = false
    }
  }

  next() {
    this.run()
  }

  push(fn, isTop) {
    this.list[isTop ? 'unshift' : 'push'](fn)
    this.count++
    if (!this.waitting) {
      this.run()
    }
  }
}
