
 
var matrix = [
    [0, 2, 1, 0, 0,4,0],
    [1, 0, 0, 3, 0,1,0],
    [0, 1, 1, 0, 0,1,0],
    [0, 0, 1, 5, 0,0,1],
    [1, 1, 0, 0, 0,4,0],
    [1, 1, 0, 2, 0,1,1],
    [1, 1, 0, 0, 0,0,0]
 ];
 var side = 120;
 let grassArr = [];
 let GrassEaterArr = [];
 let AmenakerArr = [];
 let bobiArr = [];
 let neweaterArr = [];
 function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if(matrix[y][x] == 1) {
                let grass1 = new Grass(x,y);
                grassArr.push(grass1);
            }
        
        }
    
    }
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if(matrix[y][x] == 2) {
                let grass2 = new GrassEater(x,y);
                GrassEaterArr.push(grass2);
            }
        
        }
    
    }
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if(matrix[y][x] == 3) {
                let grass3 = new Amenaker(x,y);
                AmenakerArr.push(grass3);
            }
        
        }
    
    }
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if(matrix[y][x] == 4) {
                let grass4 = new Bobi(x,y);
                bobiArr.push(grass4);
            }
        
        }
    
    }
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if(matrix[y][x] == 5) {
                let grass5 = new Neweater(x,y);
                neweaterArr.push(grass5);
            }
        
        }
    
    }
  }
 function draw() {
     for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2){
                fill("red");
            }
            else if (matrix[y][x] == 3){
                fill("yellow");
            }
           else if (matrix[y][x] == 4){
                fill("blue");
            }
          else if (matrix[y][x] == 5){
                fill("black");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
    
            rect(x * side, y * side, side, side);
   
        }
    }
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
 }
 