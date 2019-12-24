const express = require('express')
const app = new express()

// app.use('*', (req, res) => {
// })
app.get('/api/player/list', (req, res) => {
    res.header('Content-Type', 'application/json;charse=utf-8')
    res.json({
        code: 0,
        data: [
            {
                player_id: 1,
                player_name: 'chiu',
                player_age: 29,
            },
            {
                player_id: 2,
                player_name: 'james',
                player_age: 45,
            },
            {
                player_id: 3,
                player_name: 'leonard',
                player_age: 29,
            },
            {
                player_id: 4,
                player_name: 'durant',
                player_age: 29,
            },
        ]
    })
})

// app.get('/api/user/menu', (req, res) => {
//   res.json({
//     code: 0,
//     list: [
//       {
//         path: '/',
//         component: 'index',
//       },
//       {
//         path: '/detail',
//         component: 'detail',
//       },
//     ]
//   })
// })

app.listen(8080, () => console.log('MOCK服务器启动成功'))
