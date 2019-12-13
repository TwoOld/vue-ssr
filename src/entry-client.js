import { createApp } from './app'

const { app, router } = createApp()

// 挂载
router.onReady(() => app.$mount('#app'))
