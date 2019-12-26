const express = require('express')
const fs = require('fs')
const path = require('path')
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

function csr(res) {
    // 读取文件
    const filename = path.resolve(process.cwd(), 'dist/client/index.html')
    const html = fs.readFileSync(filename, 'utf-8')
    return res.send(html)
}
// 服务端路由声明
app.get('*', async function (req, res) {
    console.log('request: ', req.url)

    // 配置开关开启csr
    // 服务器负载过高开启csr
    if (req.query._mode === 'csr') {
        return csr(res)
    }

    const context = {
        title: 'vue ssr',
        url: req.url,
        serverError: false
    }
    try {
        const html = await render2String(context)
        res.send(html)
    } catch (error) {
        console.log('req error', error);

        res.status(500).send('Internal Server Error')
    }
})

app.listen(3030, () => {
    console.log('渲染服务器启动成功');
})