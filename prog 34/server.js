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





// io.on('connection', function (socket) {
//     for (var i in messages) {
//         socket.emit("display message", messages[i]);
//     }
//     socket.on("send message", function (data) {
//         messages.push(data);
//         io.sockets.emit("display message", data);
//     });
// });




var matrix = [
    [0, 2, 1, 0, 0, 4, 0],
    [1, 0, 0, 3, 0, 1, 0],
    [0, 1, 1, 0, 0, 1, 0],
    [0, 0, 1, 5, 0, 0, 1],
    [1, 1, 0, 0, 0, 4, 0],
    [1, 1, 0, 2, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0]
];


io.sockets.emit('send matrix', matrix)

let grassArr = [];
let GrassEaterArr = [];
let AmenakerArr = [];
let bobiArr = [];
let neweaterArr = [];



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

function game () {
    for (let i in grassArr) {
        grassArr[i].mul();

    }
    for (let g in GrassEaterArr) {
        GrassEaterArr[g].eat();

    }
    for (let d in AmenakerArr) {
        AmenakerArr[d].eat();

    }
    for (let u in bobiArr) {
        bobiArr[u].move();

    }
    for (let u in neweaterArr) {
        neweaterArr[u].move();

    }
    io.sockets.emit("send matrix", matrix);
}


setInterval(game, 1000)


// io.on('connection', function (socket) {
    // createObject(matrix)
// })
