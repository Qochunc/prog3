let GHG = require('./GHG')
var random = require("./random");

module.exports = class Grass extends GHG {
    constructor(x, y) {
        super(x,y)
        this.multiplay = 0;
       
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