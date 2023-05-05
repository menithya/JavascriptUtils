const WebSocket = require('ws')
const ws = new WebSocket().Server({port:8080})
ws.on('connectoin',function(wsConnection){
    wsConnection.on('message',function(message){
        console.log(`Server Received ${message} `)
    })
    wsConnection.send("Got your message")

})