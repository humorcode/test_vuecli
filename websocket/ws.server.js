const port = 3000
const express = require('express')
var expressWs = require('express-ws')

const app = express()
expressWs(app)

app.ws('/mywebsocket/ws', function(ws, request, next) {
    console.log('----new connection----------'); // 前端传来的消息　　
    var count = 600000
    ws.on('message', function(msg) {
        console.log(msg); // 前端传来的消息　　
        ws.send('服务器:' + count++); //向前端回复消息
    })
})
app.get('/mywebsocket', (req, res) => {
    res.send("首页,跳转到<a href='mywebsocket/ws.index.html'>websocket</a>")
})
app.use('/mywebsocket', express.static('websocket'));
app.listen(port, function() { console.log("- Local: [ http://localhost:" + port + "/mywebsocket ]") });