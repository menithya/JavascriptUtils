const socket = nwe WebSocket('ws://localhost:8080')
socket.addEventListener('open',function(event){
    socket.send("Hello Server!")
})

socket.addEventListener('message',function(event){
    console.log("Message from server", event.date)
})

socket.addEventListener('close',function(){
    console.log('The connection is closed')
})