import Vue from 'vue'

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('mousewheel', f)
      }
    }
    window.addEventListener('mousewheel', f)
  }
})
