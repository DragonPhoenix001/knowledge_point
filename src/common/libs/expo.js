import 'intersection-observer'

export const intersectionObserver = {
  bind(el, binding, vm) {
    if (!window.IntersectionObserver) {
      console.log('不支持 IntersectionObserver')
      return;
    }
    const data = binding.value;
    const { onChange, onShow } = data;
    const opt = Object.assign({
      rootMargin: '0px',
      treshold: 0 // 交叉区域与边界区域的比例，可理解为元素的百分之多少进入视窗内触发，1为完全出现
    }, data.option)
    let timeout = null;
    const observer = new IntersectionObserver((entries, obs) => {
      const entry = entries.pop()
      onChange && onChange(entry.isIntersecting);
      if (entry.isIntersecting) {
        timeout = setTimeout(() => {
          // 需要自定义的，可以在回调函数中操作
          onShow && onShow()
        }, 300)
      } else {
        clearTimeout(timeout)
      }
    }, opt)
    observer.observe(el)
  }
}