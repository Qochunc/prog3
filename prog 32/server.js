var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var fs = require("fs");


app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);

Grass = require("./Grass")
GrassEater = require("./GEater")
Amenaker = require("./Amenaker")
Bobi = require("./bobi")
Neweater = require("./NEater")





io.on('connection', function (socket) {
    for(var i in messages) {
      socket.emit("display message", messages[i]);
    }
    socket.on("send message", function (data) {
        messages.push(data);
        io.sockets.emit("display message", data);
    });
 });
 

