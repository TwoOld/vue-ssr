const express = require('express')
const fs = require('fs')
// express实例
const app = express()
// 创建打包渲染器
const { createBundleRenderer } = require('vue-server-renderer')
const bundle = require('../dist/server/vue-ssr-server-bundle.json')
const clientManifest = require('../dist/client/vue-ssr-client-manifest.json')
// 创建渲染器
const renderer = createBundleRenderer(bundle, {
    runInNewContext: false,
    template: fs.readFileSync('./src/index.temp.html', 'utf-8'),
    clientManifest
})
function render2String(context) {
    return new Promise((resolve, reject) => {
        // renderToString可以将Vue实例转换为html字符串
        // 若未传递回调函数，则返回Promise
        renderer.renderToString(context, (err, html) => {
            if (err) {
                reject(err)
                return
            }
            resolve(html)
        })
    })
}
const proxy = require('http-proxy-middleware')

app.use(express.static('./dist/client', { index: false }))
app.use('/api', proxy({ target: 'http://localhost:8080', changeOrigin: true }))
// 服务端路由声明
app.get('*', async function (req, res) {
    console.log('request: ', req.url)

    const context = {
        title: 'vue ssr',
        url: req.url
    }
    try {
        const html = await render2String(context)
        res.send(html)
    } catch (error) {
        console.log(`${error}`);

        res.status(500).send('Internal Server Error')
    }
})

app.listen(3000, () => {
    console.log('渲染服务器启动成功');
})