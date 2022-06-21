var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var fs = require("fs");
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3001);


weath = "winter"
var Grass = require("./Grass")
var GrassEater = require("./GEater")
var Amenaker = require("./Amenaker")
var Bobi = require("./bobi")
var Neweater = require("./NEater")
var random = require('./random');

 matrix = [];


io.sockets.emit('send matrix', matrix)

 grassArr = [];
 GrassEaterArr = [];
 AmenakerArr = [];
 bobiArr = [];
 neweaterArr = [];



function createObject(matrix) {

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let grass1 = new Grass(x, y);
                grassArr.push(grass1);
            }

        }

    }
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                let grass2 = new GrassEater(x, y);
                GrassEaterArr.push(grass2);
            }

        }

    }
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 3) {
                let grass3 = new Amenaker(x, y);
                AmenakerArr.push(grass3);
            }

        }

    }
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 4) {
                let grass4 = new Bobi(x, y);
                bobiArr.push(grass4);
            }

        }

    }
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 5) {
                let grass5 = new Neweater(x, y);
                neweaterArr.push(grass5);
            }

        }

    }
    io.sockets.emit('send matrix', matrix)
}
function matrixGenerator(matrixSize, grass, grassEater, grassEaterEater, waterArr, fireArr) {
    for (let i = 0; i < matrixSize; i++) {
        matrix[i] = [];
        for (let o = 0; o < matrixSize; o++) {
            matrix[i][o] = 0;
        }
    }
    for (let i = 0; i < grass; i++) {
        let customX = Math.floor(random(matrixSize)); // 0-9
        let customY = Math.floor(random(matrixSize)); // 4
        matrix[customY][customX] = 1;
    }
    for (let i = 0; i < grassEater; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 2;
    }
    for (let i = 0; i < grassEaterEater; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 3;
    }
    for (let i = 0; i < waterArr; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 4;
    }
    for (let i = 0; i < fireArr; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 5;
    }
}
matrixGenerator(40, 20, 5, 1, 1, 1);
function game() {
    if (grassArr[0] !== undefined) {
        if (weath != 'autumn') {
            for (let i in grassArr) {
                grassArr[i].mul();

            }
        }

    }

    if (grassArr[0] !== undefined) {
        if (weath != 'autumn') {
            for (let g in GrassEaterArr) {
                GrassEaterArr[g].eat();

            }
        }

    }
    if (grassArr[0] !== undefined) {
        if (weath != 'autumn') {
            for (let d in AmenakerArr) {
                AmenakerArr[d].eat();

            }
        }

    }
    if (grassArr[0] !== undefined) {
        if (weath != 'autumn') {
            for (let u in bobiArr) {
                bobiArr[u].move();

            }
        }

    }
    if (grassArr[0] !== undefined) {
        if (weath != 'autumn') {
            for (let u in neweaterArr) {
                neweaterArr[u].move();

            }
        }

    }

    io.sockets.emit("send matrix", matrix);
}


setInterval(game, 1000)




function weather() {
    if (weath == "winter") {
        weath = "spring"
    }
    else if (weath == "spring") {
        weath = "summer"
    }
    else if (weath == "summer") {
        weath = "autumn"
    }
    else if (weath == "autumn") {
        weath = "winter"
    }
    io.sockets.emit('weather', weath)
}
setInterval(weather, 5000);

io.on('connection', function (socket) {
    createObject(matrix)
})
