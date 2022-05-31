

class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiplay = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    search(char) {
        let found = [];
        for (let i in this.directions) {
            let x = this.directions[i][0]
            let y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {
        this.multiplay++;
        let found = this.search(0)
        let foundRand = random(found)
        if (foundRand && this.multiplay >= 8) {
            let x = foundRand[0]
            let y = foundRand[1]
            matrix[y][x] = 1
            let grass1 = new Grass(x, y);
            grassArr.push(grass1);
            this.multiplay = 0
  
  
  
        }
  
  
    }
 }
  
 class GrassEater {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 8;
  
        this.directions = [];
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
  
    search(char) {
        this.getNewCoordinates()
        let found = [];
        for (let i in this.directions) {
            let x = this.directions[i][0]
            let y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {
        let found = this.search(0)
        let foundRand = random(found)
        if (foundRand) {
            let newX = foundRand[0];
            let newY = foundRand[1];
            matrix[newY][newX] = 2;
            let newGrass = new GrassEater(newX, newY)
            GrassEaterArr.push(newGrass);
            this.energy = 8
        }
  
    }
  
    move() {
        this.energy--
        let found = this.search(0)
        let foundRand = random(found)
        if (foundRand && this.energy > 0) {
            let newX = foundRand[0];
            let newY = foundRand[1];
            matrix[newY][newX] = 2
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
  
        }
        else if (this.energy == 0) {
            this.die()
        }
    }
    eat() {
  
        let found = this.search(1)
        let foundRand = random(found)
        let bibi = this.search(4)
        let bibiRand = random(bibi)
       if(bibiRand){
          let newX = bibiRand[0];
          let newY = bibiRand[1];
         matrix[newY][newX] = 2;
          for (var i in bobiArr) {
                if (newX == bobiArr[i].x && newY == bobiArr[i].y) {
                    bobiArr.splice(i, 1);
                    break;
                }
            }
          let newGrass = new GrassEater(newX, newY)
            GrassEaterArr.push(newGrass);
       }
        else if (foundRand) {
            let newX = foundRand[0];
            let newY = foundRand[1];
            matrix[newY][newX] = matrix[this.y][this.x]
            this.energy++
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            if (this.energy >= 14) {
                this.mul()
            }
  
        }
        else {
            this.move()
        }
  
    }
    die() {
        matrix[this.y][this.x] = 0
        for (var i in GrassEaterArr) {
            if (this.x == GrassEaterArr[i].x && this.y == GrassEaterArr[i].y) {
                GrassEaterArr.splice(i, 1);
                break;
            }
        }
    }
 }
  
  
  
 class Amenaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
      
  
        this.directions = [];
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
  
    search(char) {
        this.getNewCoordinates()
        let found = [];
        for (let i in this.directions) {
            let x = this.directions[i][0]
            let y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
     move() {
      
        let found = this.search(0)
        let foundRand = random(found)
        if (foundRand) {
            let newX = foundRand[0];
            let newY = foundRand[1];
            matrix[newY][newX] = 3
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
  
        }
       
    }
    eat() {
  
        let found = this.search(1)
        let foundRand = random(found)
        let eater = this.search(2)
        let eaterRand = random(eater)
         let bibi = this.search(5)
        let bibiRand = random(bibi)
       if(bibiRand){
          let newX = bibiRand[0];
          let newY = bibiRand[1];
         matrix[newY][newX] = 3;
          for (var i in neweaterArr) {
                if (newX == neweaterArr[i].x && newY == neweaterArr[i].y) {
                    neweaterArr.splice(i, 1);
                    break;
                }
            }
          let newGrass = new Amenaker(newX, newY)
            AmenakerArr.push(newGrass);
       }
       else if (foundRand) {
            let newX = foundRand[0];
            let newY = foundRand[1];
            matrix[newY][newX] = matrix[this.y][this.x]
           
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
           
  
        }
         else if (eaterRand) {
            let newX = eaterRand[0];
            let newY = eaterRand[1];
            matrix[newY][newX] = matrix[this.y][this.x]
           
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in GrassEaterArr) {
                if (newX == GrassEaterArr[i].x && newY == GrassEaterArr[i].y) {
                    GrassEaterArr.splice(i, 1);
                    break;
                }
            }
          
  
        }
        else {
            this.move()
        }
  
    }
  
 }
 
 
 
 
 
 
 
 
 
 class Bobi {
    constructor(x, y) {
        this.x = x;
        this.y = y;
      
  
        this.directions = [];
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
  
    search(char) {
        this.getNewCoordinates()
        let found = [];
        for (let i in this.directions) {
            let x = this.directions[i][0]
            let y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
     move() {
      
        let found = this.search(0)
        let foundRand = random(found)
        if (foundRand) {
            let newX = foundRand[0];
            let newY = foundRand[1];
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
  
        }
       
    }
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 class Neweater {
    constructor(x, y) {
        this.x = x;
        this.y = y;
      
  
        this.directions = [];
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
  
    search(char) {
        this.getNewCoordinates()
        let found = [];
        for (let i in this.directions) {
            let x = this.directions[i][0]
            let y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
     move() {
      
        let found = this.search(0)
        let foundRand = random(found)
        if (foundRand) {
            let newX = foundRand[0];
            let newY = foundRand[1];
            matrix[newY][newX] = 5
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
  
        }
       
    }
 }