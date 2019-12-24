// 通用文件
// 创建Vue实例
import Vue from 'vue'
import { createRouter } from './router'
import { createStore } from './store'
import { createAxios } from './utils/http'
import App from './App.vue'

Vue.mixin({
    beforeRouteUpdate(to, from, next) {
        const { asyncData } = this.$options
        if (asyncData) {
            asyncData({
                store: this.$store,
                route: to
            }).then(next).catch(next)
        } else {
            next()
        }
    }
})

export function createApp(context) {
    const router = createRouter()
    const $http = createAxios(context)
    const store = createStore($http)
    const app = new Vue({
        router,
        store,
        render: h => h(App)
    })

    return { app, router, store }
}