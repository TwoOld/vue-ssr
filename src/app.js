// 通用文件：创建vue实例
import Vue from 'vue'
import { createRouter } from './router'
import { createStore } from './store'
import App from './App.vue'

export function createApp(ctx) {
  const router = createRouter()
  const store = createStore()
  console.log('new vue')

  const app = new Vue({
    router,
    store,
    render: h => h(App),
  })

  return { app, router }
}
