import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  // コンポーネントからストアを利用できるようにする
  store,
  render: h => h(App),
}).$mount('#app')
