// 通用文件：创建vue实例
import Vue from 'vue'
import { createRouter } from './router'
import { createStore } from './store'
import App from './App.vue'
import { serverAxios, clientAxios } from './utils/axios'
// import { sync } from 'vuex-router-sync'

// Vue.mixin({
//   beforeRouteUpdate(to, from, next) {
//     const { asyncData } = this.$options
//     if (asyncData) {
//       asyncData({
//         store: this.$store,
//         route: to
//       }).then(next).catch(next)
//     } else {
//       next()
//     }
//   }
// })

export function createServerApp(ctx) {
  const router = createRouter()
  const store = createStore(serverAxios)
  Vue.prototype.$http = serverAxios

  // 同步路由状态(route state)到 store
  // sync(store, router)

  const app = new Vue({
    router,
    store,
    render: h => h(App),
  })

  return { app, router, store }
}

export function createClientApp(ctx) {
  const router = createRouter()
  const store = createStore(clientAxios)
  Vue.prototype.$http = clientAxios

  // 同步路由状态(route state)到 store
  // sync(store, router)

  const app = new Vue({
    router,
    store,
    render: h => h(App),
  })

  return { app, router, store }
}
