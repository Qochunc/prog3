let GHG = require('./GHG')
var random = require("./random");

 module.exports = class Bobi  extends GHG{
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
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
  
        }
       
    }
 }
 
 
 
 
 
 
 