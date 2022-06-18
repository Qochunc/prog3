let GHG = require('./GHG')

module.exports = class Amenaker  extends GHG{
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
        this.getNewCoordinates();
        return super.search(char);
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
 