import { createApp } from './app'

export default ctx => {
  const list = []
  list.forEach(item => console.log('for each', item))
  // 返回一个Promise
  // 确保路由或组件准备就绪
  return new Promise((resolve, reject) => {
    // 创建vue实例
    const { app, router } = createApp(ctx)
    // 跳转首屏地址
    router.push(ctx.url)
    // 路由就绪，完成Promise
    router.onReady(() => {
      resolve(app)
    }, reject)
  })
}
