import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store'

import VueLazyload from 'vue-lazyload'

import {Button} from 'mint-ui'

import './mock/mockServe' //加载mockServe,使其暴露
import loading from './common/imgs/loading.gif' //导入图片懒加载时的图片
import './filters/index'  //加载过滤器

// 注测全局组件标签
Vue.component(Button.name,Button) //<mt-button>

Vue.use(VueLazyload,{ //内部自定义一个指令lazy
  loading
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
